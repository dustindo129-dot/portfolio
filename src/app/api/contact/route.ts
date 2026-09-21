import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, message } = await request.json();
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!title || !message) {
      return NextResponse.json(
        { error: "Title and message are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "khongbuoncuoi69@gmail.com",
      subject: `Portfolio: ${title}`,
      html: `
        <h2 style="font-family:sans-serif">New message from your portfolio</h2>
        <p style="font-family:sans-serif"><strong>Subject:</strong> ${title}</p>
        <hr />
        <p style="font-family:sans-serif;white-space:pre-wrap">${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
