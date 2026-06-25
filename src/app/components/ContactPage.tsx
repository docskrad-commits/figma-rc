import { useState } from "react";
import { Mail, Phone, Globe2, Clock } from "lucide-react";
import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const ROLES = ["Managing Partner", "Medical Director", "Chief Radiologist", "Practice Administrator", "COO", "CEO", "Operations Leader", "Other"];
const COUNTRIES = ["United States", "United Kingdom", "Australia", "New Zealand", "Germany", "France", "Netherlands", "UAE", "Saudi Arabia", "Qatar", "Singapore", "Other"];
const CHALLENGES = ["Overflow / Peak Volume", "Overnight Coverage", "Weekend Coverage", "Workforce Shortages", "Burnout", "Turnaround Times", "Subspecialty Support", "Cost Reduction", "Other"];
const VOLUMES = ["< 500 / month", "500 – 2,000 / month", "2,000 – 5,000 / month", "5,000 – 10,000 / month", "> 10,000 / month", "Unsure"];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formType, setFormType] = useState<"consultation" | "proposal">("consultation");
  const [form, setForm] = useState({ name: "", organization: "", role: "", country: "", email: "", phone: "", challenge: "", volume: "", message: "" });
  const { isMobile } = useBreakpoint();
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const iStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px",
    border: `1px solid ${C.border}`, borderRadius: 7,
    fontSize: 14, fontFamily: "inherit",
    color: C.navy, background: C.white,
    outline: "none", boxSizing: "border-box",
    minHeight: 44,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          organization: form.organization,
          role: form.role,
          email: form.email,
          phone: form.phone,
          country: form.country,
          service: [form.challenge, form.volume].filter(Boolean).join(" · ") || formType,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error ?? "Submission failed. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background: C.white, paddingTop: 68, fontFamily: C.font }}>
      {/* Hero */}
      <div style={{ background: C.navy, padding: isMobile ? "72px 24px 60px" : "96px 40px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 18 }}>
            Contact
          </p>
          <h1 style={{
            fontSize: isMobile ? "clamp(28px, 8vw, 46px)" : "clamp(36px, 5vw, 68px)",
            fontWeight: 900, color: C.white, lineHeight: 1.06, letterSpacing: "-2px",
            marginBottom: 18, maxWidth: 700, margin: "0 auto 18px",
          }}>
            Start the Conversation
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 15 : 18, lineHeight: 1.68, maxWidth: 460, margin: "0 auto" }}>
            Tell us about your radiology operations. We'll respond within 24 hours.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: isMobile ? "48px 24px" : "72px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr", gap: isMobile ? 40 : 56, alignItems: "start" }}>

          {/* Form */}
          <div>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#f0fdf4", border: "1px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 style={{ color: C.text, fontSize: 20, fontWeight: 800, marginBottom: 10 }}>We've received your request.</h3>
                <p style={{ color: C.textSec, fontSize: 14.5, lineHeight: 1.7, maxWidth: 360, margin: "0 auto 16px" }}>
                  A member of our team will reach out within 24 hours.
                </p>
                <p style={{ color: C.textMuted, fontSize: 12.5 }}>
                  Urgent? <a href="mailto:info@radcardhealth.com" style={{ color: C.accentBlue }}>info@radcardhealth.com</a>
                </p>
              </div>
            ) : (
              <>
                {/* Type toggle */}
                <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                  {([ ["consultation", "Schedule Consultation"], ["proposal", "Request Proposal"] ] as const).map(([v, l]) => (
                    <button key={v} type="button" onClick={() => setFormType(v)} style={{
                      flex: 1, padding: "10px 8px", borderRadius: 7,
                      border: formType === v ? `1px solid ${C.navy}` : `1px solid ${C.border}`,
                      background: formType === v ? C.navy : C.offWhite,
                      color: formType === v ? C.white : C.textSec,
                      fontFamily: C.font, fontSize: 13.5, fontWeight: formType === v ? 700 : 500,
                      cursor: "pointer", minHeight: 44,
                    }}>
                      {l}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    {[
                      { k: "name", l: "Full Name *", p: "Dr. Jane Smith", t: "text", req: true },
                      { k: "organization", l: "Organization *", p: "Your practice or health system", t: "text", req: true },
                      { k: "email", l: "Email Address *", p: "you@yourpractice.com", t: "email", req: true },
                      { k: "phone", l: "Phone Number", p: "+1 (555) 000-0000", t: "tel", req: false },
                    ].map(f => (
                      <div key={f.k}>
                        <label style={{ display: "block", color: C.text, fontSize: 12.5, fontWeight: 600, marginBottom: 5 }}>{f.l}</label>
                        <input required={f.req} type={f.t} style={iStyle} placeholder={f.p}
                          name={f.k}
                          value={(form as Record<string, string>)[f.k]} onChange={e => set(f.k, e.target.value)}
                          onFocus={e => { (e.target as HTMLElement).style.borderColor = C.navy; }}
                          onBlur={e => { (e.target as HTMLElement).style.borderColor = C.border; }}
                        />
                      </div>
                    ))}
                    {[
                      { k: "role", l: "Role *", opts: ROLES, req: true },
                      { k: "country", l: "Country *", opts: COUNTRIES, req: true },
                      { k: "challenge", l: "Primary Challenge", opts: CHALLENGES, req: false },
                      { k: "volume", l: "Est. Monthly Study Volume", opts: VOLUMES, req: false },
                    ].map(f => (
                      <div key={f.k}>
                        <label style={{ display: "block", color: C.text, fontSize: 12.5, fontWeight: 600, marginBottom: 5 }}>{f.l}</label>
                        <select required={f.req} style={{ ...iStyle, cursor: "pointer" }}
                          name={f.k}
                          value={(form as Record<string, string>)[f.k]} onChange={e => set(f.k, e.target.value)}
                          onFocus={e => { (e.target as HTMLElement).style.borderColor = C.navy; }}
                          onBlur={e => { (e.target as HTMLElement).style.borderColor = C.border; }}
                        >
                          <option value="">Select</option>
                          {f.opts.map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 18 }}>
                    <label style={{ display: "block", color: C.text, fontSize: 12.5, fontWeight: 600, marginBottom: 5 }}>Message</label>
                    <textarea style={{ ...iStyle, height: 90, resize: "vertical" }}
                      name="message"
                      placeholder="Tell us more about your operations..."
                      value={form.message} onChange={e => set("message", e.target.value)}
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = C.navy; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = C.border; }}
                    />
                  </div>
                  {error && (
                    <p style={{ marginBottom: 12, color: "#dc2626", fontSize: 13, lineHeight: 1.5 }}>{error}</p>
                  )}
                  <button type="submit" disabled={submitting} style={{
                    width: "100%", background: submitting ? C.textMuted : formType === "proposal" ? C.accentBlue : C.navy,
                    color: C.white, border: "none", padding: "14px 24px", borderRadius: 8,
                    fontSize: 15, fontWeight: 700, fontFamily: C.font,
                    cursor: submitting ? "not-allowed" : "pointer",
                    minHeight: 48, opacity: submitting ? 0.7 : 1,
                  }}>
                    {submitting ? "Submitting…" : formType === "proposal" ? "Request Proposal" : "Schedule Consultation"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: C.navy, borderRadius: 12, padding: isMobile ? "24px" : "28px" }}>
              <h3 style={{ color: C.white, fontSize: 15, fontWeight: 700, marginBottom: 18 }}>Contact Details</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { href: "mailto:info@radcardhealth.com", icon: Mail, label: "Email", val: "info@radcardhealth.com" },
                  { href: "tel:+916302160253", icon: Phone, label: "Phone", val: "+91 6302 160 253" },
                ].map(({ href, icon: Icon, label, val }) => (
                  <a key={label} href={href} style={{ display: "flex", gap: 10, alignItems: "flex-start", textDecoration: "none" }}>
                    <Icon size={14} color={C.accentCyan} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>{label}</div>
                      <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}>{val}</div>
                    </div>
                  </a>
                ))}
                <a href="https://wa.me/916302160253" target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: 10, alignItems: "flex-start", textDecoration: "none" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={C.accentCyan} style={{ flexShrink: 0, marginTop: 2 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>WhatsApp</div>
                    <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}>+91 6302 160 253</div>
                  </div>
                </a>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <Clock size={14} color={C.accentCyan} style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>Response Time</div>
                    <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>Within 24 business hours</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ background: C.offWhite, border: `1px solid ${C.border}`, borderRadius: 10, padding: "18px 20px" }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 6 }}>
                <Globe2 size={13} color={C.textMuted} />
                <span style={{ color: C.textMuted, fontSize: 11, fontWeight: 600 }}>Markets Served</span>
              </div>
              <p style={{ color: C.textSec, fontSize: 12.5 }}>US · UK · EU · ME · AU · NZ · SG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
