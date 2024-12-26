import { Request, Response } from 'express';
import { Item } from '../models/Item';

// Helper function to extract error messages safely
const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};

// Create an item
export const createItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error) });
  }
};

// Get all items
export const getItems = async (_req: Request, res: Response): Promise<void> => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error) });
  }
};

// Update an item
export const updateItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      res.status(404).json({ error: 'Item not found' });
      return;
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error) });
  }
};

// Delete an item
export const deleteItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      res.status(404).json({ error: 'Item not found' });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: getErrorMessage(error) });
  }
};
