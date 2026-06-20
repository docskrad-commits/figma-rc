import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const SERVICES = [
  { num: "01", title: "Overflow Support", desc: "Absorb excess volume when your team hits capacity — no study sits unread during peak periods." },
  { num: "02", title: "Overnight Coverage", desc: "24/7 after-hours reporting for practices that need consistent support without costly in-house overnight rosters." },
  { num: "03", title: "Capacity Expansion", desc: "Scale your reporting throughput to match clinical demand — without the overhead of additional permanent hires." },
  { num: "04", title: "Subspecialty Support", desc: "Access experienced subspecialty-trained radiologists for complex cases across neuro, MSK, body, and more." },
  { num: "05", title: "Workforce Augmentation", desc: "Supplement your existing team during high-volume periods, planned leave, or unexpected staff shortages." },
  { num: "06", title: "AI-Enhanced Workflows", desc: "AI-powered triage ensures critical studies are identified and escalated first — improving throughput for everyone." },
];

const OUTCOMES = [
  "Increase reporting capacity", "Reduce worklist backlogs",
  "Improve team productivity", "Reduce turnaround times",
  "Support existing teams", "Improve operational efficiency",
];

interface Props { onSchedule: () => void; navigate: (p: string) => void; }

export function Solution({ onSchedule, navigate }: Props) {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <section id="solutions" style={{ background: C.navy, padding: isMobile ? "72px 24px" : "140px 40px", fontFamily: C.font, overflowX: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 20 : 80,
          marginBottom: isMobile ? 40 : 80,
        }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
              The Solution
            </p>
            <h2 style={{
              fontSize: isMobile ? "clamp(26px, 7vw, 40px)" : "clamp(36px, 4.5vw, 60px)",
              fontWeight: 800, color: C.white, lineHeight: 1.05, letterSpacing: "-2px",
            }}>
              A smarter way to scale radiology operations.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 16 }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 15 : 17, lineHeight: 1.7 }}>
              Expand reporting capacity without expanding headcount.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 10px" }}>
              {OUTCOMES.map((o, i) => (
                <span key={o} style={{ color: "rgba(255,255,255,0.3)", fontSize: 12.5 }}>
                  {o}{i < OUTCOMES.length - 1 ? " ·" : ""}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 0 }}>
          {SERVICES.map((s, i) => {
            const colIndex = i % cols;
            const rowIndex = Math.floor(i / cols);
            const totalRows = Math.ceil(SERVICES.length / cols);
            const isLastRow = rowIndex === totalRows - 1;
            const isLastCol = colIndex === cols - 1;

            return (
              <div key={s.num} style={{
                padding: isMobile ? "24px 0" : "36px",
                paddingLeft: (!isMobile && colIndex === 0) ? 0 : isMobile ? 0 : 36,
                paddingRight: (!isMobile && isLastCol) ? 0 : isMobile ? 0 : 36,
                borderTop: "1px solid rgba(255,255,255,0.07)",
                borderRight: (!isMobile && !isLastCol) ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <div style={{ color: "rgba(255,255,255,0.12)", fontSize: isMobile ? 28 : 40, fontWeight: 800, letterSpacing: "-2px", lineHeight: 1, marginBottom: 16 }}>
                  {s.num}
                </div>
                <h3 style={{ color: C.white, fontSize: isMobile ? 15 : 17, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.2px" }}>
                  {s.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: isMobile ? 13.5 : 14, lineHeight: 1.65 }}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div style={{
          marginTop: isMobile ? 48 : 80,
          paddingTop: isMobile ? 32 : 48,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: 20,
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
        }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, maxWidth: 480 }}>
            Each service integrates with your existing workflow with minimal disruption.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={onSchedule} style={{
              background: C.white, color: C.navy, border: "none",
              padding: "11px 22px", borderRadius: 7, fontSize: 14, fontWeight: 700,
              fontFamily: C.font, cursor: "pointer",
            }}>
              Schedule Consultation
            </button>
            <button onClick={() => navigate("solutions")} style={{
              background: "none", color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "11px 22px", borderRadius: 7, fontSize: 14,
              fontFamily: C.font, cursor: "pointer",
            }}>
              View All Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
