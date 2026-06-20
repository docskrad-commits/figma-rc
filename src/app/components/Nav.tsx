import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const C = {
  navy: "#0B1F3A",
  navyMid: "#0e2544",
  navyDark: "#060e1b",
  white: "#FFFFFF",
  offWhite: "#F5F5F7",
  lightGray: "#E8E8ED",
  border: "#D2D2D7",
  borderDark: "#1E3558",
  text: "#1D1D1F",
  textSec: "#6E6E73",
  textMuted: "#86868B",
  cardDark: "#0D2040",
  accentBlue: "#1555BA",
  accentCyan: "#2BBCD4",
  font: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif",
};

const NAV_LINKS = [
  { label: "Home", page: "home" },
  { label: "Preliminary Reporting", page: "preliminary-reporting" },
  { label: "Solutions", page: "solutions" },
  { label: "Why RadCard Global", page: "why-radcard" },
  { label: "Regions We Serve", page: "regions" },
  { label: "Quality & Compliance", page: "quality" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
];

interface NavProps {
  currentPage: string;
  navigate: (page: string) => void;
  onSchedule: () => void;
}

export function EcgLogo({ size = 28, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 56 31" fill="none">
      <polyline
        points="0,15.5 10,15.5 15,2 21,29 27,15.5 33,15.5 37,8 41,23 45,15.5 56,15.5"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function LogoBadge({ size = 36 }: { size?: number }) {
  const r = Math.round(size * 0.25);
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 36 36" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0 }}
    >
      <rect width="36" height="36" rx={r} fill={C.accentCyan} />
      <polyline
        points="5,18 11,18 14,8 18,28 22,18 31,18"
        stroke={C.navy}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Nav({ currentPage, navigate, onSchedule }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => { setMobileOpen(false); }, [currentPage]);

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: C.navy,
      borderBottom: `1px solid ${scrolled ? C.borderDark : "transparent"}`,
      transition: "border-color 0.2s",
      fontFamily: C.font,
    }}>
      <div
  style={{
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 clamp(16px, 3vw, 24px)",
  }}
>
        <div style={{ display: "flex", alignItems: "center", height: 68 }}>

          {/* Logo */}
          <button onClick={() => navigate("home")} style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "none", border: "none", cursor: "pointer", padding: 0,
            flexShrink: 0,
          }}>
            <LogoBadge size={34} />
            <div style={{ display: "flex", alignItems: "baseline", lineHeight: 1 }}>
              <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.3px", color: C.white }}>Rad</span>
              <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.3px", color: C.accentCyan }}>Card</span>
              <span style={{ fontSize: 15, fontWeight: 400, letterSpacing: "-0.2px", color: C.white, marginLeft: 5 }}>Global</span>
            </div>
          </button>

          {/* Desktop nav — pushed 100px from logo, takes remaining space */}
          <div
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: 0, marginLeft: 40, flex: 1 }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.page;
              const isHov = hoveredLink === link.page;
              return (
                <button
                  key={link.label}
                  onClick={() => navigate(link.page)}
                  onMouseEnter={() => setHoveredLink(link.page)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    position: "relative",
                    color: isActive ? C.white : C.white,
                    background: isActive ? "rgba(255,255,255,0.07)" : isHov ? "rgba(255,255,255,0.04)" : "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "6px 11px",
                    borderRadius: 5,
                    fontSize: 12,
                    fontWeight: isActive ? 600 : 400,
                    fontFamily: C.font,
                    letterSpacing: "0.01em",
                    transition: "color 0.15s, background 0.15s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={() => setHoveredLink(link.page)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: "absolute", bottom: 2, left: 11, right: 11,
                      height: 1.5,
                      background: `linear-gradient(90deg, ${C.accentBlue}, ${C.accentCyan})`,
                      borderRadius: 1,
                    }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side: CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: "auto" }}>
            {/* CTA — hidden on mobile to avoid clutter */}
            <button
              onClick={onSchedule}
              className="hidden sm:block"
              style={{
                background: C.white,
                color: C.navy,
                border: "none",
                padding: "7px 13px",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: C.font,
                cursor: "pointer",
                whiteSpace: "nowrap",
                letterSpacing: "0.01em",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              Schedule Consultation
            </button>

            {/* Hamburger — visible below xl */}
            <button
              className="flex lg:hidden"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: C.white, padding: 6, alignItems: "center",
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet drawer */}
        {mobileOpen && (
          <div style={{
            background: C.navy,
            borderTop: `1px solid ${C.borderDark}`,
            padding: "8px 0 20px",
            maxHeight: "calc(100vh - 68px)",
            overflowY: "auto",
          }}>
            {NAV_LINKS.map(link => (
              <button key={link.label} onClick={() => navigate(link.page)} style={{
                display: "block", width: "100%", textAlign: "left",
                color: currentPage === link.page ? C.white : "rgba(255,255,255,0.6)",
                background: "none", border: "none", cursor: "pointer",
                padding: "13px 0", fontSize: 15,
                fontWeight: currentPage === link.page ? 600 : 400,
                fontFamily: C.font,
                borderBottom: `1px solid ${C.borderDark}`,
              }}>
                {link.label}
              </button>
            ))}
            <button onClick={() => { onSchedule(); }} style={{
              display: "block", width: "100%", textAlign: "center",
              color: C.navy, background: C.white, border: "none", cursor: "pointer",
              padding: "12px", fontSize: 14, fontWeight: 700, fontFamily: C.font,
              borderRadius: 6, marginTop: 16,
            }}>
              Schedule Consultation
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
