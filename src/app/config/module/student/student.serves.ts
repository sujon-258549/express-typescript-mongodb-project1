import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createSutdentInfoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const findStudentdataDB = async () => {
  const result = await StudentModel.find();
  return result;
};

export const studentServises = {
  createSutdentInfoDB,
  findStudentdataDB,
};
