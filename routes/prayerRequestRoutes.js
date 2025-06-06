import express from 'express';
import { getAllPrayerRequests, getPrayerRequestById, createPrayerRequest, updatePrayerRequest, deletePrayerRequest } from '../controllers/prayerRequestController.js';
import { authenticate } from '../middleware/authMiddleware.js';
const router = express.Router();

// Get all prayer requests
router.get('/', authenticate, getAllPrayerRequests);
// Get a specific prayer request by ID
router.get('/:id', authenticate, getPrayerRequestById);
// Create a new prayer request
router.post('/',  createPrayerRequest);
// Update a prayer request by ID
router.put('/:id', authenticate, updatePrayerRequest);
// Delete a prayer request by ID
router.delete('/:id', authenticate, deletePrayerRequest);

export default router;