import mongoose, { Schema, Model, Document } from "mongoose";

export interface IMentor extends Document {
  name: string;
  role: string;
  company: string;
  image: string;
  category: string;
  skills: string[];
  rating: number;
  reviews: number;
  exp: string;
  experienceYears: number;
  isPopular: boolean;
  featuredOrder?: number;
  bio?: string;
  about?: string;
  hourlyRate?: number;
  available: boolean;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const mentorSchema = new Schema<IMentor>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      default: "Independent",
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    skills: {
      type: [String],
      default: [],
      index: true,
    },
    rating: {
      type: Number,
      default: 5.0,
      min: 0,
      max: 5,
    },
    reviews: {
      type: Number,
      default: 0,
      min: 0,
    },
    exp: {
      type: String,
      required: true,
      trim: true,
    },
    experienceYears: {
      type: Number,
      default: 1,
      min: 0,
    },
    isPopular: {
      type: Boolean,
      default: false,
      index: true,
    },
    featuredOrder: {
      type: Number,
      default: 0,
    },
    bio: {
      type: String,
      default: "",
    },
    about: {
      type: String,
      default: "",
    },
    hourlyRate: {
      type: Number,
      default: 49,
    },
    available: {
      type: Boolean,
      default: true,
    },
    socialLinks: {
      linkedin: { type: String, default: "" },
      twitter: { type: String, default: "" },
      github: { type: String, default: "" },
    },
  },
  {
    timestamps: true,
  }
);

const Mentor: Model<IMentor> =
  mongoose.models.Mentor || mongoose.model<IMentor>("Mentor", mentorSchema);

export default Mentor;
