import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const fallbackRepositoryName = path.basename(process.cwd());
const repository =
  process.env.GITHUB_REPOSITORY || `local/${fallbackRepositoryName}`;
const env = {
  ...process.env,
  GITHUB_PAGES: "true",
  GITHUB_REPOSITORY: repository,
};

const command = process.platform === "win32" ? "npm.cmd" : "npm";
const result = spawnSync(command, ["run", "build"], {
  stdio: "inherit",
  env,
  shell: process.platform === "win32",
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const outDir = path.join(process.cwd(), "out");
const distDir = path.join(process.cwd(), "dist");

fs.rmSync(distDir, { recursive: true, force: true });
fs.cpSync(outDir, distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, ".nojekyll"), "");
