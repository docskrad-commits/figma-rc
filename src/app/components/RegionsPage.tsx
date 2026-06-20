import { useState } from "react";
import { Clock, ChevronRight } from "lucide-react";
import { C } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const MARKETS = [
  { flag: "🇺🇸", country: "United States", short: "US", headline: "Supporting U.S. Radiology Groups and Health Systems", desc: "RadCard Global partners with U.S. radiology groups, health systems, imaging networks, and multi-specialty organizations to provide scalable overflow coverage, overnight reporting, and workforce augmentation across all major imaging modalities.", coverage: ["24/7 Overflow Coverage", "Overnight & Weekend Reporting", "Subspecialty Support", "Capacity Expansion"], timezone: "EST · CST · PST" },
  { flag: "🇬🇧", country: "United Kingdom", short: "UK", headline: "NHS Trusts, Independent Providers & Teleradiology Companies", desc: "We work alongside NHS trusts, independent radiology providers, and teleradiology companies across England, Scotland, Wales, and Northern Ireland — supporting waiting list reduction, out-of-hours coverage, and capacity management.", coverage: ["NHS Trust Support", "Out-of-Hours Reporting", "Waiting List Support", "Subspecialty Cover"], timezone: "GMT · BST" },
  { flag: "🇪🇺", country: "Europe", short: "EU", headline: "Scalable Reporting Across the European Union", desc: "Our European coverage spans DACH, Benelux, Nordic countries, and Southern Europe. We deliver preliminary reporting aligned to local standards, supporting practices across the EU with scalable, technology-enabled reporting solutions.", coverage: ["Cross-Border Coverage", "Multi-Language Support", "Local Standard Alignment", "Overflow Reporting"], timezone: "CET · CEST" },
  { flag: "🌍", country: "Middle East", short: "ME", headline: "Supporting Healthcare Transformation in the Gulf Region", desc: "We serve healthcare organizations in the UAE, Saudi Arabia, Qatar, Kuwait, and Bahrain — supporting the region's rapid healthcare infrastructure growth with high-quality, scalable preliminary reporting services.", coverage: ["UAE & KSA Coverage", "Qatar & Gulf States", "Hospital System Support", "Teleradiology Integration"], timezone: "GST · AST" },
  { flag: "🇦🇺", country: "Australia", short: "AU", headline: "Australian Radiology Practices and Teleradiology Providers", desc: "We support Australian radiology practices navigating volume growth, rural and regional coverage gaps, overnight reporting demands, and the ongoing challenge of radiologist recruitment in a competitive market.", coverage: ["Overnight Reporting", "Rural & Regional Cover", "Overflow Support", "Workforce Augmentation"], timezone: "AEST · AWST" },
  { flag: "🇳🇿", country: "New Zealand", short: "NZ", headline: "New Zealand Radiology Practices and Imaging Providers", desc: "We provide preliminary reporting support to New Zealand practices managing demand pressures, specialist shortages, and the challenge of maintaining consistent reporting standards across diverse clinical environments.", coverage: ["After-Hours Coverage", "Specialist Support", "Overflow Reporting", "Capacity Management"], timezone: "NZST · NZDT" },
  { flag: "🇸🇬", country: "Singapore", short: "SG", headline: "Singapore's World-Class Healthcare Institutions", desc: "We serve Singapore's leading public and private healthcare institutions with high-quality, technology-enabled preliminary reporting support — aligned to Singapore's rigorous clinical governance and reporting standards.", coverage: ["Hospital Group Support", "Subspecialty Reporting", "Overflow Coverage", "AI-Assisted Workflows"], timezone: "SGT" },
];

interface Props { onSchedule: () => void; }

export function RegionsPage({ onSchedule }: Props) {
  const [active, setActive] = useState(0);
  const { isMobile, isTablet } = useBreakpoint();
  const m = MARKETS[active];

  return (
    <div style={{ paddingTop: 68, fontFamily: C.font }}>
      {/* Hero — centered */}
      <div style={{ background: C.navy, padding: isMobile ? "72px 24px 60px" : "96px 40px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 18 }}>
            Regions We Serve
          </p>
          <h1 style={{
            fontSize: isMobile ? "clamp(28px, 8vw, 46px)" : "clamp(36px, 5vw, 68px)",
            fontWeight: 900, color: C.white, lineHeight: 1.06, letterSpacing: "-2px",
            marginBottom: 18, maxWidth: 760, margin: "0 auto 18px",
          }}>
            Seven major healthcare markets.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: isMobile ? 15 : 18, lineHeight: 1.68, maxWidth: 460, margin: "0 auto 32px" }}>
            Global Workforce. Local Standards. Follow-the-Sun Coverage.
          </p>
          {/* Market pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {MARKETS.map((market, i) => (
              <button key={market.country} onClick={() => setActive(i)} style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: isMobile ? "6px 12px" : "7px 16px", borderRadius: 100,
                border: active === i ? `1px solid ${C.white}` : "1px solid rgba(255,255,255,0.2)",
                background: active === i ? C.white : "transparent",
                cursor: "pointer", fontFamily: C.font,
              }}>
                <span style={{ fontSize: isMobile ? 12 : 13 }}>{market.flag}</span>
                <span style={{ color: active === i ? C.navy : "rgba(255,255,255,0.65)", fontSize: isMobile ? 12 : 13, fontWeight: active === i ? 700 : 400 }}>
                  {isMobile ? market.short : market.country}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Market Detail */}
      <div style={{ background: C.white, padding: isMobile ? "40px 24px" : "72px 40px", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 32 }}>
            {/* Info card */}
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: isMobile ? "24px" : "36px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: C.offWhite, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                  {m.flag}
                </div>
                <div>
                  <h2 style={{ color: C.text, fontSize: isMobile ? 18 : 22, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 3 }}>{m.country}</h2>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <Clock size={11} color={C.textMuted} />
                    <span style={{ color: C.textMuted, fontSize: 11 }}>{m.timezone}</span>
                  </div>
                </div>
              </div>
              <h3 style={{ color: C.text, fontSize: isMobile ? 15 : 17, fontWeight: 700, marginBottom: 12, lineHeight: 1.3, letterSpacing: "-0.2px" }}>
                {m.headline}
              </h3>
              <p style={{ color: C.textSec, fontSize: isMobile ? 13.5 : 15, lineHeight: 1.72, marginBottom: 20 }}>{m.desc}</p>
              <button onClick={onSchedule} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: C.navy, color: C.white, border: "none",
                padding: "11px 18px", borderRadius: 7,
                fontSize: 13.5, fontWeight: 700, fontFamily: C.font, cursor: "pointer",
                width: isMobile ? "100%" : "auto",
              }}>
                Enquire About {m.country} <ChevronRight size={14} />
              </button>
            </div>

            {/* Services card */}
            <div style={{ background: C.offWhite, border: `1px solid ${C.border}`, borderRadius: 12, padding: isMobile ? "24px" : "36px 40px" }}>
              <p style={{ color: C.textMuted, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
                Services in {m.country}
              </p>
              {m.coverage.map((item, i, arr) => (
                <div key={item} style={{ padding: "13px 0", borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : "none", display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.text, flexShrink: 0 }} />
                  <span style={{ color: C.text, fontSize: isMobile ? 13.5 : 14.5, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
              <div style={{ marginTop: 20, padding: "16px 18px", background: C.navy, borderRadius: 8 }}>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Follow-the-Sun</div>
                <div style={{ color: C.white, fontSize: 13, fontWeight: 500 }}>24/7 coverage · Preliminary reporting to local standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All markets grid */}
      <div style={{ background: C.offWhite, padding: isMobile ? "48px 24px" : "72px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: C.text, fontSize: isMobile ? 20 : 24, fontWeight: 800, marginBottom: 24, letterSpacing: "-0.3px" }}>All Markets</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "repeat(3, 1fr)" : "repeat(4, 1fr)", gap: 10 }}>
            {MARKETS.map((market, i) => (
              <button key={market.country} onClick={() => setActive(i)} style={{
                background: active === i ? C.navy : C.white,
                border: `1px solid ${active === i ? C.navy : C.border}`,
                borderRadius: 10, padding: isMobile ? "16px 14px" : "20px 24px",
                textAlign: "left", cursor: "pointer", fontFamily: C.font,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                  <span style={{ fontSize: isMobile ? 18 : 20 }}>{market.flag}</span>
                  <span style={{ color: active === i ? C.white : C.text, fontSize: isMobile ? 13 : 14.5, fontWeight: 700 }}>{isMobile ? market.short : market.country}</span>
                </div>
                <div style={{ color: active === i ? "rgba(255,255,255,0.5)" : C.textMuted, fontSize: 11 }}>{market.timezone}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
