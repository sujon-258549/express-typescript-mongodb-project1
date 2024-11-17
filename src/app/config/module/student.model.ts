import { model, Schema } from 'mongoose';
import {
  FullName,
  Guardian,
  Student,
  LocalGardient,
} from './student/student.interface';

const nameSchema = new Schema<FullName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const gurdientSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNumber: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNumber: { type: String, required: true },
});
const LocalGardientSchema = new Schema<LocalGardient>({
  name: { type: String, required: true }, // Corrected the field structure
  ocupation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String }, // Optional field, so `required` is omitted
});

const studentSchema = new Schema<Student>({
  id: { type: Number },
  name: { nameSchema },
  gender: ['male', 'female', 'other'],
  dateOfBirth: { type: String },
  contactNumber: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: gurdientSchema,
  email: { type: String, required: true },
  avatar: { type: String },
  localgardient: LocalGardientSchema,
  photourl: { type: String },
  isActive: { type: Boolean },
});

export const StudentModel = model<Student>('Student', studentSchema);
