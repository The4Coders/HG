import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Patient from "../../../../models/patients";

export async function POST(req: Request, res: Response) {
  const { name, age, phone, diagnosis, admissionDate, status } =
    await req.json();
  await connectMongoDB();
  await Patient.create({
    name,
    age,
    phone,
    diagnosis,
    admissionDate,
    status,
  });
  return NextResponse.json({ message: "Patient created" }, { status: 201 });
  console.log("Response: ", res);
}

export async function GET(req: Request, res: Response) {
  await connectMongoDB();
  const patients = await Patient.find();
  return NextResponse.json({ patients });
}

export async function DELETE(req: any, res: Response) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Patient.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Patient deleted successfully" },
    { status: 200 }
  );
}
