import { Request, Response } from 'express';
import Alert from '../models/Alert';

export async function createAlert(req: Request, res: Response) {
  try {
    const { coinId, targetPrice, direction, userId } = req.body;
    if (!coinId || !targetPrice || !direction || !userId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newAlert = new Alert({ coinId, targetPrice, direction, userId });
    await newAlert.save();
    return res.status(201).json(newAlert);
  } catch (err) {
    console.error('Error creating alert:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function getAllAlerts(req: Request, res: Response) {
  try {
    const alerts = await Alert.find();
    return res.json(alerts);
  } catch (err) {
    console.error('Error retrieving alerts:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
