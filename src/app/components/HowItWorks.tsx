import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const STEPS = [
  { num: "01", title: "Study Received", desc: "Imaging studies are received via secure, encrypted integration with your existing PACS and RIS infrastructure. Zero workflow disruption.", detail: "DICOM · HL7 · API integration" },
  { num: "02", title: "AI Prioritization", desc: "Advanced AI triage algorithms assign priority classifications — ensuring STAT and urgent cases are escalated to the front of the queue automatically.", detail: "STAT triage · Smart queue management" },
  { num: "03", title: "Radiologist Preliminary Report", desc: "Board-certified, credentialed radiologists prepare structured, high-quality preliminary reports to the clinical standards required in your jurisdiction.", detail: "Structured reports · Subspecialty routing" },
  { num: "04", title: "Quality Review", desc: "Every report passes through a rigorous quality assurance layer — including peer review, structured governance checks, and comprehensive audit trail documentation.", detail: "Peer review · Clinical governance" },
  { num: "05", title: "Client Finalization", desc: "Preliminary reports are returned to your team for finalization by your attending radiologists — integrated directly into your existing workflow.", detail: "Seamless delivery · Radiologist oversight" },
];

export function HowItWorks() {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <section style={{ background: C.white, padding: isMobile ? "72px 24px" : "140px 40px", fontFamily: C.font, overflowX: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 20 : 80,
          marginBottom: isMobile ? 40 : 80,
        }}>
          <div>
            <p style={{ color: C.textMuted, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
              How It Works
            </p>
            <h2 style={{
              fontSize: isMobile ? "clamp(26px, 7vw, 40px)" : "clamp(36px, 4.5vw, 60px)",
              fontWeight: 800, color: C.text, lineHeight: 1.05, letterSpacing: "-2px",
            }}>
              A workflow built for enterprise radiology.
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ color: C.textSec, fontSize: isMobile ? 15 : 17, lineHeight: 1.72 }}>
              Five steps from study receipt to preliminary report delivery — designed to be invisible to your clinical team.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "60px 1fr" : isTablet ? "80px 1fr 1fr" : "100px 1fr 1fr",
              gap: isMobile ? 16 : 40,
              padding: isMobile ? "28px 0" : "44px 0",
              borderTop: `1px solid ${C.border}`,
              alignItems: "start",
            }}>
              {/* Step number */}
              <div style={{
                color: C.lightGray, fontSize: isMobile ? 32 : 52,
                fontWeight: 800, letterSpacing: "-2px", lineHeight: 1, paddingTop: 4,
              }}>
                {step.num}
              </div>

              {/* Title + desc */}
              <div>
                <h3 style={{ color: C.text, fontSize: isMobile ? 16 : 20, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.3px" }}>
                  {step.title}
                </h3>
                <p style={{ color: C.textSec, fontSize: isMobile ? 13.5 : 15, lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>

              {/* Detail — hidden on mobile */}
              {!isMobile && (
                <div style={{ display: "flex", alignItems: "flex-start", paddingTop: 4 }}>
                  <p style={{ color: C.textMuted, fontSize: 13, lineHeight: 1.65 }}>{step.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 32, marginTop: 0 }}>
          <p style={{ color: C.textMuted, fontSize: 13.5, maxWidth: 600 }}>
            All preliminary reports are provided for radiologist review and finalization only.
            RadCard Global does not issue final diagnostic reports.
          </p>
        </div>
      </div>
    </section>
  );
}
