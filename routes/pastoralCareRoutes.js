import express from 'express';
import { getAllPastoralCares, getPastoralCareById, createPastoralCare, updatePastoralCare, deletePastoralCare } from '../controllers/pastoralCareController.js';
import { authenticate } from '../middleware/authMiddleware.js';
const router = express.Router();

// Get all pastoral care records
router.get('/', authenticate, getAllPastoralCares);
// Get a specific pastoral care record by ID
router.get('/:id', authenticate, getPastoralCareById);
// Create a new pastoral care record
router.post('/', createPastoralCare);
// Update a pastoral care record by ID
router.put('/:id', authenticate, updatePastoralCare);
// Delete a pastoral care record by ID
router.delete('/:id', authenticate, deletePastoralCare);

export default router;