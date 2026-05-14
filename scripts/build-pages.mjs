import { spawnSync } from "node:child_process";

const repository = process.env.GITHUB_REPOSITORY || "KaykyOne/portfolio-web-dev";
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
