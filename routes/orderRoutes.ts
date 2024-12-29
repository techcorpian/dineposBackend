import { Router } from 'express';
import {
  getOrders,
  getOrdersById,
  getNewOrderId,
  createOrder
} from '../controllers/orderController';

const router = Router();

router.get('/', getOrders);        // Get all orders
router.get('/getOrderById/:id', getOrdersById);
router.get('/newOrderId', getNewOrderId);        // Get all orders
router.post('/', createOrder);     // Create an order

export default router;
