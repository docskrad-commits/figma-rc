import { Resend } from "resend";

export const onRequestPost: PagesFunction = async (context) => {
  // ── CORS headers ──────────────────────────────────────────────────────────
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // ── Parse body ────────────────────────────────────────────────────────────
  let body: Record<string, string>;
  try {
    body = await context.request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON body." }),
      { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  // ── Field validation ──────────────────────────────────────────────────────
  const { name, organization, role, email, phone, country, service, message } = body;

  const missing: string[] = [];
  if (!name?.trim())         missing.push("name");
  if (!organization?.trim()) missing.push("organization");
  if (!role?.trim())         missing.push("role");
  if (!email?.trim())        missing.push("email");
  if (!country?.trim())      missing.push("country");

  if (missing.length) {
    return new Response(
      JSON.stringify({ error: `Missing required fields: ${missing.join(", ")}.` }),
      { status: 422, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email.trim())) {
    return new Response(
      JSON.stringify({ error: "Invalid email address." }),
      { status: 422, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  // ── Resend ────────────────────────────────────────────────────────────────
  const resend = new Resend(process.env.RESEND_API_KEY);

  const notifyHtml = `
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:560px">
      <tr><td colspan="2" style="padding:16px 0;font-size:18px;font-weight:700;border-bottom:2px solid #e2e8f0">New Consultation Request</td></tr>
      ${[
        ["Name",              name],
        ["Organization",      organization],
        ["Role",              role],
        ["Email",             email],
        ["Phone",             phone  || "—"],
        ["Country",           country],
        ["Service Required",  service || "—"],
        ["Message",           message || "—"],
      ].map(([label, value]) => `
        <tr>
          <td style="padding:10px 12px 10px 0;font-weight:600;color:#374151;white-space:nowrap;vertical-align:top">${label}</td>
          <td style="padding:10px 0;color:#111827">${value}</td>
        </tr>`).join("")}
    </table>
  `;

  const autoReplyHtml = `
    <p style="font-family:sans-serif;font-size:15px;line-height:1.7;color:#111827">
      Thank you for contacting RadCard Global.
    </p>
    <p style="font-family:sans-serif;font-size:15px;line-height:1.7;color:#111827">
      We have received your enquiry and will respond within one business day.
    </p>
    <p style="font-family:sans-serif;font-size:15px;line-height:1.7;color:#111827">
      Regards,<br/>RadCard Global
    </p>
  `;

  try {
    // Notification to RadCard team
    await resend.emails.send({
      from:    "RadCard Website <noreply@radcardhealth.com>",
      to:      ["info@radcardhealth.com"],
      subject: "New Consultation Request",
      html:    notifyHtml,
      replyTo: email.trim(),
    });

    // Auto-reply to the customer
    await resend.emails.send({
      from:    "RadCard Global <noreply@radcardhealth.com>",
      to:      [email.trim()],
      subject: "Thank you for contacting RadCard Global",
      html:    autoReplyHtml,
    });

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: "Email delivery failed.", detail: message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () =>
  new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin":  "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
