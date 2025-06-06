import bcrypt from 'bcryptjs'
import { sql } from '../config/db.js';
import jwt from 'jsonwebtoken';

export const getAllMembers = async (req, res) => {
    try {
        const result = await sql`SELECT * FROM members`;
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching members:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getMemberById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`SELECT * FROM members WHERE id = ${id}`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error fetching member:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const registerMember = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await sql`
            INSERT INTO members (name, email, password)
            VALUES (${name}, ${email}, ${hashedPassword})
            RETURNING *`;
        res.status(201).json(result[0]);
    } catch (error) {
        console.error('Error registering member:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const loginMember = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await sql`SELECT * FROM members WHERE email = ${email}`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Member not found' });
        }
        const member = result[0];
        const isMatch = await bcrypt.compare(password, member.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: member.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, member: { id: member.id, name: member.name, email: member.email } });
    } catch (error) {
        console.error('Error logging in member:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateMember = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await sql`
            UPDATE members
            SET name = ${name}, email = ${email}, password = ${hashedPassword}
            WHERE id = ${id}
            RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error updating member:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteMember = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`DELETE FROM members WHERE id = ${id} RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
        console.error('Error deleting member:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}