import bcrypt from 'bcryptjs';
import { sql } from '../config/db.js';
import jwt from 'jsonwebtoken';



export const getAllBabyDedications = async (req, res) => {
    try {
        const result = await sql`SELECT * FROM baby_dedications`;
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching baby dedications:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getBabyDedicationById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`SELECT * FROM baby_dedications WHERE id = ${id}`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Baby dedication not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error fetching baby dedication:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createBabyDedication = async (req, res) => {
    const { babyName, parentsNames, dedicationDate, pastorInCharge } = req.body;
    try {
        const result = await sql`
            INSERT INTO baby_dedications (baby_name, parents_names, dedication_date, pastor_in_charge)
            VALUES (${babyName}, ${parentsNames}, ${dedicationDate}, ${pastorInCharge})
            RETURNING *`;
        res.status(201).json(result[0]);
    } catch (error) {
        console.error('Error creating baby dedication:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateBabyDedication = async (req, res) => {
    const { id } = req.params;
    const { babyName, parentsNames, dedicationDate, pastorInCharge } = req.body;
    try {
        const result = await sql`
            UPDATE baby_dedications
            SET baby_name = ${babyName}, parents_names = ${parentsNames}, dedication_date = ${dedicationDate}, pastor_in_charge = ${pastorInCharge}
            WHERE id = ${id}
            RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Baby dedication not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error updating baby dedication:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteBabyDedication = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await sql`DELETE FROM baby_dedications WHERE id = ${id} RETURNING *`;
        if (result.length === 0) {
            return res.status(404).json({ message: 'Baby dedication not found' });
        }
        res.status(200).json({ message: 'Baby dedication deleted successfully' });
    } catch (error) {
        console.error('Error deleting baby dedication:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}