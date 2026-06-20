import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface Props { onSchedule: () => void; }

export function FinalCTA({ onSchedule }: Props) {
  const { isMobile } = useBreakpoint();

  return (
    <section style={{ background: C.white, padding: isMobile ? "72px 24px" : "140px 40px", fontFamily: C.font, overflowX: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 48 : 80,
          alignItems: "center",
        }}>
          <div>
            <p style={{ color: C.textMuted, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24 }}>
              Get Started
            </p>
            <h2 style={{
              fontSize: isMobile ? "clamp(28px, 8vw, 48px)" : "clamp(40px, 5.5vw, 72px)",
              fontWeight: 900, color: C.text, lineHeight: 1.04,
              letterSpacing: isMobile ? "-1.5px" : "-3px", marginBottom: 20,
            }}>
              Ready to expand capacity without expanding headcount?
            </h2>
            <p style={{ color: C.textSec, fontSize: isMobile ? 15 : 18, lineHeight: 1.7, maxWidth: 480, marginBottom: 36 }}>
              Let's discuss how RadCard Global can support your radiology operations.
              We typically respond within 24 hours.
            </p>
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexDirection: isMobile ? "column" : "row", flexWrap: "wrap" }}>
              <button onClick={onSchedule} style={{
                background: C.navy, color: C.white, border: "none",
                padding: "14px 30px", borderRadius: 8,
                fontSize: 15, fontWeight: 700, fontFamily: C.font, cursor: "pointer",
                width: isMobile ? "100%" : "auto",
              }}>
                Schedule Consultation
              </button>
              <a href="mailto:info@radcardhealth.com" style={{
                color: C.accentBlue, fontSize: 15, fontWeight: 500,
                textDecoration: "underline", textUnderlineOffset: "3px",
                textAlign: "center",
              }}>
                Request Proposal
              </a>
            </div>
          </div>

          {/* Contact + stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: C.offWhite, border: `1px solid ${C.border}`, borderRadius: 12, padding: isMobile ? "24px" : "32px 36px" }}>
              <p style={{ color: C.textMuted, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                Direct Contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="mailto:info@radcardhealth.com" style={{ color: C.text, fontSize: 14.5, fontWeight: 600, textDecoration: "none" }}>
                  info@radcardhealth.com
                </a>
                <a href="tel:+916302160253" style={{ color: C.textSec, fontSize: 13.5, textDecoration: "none" }}>
                  +91 6302 160 253
                </a>
                <a href="https://wa.me/916302160253" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 6, color: "#166534", fontSize: 13.5, textDecoration: "none", fontWeight: 500 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#16a34a">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp: +91 6302 160 253
                </a>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.border, borderRadius: 10, overflow: "hidden" }}>
              {[
                { value: "7", label: "Markets served" },
                { value: "24/7", label: "Coverage" },
                { value: "99.7%", label: "Accuracy" },
                { value: "< 30 min", label: "Avg turnaround" },
              ].map((s) => (
                <div key={s.label} style={{ background: C.white, padding: isMobile ? "16px 18px" : "20px 24px" }}>
                  <div style={{ color: C.text, fontSize: isMobile ? 18 : 22, fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ color: C.textMuted, fontSize: 11, marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
