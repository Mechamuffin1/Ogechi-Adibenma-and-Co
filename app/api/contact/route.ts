import { NextResponse } from "next/server";

// Receives the site's consultation-request forms and sends them by email via
// Resend. Environment variables (Vercel project settings): RESEND_API_KEY,
// CONTACT_TO_EMAIL, RESEND_FROM_EMAIL (optional until a domain is verified).

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    /* fall through to validation */
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const matterType = String(body.matter_type || "").trim();
  const page = String(body.page || "").trim();

  // Honeypot: real visitors never see or fill this field.
  if (String(body.company || "").trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "chambers@ogechiadibenma.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Ogechi Adibenma & Co <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return NextResponse.json(
      { error: "Enquiry could not be sent. Please try again later." },
      { status: 500 }
    );
  }

  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    matterType ? `Matter type: ${matterType}` : null,
    page ? `Submitted from: ${page}` : null,
    "",
    "Message:",
    message,
  ].filter(Boolean);

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New enquiry from ${name}, Ogechi Adibenma & Co website`,
        text: bodyLines.join("\n"),
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error("Resend API error:", resendRes.status, errText);
      return NextResponse.json(
        { error: "Enquiry could not be sent. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Enquiry could not be sent. Please try again later." },
      { status: 500 }
    );
  }
}
