import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || '6379'}`
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await redisClient.connect();
  console.log('Redis connected successfully');
})();

export default redisClient;
