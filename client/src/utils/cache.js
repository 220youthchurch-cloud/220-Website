export function getCachedValue(key) {
  try {
    const cached = JSON.parse(localStorage.getItem(key) || 'null')

    if (cached && cached.expiresAt > Date.now()) {
      return cached.data
    }

    if (cached) {
      localStorage.removeItem(key)
    }
  } catch {
    // corrupt cache, ignore and refetch
  }

  return null
}

export function setCachedValue(key, data, ttlMs) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify({ data, expiresAt: Date.now() + ttlMs })
    )
  } catch {
    // storage unavailable, ignore
  }

  return data
}

export function clearCachedValue(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    // storage unavailable, ignore
  }
}

export async function fetchWithCache(key, fetcher, ttlMs) {
  const cached = getCachedValue(key)

  if (cached !== null) {
    console.log(`Returning cached data for key: ${key}`)
    return cached
  }

  const data = await fetcher()
  console.log(`Caching key: ${key}`)
  setCachedValue(key, data, ttlMs)
  return data
}