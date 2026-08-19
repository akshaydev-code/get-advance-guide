import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!email || !email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "Message should be at least 5 characters long." },
        { status: 400 }
      );
    }

    const newContact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject?.trim() || "General Inquiry",
      message: message.trim(),
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully. We'll get back to you shortly.",
        data: {
          id: newContact._id,
          createdAt: newContact.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating contact entry:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to submit message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).limit(50).lean();

    return NextResponse.json(
      {
        success: true,
        count: contacts.length,
        data: contacts,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching contact messages:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch contact inquiries." },
      { status: 500 }
    );
  }
}
