import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/orders', orderRoutes);


export default app;