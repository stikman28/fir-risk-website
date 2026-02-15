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

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FIR Risk Website <onboarding@resend.dev>",
        to: "hello@firriskadvisory.com",
        reply_to: email,
        subject: `Website Inquiry from ${name}`,
        text: [
          "New inquiry from the FIR Risk website:",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company}`,
          `Interest: ${interest}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.status}`);
    }

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
