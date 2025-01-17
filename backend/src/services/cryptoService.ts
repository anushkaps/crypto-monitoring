import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

export async function fetchCryptoPrice(coinId: string): Promise<number> {
  try {
    // For free usage, CoinGecko typically doesn't require an API key, but you can add it if you have one
    const response = await axios.get(
      `${COINGECKO_BASE_URL}/simple/price`,
      {
        params: {
          ids: coinId,
          vs_currencies: 'usd',
        },
      }
    );
    // response.data might look like: { "bitcoin": { "usd": 27000 } }
    return response.data[coinId].usd;
  } catch (err) {
    console.error(`Error fetching price for ${coinId}:`, err);
    throw err;
  }
}
