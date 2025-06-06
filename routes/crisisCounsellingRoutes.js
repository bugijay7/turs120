import express from 'express';
import { getAllCrisisCounsellings, getCrisisCounsellingById, createCrisisCounselling, updateCrisisCounselling, deleteCrisisCounselling } from '../controllers/crisisCounsellingController.js';
import { authenticate } from '../middleware/authMiddleware.js'; 
const router = express.Router();

// Get all crisis counselling records
router.get('/', authenticate, getAllCrisisCounsellings);
// Get a specific crisis counselling record by ID
router.get('/:id', authenticate, getCrisisCounsellingById);
// Create a new crisis counselling record
router.post('/', authenticate, createCrisisCounselling);
// Update a crisis counselling record by ID
router.put('/:id', authenticate, updateCrisisCounselling);
// Delete a crisis counselling record by ID
router.delete('/:id', authenticate, deleteCrisisCounselling);


export default router;