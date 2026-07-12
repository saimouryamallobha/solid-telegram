import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

import authRoutes from './routes/auth';
import analyticsRoutes from './routes/analytics';
import driversRoutes from './routes/drivers';
import vehiclesRoutes from './routes/vehicles';
import tripsRoutes from './routes/trips';

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/drivers', driversRoutes);
app.use('/api/vehicles', vehiclesRoutes);
app.use('/api/trips', tripsRoutes);

// Routes will go here
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
