import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const ITEMS = [
  { title: "Quality Assurance", desc: "Multi-layer quality control across every preliminary report — from intake to delivery, with structured review checkpoints built into every workflow." },
  { title: "Peer Review", desc: "Systematic peer review processes ensure that report accuracy is validated by experienced colleagues before delivery to your team." },
  { title: "Structured Reporting", desc: "Consistent, structured report formats aligned to the clinical standards expected by your attending radiologists and the requirements of your jurisdiction." },
  { title: "Clinical Governance", desc: "Robust clinical governance frameworks ensure accountability, oversight, and continuous improvement across all reporting activity." },
  { title: "Workflow Monitoring", desc: "Real-time monitoring ensures performance standards are maintained and exceptions are identified and addressed immediately." },
  { title: "Auditability", desc: "Comprehensive audit trails for every study, every report, and every workflow touchpoint — providing full transparency and accountability." },
  { title: "Data Security", desc: "Enterprise-grade data security, encryption, and access controls ensure patient data is protected to the highest international standards." },
  { title: "Board-Certified Radiologists", desc: "Experienced radiologists with rigorous credential verification and quality-focused reporting standards — every radiologist in our network undergoes thorough background and credential verification." },
];

export function QualityCompliance() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? 1 : 2;

  return (
    <section id="quality" style={{ background: C.navy, padding: isMobile ? "72px 24px" : "140px 40px", fontFamily: C.font }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 24 : 80,
          marginBottom: isMobile ? 48 : 80,
        }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
              Quality & Compliance
            </p>
            <h2 style={{
              fontSize: isMobile ? "clamp(28px, 7vw, 44px)" : "clamp(36px, 4.5vw, 60px)",
              fontWeight: 800, color: C.white, lineHeight: 1.05, letterSpacing: "-2px",
            }}>
              Quality without compromise.
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: isMobile ? "flex-start" : "flex-end" }}>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 15 : 17, lineHeight: 1.72 }}>
              Quality is not a feature — it is the foundation. Every report, every workflow, every engagement
              is governed by the same rigorous standards.
            </p>
          </div>
        </div>

        {/* Items grid */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 0 }}>
          {ITEMS.map((item, i) => {
            const colIndex = i % cols;
            const rowIndex = Math.floor(i / cols);
            const totalRows = Math.ceil(ITEMS.length / cols);
            const isLastRow = rowIndex === totalRows - 1;
            const isLastCol = colIndex === cols - 1;

            return (
              <div key={item.title} style={{
                padding: isMobile ? "24px 0" : "32px 40px 32px 0",
                paddingLeft: (!isMobile && colIndex > 0) ? 40 : 0,
                borderBottom: isLastRow ? "none" : "1px solid rgba(255,255,255,0.07)",
                borderRight: (!isMobile && !isLastCol) ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <h3 style={{ color: C.white, fontSize: isMobile ? 15 : 16, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.1px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.42)", fontSize: isMobile ? 13.5 : 14, lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statement */}
        <div style={{
          marginTop: isMobile ? 48 : 72,
          paddingTop: isMobile ? 32 : 48,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 20 : 80,
          alignItems: "center",
        }}>
          <p style={{ color: C.white, fontSize: isMobile ? 18 : 22, fontWeight: 700, letterSpacing: "-0.3px", lineHeight: 1.4 }}>
            Our governance frameworks deliver reports your attending radiologists can trust — every time.
          </p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: isMobile ? 13 : 14, lineHeight: 1.7 }}>
            Every engagement includes defined service level standards, transparent performance reporting, and a dedicated client operations contact to manage your account.
          </p>
        </div>
      </div>
    </section>
  );
}
