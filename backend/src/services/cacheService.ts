import redisClient from '../config/redisClient';

export async function cachePrice(coinId: string, price: number) {
  const key = `cryptoPrice:${coinId}`;
  // EX: 30 => sets a 30-second TTL for demonstration
  await redisClient.set(key, price.toString(), { EX: 30 });
}

export async function getCachedPrice(coinId: string): Promise<number | null> {
  const key = `cryptoPrice:${coinId}`;
  const cachedValue = await redisClient.get(key);
  return cachedValue ? parseFloat(cachedValue) : null;
}
