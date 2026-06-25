import { useState } from "react";
import { X } from "lucide-react";
import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const ROLES = ["Managing Partner", "Medical Director", "Chief Radiologist", "Practice Administrator", "COO", "CEO", "Operations Leader", "Other"];
const COUNTRIES = ["United States", "United Kingdom", "Australia", "New Zealand", "Germany", "France", "Netherlands", "UAE", "Saudi Arabia", "Qatar", "Singapore", "Other"];
const CHALLENGES = ["Overflow / Peak Volume", "Overnight Coverage", "Weekend Coverage", "Workforce Shortages", "Burnout", "Turnaround Times", "Subspecialty Support", "Cost Reduction", "Other"];
const VOLUMES = ["< 500 / month", "500 – 2,000 / month", "2,000 – 5,000 / month", "5,000 – 10,000 / month", "> 10,000 / month", "Unsure"];

interface Props { onClose: () => void; }

export function ConsultationForm({ onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formType, setFormType] = useState<"consultation" | "proposal">("consultation");
  const [form, setForm] = useState({
    name: "", organization: "", role: "", country: "",
    email: "", phone: "", challenge: "", volume: "", message: "",
  });
  const { isMobile } = useBreakpoint();

  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const iStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px",
    border: `1px solid ${C.border}`, borderRadius: 7,
    fontSize: 14, fontFamily: C.font,
    color: C.text, background: C.white,
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
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(7,15,29,0.75)",
        display: "flex", alignItems: isMobile ? "flex-end" : "center",
        justifyContent: "center", padding: isMobile ? 0 : "20px",
        overflowY: "auto",
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: C.white,
        borderRadius: isMobile ? "16px 16px 0 0" : 12,
        width: "100%",
        maxWidth: isMobile ? "100%" : 640,
        maxHeight: isMobile ? "95vh" : "90vh",
        overflowY: "auto",
        boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
        fontFamily: C.font,
      }}>
        {/* Header */}
        <div style={{
          padding: "24px 24px 20px",
          borderBottom: `1px solid ${C.border}`,
          position: "sticky", top: 0, background: C.white, zIndex: 2,
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        }}>
          <div>
            <h2 style={{ color: C.text, fontSize: 18, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 3 }}>
              {submitted ? "Request Received" : "Start the Conversation"}
            </h2>
            {!submitted && (
              <p style={{ color: C.textMuted, fontSize: 12.5 }}>We typically respond within 24 business hours.</p>
            )}
          </div>
          <button onClick={onClose} style={{
            background: C.offWhite, border: `1px solid ${C.border}`,
            borderRadius: 6, padding: "6px 7px", cursor: "pointer",
            display: "flex", alignItems: "center", marginLeft: 12, flexShrink: 0,
            minWidth: 32, minHeight: 32,
          }}>
            <X size={16} color={C.textMuted} />
          </button>
        </div>

        {/* Success */}
        {submitted ? (
          <div style={{ padding: "48px 24px", textAlign: "center" }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%",
              background: "#f0fdf4", border: "1px solid #bbf7d0",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ color: C.text, fontSize: 19, fontWeight: 800, marginBottom: 10 }}>We've received your request.</h3>
            <p style={{ color: C.textSec, fontSize: 14.5, lineHeight: 1.7, maxWidth: 360, margin: "0 auto 20px" }}>
              A member of our team will reach out within 24 hours to schedule your consultation.
            </p>
            <p style={{ color: C.textMuted, fontSize: 12.5, marginBottom: 24 }}>
              Urgent?{" "}
              <a href="mailto:info@radcardhealth.com" style={{ color: C.accentBlue }}>info@radcardhealth.com</a>
              {" "}or{" "}
              <a href="tel:+916302160253" style={{ color: C.accentBlue }}>+91 6302 160 253</a>
            </p>
            <button onClick={onClose} style={{
              background: C.navy, color: C.white, border: "none",
              padding: "12px 24px", borderRadius: 7, fontSize: 14,
              fontWeight: 600, fontFamily: C.font, cursor: "pointer",
              width: isMobile ? "100%" : "auto",
            }}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: "20px 24px 28px" }}>
            {/* Type toggle */}
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {([ ["consultation", "Schedule Consultation"], ["proposal", "Request Proposal"] ] as const).map(([v, l]) => (
                <button key={v} type="button" onClick={() => setFormType(v)} style={{
                  flex: 1, padding: "10px 8px",
                  borderRadius: 6,
                  border: formType === v ? `1px solid ${C.navy}` : `1px solid ${C.border}`,
                  background: formType === v ? C.navy : C.offWhite,
                  color: formType === v ? C.white : C.textSec,
                  fontFamily: C.font, fontSize: 13.5,
                  fontWeight: formType === v ? 700 : 500,
                  cursor: "pointer",
                  minHeight: 44,
                }}>
                  {l}
                </button>
              ))}
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 12,
            }}>
              {[
                { k: "name", l: "Full Name *", p: "Dr. Jane Smith", t: "text", req: true },
                { k: "organization", l: "Organization *", p: "Your practice or health system", t: "text", req: true },
                { k: "email", l: "Email Address *", p: "you@yourpractice.com", t: "email", req: true },
                { k: "phone", l: "Phone Number", p: "+1 (555) 000-0000", t: "tel", req: false },
              ].map(f => (
                <div key={f.k}>
                  <label style={{ display: "block", color: C.text, fontSize: 12.5, fontWeight: 600, marginBottom: 5 }}>{f.l}</label>
                  <input
                    required={f.req} type={f.t} style={iStyle}
                    name={f.k}
                    placeholder={f.p}
                    value={(form as Record<string, string>)[f.k]}
                    onChange={e => set(f.k, e.target.value)}
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
                  <select
                    required={f.req} style={{ ...iStyle, cursor: "pointer" }}
                    name={f.k}
                    value={(form as Record<string, string>)[f.k]}
                    onChange={e => set(f.k, e.target.value)}
                    onFocus={e => { (e.target as HTMLElement).style.borderColor = C.navy; }}
                    onBlur={e => { (e.target as HTMLElement).style.borderColor = C.border; }}
                  >
                    <option value="">Select</option>
                    {f.opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 12 }}>
              <label style={{ display: "block", color: C.text, fontSize: 12.5, fontWeight: 600, marginBottom: 5 }}>Message</label>
              <textarea
                name="message"
                style={{ ...iStyle, height: 88, resize: "vertical" }}
                placeholder="Tell us about your operations..."
                value={form.message}
                onChange={e => set("message", e.target.value)}
                onFocus={e => { (e.target as HTMLElement).style.borderColor = C.navy; }}
                onBlur={e => { (e.target as HTMLElement).style.borderColor = C.border; }}
              />
            </div>

            {error && (
              <p style={{ marginTop: 10, color: "#dc2626", fontSize: 13, lineHeight: 1.5 }}>{error}</p>
            )}

            <div style={{ marginTop: 16, display: "flex", gap: 12, alignItems: "center", flexDirection: isMobile ? "column" : "row" }}>
              <button type="submit" disabled={submitting} style={{
                flex: isMobile ? undefined : 1,
                width: isMobile ? "100%" : "auto",
                background: submitting ? C.textMuted : C.navy, color: C.white, border: "none",
                padding: "13px 24px", borderRadius: 7,
                fontSize: 15, fontWeight: 700, fontFamily: C.font,
                cursor: submitting ? "not-allowed" : "pointer",
                minHeight: 48,
                opacity: submitting ? 0.7 : 1,
              }}>
                {submitting ? "Submitting…" : formType === "proposal" ? "Request Proposal" : "Schedule Consultation"}
              </button>
              {!isMobile && (
                <p style={{ color: C.textMuted, fontSize: 11, maxWidth: 180, lineHeight: 1.5 }}>
                  We respond within 24 business hours.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
