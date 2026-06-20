import { Solution } from "./Solution";
import { WhyRadCard } from "./WhyRadCard";
import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface Props { onSchedule: () => void; navigate: (page: string) => void; }

export function SolutionsPage({ onSchedule, navigate }: Props) {
  const { isMobile } = useBreakpoint();
  return (
    <div style={{ paddingTop: 68, fontFamily: C.font }}>
      <div style={{ background: C.navy, padding: isMobile ? "72px 24px 60px" : "96px 40px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 18 }}>
            Solutions
          </p>
          <h1 style={{
            fontSize: isMobile ? "clamp(28px, 8vw, 46px)" : "clamp(36px, 5vw, 68px)",
            fontWeight: 900, color: C.white, lineHeight: 1.06, letterSpacing: "-2px",
            marginBottom: 18, maxWidth: 760, margin: "0 auto 18px",
          }}>
            Smarter Ways to Scale Preliminary Radiology Reporting Operations
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 15 : 18, lineHeight: 1.68, maxWidth: 520, margin: "0 auto" }}>
            Purpose-built teleradiology and preliminary radiology reporting solutions that give radiology organizations the capacity they need.
          </p>
        </div>
      </div>
      <Solution onSchedule={onSchedule} navigate={navigate} />
      <WhyRadCard />
      <div style={{ background: C.offWhite, padding: isMobile ? "64px 24px" : "80px 40px", borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ color: C.text, fontSize: isMobile ? 24 : 30, fontWeight: 900, marginBottom: 12, letterSpacing: "-0.5px" }}>
            Find the Right Solution
          </h2>
          <p style={{ color: C.textSec, fontSize: 14.5, marginBottom: 24 }}>
            Speak with our team to understand which services best match your operational needs.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", alignItems: "center" }}>
            <button onClick={onSchedule} style={{ background: C.navy, color: C.white, border: "none", padding: "12px 24px", borderRadius: 8, fontSize: 14.5, fontWeight: 700, fontFamily: C.font, cursor: "pointer", width: isMobile ? "100%" : "auto", maxWidth: 320 }}>
              Schedule Consultation
            </button>
            <button onClick={() => navigate("contact")} style={{ background: "transparent", color: C.navy, border: `1px solid ${C.border}`, padding: "12px 24px", borderRadius: 8, fontSize: 14.5, fontWeight: 600, fontFamily: C.font, cursor: "pointer", width: isMobile ? "100%" : "auto", maxWidth: 320 }}>
              Request Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
