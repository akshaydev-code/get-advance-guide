import mongoose, { Schema, Model, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "pending" | "resolved" | "archived";
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      default: "General Inquiry",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },
    status: {
      type: String,
      enum: ["pending", "resolved", "archived"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);

export default Contact;
