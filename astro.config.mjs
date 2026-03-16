import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://aodinglvp.github.io",
  base: isGitHubPages && repoName ? `/${repoName}` : "/",
  trailingSlash: "always",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  }
});
