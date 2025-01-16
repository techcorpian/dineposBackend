import { Router } from 'express';
import {
  getOrders,
  getOrdersById,
  getNewOrderId,
  createOrder,
  createOrderByUPI,
  // verifyPayment

} from '../controllers/orderController';

const router = Router();

router.get('/', getOrders);        // Get all orders
router.get('/getOrderById/:id', getOrdersById);
router.get('/newOrderId', getNewOrderId);        // Get all orders
router.post('/', createOrder);     // Create an order
router.post('/createOrderByUPI', createOrderByUPI);     // Create an order
// router.post('/verifyPayment', verifyPayment);



export default router;
