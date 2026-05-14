/** @type {import('next').NextConfig} */

import path from 'node:path'

function normalizeBasePath(value) {
  if (!value) return ''
  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`
  return withLeadingSlash.replace(/\/+$/, '')
}

const repository = process.env.GITHUB_REPOSITORY ?? ''
const repositoryName =
  repository.split('/')[1] ?? path.basename(process.cwd()) ?? ''
const explicitBasePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH ?? ''
)
const isUserOrOrgPagesRepo = repositoryName.endsWith('.github.io')
const inferredPagesBasePath =
  process.env.GITHUB_PAGES === 'true' && repositoryName && !isUserOrOrgPagesRepo
    ? `/${repositoryName}`
    : ''
const basePath = explicitBasePath || inferredPagesBasePath

const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
