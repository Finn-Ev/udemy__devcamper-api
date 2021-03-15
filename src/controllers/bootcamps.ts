import { Request, Response } from 'express';

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
export const getBootcamps = (req: Request, res: Response) => {
  res.status(200).json({ success: true, msg: '' });
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
export const getBootcamp = (req: Request, res: Response) => {
  res.status(200).json({ success: true, msg: '' });
};

// @desc    Create a new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
export const createBootcamp = (req: Request, res: Response) => {
  res.status(200).json({ success: true, msg: '' });
};

// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps
// @access  Private
export const updateBootcamp = (req: Request, res: Response) => {
  res.status(200).json({ success: true, msg: '' });
};

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps
// @access  Private
export const deleteBootcamp = (req: Request, res: Response) => {
  res.status(200).json({ success: true, msg: '' });
};
