import express from 'express';
import { getAllPremaritalClasses, getPremaritalClassById, createPremaritalClass, updatePremaritalClass, deletePremaritalClass } from '../controllers/premaritalController.js';  
import { authenticate } from '../middleware/authMiddleware.js';
const router = express.Router();

// Get all premarital classes
router.get('/', authenticate, getAllPremaritalClasses);
// Get a specific premarital class by ID
router.get('/:id', authenticate, getPremaritalClassById);
// Create a new premarital class
router.post('/', createPremaritalClass);  
// Update a premarital class by ID
router.put('/:id', authenticate, updatePremaritalClass);
// Delete a premarital class by ID
router.delete('/:id', authenticate, deletePremaritalClass);


export default router;