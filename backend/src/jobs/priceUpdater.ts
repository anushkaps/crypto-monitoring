import cron from 'node-cron';
import { fetchCryptoPrice } from '../services/cryptoService';
import { cachePrice } from '../services/cacheService';
import { checkAlertsForCoin } from '../services/alertService';

// For demonstration, we'll monitor these coins:
const coinsToMonitor = ['bitcoin', 'ethereum'];

export function startPriceUpdater() {
  // Every minute (*/1) we fetch the price
  cron.schedule('*/1 * * * *', async () => {
    console.log('[CRON] Running price update...');
    for (const coinId of coinsToMonitor) {
      try {
        const price = await fetchCryptoPrice(coinId);
        await cachePrice(coinId, price);
        await checkAlertsForCoin(coinId, price);
      } catch (err) {
        console.error(`Error updating price for ${coinId}:`, err);
      }
    }
  });
}
