import express from 'express';
import { createBootcamp, deleteBootcamp, updateBootcamp, getBootcamp, getBootcamps } from '../controllers/bootcamps';

const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

export default router;
