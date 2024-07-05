import User from "@/models/User";
import PersonalAccount from "@/models/PersonalAccount";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const {
      userId,
      email,
      address,
      allergies,
      bloodType,
      currentMedications,
      dob,
      emergencyContactName,
      emergencyContactPhone,
      emergencyContactRelationship,
      fullName,
      gender,
      medicalHistory,
      phoneNumber,
      physicianContact,
      primaryCarePhysician,
      profileImage,
    } = await request.json();

    await connect();

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    const existingPersonalAccount = await PersonalAccount.findOne({ email });
    if (existingPersonalAccount) {
      return new NextResponse(
        "Personal account already exists for this email",
        { status: 400 }
      );
    }

    const newPersonalAccount = new PersonalAccount({
      userId,
      email,
      address,
      allergies,
      bloodType,
      currentMedications,
      dob,
      emergencyContactName,
      emergencyContactPhone,
      emergencyContactRelationship,
      fullName,
      gender,
      medicalHistory,
      phoneNumber,
      physicianContact,
      primaryCarePhysician,
      profileImage,
    });

    await newPersonalAccount.save();
    return new NextResponse("Personal Account Registered Successfully", {
      status: 200,
    });
  } catch (err: any) {
    console.error(err);
    return new NextResponse(err.message || "Internal Server Error", {
      status: 500,
    });
  }
};
