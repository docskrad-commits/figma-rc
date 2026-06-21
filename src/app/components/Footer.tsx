import { Mail, Phone, Globe2 } from "lucide-react";
import { C, LogoBadge } from "./Nav";
import { useBreakpoint } from "../hooks/useBreakpoint";

const LINKS = {
  "Services": ["Overflow Support", "Overnight Coverage", "Weekend Coverage", "Capacity Expansion", "Subspecialty Support", "Workforce Augmentation"],
  "Regions": ["United States", "United Kingdom", "Europe", "Middle East", "Australia", "New Zealand", "Singapore"],
  "Company": ["About RadCard Global", "Quality & Compliance", "How It Works", "Contact Us", "Request Proposal"],
};

const PAGE_MAP: Record<string, string> = {
  "Overflow Support": "preliminary-reporting",
  "Overnight Coverage": "preliminary-reporting",
  "Weekend Coverage": "preliminary-reporting",
  "Capacity Expansion": "solutions",
  "Subspecialty Support": "preliminary-reporting",
  "Workforce Augmentation": "solutions",
  "United States": "regions",
  "United Kingdom": "regions",
  "Europe": "regions",
  "Middle East": "regions",
  "Australia": "regions",
  "New Zealand": "regions",
  "Singapore": "regions",
  "About RadCard Global": "about",
  "Quality & Compliance": "quality",
  "How It Works": "home",
  "Contact Us": "contact",
  "Request Proposal": "contact",
};

interface Props { navigate: (page: string) => void; onSchedule: () => void; }

export function Footer({ navigate, onSchedule }: Props) {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <footer style={{ background: C.navyDark, borderTop: `1px solid rgba(255,255,255,0.06)`, fontFamily: C.font }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 24px" : "0 40px" }}>

        {/* Contact Banner */}
        <div style={{
          padding: isMobile ? "32px 0" : "40px 0",
          borderBottom: `1px solid rgba(255,255,255,0.08)`,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
          gap: isMobile ? 20 : 40,
          alignItems: "center",
        }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>
              Contact RadCard Global
            </p>
            <div style={{ display: "flex", gap: isMobile ? 16 : 28, flexWrap: "wrap", alignItems: "center" }}>
              <a href="mailto:info@radcardhealth.com" style={{
                display: "flex", alignItems: "center", gap: 7,
                color: C.white, textDecoration: "none", fontSize: isMobile ? 13.5 : 15, fontWeight: 600,
              }}>
                <Mail size={14} color={C.accentCyan} />
                info@radcardhealth.com
              </a>
              <a href="tel:+916302160253" style={{
                display: "flex", alignItems: "center", gap: 7,
                color: C.white, textDecoration: "none", fontSize: isMobile ? 13.5 : 15, fontWeight: 600,
              }}>
                <Phone size={14} color={C.accentCyan} />
                +91 6302 160 253
              </a>
              <a href="https://wa.me/916302160253" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 7,
                color: C.white, textDecoration: "none", fontSize: isMobile ? 13.5 : 15, fontWeight: 600,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill={C.accentCyan}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a href="https://linkedin.com/company/radcard-global" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 7,
                color: C.white, textDecoration: "none", fontSize: isMobile ? 13.5 : 15, fontWeight: 600,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill={C.accentCyan}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          <button onClick={onSchedule} style={{
            background: C.white, color: C.navy, border: "none",
            padding: "11px 20px", borderRadius: 7,
            fontSize: 13, fontWeight: 700, fontFamily: C.font, cursor: "pointer",
            whiteSpace: "nowrap",
            width: isMobile ? "100%" : "auto",
          }}>
            Schedule Consultation
          </button>
        </div>

        {/* Main columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1.5fr 1fr 1fr" : "2fr 1fr 1fr 1fr",
          gap: isMobile ? "32px 20px" : 40,
          padding: isMobile ? "36px 0" : "48px 0",
        }}>
          {/* Brand — full width on mobile */}
          <div style={{ gridColumn: isMobile ? "1 / -1" : "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <LogoBadge size={28} />
              <span style={{ color: C.white, fontSize: 14, fontWeight: 700 }}>
                Rad<span style={{ color: C.accentCyan }}>Card</span>{" "}
                <span style={{ fontWeight: 400 }}>Global</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.7, maxWidth: 260, marginBottom: 12 }}>
              Teleradiology company providing preliminary reporting services to healthcare organizations worldwide.
            </p>
            <p style={{ color: "rgba(255,255,255,0.18)", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em" }}>
              Scale Your Radiology Capacity Without Expanding Headcount
            </p>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
                {heading}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {links.map(link => (
                  <button key={link} onClick={() => navigate(PAGE_MAP[link] || "home")} style={{
                    color: "rgba(255,255,255,0.45)", background: "none", border: "none",
                    cursor: "pointer", fontSize: isMobile ? 12.5 : 13, textAlign: "left",
                    padding: 0, fontFamily: C.font,
                  }}>
                    {link}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Markets */}
        <div style={{
          display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center",
          padding: "18px 0", borderTop: `1px solid rgba(255,255,255,0.06)`,
          borderBottom: `1px solid rgba(255,255,255,0.06)`, marginBottom: 20,
        }}>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Markets:
          </span>
          {["🇺🇸 US", "🇬🇧 UK", "🇪🇺 EU", "🌍 ME", "🇦🇺 AU", "🇳🇿 NZ", "🇸🇬 SG"].map(m => (
            <span key={m} style={{ color: "rgba(255,255,255,0.3)", fontSize: isMobile ? 11 : 12 }}>{m}</span>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12, paddingBottom: 28,
          flexDirection: isMobile ? "column" : "row",
        }}>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}>
            © 2026 RadCard Global. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Clinical Governance"].map(link => (
              <button key={link} onClick={() => navigate("contact")} style={{
                color: "rgba(255,255,255,0.45)", background: "none", border: "none",
                cursor: "pointer", fontSize: 12, fontFamily: C.font, padding: 0,
              }}>
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
