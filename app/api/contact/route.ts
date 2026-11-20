import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, _gotcha } = await request.json();

    if (_gotcha) {
      return NextResponse.json(
        { success: true, message: "Message received." },
        { status: 200 }
      );
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Please provide valid form details." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { error: "All required fields must be completed." },
        { status: 400 }
      );
    }

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanSubject.length > 150 ||
      cleanMessage.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)
    ) {
      return NextResponse.json(
        { error: "Please check your form details." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: cleanEmail,
      subject: cleanSubject || `Portfolio message from ${cleanName}`,
      text: `Name: ${cleanName}
Email: ${cleanEmail}

Message:
${cleanMessage}`,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}