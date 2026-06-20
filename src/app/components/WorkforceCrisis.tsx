import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const CHALLENGES = [
  { title: "Radiologist Shortages", desc: "The global workforce cannot keep pace with growing demand. Critical staffing gaps are widening, not closing." },
  { title: "Growing Imaging Volumes", desc: "Clinical advances continue to drive significant growth in imaging orders, placing unsustainable strain on reporting capacity." },
  { title: "Worklist Backlogs", desc: "Unread studies accumulate faster than teams can report them, creating delays and exposing practices to operational risk." },
  { title: "Burnout", desc: "Constant high volume under time pressure is accelerating burnout and driving early retirement across the profession." },
  { title: "Overnight Coverage Challenges", desc: "24/7 coverage demands significant resources. Overnight and weekend rosters are the hardest and most expensive to fill." },
  { title: "Recruiting Difficulties", desc: "Finding qualified radiologists is a lengthy, competitive, and increasingly costly process — with no guarantee of retention." },
  { title: "Rising Staffing Costs", desc: "Radiologist compensation continues to escalate as demand outstrips supply. Locum rates have reached record highs." },
  { title: "Turnaround Time Pressure", desc: "Referring clinicians demand faster turnaround while workforce constraints make meeting those expectations increasingly difficult." },
  { title: "Capacity Constraints", desc: "Practices face a fundamental ceiling on reporting throughput, limiting growth and competitive positioning." },
];

export function WorkforceCrisis() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <section style={{ background: C.white, padding: isMobile ? "72px 24px" : "140px 40px", fontFamily: C.font, overflowX: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 20 : 80,
          marginBottom: isMobile ? 48 : 96,
        }}>
          <div>
            <p style={{ color: C.textMuted, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
              The Workforce Crisis
            </p>
            <h2 style={{
              fontSize: isMobile ? "clamp(26px, 7vw, 40px)" : "clamp(36px, 4.5vw, 60px)",
              fontWeight: 800, color: C.text, lineHeight: 1.05, letterSpacing: "-2px",
            }}>
              Radiology practices are being asked to do more with less.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <p style={{ fontSize: isMobile ? 15 : 18, color: C.textSec, lineHeight: 1.72, marginBottom: 24 }}>
              Growing imaging demand, radiologist shortages, increasing turnaround expectations, and workforce burnout
              are placing unprecedented pressure on radiology organizations worldwide.
            </p>
            <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
              {[
                { v: "9", l: "Compounding pressures" },
                { v: "↑", l: "Demand trajectory" },
                { v: "↓", l: "Workforce growth" },
              ].map((s, i) => (
                <div key={s.l} style={{
                  paddingRight: 20, marginRight: 20,
                  borderRight: i < 2 ? `1px solid ${C.border}` : "none",
                  marginBottom: 8,
                }}>
                  <div style={{ color: C.text, fontSize: isMobile ? 26 : 36, fontWeight: 800, letterSpacing: "-1px", lineHeight: 1 }}>{s.v}</div>
                  <div style={{ color: C.textMuted, fontSize: 10, marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges grid */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 0 }}>
          {CHALLENGES.map((item, i) => {
            const colIndex = i % cols;
            const rowIndex = Math.floor(i / cols);
            const totalRows = Math.ceil(CHALLENGES.length / cols);
            const isLastRow = rowIndex === totalRows - 1;
            const isLastCol = colIndex === cols - 1;

            return (
              <div key={item.title} style={{
                padding: isMobile ? "22px 0" : "32px 36px 32px 0",
                paddingLeft: (!isMobile && colIndex > 0) ? 36 : 0,
                borderBottom: isLastRow ? "none" : `1px solid ${C.border}`,
                borderRight: (!isMobile && !isLastCol) ? `1px solid ${C.border}` : "none",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
                  <span style={{ color: C.lightGray, fontSize: isMobile ? 20 : 26, fontWeight: 800, letterSpacing: "-1px", lineHeight: 1, minWidth: 28, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ color: C.text, fontSize: isMobile ? 14.5 : 16, fontWeight: 700, lineHeight: 1.2 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: C.textSec, fontSize: isMobile ? 13 : 13.5, lineHeight: 1.65, marginLeft: isMobile ? 0 : 40 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div style={{
          display: "flex", alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          marginTop: isMobile ? 48 : 72,
          paddingTop: isMobile ? 32 : 48,
          borderTop: `1px solid ${C.border}`,
          gap: 24,
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
        }}>
          <p style={{ color: C.text, fontSize: isMobile ? 17 : 22, fontWeight: 700, letterSpacing: "-0.3px", maxWidth: 480, lineHeight: 1.4 }}>
            These challenges are structural — not temporary. The organizations that scale intelligently today will define the future of radiology.
          </p>
          <p style={{ color: C.textMuted, fontSize: 13.5, maxWidth: 280, lineHeight: 1.6 }}>
            RadCard Global helps you scale reporting capacity without waiting for the market to correct itself.
          </p>
        </div>
      </div>
    </section>
  );
}
