import { QualityCompliance } from "./QualityCompliance";
import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface Props { onSchedule: () => void; }

export function QualityPage({ onSchedule }: Props) {
  const { isMobile } = useBreakpoint();
  return (
    <div style={{ paddingTop: 68, fontFamily: C.font }}>
      <div style={{ background: C.navy, padding: isMobile ? "72px 24px 60px" : "96px 40px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 18 }}>
            Quality & Compliance
          </p>
          <h1 style={{
            fontSize: isMobile ? "clamp(28px, 8vw, 46px)" : "clamp(36px, 5vw, 68px)",
            fontWeight: 900, color: C.white, lineHeight: 1.06, letterSpacing: "-2px",
            marginBottom: 18, maxWidth: 700, margin: "0 auto 18px",
          }}>
            Quality Without Compromise
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 15 : 18, lineHeight: 1.68, maxWidth: 540, margin: "0 auto" }}>
            Every report, every workflow, every engagement is governed by the same rigorous standards.
          </p>
        </div>
      </div>
      <QualityCompliance />
      <div style={{ background: C.offWhite, padding: isMobile ? "64px 24px" : "80px 40px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 560, marginBottom: 40 }}>
            <p style={{ color: C.textMuted, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Our Quality Process</p>
            <h2 style={{ color: C.text, fontSize: isMobile ? 24 : 28, fontWeight: 800, marginBottom: 12, letterSpacing: "-0.3px" }}>Every report. Every time.</h2>
            <p style={{ color: C.textSec, fontSize: 14.5, lineHeight: 1.72 }}>Every preliminary report passes through a defined quality process before delivery.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 14 }}>
            {[
              { step: "01", title: "Intake Verification", desc: "Studies verified on intake with AI-assisted triage to flag priority cases." },
              { step: "02", title: "Radiologist Review", desc: "Board-certified radiologists review each study to the required clinical standard." },
              { step: "03", title: "Peer Review", desc: "Completed reports undergo structured peer review before delivery." },
              { step: "04", title: "Audit & Documentation", desc: "Full audit trails maintained for every study, report, and workflow touchpoint." },
            ].map(item => (
              <div key={item.step} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, padding: isMobile ? "18px 16px" : "24px 22px" }}>
                <div style={{ color: C.navy, fontSize: isMobile ? 24 : 32, fontWeight: 900, opacity: 0.08, lineHeight: 1, marginBottom: 10 }}>{item.step}</div>
                <h3 style={{ color: C.text, fontSize: isMobile ? 13 : 15, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ color: C.textSec, fontSize: isMobile ? 12 : 13, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: C.navy, padding: isMobile ? "60px 24px" : "72px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ color: C.white, fontSize: isMobile ? 24 : 28, fontWeight: 900, marginBottom: 12 }}>Questions About Our Quality Standards?</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14.5, marginBottom: 24 }}>Speak with our team to discuss how our quality framework supports your clinical governance requirements.</p>
          <button onClick={onSchedule} style={{ background: C.white, color: C.navy, border: "none", padding: "12px 24px", borderRadius: 8, fontSize: 14.5, fontWeight: 700, fontFamily: C.font, cursor: "pointer", width: isMobile ? "100%" : "auto" }}>
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
