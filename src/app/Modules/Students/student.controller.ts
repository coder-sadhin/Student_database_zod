import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentSchema from './student.velidators';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const { error, value } = studentSchema.validate(student);

    if (error) {
      res.status(400).json({
        success: false,
        message: 'Somethings went wrong',
        error: error.details,
      });
    }

    const result = await StudentServices.createStudentIntoDB(value);

    res.status(200).json({
      success: true,
      message: 'Student is Created Successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Somethings went wrong',
      data: error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromBD();

    res.status(200).json({
      success: true,
      message: 'All Student Find Successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Somethings went wrong',
      data: error,
    });
  }
};

const getStudentByID = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getStudentById(studentId);

    res.status(200).json({
      success: true,
      message: 'Student Find Successful',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Somethings went wrong',
      data: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getStudentByID,
};
