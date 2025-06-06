import express from 'express';
import { registerMember, loginMember, getAllMembers, getMemberById, updateMember, deleteMember } from '../controllers/memberController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

// Register a new member
router.post('/register', registerMember);
// Login a member
router.post('/login', loginMember);
// Get all members
router.get('/', authenticate, getAllMembers);
// Get a specific member by ID
router.get('/:id', authenticate, getMemberById);
// Update a member by ID
router.put('/:id', authenticate, updateMember);
// Delete a member by ID
router.delete('/:id', authenticate, deleteMember);

export default router;