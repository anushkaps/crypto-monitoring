import { Router } from 'express';
import { createAlert, getAllAlerts } from '../controllers/alertController';

const router = Router();

router.post('/', createAlert);
router.get('/', getAllAlerts);

export default router;
