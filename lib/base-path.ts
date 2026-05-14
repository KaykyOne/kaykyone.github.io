const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH)

function normalizeBasePath(value: string | undefined) {
  if (!value) return ""
  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`
  return withLeadingSlash.replace(/\/+$/, "")
}

export function withBasePath(path: string) {
  if (!path) {
    return basePath || "/"
  }

  if (/^(?:[a-z]+:)?\/\//i.test(path)) {
    return path
  }

  if (path.startsWith("#")) {
    return path
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
