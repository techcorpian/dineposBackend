import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes';
import orderRoutes from './routes/orderRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);

export default app;