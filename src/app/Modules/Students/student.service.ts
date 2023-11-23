import { StudentInterface } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: StudentInterface) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentFromBD = async () => {
  const result = await StudentModel.find();
  return result;
};

const getStudentById = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromBD,
  getStudentById,
};
