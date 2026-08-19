import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          user: null,
          message: "Not authenticated",
        },
        { status: 200 }
      );
    }

    const payload = verifyAuthToken(token);

    if (!payload || !payload.userId) {
      return NextResponse.json(
        {
          success: false,
          user: null,
          message: "Invalid or expired session",
        },
        { status: 200 }
      );
    }

    await connectDB();

    const user = await User.findById(payload.userId).select("-password");

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          user: null,
          message: "User not found",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Auth Me error:", error);
    return NextResponse.json(
      {
        success: false,
        user: null,
        message: "Failed to verify session",
      },
      { status: 500 }
    );
  }
}
