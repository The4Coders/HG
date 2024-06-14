import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Patient from "../../../../../models/patients";

export async function PUT(req: Request, params: any) {
  const { id } = params;
  const { newName: name, newAge: age } = req.json();
  await connectMongoDB();
  await Patient.findByIdAndUpdate(id, { name, age });
  return NextResponse.json({ message: "Patient Updated" });
}
