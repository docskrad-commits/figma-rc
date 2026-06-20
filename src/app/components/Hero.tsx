import { useState, useEffect } from "react";
import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const WORKLIST = [
  { id: "CT-4821", type: "CT Chest", status: "AI Prioritized", dot: "#ef4444" },
  { id: "MR-3917", type: "MRI Brain", status: "In Review", dot: "#f59e0b" },
  { id: "CT-5203", type: "CT Abdomen", status: "Completed", dot: "#4ade80" },
  { id: "XR-7741", type: "Chest X-Ray", status: "In Review", dot: "#60a5fa" },
  { id: "CT-6119", type: "CT Head", status: "AI Prioritized", dot: "#ef4444" },
];

const ZONES = [
  { flag: "🇺🇸", city: "New York", time: "09:42 AM" },
  { flag: "🇬🇧", city: "London", time: "02:42 PM" },
  { flag: "🇦🇪", city: "Dubai", time: "05:42 PM" },
  { flag: "🇸🇬", city: "Singapore", time: "09:42 PM" },
  { flag: "🇦🇺", city: "Sydney", time: "11:42 PM" },
];

interface HeroProps { navigate: (page: string) => void; onSchedule: () => void; }

export function Hero({ navigate, onSchedule }: HeroProps) {
  const [active, setActive] = useState(0);
  const { isMobile, isTablet } = useBreakpoint();

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % WORKLIST.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{
      background: C.navy,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: 68,
      fontFamily: C.font,
      overflowX: "hidden",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "56px 24px 48px" : "80px 40px 72px", width: "100%", boxSizing: "border-box" }}>

        {/* Centered hero text */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? 48 : 72 }}>
          <p style={{
            color: "rgba(255,255,255,0.35)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24,
          }}>
            Teleradiology · Preliminary Reporting · Global Operations
          </p>

          <h1 style={{
            fontSize: isMobile ? "clamp(32px, 9vw, 48px)" : isTablet ? "clamp(40px, 6vw, 64px)" : "clamp(44px, 5.5vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.04,
            color: C.white,
            letterSpacing: isMobile ? "-1.5px" : "-3px",
            marginBottom: 24,
            maxWidth: 820,
            margin: "0 auto 24px",
          }}>
            Scale Your Radiology<br />Capacity Without<br />Expanding Headcount.
          </h1>

          <p style={{
            fontSize: isMobile ? 16 : 19,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.5)",
            maxWidth: isMobile ? "100%" : 560,
            margin: "0 auto 36px",
          }}>
            Teleradiology and preliminary reporting that helps radiology groups reduce turnaround times,
            alleviate workforce shortages, and improve operational efficiency through a global network
            of experienced radiologists.
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
            marginBottom: 56,
          }}>
            <button onClick={onSchedule} style={{
              background: C.white, color: C.navy, border: "none",
              padding: "13px 28px", borderRadius: 8,
              fontSize: 15, fontWeight: 700, fontFamily: C.font, cursor: "pointer",
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? 320 : "none",
            }}>
              Schedule Consultation
            </button>
            <button onClick={() => navigate("preliminary-reporting")} style={{
              background: "none", color: "rgba(255,255,255,0.65)", border: "none",
              padding: "13px 4px", fontSize: 15, fontFamily: C.font, cursor: "pointer",
              textDecoration: "underline", textUnderlineOffset: "3px",
              textDecorationColor: "rgba(255,255,255,0.25)",
            }}>
              Explore our services
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex",
            gap: 0,
            paddingTop: 36,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
            {[
              { value: "7", label: "Healthcare markets" },
              { value: "24/7", label: "Reporting coverage" },
              { value: "99.7%", label: "Report accuracy" },
              { value: "< 30 min", label: "Avg turnaround" },
            ].map((s, i) => (
              <div key={s.label} style={{
                paddingRight: isMobile ? 20 : 36,
                marginRight: isMobile ? 20 : 36,
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                textAlign: "center",
                marginBottom: 8,
              }}>
                <div style={{ color: C.white, fontSize: isMobile ? 22 : 28, fontWeight: 700, letterSpacing: "-1px", lineHeight: 1, marginBottom: 5 }}>
                  {s.value}
                </div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: isMobile ? 10 : 12 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operations Panel — hidden on mobile for clarity */}
        {!isMobile && (
          <div style={{
            background: "#050d18",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 12,
            overflow: "hidden",
          }}>
            <div style={{
              padding: "12px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ display: "flex", gap: 5 }}>
                  {[0, 1, 2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#333" }} />)}
                </div>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, letterSpacing: "0.08em", marginLeft: 8 }}>
                  Operations Center — RadCard Global
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80" }} />
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, fontWeight: 600 }}>LIVE</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr" }}>
              <div style={{ padding: "20px", borderRight: isTablet ? "none" : "1px solid rgba(255,255,255,0.06)", borderBottom: isTablet ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 9, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
                  AI-Prioritized Worklist
                </p>
                {WORKLIST.map((study, i) => (
                  <div key={study.id} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "7px 10px", borderRadius: 5, marginBottom: 3,
                    background: active === i ? "rgba(255,255,255,0.03)" : "transparent",
                    borderLeft: `2px solid ${active === i ? study.dot : "transparent"}`,
                    transition: "all 0.3s",
                  }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: study.dot, flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 600, flex: 1 }}>{study.type}</span>
                    <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 9 }}>{study.id}</span>
                    <span style={{ color: active === i ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)", fontSize: 9, fontWeight: 600 }}>
                      {study.status}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ padding: "20px" }}>
                <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 9, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
                  Follow-the-Sun Coverage
                </p>
                {ZONES.map((z, i) => (
                  <div key={z.city} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "7px 0",
                    borderBottom: i < ZONES.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <span style={{ fontSize: 11 }}>{z.flag}</span>
                      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>{z.city}</span>
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontWeight: 500 }}>{z.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              padding: "10px 20px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 9 }}>
                Teleradiology · Preliminary Reporting · 24/7/365
              </span>
              <div style={{ display: "flex", gap: 5 }}>
                {["US", "UK", "EU", "ME", "AU", "NZ", "SG"].map(c => (
                  <span key={c} style={{
                    color: "rgba(255,255,255,0.2)", fontSize: 8, fontWeight: 600,
                    border: "1px solid rgba(255,255,255,0.1)", padding: "1px 4px", borderRadius: 2,
                  }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
