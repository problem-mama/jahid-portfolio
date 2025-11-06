import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const requiredEnvVars = [
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_USER",
      "SMTP_PASS",
      "SMTP_FROM",
      "SMTP_TO",
    ];
    const missingEnvVars = requiredEnvVars.filter(
      (varName) => !process.env[varName]
    );

    if (missingEnvVars.length > 0) {
      return NextResponse.json(
        { message: `Missing config: ${missingEnvVars.join(", ")}` },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ 1. SEND EMAIL TO YOU
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // ✅ 2. AUTO-REPLY EMAIL TO USER
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      replyTo: process.env.SMTP_FROM,
      subject: "Thanks for contacting us",
      html: `
        <p>Hello <strong>${name}</strong>,</p>
        <p>Thank you for reaching out! We received your message and will reply shortly.</p>
        <p>Message you sent:</p>
        <blockquote>${message}</blockquote>
        <br/>
        <p>Best regards, <br/> Jahid Visuals Team</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent and auto-reply sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Error sending email",
      },
      { status: 500 }
    );
  }
}
