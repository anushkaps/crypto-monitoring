import { Request, Response } from 'express';
import { fetchCryptoPrice } from '../services/cryptoService';
import { getCachedPrice, cachePrice } from '../services/cacheService';

export async function getCryptoPrice(req: Request, res: Response) {
  const { coinId } = req.params;
  try {
    let price = await getCachedPrice(coinId);
    if (price === null) {
      // Not in cache, fetch from API
      price = await fetchCryptoPrice(coinId);
      await cachePrice(coinId, price);
    }
    return res.json({ coinId, price });
  } catch (err) {
    console.error('Error getting crypto price:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
