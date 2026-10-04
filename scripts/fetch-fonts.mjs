// Fetches the commercial MonoLisa woff2 files from a private Vercel Blob
// store at build time so the binaries never enter the public git repo.
//
// Skips entirely when the files already exist (local dev). On Vercel the
// Blob store connection provides auth automatically (OIDC); outside Vercel
// set BLOB_READ_WRITE_TOKEN. Font locations come from:
//   MONOLISA_NORMAL_BLOB_URL / MONOLISA_ITALIC_BLOB_URL
// (full blob URLs or pathnames of the private blobs).
import { mkdir, writeFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "app",
  "fonts",
);

const FONTS = [
  { file: "MonoLisa-normal.woff2", env: "MONOLISA_NORMAL_BLOB_URL" },
  { file: "MonoLisa-italic.woff2", env: "MONOLISA_ITALIC_BLOB_URL" },
];

async function exists(file) {
  try {
    await access(path.join(dir, file), constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

const missing = await Promise.all(FONTS.map(({ file }) => exists(file)));

if (missing.every(Boolean)) {
  console.log("[fetch-fonts] MonoLisa files present, skipping download.");
  process.exit(0);
}

const { get } = await import("@vercel/blob");

await mkdir(dir, { recursive: true });

async function download({ file, env }) {
  const url = process.env[env];
  if (!url) {
    console.error(
      `[fetch-fonts] Missing ${file} and ${env} is not set.\n` +
        "Place the licensed woff2 in app/fonts/ or set the Blob URL env vars.",
    );
    process.exitCode = 1;
    return;
  }
  console.log(`[fetch-fonts] Downloading ${file} from private Blob store...`);
  const result = await get(url, { access: "private" });
  if (result?.statusCode !== 200 || !result.stream) {
    console.error(`[fetch-fonts] Download failed for ${file}.`);
    process.exitCode = 1;
    return;
  }
  const chunks = [];
  for await (const chunk of result.stream) chunks.push(chunk);
  await writeFile(path.join(dir, file), Buffer.concat(chunks));
  console.log(`[fetch-fonts] Wrote ${file}.`);
}

await Promise.all(FONTS.filter((_, index) => !missing[index]).map(download));
