import { Router } from 'express';
import { getCryptoPrice } from '../controllers/cryptoController';

const router = Router();

router.get('/price/:coinId', getCryptoPrice);

export default router;
