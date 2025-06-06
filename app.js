import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import premaritalRoutes from './routes/premaritalRoutes.js';
import pastoralRoutes from './routes/pastoralCareRoutes.js';
import babyDedicationRoutes from './routes/babyDedicationRoutes.js';
import prayerRequestRoutes from './routes/prayerRequestRoutes.js';
import crisiscounsellingRoutes from './routes/crisisCounsellingRoutes.js';
import membersRoutes from './routes/memberRoutes.js';

dotenv.config();
const app = express();

app.use(cors( {
  origin: 'https://turs120.vercel.app/',
   credentials: true }));
app.use(express.json());

app.use('/api/premarital', premaritalRoutes);
app.use('/api/pastoralCare', pastoralRoutes);
app.use('/api/babyDedication', babyDedicationRoutes);
app.use('/api/prayerRequests', prayerRequestRoutes);
app.use('/api/crisisCounselling', crisiscounsellingRoutes); // Assuming crisis counselling uses the same routes as premarital classes
app.use('/api/members', membersRoutes)



app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
