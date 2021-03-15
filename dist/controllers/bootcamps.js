"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBootcamp = exports.updateBootcamp = exports.createBootcamp = exports.getBootcamp = exports.getBootcamps = void 0;
// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getBootcamps = (req, res) => {
    res.status(200).json({ success: true, msg: '' });
};
exports.getBootcamps = getBootcamps;
// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getBootcamp = (req, res) => {
    res.status(200).json({ success: true, msg: '' });
};
exports.getBootcamp = getBootcamp;
// @desc    Create a new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
const createBootcamp = (req, res) => {
    res.status(200).json({ success: true, msg: '' });
};
exports.createBootcamp = createBootcamp;
// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps
// @access  Private
const updateBootcamp = (req, res) => {
    res.status(200).json({ success: true, msg: '' });
};
exports.updateBootcamp = updateBootcamp;
// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps
// @access  Private
const deleteBootcamp = (req, res) => {
    res.status(200).json({ success: true, msg: '' });
};
exports.deleteBootcamp = deleteBootcamp;
//# sourceMappingURL=bootcamps.js.map