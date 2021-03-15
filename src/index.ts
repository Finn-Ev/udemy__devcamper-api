import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import { connectDB } from './config/db';

// Route files
import bootcampRoutes from './routes/bootcamps';

// Load environmental variables
dotenv.config();

// connect to db
connectDB();

// enable colors in console
colors.enable();

const app: Application = express();

// Body parser
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcampRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`\n✅ Server is running in ${process.env.NODE_ENV} on port ${PORT}`.green.bold)
);

process.on('unhandledRejection', (err: any, promise) => {
  console.log(`❌ Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
