import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './config/db';
import './config/redisClient';  // ensures Redis connects
import app from './app';
import { startPriceUpdater } from './jobs/priceUpdater';

const PORT = process.env.PORT || 4000;

(async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // Start the cron job
    startPriceUpdater();
  });
})();
