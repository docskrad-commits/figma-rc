import { useState } from "react";
import { Clock, Globe2 } from "lucide-react";
import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const MARKETS = [
  { flag: "🇺🇸", country: "United States", code: "US", desc: "Supporting U.S. radiology groups, health systems, and imaging networks with scalable overflow and overnight reporting.", timezone: "EST · CST · PST" },
  { flag: "🇬🇧", country: "United Kingdom", code: "UK", desc: "Partnering with NHS trusts, independent providers, and teleradiology companies across England, Scotland, Wales, and Northern Ireland.", timezone: "GMT · BST" },
  { flag: "🇪🇺", country: "Europe", code: "EU", desc: "Delivering scalable reporting across the EU — DACH, Benelux, Nordics, and Southern Europe — aligned to local clinical standards.", timezone: "CET · CEST" },
  { flag: "🌍", country: "Middle East", code: "ME", desc: "Supporting healthcare transformation in the UAE, Saudi Arabia, Qatar, and emerging markets across the Gulf region.", timezone: "GST · AST" },
  { flag: "🇦🇺", country: "Australia", code: "AU", desc: "Helping Australian practices navigate volume growth, rural coverage gaps, and overnight reporting demands.", timezone: "AEST · AWST" },
  { flag: "🇳🇿", country: "New Zealand", code: "NZ", desc: "Providing scalable preliminary reporting support to NZ practices managing demand pressures and specialist shortages.", timezone: "NZST · NZDT" },
  { flag: "🇸🇬", country: "Singapore", code: "SG", desc: "Serving Singapore's leading healthcare institutions with high-quality, technology-enabled preliminary reporting support.", timezone: "SGT" },
];

const SERVICES = ["Overflow Coverage", "Overnight Reporting", "Weekend Coverage", "Capacity Expansion", "Subspecialty Support"];

interface Props { navigate: (page: string) => void; }

export function GlobalCoverage({ navigate }: Props) {
  const [active, setActive] = useState(0);
  const { isMobile, isTablet } = useBreakpoint();
  const m = MARKETS[active];

  return (
    <section id="regions" style={{ background: C.white, padding: isMobile ? "72px 24px" : "140px 40px", fontFamily: C.font, overflowX: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 20 : 80,
          marginBottom: isMobile ? 36 : 64,
        }}>
          <div>
            <p style={{ color: C.textMuted, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
              Global Coverage
            </p>
            <h2 style={{
              fontSize: isMobile ? "clamp(26px, 7vw, 40px)" : "clamp(36px, 4.5vw, 60px)",
              fontWeight: 800, color: C.text, lineHeight: 1.05, letterSpacing: "-2px",
            }}>
              Seven healthcare markets. One reporting partner.
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ color: C.textSec, fontSize: isMobile ? 15 : 17, lineHeight: 1.72 }}>
              Global Workforce. Local Standards. Follow-the-Sun Coverage.
            </p>
          </div>
        </div>

        {/* Tab row — scrollable */}
        <div style={{
          display: "flex",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          borderBottom: `1px solid ${C.border}`,
          marginBottom: 0,
          gap: 0,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}>
          {MARKETS.map((market, i) => (
            <button key={market.country} onClick={() => setActive(i)} style={{
              padding: isMobile ? "10px 14px" : "10px 18px",
              background: "none", border: "none",
              borderBottom: active === i ? `2px solid ${C.text}` : "2px solid transparent",
              cursor: "pointer", fontFamily: C.font,
              fontWeight: active === i ? 600 : 400,
              fontSize: isMobile ? 12 : 13.5,
              color: active === i ? C.text : C.textMuted,
              whiteSpace: "nowrap",
              marginBottom: -1,
              flexShrink: 0,
            }}>
              {market.flag} {isMobile ? market.code : market.country}
            </button>
          ))}
        </div>

        {/* Active market detail */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 16 : 24,
          padding: isMobile ? "28px 0" : "40px 0 48px",
          borderBottom: `1px solid ${C.border}`,
          marginBottom: 32,
        }}>
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: isMobile ? "24px" : "36px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: isMobile ? 28 : 36 }}>{m.flag}</span>
              <div>
                <h3 style={{ color: C.text, fontSize: isMobile ? 18 : 22, fontWeight: 800, letterSpacing: "-0.5px" }}>{m.country}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                  <Clock size={11} color={C.textMuted} />
                  <span style={{ color: C.textMuted, fontSize: 11 }}>{m.timezone}</span>
                </div>
              </div>
            </div>
            <p style={{ color: C.textSec, fontSize: isMobile ? 14 : 15.5, lineHeight: 1.72 }}>{m.desc}</p>
          </div>

          <div style={{ background: C.offWhite, border: `1px solid ${C.border}`, borderRadius: 12, padding: isMobile ? "24px" : "36px 40px" }}>
            <p style={{ color: C.textMuted, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
              Services Available
            </p>
            {SERVICES.map((s, i, arr) => (
              <div key={s} style={{
                padding: "10px 0",
                borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : "none",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.text, flexShrink: 0 }} />
                <span style={{ color: C.text, fontSize: isMobile ? 13 : 14, fontWeight: 500 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* All markets compact */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(4, 1fr)" : "repeat(7, 1fr)",
          gap: 10,
          marginBottom: 24,
        }}>
          {MARKETS.map((market, i) => (
            <button key={market.country} onClick={() => setActive(i)} style={{
              background: active === i ? C.navy : C.white,
              border: `1px solid ${active === i ? C.navy : C.border}`,
              borderRadius: 8,
              padding: isMobile ? "10px 6px" : "14px 10px",
              textAlign: "center",
              cursor: "pointer",
              fontFamily: C.font,
            }}>
              <div style={{ fontSize: isMobile ? 16 : 18, marginBottom: 4 }}>{market.flag}</div>
              <div style={{ color: active === i ? C.white : C.textMuted, fontSize: 10, fontWeight: active === i ? 700 : 400 }}>
                {market.code}
              </div>
            </button>
          ))}
        </div>

        <button onClick={() => navigate("regions")} style={{
          background: "none", color: C.accentBlue, border: "none", padding: 0,
          cursor: "pointer", fontFamily: C.font, fontSize: 14, fontWeight: 600,
          textDecoration: "underline", textUnderlineOffset: "3px",
        }}>
          View all regions in detail →
        </button>
      </div>
    </section>
  );
}
