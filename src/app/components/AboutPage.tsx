import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface Props { onSchedule: () => void; }

export function AboutPage({ onSchedule }: Props) {
  const { isMobile, isTablet } = useBreakpoint();
  return (
    <div style={{ background: C.white, paddingTop: 68, fontFamily: C.font }}>

      {/* Hero — centered */}
      <div style={{ background: C.navy, padding: isMobile ? "72px 24px 60px" : "96px 40px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 18 }}>
            About
          </p>
          <h1 style={{
            fontSize: isMobile ? "clamp(28px, 8vw, 46px)" : "clamp(36px, 5vw, 68px)",
            fontWeight: 900, color: C.white, lineHeight: 1.06, letterSpacing: "-2px",
            marginBottom: 18, maxWidth: 760, margin: "0 auto 18px",
          }}>
            Board-Certified Physician-Led Company.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 15 : 18, lineHeight: 1.68, maxWidth: 480, margin: "0 auto" }}>
            Building the future of global radiology operations.
          </p>
        </div>
      </div>

      {/* Company section */}
      <div style={{ padding: isMobile ? "56px 24px" : "100px 40px", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "start" }}>
          <div>
            <p style={{ color: C.textMuted, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 18 }}>Who We Are</p>
            <h2 style={{ color: C.text, fontSize: isMobile ? "clamp(22px, 6vw, 36px)" : "clamp(26px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 24 }}>
              A radiology workforce and capacity partner.
            </h2>
            <p style={{ color: C.textSec, fontSize: isMobile ? 14.5 : 16, lineHeight: 1.75, marginBottom: 16 }}>
              RadCard Global is a board-certified radiologist-led company focused on helping radiology groups, hospitals,
              imaging centers, and healthcare organizations improve turnaround times, increase reporting capacity, and enhance
              operational efficiency through preliminary reporting solutions.
            </p>
            <p style={{ color: C.textSec, fontSize: isMobile ? 14.5 : 16, lineHeight: 1.75, marginBottom: 16 }}>
              We are a teleradiology company specializing in preliminary reporting — helping radiology organizations
              scale their reporting operations without expanding headcount.
            </p>
            <p style={{ color: C.textSec, fontSize: isMobile ? 14.5 : 16, lineHeight: 1.75 }}>
              Our global network of experienced, board-certified radiologists delivers preliminary reports to the standards
              required in your jurisdiction — supporting your attending radiologists without replacing them.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: C.border, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ background: C.navy, padding: isMobile ? "28px 24px" : "36px 40px" }}>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Vision</p>
              <p style={{ color: C.white, fontSize: isMobile ? 15 : 17, fontWeight: 600, lineHeight: 1.55 }}>
                To become the world's most trusted preliminary radiology reporting partner.
              </p>
            </div>
            <div style={{ background: C.white, padding: isMobile ? "28px 24px" : "36px 40px" }}>
              <p style={{ color: C.textMuted, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Mission</p>
              <p style={{ color: C.text, fontSize: isMobile ? 15 : 17, fontWeight: 600, lineHeight: 1.55 }}>
                To reduce turnaround times, improve efficiency, and help healthcare organizations scale radiology operations.
              </p>
            </div>
            <div style={{ background: C.offWhite, padding: isMobile ? "28px 24px" : "36px 40px" }}>
              <p style={{ color: C.textMuted, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>What We Do</p>
              <p style={{ color: C.textSec, fontSize: isMobile ? 13.5 : 15, lineHeight: 1.65 }}>
                Teleradiology company providing preliminary reporting services. All preliminary reports are
                finalized by your attending radiologists. We extend your team's capacity, not replace it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core principles */}
      <div style={{ padding: isMobile ? "56px 24px" : "96px 40px", background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr", gap: isMobile ? 32 : 80, marginBottom: 48 }}>
            <div>
              <p style={{ color: C.textMuted, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Core Principles</p>
              <h2 style={{ color: C.text, fontSize: isMobile ? "clamp(22px, 6vw, 34px)" : "clamp(26px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                How we approach every engagement.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { title: "Quality First", desc: "Every preliminary report is governed by multi-layer quality assurance. We do not compromise on quality to gain speed." },
                { title: "Radiologist-Led", desc: "Led by board-certified radiologists who understand the clinical, operational, and workflow demands of modern radiology." },
                { title: "Globally Minded", desc: "Designed to serve radiology organizations across seven major healthcare markets with local standards and global capacity." },
                { title: "Operationally Transparent", desc: "Defined service levels, transparent performance reporting, and dedicated support on every engagement." },
              ].map((p, i, arr) => (
                <div key={p.title} style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "200px 1fr",
                  gap: isMobile ? 6 : 28,
                  padding: "22px 0",
                  borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : "none",
                  alignItems: "start",
                }}>
                  <h3 style={{ color: C.text, fontSize: 15, fontWeight: 700 }}>{p.title}</h3>
                  <p style={{ color: C.textSec, fontSize: 14, lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            background: C.offWhite, border: `1px solid ${C.border}`,
            borderRadius: 12, padding: isMobile ? "28px 24px" : "40px 48px",
            display: "flex", alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between", gap: 20, flexWrap: "wrap",
            flexDirection: isMobile ? "column" : "row",
          }}>
            <div>
              <p style={{ color: C.text, fontSize: isMobile ? 17 : 20, fontWeight: 700, marginBottom: 5, letterSpacing: "-0.3px" }}>
                Ready to discuss your radiology operations?
              </p>
              <p style={{ color: C.textMuted, fontSize: 13.5 }}>info@radcardhealth.com · +91 6302 160 253</p>
            </div>
            <button onClick={onSchedule} style={{
              background: C.navy, color: C.white, border: "none",
              padding: "12px 22px", borderRadius: 8, fontSize: 14, fontWeight: 700,
              fontFamily: C.font, cursor: "pointer",
              width: isMobile ? "100%" : "auto",
            }}>
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
