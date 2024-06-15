import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Patient from "../../../../../models/patients";

export async function PUT(req: Request, params: any) {
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

// import { NextResponse } from "next/server";
// import connectMongoDB from "../../../../../libs/mongodb";
// import Patient from "../../../../../models/patients";

// export async function PUT(req: Request, params: any) {
//   const { id } = params;

//   try {
//     const {
//       newName: name,
//       newAge: age,
//       newPhone: phone,
//       newDiagnosis: diagnosis,
//       newAdmissionDate: admissionDate,
//       newStatus: status,
//     } = await req.json();

//     console.log("Payload received:", {
//       name,
//       age,
//       phone,
//       diagnosis,
//       admissionDate,
//       status,
//     });

//     await connectMongoDB();

//     const updatedPatient = await Patient.findByIdAndUpdate(
//       id,
//       {
//         name,
//         age,
//         phone,
//         diagnosis,
//         admissionDate,
//         status,
//       },
//       { new: true } // This option returns the updated document
//     );

//     console.log("Updated patient:", updatedPatient);

//     if (!updatedPatient) {
//       return NextResponse.json(
//         { message: "Patient not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { message: "Patient Updated", patient: updatedPatient },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("Error updating patient:", error);
//     return NextResponse.json(
//       { message: "Failed to update patient", error: error.message },
//       { status: 500 }
//     );
//   }
// }
