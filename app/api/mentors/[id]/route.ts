import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Mentor from "@/models/Mentor";
import { isValidObjectId } from "mongoose";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    if (!isValidObjectId(id)) {
      // Also try to find by name slug or fallback
      const mentorByName = await Mentor.findOne({
        name: { $regex: new RegExp(`^${decodeURIComponent(id).replace(/-/g, " ")}$`, "i") },
      }).lean();

      if (mentorByName) {
        return NextResponse.json({ success: true, data: mentorByName }, { status: 200 });
      }

      return NextResponse.json(
        { success: false, message: "Invalid mentor ID" },
        { status: 400 }
      );
    }

    const mentor = await Mentor.findById(id).lean();

    if (!mentor) {
      return NextResponse.json(
        { success: false, message: "Mentor not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: mentor }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching mentor details:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch mentor" },
      { status: 500 }
    );
  }
}
