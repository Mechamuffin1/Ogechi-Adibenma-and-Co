// Vercel serverless function: receives the site's consultation-request
// forms and sends them by email via Resend. Requires these environment
// variables to be set in the Vercel project (Settings -> Environment
// Variables): RESEND_API_KEY, CONTACT_TO_EMAIL, RESEND_FROM_EMAIL.

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = req.body || {};
  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const message = (body.message || "").toString().trim();
  const matterType = (body.matter_type || "").toString().trim();
  const page = (body.page || "").toString().trim();

  // Honeypot: real visitors never see or fill this field.
  if ((body.company || "").toString().trim()) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !email || !message) {
    res.status(400).json({ error: "Please fill in your name, email and message." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "chambers@ogechiadibenma.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Ogechi Adibenma & Co Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    res.status(500).json({ error: "Enquiry could not be sent. Please try again later." });
    return;
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
        subject: `New enquiry from ${name} — Ogechi Adibenma & Co website`,
        text: bodyLines.join("\n"),
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error("Resend API error:", resendRes.status, errText);
      res.status(502).json({ error: "Enquiry could not be sent. Please try again later." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ error: "Enquiry could not be sent. Please try again later." });
  }
};
