import { Request, Response } from 'express';
import { Order } from '../models/Order';

// Helper function to extract error messages safely
const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};

// Get all orders
export const getOrders = async (_req: Request, res: Response): Promise<void> => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  };

  export const getOrdersById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params; // Extract the order ID from the route parameters
  
      if (!id) {
        res.status(400).json({ error: 'Order ID is required' });
        return;
      }
  
      // Fetch the order from the database
      const order = await Order.findById(id); // Adjust if you're using a different database or ORM
  
      if (!order) {
        res.status(404).json({ error: 'Order not found' });
        return;
      }
  
      res.status(200).json({order});
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  };

// Generate New OrderId
export const getNewOrderId = async (req: Request, res: Response): Promise<void> => {
    try {
        const lastInsert = await Order.find().sort({ orderId: -1 }).limit(1); 
        res.status(200).json({ orderId: lastInsert[0]?.orderId || null }); // Safely handle undefined
    } catch (error) {
        res.status(500).json({ error: getErrorMessage(error) });
    }
};


// Create an order
export const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
      const order = new Order(req.body);
      await order.save();
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: getErrorMessage(error) });
    }
  };