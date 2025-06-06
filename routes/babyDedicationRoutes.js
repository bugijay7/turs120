import express from 'express';
import { getAllBabyDedications, getBabyDedicationById, createBabyDedication, updateBabyDedication, deleteBabyDedication } from '../controllers/babyDedicationController.js';
import { authenticate } from '../middleware/authMiddleware.js';
const router = express.Router();

// Get all baby dedications
router.get('/', authenticate, getAllBabyDedications);   
// Get a specific baby dedication by ID
router.get('/:id', authenticate, getBabyDedicationById);
// Create a new baby dedication
router.post('/', createBabyDedication);
// Update a baby dedication by ID
router.put('/:id', authenticate, updateBabyDedication);
// Delete a baby dedication by ID
router.delete('/:id', authenticate, deleteBabyDedication);

export default router;