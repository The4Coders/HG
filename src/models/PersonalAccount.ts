import mongoose, { Schema, Document } from "mongoose";

export interface IPersonalAccount extends Document {
  userId: Schema.Types.ObjectId;
  email: string;
  address: string;
  allergies: string;
  bloodType: string;
  currentMedications: string;
  dob: Date;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;
  fullName: string;
  gender: string;
  medicalHistory: string;
  phoneNumber: string;
  physicianContact: string;
  primaryCarePhysician: string;
  profileImage: string;
}

const PersonalAccountSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  allergies: { type: String, required: true },
  bloodType: { type: String, required: true },
  currentMedications: { type: String, required: true },
  dob: { type: Date, required: true },
  emergencyContactName: { type: String, required: true },
  emergencyContactPhone: { type: String, required: true },
  emergencyContactRelationship: { type: String, required: true },
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  medicalHistory: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  physicianContact: { type: String, required: true },
  primaryCarePhysician: { type: String, required: true },
  profileImage: { type: String, required: true },
});

export default mongoose.models.PersonalAccount ||
  mongoose.model<IPersonalAccount>("PersonalAccount", PersonalAccountSchema);
