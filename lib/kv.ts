import { Redis } from '@upstash/redis'

let redis: Redis | null = null

function getRedis(): Redis {
  if (!redis) {
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      throw new Error('Upstash Redis environment variables are not set')
    }
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  }
  return redis
}

export async function kvSet(key: string, value: unknown, exSeconds?: number): Promise<void> {
  const r = getRedis()
  if (exSeconds) {
    await r.set(key, value, { ex: exSeconds })
  } else {
    await r.set(key, value)
  }
}

export async function kvGet<T>(key: string): Promise<T | null> {
  const r = getRedis()
  return r.get<T>(key)
}

export async function kvDel(key: string): Promise<void> {
  const r = getRedis()
  await r.del(key)
}

export async function kvKeys(pattern: string): Promise<string[]> {
  const r = getRedis()
  return r.keys(pattern)
}
