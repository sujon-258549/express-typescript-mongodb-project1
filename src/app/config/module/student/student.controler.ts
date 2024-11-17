import { Request, Response } from 'express';
import { studentServises } from './student.serves';

const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body.student;
    const result = await studentServises.createSutdentInfoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Create a Student successs ',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const findAllStudentData = async (req: Request, res: Response) => {
  try {
    const result = await studentServises.findStudentdataDB();
    res.status(200).json({
      success: true,
      message: 'All Student Find successfuly',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  findAllStudentData,
};
