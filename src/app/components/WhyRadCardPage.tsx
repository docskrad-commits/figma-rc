import { WhyRadCard } from "./WhyRadCard";
import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface Props { onSchedule: () => void; navigate: (page: string) => void; }

export function WhyRadCardPage({ onSchedule, navigate }: Props) {
  const { isMobile } = useBreakpoint();

  return (
    <div style={{ paddingTop: 68, fontFamily: C.font }}>
      {/* Hero — centered */}
      <div style={{ background: C.navy, padding: isMobile ? "72px 24px 64px" : "96px 40px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{
            color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20,
          }}>
            Why RadCard Global
          </p>
          <h1 style={{
            fontSize: isMobile ? "clamp(32px, 8vw, 48px)" : "clamp(36px, 5vw, 70px)",
            fontWeight: 900, color: C.white,
            lineHeight: 1.06, letterSpacing: "-2px",
            marginBottom: 20, maxWidth: 760, margin: "0 auto 20px",
          }}>
            Built for Enterprise Radiology.
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 16 : 18,
            lineHeight: 1.68, maxWidth: 520, margin: "0 auto 32px",
          }}>
            The radiology workforce partner for organizations that need to scale without compromise —
            not a technology product, a clinical operations partner.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={onSchedule} style={{
              background: C.white, color: C.navy, border: "none",
              padding: "12px 24px", borderRadius: 8, fontSize: 14.5, fontWeight: 700,
              fontFamily: C.font, cursor: "pointer",
            }}>
              Schedule Consultation
            </button>
            <button onClick={() => navigate("contact")} style={{
              background: "transparent", color: "rgba(255,255,255,0.75)",
              border: `1px solid rgba(255,255,255,0.2)`,
              padding: "12px 24px", borderRadius: 8, fontSize: 14.5, fontWeight: 600,
              fontFamily: C.font, cursor: "pointer",
            }}>
              Request Proposal
            </button>
          </div>
        </div>
      </div>

      <WhyRadCard />

      {/* CTA */}
      <div style={{ background: C.navy, padding: isMobile ? "64px 24px" : "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{
            color: C.white, fontSize: isMobile ? 26 : 32,
            fontWeight: 900, marginBottom: 14, letterSpacing: "-0.5px",
          }}>
            Ready to Work With Us?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, marginBottom: 28 }}>
            Speak with our team to understand how RadCard Global can support your radiology operations.
          </p>
          <button onClick={onSchedule} style={{
            background: C.white, color: C.navy, border: "none",
            padding: "12px 24px", borderRadius: 8, fontSize: 14.5, fontWeight: 700,
            fontFamily: C.font, cursor: "pointer",
          }}>
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
