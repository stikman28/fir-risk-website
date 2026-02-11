import { EmailMessage } from "cloudflare:email";

export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();

    // Honeypot spam check
    if (formData.get("_gotcha")) {
      return new Response(null, {
        status: 302,
        headers: { Location: "/contact/?submitted=true" },
      });
    }

    const name = formData.get("name") || "Unknown";
    const email = formData.get("email") || "not provided";
    const company = formData.get("company") || "Not provided";
    const interest = formData.get("interest") || "General";
    const message = formData.get("message") || "No message";

    // Construct raw MIME email
    const mimeEmail = [
      "MIME-Version: 1.0",
      "From: FIR Risk Website <noreply@firriskadvisory.com>",
      "To: hello@firriskadvisory.com",
      `Reply-To: ${name} <${email}>`,
      `Subject: Website Inquiry from ${name}`,
      "Content-Type: text/plain; charset=utf-8",
      "",
      "New inquiry from the FIR Risk website:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Interest: ${interest}`,
      "",
      "Message:",
      message,
    ].join("\r\n");

    const msg = new EmailMessage(
      "noreply@firriskadvisory.com",
      "hello@firriskadvisory.com",
      mimeEmail
    );

    await context.env.EMAIL.send(msg);

    return new Response(null, {
      status: 302,
      headers: { Location: "/contact/?submitted=true" },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(null, {
      status: 302,
      headers: { Location: "/contact/?error=true" },
    });
  }
}
