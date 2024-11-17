import { Schema, model, connect } from 'mongoose';

export interface Guardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
}

export interface FullName {
  firstName: string;
  middleName?: string; // Optional field if middle name isn't always provided
  lastName: string;
}

export interface LocalGardient {
  name: string;
  ocupation: string;
  contactNumber: string;
  address: string;
}

export interface Student {
  id: number;
  name: FullName; // Changed to match the `FullName` interface
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  contactNumber: string;
  emergencyContact: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  email: string;
  avatar?: string;
  localgardient: LocalGardient;
  photourl?: string;
  isActive: true | false;
}
