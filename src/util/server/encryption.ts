import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  pbkdf2Sync,
} from "crypto";

const ALGORITHM = "aes-256-gcm";

const PASSWORD = process.env.ENCRYPTION_PASSWORD;
const SALT = process.env.ENCRYPTION_SALT;

if (!PASSWORD || !SALT) {
  throw new Error(
    "ENCRYPTION_PASSWORD and ENCRYPTION_SALT must be set in environment variables"
  );
}

function getKey(): Buffer {
  return pbkdf2Sync(PASSWORD!, SALT!, 100000, 32, "sha256");
}

/**
 * Encrypts a plaintext string using AES-256-GCM.
 * Returns base64 encoded string in format: iv:authTag:encryptedData
 */
export function encrypt(plaintext: string): string {
  const key = getKey();
  const iv = randomBytes(16);
  const cipher = createCipheriv(ALGORITHM, key, iv);

  let encrypted = cipher.update(plaintext, "utf8", "base64");
  encrypted += cipher.final("base64");

  const authTag = cipher.getAuthTag();

  return `${iv.toString("base64")}:${authTag.toString("base64")}:${encrypted}`;
}

/**
 * Decrypts a string encrypted with encrypt().
 * Expects format: iv:authTag:encryptedData (all base64)
 */
export function decrypt(encryptedData: string): string {
  const key = getKey();
  const parts = encryptedData.split(":");

  if (parts.length !== 3) {
    throw new Error("Invalid encrypted data format");
  }

  const iv = Buffer.from(parts[0], "base64");
  const authTag = Buffer.from(parts[1], "base64");
  const encrypted = parts[2];

  const decipher = createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(encrypted, "base64", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}
