import { NextFunction, Request, Response } from 'express';
import ErrorResponse from '../utils/errorResponse';

const errorHandler = (error: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
  console.log(error.name.red.bold);
  console.log(error);

  let message;
  // Mongoose bad ObjectId
  if (error.name === 'CastError') {
    message = `Resource with id of ${error.value} not found`;
    error = new ErrorResponse(message, 404);
  }

  //  Mongoose duplicate key
  if (error.code === 11000) {
    message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (error.name === 'ValidationError') {
    message = Object.values(error.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({ success: false, error: error.message || 'Server Error' });
};

export default errorHandler;
