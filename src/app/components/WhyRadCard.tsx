import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const FEATURES = [
  { title: "Global Workforce", desc: "A credentialed network of experienced radiologists across multiple continents. Reporting capacity is available 24/7, wherever you need it.", tag: "7 Markets" },
  { title: "Experienced Radiologists", desc: "Every radiologist in our network is board-certified, credentialed, and experienced in preliminary reporting to the clinical standards of your jurisdiction.", tag: "Board-Certified" },
  { title: "AI-Assisted Efficiency", desc: "AI-powered triage and prioritization augments our radiologist network — improving throughput and ensuring critical findings are escalated first.", tag: "AI-Powered" },
  { title: "Follow-the-Sun Coverage", desc: "Our geographically distributed network ensures reporting capacity is always available — aligned to your time zone and clinical demand patterns.", tag: "24/7/365" },
  { title: "Scalable Operations", desc: "Designed to scale with your organization — from absorbing overflow during peaks to supporting permanent capacity growth over time.", tag: "Elastic" },
  { title: "Capacity Expansion", desc: "Increase reporting output without the complexity of recruiting, onboarding, and managing additional permanent staff.", tag: "No Headcount" },
  { title: "Operational Support", desc: "Dedicated client operations support ensures smooth integration, transparent communication, and continuous performance monitoring.", tag: "Dedicated" },
  { title: "Quality Assurance", desc: "Multi-layer quality governance — structured peer review, clinical oversight, and comprehensive audit trails — on every report we deliver.", tag: "QA Verified" },
];

export function WhyRadCard() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? 1 : isTablet ? 2 : 2;

  return (
    <section style={{ background: C.offWhite, padding: isMobile ? "72px 24px" : "140px 40px", fontFamily: C.font }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Features: 2-column grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: 0,
        }}>
          {FEATURES.map((f, i) => {
            const colIndex = i % cols;
            const rowIndex = Math.floor(i / cols);
            const totalRows = Math.ceil(FEATURES.length / cols);
            const isLastRow = rowIndex === totalRows - 1;
            const isLastCol = colIndex === cols - 1;

            return (
              <div key={f.title} style={{
                padding: isMobile ? "24px 0" : "32px 40px 32px 0",
                paddingLeft: isMobile ? 0 : colIndex > 0 ? 40 : 0,
                borderBottom: isLastRow ? "none" : `1px solid ${C.border}`,
                borderRight: (!isMobile && !isLastCol) ? `1px solid ${C.border}` : "none",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
                  <h3 style={{ color: C.text, fontSize: isMobile ? 15 : 17, fontWeight: 700, flex: 1 }}>{f.title}</h3>
                  <span style={{
                    color: C.textMuted, fontSize: 10, fontWeight: 600,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    flexShrink: 0, background: C.lightGray,
                    padding: "2px 7px", borderRadius: 3,
                  }}>
                    {f.tag}
                  </span>
                </div>
                <p style={{ color: C.textSec, fontSize: isMobile ? 13.5 : 14, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
