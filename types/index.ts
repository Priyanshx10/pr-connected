import { Document, Types } from 'mongoose';

export interface ContactSubmission extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ObjectId = Types.ObjectId;