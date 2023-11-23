import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/create_student', StudentControllers.createStudent);
router.get('/all_student', StudentControllers.getAllStudent);
router.get('/student_data/:studentId', StudentControllers.getStudentByID);

export const StudentRoute = router;
