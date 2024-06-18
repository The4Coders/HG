import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const { email, password, confirmPassword } = await request.json();

    if (password !== confirmPassword) {
      return new NextResponse("Passwords do not match", { status: 400 });
    }

    await connect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return new NextResponse("User Registered Successfully", { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new NextResponse(err.message || "Internal Server Error", {
      status: 500,
    });
  }
};
