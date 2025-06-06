import bcrypt from 'bcryptjs';
import { sql } from '../config/db.js';
import jwt from 'jsonwebtoken';


export const getAllPastoralCares = async (req, res) => {
    try {
        const result = await sql`SELECT * FROM pastoral_care`;
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching pastoral care records:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getPastoralCareById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`SELECT * FROM pastoral_care WHERE id = ${id}`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Pastoral care record not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error fetching pastoral care record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createPastoralCare = async (req, res) => {
    const { title, description, date, time, location } = req.body;
    try {
        const result = await sql`
            INSERT INTO pastoral_care (title, description, date, time, location)
            VALUES (${title}, ${description}, ${date}, ${time}, ${location})
            RETURNING *`;
        res.status(201).json(result[0]);
    } catch (error) {
        console.error('Error creating pastoral care record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updatePastoralCare = async (req, res) => {
    const { id } = req.params;
    const { title, description, date, time, location } = req.body;
    try {
        const result = await sql`
            UPDATE pastoral_care
            SET title = ${title}, description = ${description}, date = ${date}, time = ${time}, location = ${location}
            WHERE id = ${id}
            RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Pastoral care record not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error updating pastoral care record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deletePastoralCare = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`DELETE FROM pastoral_care WHERE id = ${id} RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Pastoral care record not found' });
        }
        res.status(200).json({ message: 'Pastoral care record deleted successfully' });
    } catch (error) {
        console.error('Error deleting pastoral care record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}