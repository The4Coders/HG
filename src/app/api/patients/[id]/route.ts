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
