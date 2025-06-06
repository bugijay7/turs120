import bcrypt from 'bcryptjs';
import { sql } from '../config/db.js';
import jwt from 'jsonwebtoken';



export const getAllPrayerRequests = async (req, res) => {
    try {
        const result = await sql`SELECT * FROM prayer_requests`;
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching prayer requests:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getPrayerRequestById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`SELECT * FROM prayer_requests WHERE id = ${id}`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Prayer request not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error fetching prayer request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createPrayerRequest = async (req, res) => {
    const { title, description, requestDate, requesterName } = req.body;
    try {
        const result = await sql`
            INSERT INTO prayer_requests (title, description, request_date, requester_name)
            VALUES (${title}, ${description}, ${requestDate}, ${requesterName})
            RETURNING *`;
        res.status(201).json(result[0]);
    } catch (error) {
        console.error('Error creating prayer request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updatePrayerRequest = async (req, res) => {
    const { id } = req.params;
    const { title, description, requestDate, requesterName } = req.body;
    try {
        const result = await sql`
            UPDATE prayer_requests
            SET title = ${title}, description = ${description}, request_date = ${requestDate}, requester_name = ${requesterName}
            WHERE id = ${id}
            RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Prayer request not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error updating prayer request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deletePrayerRequest = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`DELETE FROM prayer_requests WHERE id = ${id} RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Prayer request not found' });
        }
        res.status(200).json({ message: 'Prayer request deleted successfully' });
    } catch (error) {
        console.error('Error deleting prayer request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
