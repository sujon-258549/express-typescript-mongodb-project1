import express from 'express';
import { studentController } from './student.controler';

const router = express.Router();
router.post('/create-student', studentController.createStudent);
router.get('/', studentController.findAllStudentData);

export const studentRouter = router;
