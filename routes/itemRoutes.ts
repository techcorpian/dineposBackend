import { Router } from 'express';
import {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} from '../controllers/itemController';

const router = Router();

router.post('/', createItem);     // Create an item
router.get('/', getItems);        // Get all items
router.put('/:id', updateItem);   // Update an item by ID
router.delete('/:id', deleteItem); // Delete an item by ID

export default router;
