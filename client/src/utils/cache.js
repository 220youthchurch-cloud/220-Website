export async function fetchWithCache(key, fetcher, ttlMs) {
  try {
    const cached = JSON.parse(localStorage.getItem(key) || 'null');
    if(cached && cached.expiresAt > Date.now()) {
      console.log(`Returning cached data for key: ${key}`)
      return cached.data;
    }
  }
  catch {
    // corrupt cache, ignore and refetch
  }

  const data = await fetcher();
  console.log(`Caching key: ${key}`)
  localStorage.setItem(
    key,
    JSON.stringify({ data, expiresAt: Date.now() + ttlMs })
  )
  return data;
}