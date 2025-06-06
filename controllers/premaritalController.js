import bcrypt from 'bcryptjs';
import { sql } from '../config/db.js';
import jwt from 'jsonwebtoken';


export const getAllPremaritalClasses = async (req, res) => {
    try {
        const result = await sql`SELECT * FROM premarital_classes`;
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching premarital classes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getPremaritalClassById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`SELECT * FROM premarital_classes WHERE id = ${id}`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Premarital class not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error fetching premarital class:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createPremaritalClass = async (req, res) => {
    const { title, description, date, time, location, groom, bride } = req.body;
    try {
        const result = await sql`
            INSERT INTO premarital_classes (title, description, date, time, location, groom, bride)
            VALUES (${title}, ${description}, ${date}, ${time}, ${location}, ${groom}, ${bride})
            RETURNING *`;
        res.status(201).json(result[0]);
    } catch (error) {
        console.error('Error creating premarital class:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updatePremaritalClass = async (req, res) => {
    const { id } = req.params;
    const { title, description, date, time, location, groom, bride } = req.body;
    try {
        const result = await sql`
            UPDATE premarital_classes
            SET title = ${title}, description = ${description}, date = ${date}, time = ${time}, location = ${location}, groom = ${groom}, bride = ${bride}
            WHERE id = ${id}
            RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Premarital class not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error updating premarital class:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const deletePremaritalClass = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`DELETE FROM premarital_classes WHERE id = ${id} RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Premarital class not found' });
        }
        res.status(200).json({ message: 'Premarital class deleted successfully' });
    } catch (error) {
        console.error('Error deleting premarital class:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}