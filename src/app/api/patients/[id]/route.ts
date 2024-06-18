import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Patient from "../../../../../models/patients";

export async function PUT(req: Request, { params }: any) {
  const { id } = params;
  const {
    newName: name,
    newAge: age,
    newPhone: phone,
    newDiagnosis: diagnosis,
    newAdmissionDate: admissionDate,
    newStatus: status,
  } = await req.json();
  await connectMongoDB();
  await Patient.findByIdAndUpdate(id, {
    name,
    age,
    phone,
    diagnosis,
    admissionDate,
    status,
  });
  return NextResponse.json({ message: "Patient Updated" }, { status: 200 });
}

// Function to Get a single patient by id
export async function GET(req: Request, { params }: any) {
  try {
    const { id } = params;
    await connectMongoDB();
    const patient = await Patient.findOne({ _id: id });
    if (!patient) {
      return NextResponse.json({ error: "Patient not found" }, { status: 404 });
    }
    return NextResponse.json({ patient }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
