import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const SERVICES = [
  { title: "Overflow Coverage", desc: "When your team hits peak capacity, we absorb the excess volume seamlessly — ensuring no study waits." },
  { title: "Night Coverage", desc: "Comprehensive after-hours preliminary reporting. Your worklist is clear every morning, without costly overnight rosters." },
  { title: "Weekend Coverage", desc: "Consistent reporting standards across weekends and public holidays without burdening your core team." },
  { title: "Capacity Expansion", desc: "Grow your reporting throughput to match clinical demand — without the overhead or timeline of a new hire." },
  { title: "Subspecialty Support", desc: "Trained subspecialty radiologists for complex cases in neuroradiology, MSK, body imaging, and more." },
  { title: "Workforce Augmentation", desc: "Augment your team during high-volume periods, planned leave, or sudden staff shortages with zero disruption." },
];

const OUTCOMES = [
  { value: "Faster", label: "Turnaround times" },
  { value: "Fewer", label: "Worklist backlogs" },
  { value: "Greater", label: "Team productivity" },
  { value: "Higher", label: "Operational efficiency" },
];

interface Props { onSchedule: () => void; }

export function PreliminaryReporting({ onSchedule }: Props) {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <section id="preliminary-reporting" style={{ background: C.navy, padding: isMobile ? "72px 24px" : "140px 40px", fontFamily: C.font, overflowX: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: isMobile ? 36 : 80 }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
            Preliminary Reporting
          </p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 80 }}>
            <h2 style={{
              fontSize: isMobile ? "clamp(24px, 7vw, 38px)" : "clamp(36px, 4.5vw, 60px)",
              fontWeight: 800, color: C.white, lineHeight: 1.05, letterSpacing: "-2px",
            }}>
              Preliminary reporting built for modern radiology practices.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 15 : 17, lineHeight: 1.72 }}>
                Helping organizations manage increasing demand without increasing staffing complexity.
                Every service is designed to integrate with your existing workflow.
              </p>
            </div>
          </div>
        </div>

        {/* Services — card grid on mobile, table on desktop */}
        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: "20px 20px",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                  <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 14, fontWeight: 800 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ color: C.white, fontSize: 14.5, fontWeight: 700 }}>{s.title}</h3>
                </div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            overflow: "hidden",
            marginBottom: 64,
          }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} style={{
                display: "grid",
                gridTemplateColumns: isTablet ? "200px 1fr" : "280px 1fr",
                gap: 32,
                padding: "26px 36px",
                borderBottom: i < SERVICES.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                alignItems: "start",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ color: "rgba(255,255,255,0.12)", fontSize: 16, fontWeight: 800, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ color: C.white, fontSize: 15, fontWeight: 700 }}>{s.title}</h3>
                </div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Outcomes */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: 0,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          marginBottom: 40,
        }}>
          {OUTCOMES.map((o, i) => (
            <div key={o.label} style={{
              padding: "24px 0",
              paddingRight: isMobile ? 12 : 24,
              marginRight: isMobile ? 12 : 24,
              borderRight: (isMobile ? i % 2 === 0 : i < OUTCOMES.length - 1) ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}>
              <div style={{ color: C.white, fontSize: isMobile ? 22 : 28, fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1, marginBottom: 5 }}>
                {o.value}
              </div>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11.5 }}>{o.label}</div>
            </div>
          ))}
        </div>

        <button onClick={onSchedule} style={{
          background: C.white, color: C.navy, border: "none",
          padding: "13px 28px", borderRadius: 8, fontSize: 14.5, fontWeight: 700,
          fontFamily: C.font, cursor: "pointer",
          width: isMobile ? "100%" : "auto",
        }}>
          Discuss Your Requirements
        </button>
      </div>
    </section>
  );
}
