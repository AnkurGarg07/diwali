import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, phone } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,       // your Gmail
        pass: process.env.EMAIL_PASS,       // app password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "doneriamobileandchashmaghar@gmail.com",          // any email you want
      subject: "📱 New User Submission",
      text: `New user submitted their info:\n\nName: ${name}\nPhone: ${phone}\nTime: ${new Date().toISOString()}`,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully", data: { name, phone } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
