/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'portfolio-web-dev'
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repositoryName}` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repositoryName}` : '',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
