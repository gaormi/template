import localtunnel from "localtunnel";
import { spawn } from "child_process";
import { createServer } from "net";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Load environment variables
dotenv.config({ path: ".env" });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(path.normalize(path.join(__dirname, "..")));
const constantsPath = path.join(
  projectRoot,
  "src",
  "components",
  "const",
  "constants.ts"
);

let tunnel;
let previewProcess;
let isCleaningUp = false;
let originalAppUrl = null;

async function checkPort(port) {
  return new Promise((resolve) => {
    const server = createServer();

    server.once("error", () => {
      resolve(true); // Port is in use
    });

    server.once("listening", () => {
      server.close();
      resolve(false); // Port is free
    });

    server.listen(port);
  });
}

async function killProcessOnPort(port) {
  try {
    if (process.platform === "win32") {
      const netstat = spawn("netstat", ["-ano", "|", "findstr", `:${port}`]);
      netstat.stdout.on("data", (data) => {
        const match = data.toString().match(/\s+(\d+)$/);
        if (match) {
          const pid = match[1];
          spawn("taskkill", ["/F", "/PID", pid]);
        }
      });
      await new Promise((resolve) => netstat.on("close", resolve));
    } else {
      const lsof = spawn("lsof", ["-ti", `:${port}`]);
      lsof.stdout.on("data", (data) => {
        data
          .toString()
          .split("\n")
          .forEach((pid) => {
            if (pid) {
              try {
                process.kill(parseInt(pid), "SIGKILL");
              } catch (e) {
                if (e.code !== "ESRCH") throw e;
              }
            }
          });
      });
      await new Promise((resolve) => lsof.on("close", resolve));
    }
  } catch (e) {
    // Ignore errors if no process found
  }
}

async function updateAppUrl(newUrl) {
  try {
    const constantsContent = fs.readFileSync(constantsPath, "utf8");

    const match = constantsContent.match(/export const APP_URL = "([^"]*)"/);
    if (match) originalAppUrl = match[1];

    const updatedContent = constantsContent.replace(
      /export const APP_URL = "[^"]*"/,
      `export const APP_URL = "${newUrl}"`
    );

    fs.writeFileSync(constantsPath, updatedContent, "utf8");
    console.log(`Updated APP_URL to: ${newUrl}`);
  } catch (error) {
    console.error("Error updating APP_URL:", error);
  }
}

async function restoreAppUrl() {
  if (!originalAppUrl) return;
  try {
    const constantsContent = fs.readFileSync(constantsPath, "utf8");
    const restoredContent = constantsContent.replace(
      /export const APP_URL = "[^"]*"/,
      `export const APP_URL = "${originalAppUrl}"`
    );
    fs.writeFileSync(constantsPath, restoredContent, "utf8");
    console.log(`Restored APP_URL to: ${originalAppUrl}`);
  } catch (error) {
    console.error("Error restoring APP_URL:", error);
  }
}

async function startPreview() {
  const isPortInUse = await checkPort(8787);
  if (isPortInUse) {
    console.error(
      "Port 8787 is already in use.\n" +
        (process.platform === "win32"
          ? "Run: netstat -ano | findstr :8787\n"
          : "Run: yarn cc\n") +
        "Then try again."
    );
    process.exit(1);
  }

  const previewBin = path.normalize(
    path.join(projectRoot, "node_modules", ".bin", "opennextjs-cloudflare")
  );

  previewProcess = spawn(previewBin, ["preview"], {
    stdio: "inherit",
    env: { ...process.env },
    cwd: projectRoot,
    shell: process.platform === "win32",
  });

  await new Promise((resolve) => setTimeout(resolve, 5000));

  tunnel = await localtunnel({
    port: 8787,
  });

  await updateAppUrl(tunnel.url);

  let ip;
  try {
    ip = await fetch("https://ipv4.icanhazip.com")
      .then((res) => res.text())
      .then((ip) => ip.trim());
  } catch (error) {
    console.error("Error getting IP address:", error);
  }

  console.log(`
   1. Preview URL:   ${tunnel.url}
   2. password:   ${ip ? `${ip}` : ""}
`);

  const cleanup = async () => {
    if (isCleaningUp) return;
    isCleaningUp = true;

    console.log("\n\nShutting down...");

    try {
      await restoreAppUrl();

      if (previewProcess) {
        try {
          previewProcess.kill("SIGKILL");
          if (previewProcess?.pid) {
            try {
              process.kill(-previewProcess.pid);
            } catch (e) {
              if (e.code !== "ESRCH") throw e;
            }
          }
        } catch (e) {}
      }

      if (tunnel) {
        try {
          await tunnel.close();
        } catch (e) {}
      }

      await killProcessOnPort(8787);
    } catch (error) {
      console.error("Error during cleanup:", error);
    } finally {
      process.exit(0);
    }
  };

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
  process.on("exit", cleanup);
  if (tunnel) {
    tunnel.on("close", cleanup);
  }
}

startPreview().catch(console.error);
