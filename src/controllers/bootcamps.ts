import { Request, Response } from 'express';
import Bootcamp from '../models/Bootcamp';

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
export const getBootcamps = async (req: Request, res: Response) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
export const getBootcamp = async (req: Request, res: Response) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};

// @desc    Create a new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
export const createBootcamp = async (req: Request, res: Response) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps
// @access  Private
export const updateBootcamp = async (req: Request, res: Response) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps
// @access  Private
export const deleteBootcamp = async (req: Request, res: Response) => {
  try {
    await Bootcamp.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};
