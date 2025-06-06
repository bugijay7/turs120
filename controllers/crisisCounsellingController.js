import bcrypt from 'bcryptjs';
import {sql } from '../config/db.js';
import jwt from 'jsonwebtoken';



export const getAllCrisisCounsellings = async (req, res) => {
    try {
        const result = await sql`SELECT * FROM crisis_counselling`;
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching crisis counselling records:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getCrisisCounsellingById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`SELECT * FROM crisis_counselling WHERE id = ${id}`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Crisis counselling record not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error fetching crisis counselling record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createCrisisCounselling = async (req, res) => {
    const { title, description, date, time, location } = req.body;
    try {
        const result = await sql`
            INSERT INTO crisis_counselling (title, description, date, time, location)
            VALUES (${title}, ${description}, ${date}, ${time}, ${location})
            RETURNING *`;
        res.status(201).json(result[0]);
    } catch (error) {
        console.error('Error creating crisis counselling record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateCrisisCounselling = async (req, res) => {
    const { id } = req.params;
    const { title, description, date, time, location } = req.body;
    try {
        const result = await sql`
            UPDATE crisis_counselling
            SET title = ${title}, description = ${description}, date = ${date}, time = ${time}, location = ${location}
            WHERE id = ${id}
            RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Crisis counselling record not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error updating crisis counselling record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteCrisisCounselling = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`DELETE FROM crisis_counselling WHERE id = ${id} RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Crisis counselling record not found' });
        }
        res.status(200).json({ message: 'Crisis counselling record deleted successfully' });
    } catch (error) {
        console.error('Error deleting crisis counselling record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}