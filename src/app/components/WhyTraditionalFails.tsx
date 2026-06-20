import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const ROWS = [
  { label: "Time to deploy capacity", traditional: "12–18 months", radcard: "Days to weeks" },
  { label: "Cost structure", traditional: "Fixed salary + benefits + overhead", radcard: "Variable and scalable" },
  { label: "Overnight / weekend coverage", traditional: "Difficult and expensive to roster", radcard: "Follow-the-Sun, 24/7 by design" },
  { label: "Scalability", traditional: "Fixed headcount ceiling", radcard: "Elastic — scale up or down" },
  { label: "Staffing risk", traditional: "Resignation, illness, burnout exposure", radcard: "Distributed, risk-mitigated network" },
];

export function WhyTraditionalFails() {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <section style={{ background: C.offWhite, padding: isMobile ? "72px 24px" : "140px 40px", fontFamily: C.font, overflowX: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: isMobile ? 40 : 72 }}>
          <p style={{ color: C.textMuted, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
            The Hiring Problem
          </p>
          <h2 style={{
            fontSize: isMobile ? "clamp(26px, 7vw, 40px)" : "clamp(36px, 4.5vw, 60px)",
            fontWeight: 800, color: C.text, lineHeight: 1.05, letterSpacing: "-2px", maxWidth: 800,
          }}>
            The demand for radiology continues to outpace workforce growth.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "start" }}>

          {/* Left: prose + comparison */}
          <div>
            <p style={{ fontSize: isMobile ? 15 : 17, color: C.textSec, lineHeight: 1.72, marginBottom: 32 }}>
              Traditional hiring cycles cannot keep pace with the speed, scale, and complexity of modern radiology demand.
              By the time a new radiologist completes onboarding, the backlog has grown considerably deeper.
            </p>

            {/* Comparison table */}
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1.2fr", background: C.navy, padding: "10px 16px" }}>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Factor</span>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Traditional</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>RadCard</span>
              </div>
              {ROWS.map((row, i) => (
                <div key={row.label} style={{
                  display: "grid", gridTemplateColumns: "2fr 1.2fr 1.2fr",
                  padding: "12px 16px",
                  borderBottom: i < ROWS.length - 1 ? `1px solid ${C.border}` : "none",
                  background: i % 2 === 0 ? C.white : C.offWhite,
                  gap: 8, alignItems: "start",
                }}>
                  <span style={{ color: C.text, fontSize: 12, fontWeight: 600, lineHeight: 1.4 }}>{row.label}</span>
                  <span style={{ color: C.textMuted, fontSize: 11.5, lineHeight: 1.4 }}>{row.traditional}</span>
                  <span style={{ color: "#166534", fontSize: 11.5, fontWeight: 600, lineHeight: 1.4 }}>{row.radcard}</span>
                </div>
              ))}
            </div>

            {/* Key indicators */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 16 }}>
              {[
                { value: "12–18 mo", note: "Typical specialist recruitment cycle" },
                { value: "Rising", note: "Locum rate trajectory" },
                { value: "3× cost", note: "Overnight roster premium" },
                { value: "Growing", note: "Burnout rate across the profession" },
              ].map(s => (
                <div key={s.note} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 8, padding: "14px 16px" }}>
                  <div style={{ color: C.text, fontSize: 17, fontWeight: 800, letterSpacing: "-0.3px", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ color: C.textMuted, fontSize: 11, marginTop: 4 }}>{s.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: chart */}
          <div>
            <div style={{ background: C.navy, borderRadius: 12, padding: isMobile ? "28px 20px" : "40px", marginBottom: 0 }}>
              <h3 style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                Imaging Demand vs. Radiologist Workforce Capacity
              </h3>
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, lineHeight: 1.55, marginBottom: 28 }}>
                Conceptual illustration — widening gap over time. Not based on specific statistical claims.
              </p>

              <div style={{ position: "relative", height: 160 }}>
                <svg width="100%" height="100%" viewBox="0 0 400 160" preserveAspectRatio="xMidYMid meet">
                  {[36, 72, 108, 144].map(y => (
                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  ))}
                  <path d="M 0,148 C 80,140 160,115 240,82 C 310,55 360,30 400,12"
                    stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M 0,148 C 80,140 160,115 240,82 C 310,55 360,30 400,12 L 400,160 L 0,160 Z"
                    fill="rgba(255,255,255,0.04)" />
                  <path d="M 0,143 C 100,140 200,136 300,132 C 360,130 390,128 400,126"
                    stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="5,3" />
                </svg>
                <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", bottom: -20, left: 0, right: 0 }}>
                  {["2020", "2022", "2024", "2026", "2028*"].map(y => (
                    <span key={y} style={{ color: "rgba(255,255,255,0.2)", fontSize: 9 }}>{y}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <div style={{ width: 14, height: 1.5, background: "rgba(255,255,255,0.7)" }} />
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>Imaging Demand</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <div style={{ width: 14, height: 1.5, background: "rgba(255,255,255,0.25)", borderTop: "1px dashed rgba(255,255,255,0.25)" }} />
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>Radiologist Capacity</span>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.15)", fontSize: 10, marginTop: 12 }}>
                * Illustrative trend only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
