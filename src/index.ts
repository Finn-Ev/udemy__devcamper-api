import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from './config/db';

// Route files
import bootcampRoutes from './routes/bootcamps';

dotenv.config();

connectDB();

const app: Application = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcampRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`✅ Server is running in ${process.env.NODE_ENV} on port ${PORT}`));
