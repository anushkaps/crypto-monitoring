import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({
  coinId: { type: String, required: true },
  targetPrice: { type: Number, required: true },
  direction: { type: String, enum: ['above', 'below'], required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Alert = mongoose.model('Alert', alertSchema);

export default Alert;
