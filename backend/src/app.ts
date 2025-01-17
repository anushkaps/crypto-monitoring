import express from 'express';
import cors from 'cors';
import cryptoRoutes from './routes/cryptoRoutes';
import alertRoutes from './routes/alertRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/crypto', cryptoRoutes);
app.use('/alerts', alertRoutes);

export default app;
