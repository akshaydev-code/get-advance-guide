import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Mentor from "@/models/Mentor";
import { ensureSeedData } from "@/lib/seedData";

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    await ensureSeedData();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const exp = searchParams.get("exp") || "";
    const sortBy = searchParams.get("sortBy") || "popular";
    const popularOnly = searchParams.get("popular") === "true";
    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");
    
    const page = pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1;
    const limit = limitParam ? parseInt(limitParam, 10) : 0;

    const query: Record<string, any> = {};

    // Search by name, role, company, skills, or category
    if (search.trim()) {
      const searchRegex = { $regex: search.trim(), $options: "i" };
      query.$or = [
        { name: searchRegex },
        { role: searchRegex },
        { company: searchRegex },
        { skills: searchRegex },
        { category: searchRegex },
      ];
    }

    // Filter by Category
    if (category && category !== "All" && category !== "All Categories") {
      query.category = { $regex: new RegExp(`^${category}$`, "i") };
    }

    // Filter by Experience
    if (exp && exp !== "All" && exp !== "All Experience") {
      if (exp.includes("Fresher") || exp.includes("0 - 1") || exp.includes("0-1")) {
        query.experienceYears = { $lte: 1 };
      } else if (exp.includes("1 - 3") || exp.includes("1-3")) {
        query.experienceYears = { $gte: 1, $lte: 3 };
      } else if (exp.includes("3 - 5") || exp.includes("3-5")) {
        query.experienceYears = { $gte: 3, $lte: 5 };
      } else if (exp.includes("6+") || exp.includes("5+") || exp.includes("7+") || exp.includes("8+") || exp.includes("9+") || exp.includes("10+")) {
        query.experienceYears = { $gte: 5 };
      }
    }

    // Filter by Popular
    if (popularOnly) {
      query.isPopular = true;
    }

    // Determine Sort
    let sortObj: Record<string, 1 | -1> = {};
    switch (sortBy) {
      case "rating":
        sortObj = { rating: -1, reviews: -1 };
        break;
      case "reviews":
        sortObj = { reviews: -1, rating: -1 };
        break;
      case "exp_desc":
      case "exp":
        sortObj = { experienceYears: -1, rating: -1 };
        break;
      case "exp_asc":
        sortObj = { experienceYears: 1 };
        break;
      case "name_asc":
        sortObj = { name: 1 };
        break;
      case "name_desc":
        sortObj = { name: -1 };
        break;
      case "popular":
      default:
        sortObj = { isPopular: -1, rating: -1, reviews: -1 };
        break;
    }

    const totalCount = await Mentor.countDocuments(query);

    let mentorsQuery = Mentor.find(query).sort(sortObj);
    
    if (limit > 0) {
      const skip = (page - 1) * limit;
      mentorsQuery = mentorsQuery.skip(skip).limit(limit);
    }

    const mentors = await mentorsQuery.lean();

    // Get categories with counts for dynamic display
    const categoryStats = await Mentor.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);

    const totalPages = limit > 0 ? Math.ceil(totalCount / limit) : 1;

    return NextResponse.json(
      {
        success: true,
        count: mentors.length,
        total: totalCount,
        page,
        totalPages,
        limit,
        data: mentors,
        categories: categoryStats.map((c) => ({
          name: c._id,
          count: c.count,
        })),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching mentors:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to fetch mentors",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const newMentor = await Mentor.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Mentor created successfully",
        data: newMentor,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating mentor:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to create mentor",
      },
      { status: 500 }
    );
  }
}
