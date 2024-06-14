import mongoose, { Schema } from "mongoose";

const patientSchema = new Schema(
  {
    name: String,
    age: Number,
    phone: Number,
    diagnosis: String,
    admissionDate: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Patient =
  mongoose.models.Patient || mongoose.model("Patient", patientSchema);

export default Patient;
