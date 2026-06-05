import { getCloudflareContext } from "@opennextjs/cloudflare";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "~/generated/prisma/client";

export const getPrisma = () => {
  const { env } = getCloudflareContext();
  const connectionString = env.HYPERDRIVE.connectionString;
  const adapter = new PrismaPg({ connectionString, maxUses: 1 });
  const prisma = new PrismaClient({
    adapter,
    omit: {},
  });

  return prisma;
};
