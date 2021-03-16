import { NextFunction, Request, Response } from 'express';
import Bootcamp from '../models/Bootcamp.model';
import ErrorResponse from '../utils/errorResponse';
import $ from '../middleware/asyncHandler'; // wrapper for each controller method to catch async/await errors

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
export const getBootcamps = $(async (req: Request, res: Response, next: NextFunction) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
});

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
export const getBootcamp = $(async (req: Request, res: Response, next: NextFunction) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp with id of ${req.params.id} not found`, 404));
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Create a new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
export const createBootcamp = $(async (req: Request, res: Response, next: NextFunction) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps
// @access  Private
export const updateBootcamp = $(async (req: Request, res: Response, next: NextFunction) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp with id of ${req.params.id} not found`, 404));
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps
// @access  Private
export const deleteBootcamp = $(async (req: Request, res: Response, next: NextFunction) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp with id of ${req.params.id} not found`, 404));
  }
  res.status(200).json({ success: true });
});
