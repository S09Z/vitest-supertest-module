import { Document } from 'mongoose';

export interface UserType extends Document {
  email: string;
  password: string;
}