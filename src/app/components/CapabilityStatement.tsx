import { QRCodeSVG } from "qrcode.react";
import { LogoBadge } from "./Nav";

// ─── Brand tokens ──────────────────────────────────────────────────────────
const N  = "#0B1F3A";
const B  = "#1555BA";
const CY = "#2BBCD4";
const W  = "#FFFFFF";
const BG = "#F5F5F7";
const T  = "#1D1D1F";
const TS = "#6E6E73";
const BD = "#D2D2D7";
const FONT = "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif";
const DOC_W = 1123;

// ─── Print handler ──────────────────────────────────────────────────────────
export function printCapabilityStatement() {
  const el = document.getElementById("cap-doc-root");
  if (!el) return;
  const pw = window.open("", "_blank", "width=1200,height=900");
  if (!pw) return;
  pw.document.write(`<!DOCTYPE html><html><head>
<meta charset="UTF-8"><title>RadCard Global — Capability Statement</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Plus Jakarta Sans',-apple-system,sans-serif;background:#fff;
  -webkit-print-color-adjust:exact;print-color-adjust:exact;color-adjust:exact;}
@media print{
  @page{size:A4 landscape;margin:0;}
  html,body{width:297mm;height:210mm;overflow:hidden;}
  #cap-doc-root{transform:scale(0.88);transform-origin:top left;width:1123px;}
}
</style>
</head><body>${el.outerHTML}</body></html>`);
  pw.document.close();
  setTimeout(() => { pw.focus(); pw.print(); }, 700);
}

// ─── Highlight components ───────────────────────────────────────────────────
function PR({ children }: { children: string }) {
  return <span style={{ color: B, fontWeight: 700 }}>{children}</span>;
}
function PRD({ children }: { children: string }) {
  return <span style={{ color: CY, fontWeight: 700 }}>{children}</span>;
}

// ─── Micro-components ──────────────────────────────────────────────────────
function SL({ label, light }: { label: string; light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6, flexShrink: 0 }}>
      <div style={{ width: 14, height: 2, background: CY, borderRadius: 1, flexShrink: 0 }} />
      <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: light ? CY : B, whiteSpace: "nowrap" }}>{label}</span>
    </div>
  );
}
function HR() { return <div style={{ height: 1, background: BD, margin: "6px 0", flexShrink: 0 }} />; }
function VR() { return <div style={{ width: 1, background: BD, alignSelf: "stretch", flexShrink: 0 }} />; }

function Chk({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 4 }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
        <circle cx="5" cy="5" r="5" fill="rgba(21,85,186,0.1)" />
        <path d="M2.5 5l1.8 1.8L7.5 3" stroke={B} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontSize: 9, color: T, lineHeight: 1.4 }}>{text}</span>
    </div>
  );
}

function CCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div style={{ background: BG, border: `1px solid ${BD}`, borderRadius: 6, padding: "8px 4px", display: "flex", flexDirection: "column", alignItems: "center", gap: 5, textAlign: "center" }}>
      <span style={{ fontSize: 17, lineHeight: 1 }}>{icon}</span>
      <span style={{ fontSize: 8, fontWeight: 600, color: T, lineHeight: 1.3 }}>{label}</span>
    </div>
  );
}

// ─── World Map ──────────────────────────────────────────────────────────────
// Equirectangular projection, viewBox 960×500
// x = (lon + 180) / 360 × 960
// y = (90  − lat) / 180 × 500
//
// Active (cyan): US, UK, Europe, Middle East, Australia, New Zealand, Singapore
// Inactive (grey): all other land masses
function WorldMap() {
  const grey    = "#94A3B8";
  const greyDim = "#B0BEC5";

  // Marker centres
  const markers = [
    { cx: 220, cy: 148 }, // US
    { cx: 472, cy: 101 }, // UK
    { cx: 500, cy: 112 }, // EU
    { cx: 600, cy: 158 }, // Middle East
    { cx: 830, cy: 328 }, // Australia
    { cx: 938, cy: 368 }, // New Zealand
    { cx: 757, cy: 248 }, // Singapore
  ];

  return (
    <svg
      viewBox="0 0 960 500"
      preserveAspectRatio="xMidYMid meet"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block" }}
    >
      {/* Ocean */}
      <rect width="960" height="500" fill={BG} />

      {/* ── INACTIVE LAND ─────────────────────────────────────── */}

      {/* Greenland */}
      <path fill={greyDim} d="M288,15 L330,10 L342,30 L328,48 L298,50 L282,35 Z" />

      {/* Canada */}
      <path fill={grey} d="M148,65 L255,45 L295,60 L305,90 L295,112 L255,115 L220,115 L155,115 L148,95 Z" />

      {/* Alaska */}
      <path fill={grey} d="M90,55 L130,48 L148,65 L148,85 L128,92 L105,88 L88,72 Z" />

      {/* Mexico */}
      <path fill={grey} d="M160,183 L222,178 L230,195 L218,215 L198,225 L175,220 L162,208 Z" />

      {/* Central America */}
      <path fill={grey} d="M200,228 L228,222 L232,240 L218,252 L200,245 Z" />

      {/* South America */}
      <path fill={grey} d="M215,260 L272,252 L295,272 L305,312 L298,368 L272,408 L248,418 L222,402 L205,360 L202,315 L207,278 Z" />

      {/* Caribbean (small dots) */}
      <circle fill={grey} cx="265" cy="202" r="5" />
      <circle fill={grey} cx="280" cy="198" r="4" />

      {/* Russia */}
      <path fill={grey} d="M478,42 L760,28 L800,52 L785,85 L745,90 L688,82 L638,80 L580,78 L540,78 L505,80 L478,70 Z" />

      {/* Africa */}
      <path fill={grey} d="M452,148 L548,138 L568,158 L575,215 L565,272 L542,320 L510,348 L482,335 L462,298 L455,250 L450,195 L452,165 Z" />

      {/* India */}
      <path fill={grey} d="M615,130 L660,125 L672,150 L658,188 L637,215 L615,200 L604,172 L606,148 Z" />

      {/* China / East Asia */}
      <path fill={grey} d="M648,90 L760,80 L782,102 L775,128 L748,140 L715,135 L685,128 L658,118 L645,102 Z" />

      {/* Kazakhstan / Central Asia */}
      <path fill={grey} d="M572,105 L668,100 L685,120 L672,138 L638,142 L598,138 L572,122 Z" />

      {/* SE Asia (Myanmar, Thailand, Vietnam, Malaysia) */}
      <path fill={grey} d="M720,140 L762,132 L778,150 L770,172 L748,178 L725,162 L718,148 Z" />

      {/* Indonesia (simplified) */}
      <path fill={grey} d="M730,255 L782,250 L795,264 L780,275 L748,270 Z" />
      <path fill={grey} d="M800,258 L832,252 L840,265 L825,272 Z" />

      {/* Philippines */}
      <path fill={grey} d="M770,182 L785,175 L790,195 L778,205 L768,195 Z" />

      {/* Japan */}
      <path fill={grey} d="M802,88 L820,82 L828,100 L815,112 L800,105 Z" />
      <path fill={grey} d="M818,112 L828,108 L832,122 L820,128 Z" />

      {/* ── ACTIVE REGIONS (cyan) ──────────────────────────────── */}

      {/* USA mainland */}
      <path fill={CY} opacity="0.65" d="M152,115 L298,118 L296,132 L288,148 L278,158 L275,168 L268,181 L255,183 L240,181 L224,180 L212,176 L195,174 L182,172 L168,162 L158,156 L152,144 Z" />
      {/* Florida peninsula */}
      <path fill={CY} opacity="0.65" d="M268,181 L274,183 L275,194 L268,202 L260,200 L258,190 Z" />
      {/* Hawaii */}
      <circle fill={CY} opacity="0.55" cx="65" cy="198" r="5" />
      <circle fill={CY} opacity="0.5"  cx="75" cy="200" r="4" />

      {/* UK — Great Britain */}
      <path fill={CY} opacity="0.85" d="M460,92 L475,86 L480,100 L474,114 L462,110 L458,98 Z" />
      {/* UK — Ireland */}
      <path fill={CY} opacity="0.75" d="M448,96 L460,92 L462,105 L452,110 Z" />

      {/* Iberian Peninsula (Spain & Portugal) */}
      <path fill={CY} opacity="0.62" d="M454,110 L492,104 L496,122 L482,136 L462,134 L452,120 Z" />

      {/* France + Benelux + Germany */}
      <path fill={CY} opacity="0.62" d="M465,90 L538,84 L548,98 L545,120 L525,128 L500,125 L480,118 L468,108 Z" />

      {/* Scandinavia */}
      <path fill={CY} opacity="0.55" d="M474,55 L515,42 L535,52 L530,78 L512,84 L490,78 L474,65 Z" />

      {/* Italy */}
      <path fill={CY} opacity="0.60" d="M495,120 L518,115 L525,130 L520,155 L508,170 L494,160 L490,142 Z" />

      {/* Greece + Balkans */}
      <path fill={CY} opacity="0.55" d="M530,122 L562,115 L572,132 L562,150 L540,155 L528,138 Z" />

      {/* Eastern Europe (Poland, Czech, Slovakia, Hungary, Romania) */}
      <path fill={CY} opacity="0.50" d="M535,90 L578,84 L585,100 L578,118 L545,122 L535,108 Z" />

      {/* Turkey */}
      <path fill={CY} opacity="0.60" d="M532,125 L608,118 L620,132 L612,148 L578,152 L545,148 Z" />

      {/* Arabian Peninsula + Levant (Middle East) */}
      <path fill={CY} opacity="0.68" d="M548,140 L645,132 L660,148 L648,182 L628,202 L605,195 L582,175 L558,158 Z" />

      {/* Singapore */}
      <circle fill={CY} opacity="0.9" cx="757" cy="248" r="5" />

      {/* Australia */}
      <path fill={CY} opacity="0.65" d="M780,308 L862,275 L890,292 L888,348 L860,372 L820,382 L782,360 L770,330 Z" />
      {/* Tasmania */}
      <circle fill={CY} opacity="0.6" cx="845" cy="390" r="6" />

      {/* New Zealand — North Island */}
      <path fill={CY} opacity="0.75" d="M928,352 L942,344 L948,362 L935,372 Z" />
      {/* New Zealand — South Island */}
      <path fill={CY} opacity="0.70" d="M922,375 L936,368 L942,390 L928,398 Z" />

      {/* ── CONNECTION ARCS ─────────────────────────────────────── */}
      <path d="M220,148 Q348,65 472,101"   stroke={CY} strokeWidth="1.1" opacity="0.45" strokeDasharray="5,3" fill="none"/>
      <path d="M472,101 Q538,105 600,158"  stroke={CY} strokeWidth="1.1" opacity="0.45" strokeDasharray="5,3" fill="none"/>
      <path d="M600,158 Q682,195 757,248"  stroke={CY} strokeWidth="1.1" opacity="0.45" strokeDasharray="5,3" fill="none"/>
      <path d="M757,248 Q795,285 830,328"  stroke={CY} strokeWidth="1.1" opacity="0.45" strokeDasharray="5,3" fill="none"/>
      <path d="M830,328 Q885,345 938,368"  stroke={CY} strokeWidth="1.1" opacity="0.45" strokeDasharray="5,3" fill="none"/>

      {/* ── REGION MARKERS ──────────────────────────────────────── */}
      {markers.map((m, i) => (
        <g key={i}>
          <circle cx={m.cx} cy={m.cy} r={11} fill={CY} opacity={0.16} />
          <circle cx={m.cx} cy={m.cy} r={6.5} fill={CY} opacity={0.50} />
          <circle cx={m.cx} cy={m.cy} r={3}   fill={CY} />
        </g>
      ))}
    </svg>
  );
}

// ─── Table row ──────────────────────────────────────────────────────────────
function TRow({ cat, curr, rcg, save, isHead, isTotal }: {
  cat: string; curr: string; rcg: string; save: string;
  isHead?: boolean; isTotal?: boolean;
}) {
  const dark = isHead || isTotal;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", background: dark ? N : "transparent", borderTop: isHead ? "none" : `1px solid ${BD}` }}>
      {[
        { v: cat,  color: dark ? "rgba(255,255,255,0.6)" : T,         bold: dark,       align: "left"  as const },
        { v: curr, color: dark ? "rgba(255,255,255,0.5)" : TS,         bold: !!isHead,  align: "right" as const },
        { v: rcg,  color: dark ? "rgba(255,255,255,0.5)" : "#15803d",  bold: !!isHead,  align: "right" as const },
        { v: save, color: isTotal ? CY : dark ? "rgba(255,255,255,0.6)" : B, bold: true, align: "right" as const },
      ].map((cell, i) => (
        <div key={i} style={{
          padding: "5.5px 7px",
          fontSize: isTotal ? 9.5 : 9,
          fontWeight: cell.bold ? 700 : 400,
          color: cell.color,
          textAlign: cell.align,
          borderRight: i < 3 ? `1px solid ${dark ? "rgba(255,255,255,0.1)" : BD}` : "none",
          lineHeight: 1.35,
        }}>{cell.v}</div>
      ))}
    </div>
  );
}

// ─── Props ──────────────────────────────────────────────────────────────────
interface CapabilityStatementProps {
  onSchedule?:        () => void;
  onRequestProposal?: () => void;
}

// ─── Main document ──────────────────────────────────────────────────────────
export function CapabilityStatement({ onSchedule, onRequestProposal }: CapabilityStatementProps = {}) {

  const crisis = [
    { icon: "🩻", label: "Radiologist\nShortages"  },
    { icon: "📈", label: "Growing\nVolumes"         },
    { icon: "📋", label: "Worklist\nBacklogs"       },
    { icon: "🔥", label: "Radiologist\nBurnout"     },
    { icon: "🔍", label: "Recruiting\nChallenges"   },
    { icon: "🌙", label: "Overnight\nGaps"          },
    { icon: "⏱",  label: "Turnaround\nPressure"    },
    { icon: "💰", label: "Rising\nStaffing Costs"   },
    { icon: "📊", label: "Capacity\nConstraints"    },
  ];

  const benefits = [
    "Increase Reporting Capacity",
    "Reduce Turnaround Times",
    "Reduce Backlogs",
    "Support Overnight Coverage",
    "Improve Operational Efficiency",
    "Expand Workforce Flexibility",
    "Scale Without Expanding Headcount",
  ];

  const services = [
    "Preliminary CT Reporting",
    "Preliminary MRI Reporting",
    "Emergency Radiology Support",
    "Overflow Coverage",
    "Night Coverage",
    "Weekend Coverage",
    "Subspecialty Support",
    "Workforce Augmentation",
    "AI-Assisted Workflow Support",
  ];

  const regions = ["United States", "United Kingdom", "Europe", "Middle East", "Australia", "New Zealand", "Singapore"];

  const differentiators = [
    "Board-Certified Radiologist-Led",
    "Experienced Global Workforce",
    "AI-Assisted Operational Efficiency",
    "Follow-The-Sun 24/7 Coverage",
    "Scalable Reporting Capacity",
    "Quality-Focused Processes",
  ];

  const whoWeServe = [
    "Radiology Groups & Practices",
    "Hospital Systems",
    "Imaging Centers",
    "Emergency Departments",
    "Multi-Specialty Clinics",
    "Healthcare Networks",
  ];

  const coverageStats = [
    { v: "7",     l: "Healthcare Markets"      },
    { v: "24/7",  l: "Follow-the-Sun Coverage" },
    { v: "6 wks", l: "To Production Launch"    },
    { v: "<30m",  l: "Avg Turnaround Time"     },
  ];

  const timeline = [
    { period: "Week 1",   title: "Discovery & Workflow Assessment" },
    { period: "Wks 2–3",  title: "Integration & Credentialing"    },
    { period: "Wks 4–5",  title: "Pilot Deployment"               },
    { period: "Week 6",   title: "Production Launch"              },
  ];

  const stepColors = [N, B, B, CY];

  // Button style helpers
  const btnPrimary = {
    padding: "6px 14px", borderRadius: 6, fontSize: 9, fontWeight: 700,
    background: CY, border: "none", color: N,
    cursor: onSchedule ? "pointer" : "default", whiteSpace: "nowrap" as const,
  };
  const btnOutline = {
    padding: "6px 14px", borderRadius: 6, fontSize: 9, fontWeight: 700,
    background: "transparent", border: `1.5px solid ${B}`, color: B,
    cursor: onRequestProposal ? "pointer" : "default", whiteSpace: "nowrap" as const,
  };

  return (
    <div id="cap-doc-root" style={{ width: DOC_W, fontFamily: FONT, background: W, display: "flex", flexDirection: "column", boxSizing: "border-box" }}>

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <div style={{ background: N, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px", height: 52, borderBottom: `2.5px solid ${CY}`, gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0 }}>
          <LogoBadge size={30} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: W, letterSpacing: "0.02em", lineHeight: 1.1 }}>
              Rad<span style={{ color: CY }}>Card</span>{" "}
              <span style={{ fontWeight: 400 }}>Global</span>
            </div>
            <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)", letterSpacing: "0.07em", marginTop: 2 }}>
              BOARD-CERTIFIED RADIOLOGIST-LED · CAPABILITY STATEMENT
            </div>
          </div>
        </div>

        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: W, letterSpacing: "-0.01em", lineHeight: 1.15 }}>
            Scale Your Radiology Capacity Without Expanding Headcount
          </div>
          <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>
            AI-assisted <PRD>preliminary radiology reporting</PRD> · Global network of board-certified radiologists
          </div>
        </div>

        <div style={{ display: "flex", gap: 0, flexShrink: 0 }}>
          {[
            { v: "7",     l: "Markets"  },
            { v: "24/7",  l: "Coverage" },
            { v: "99.7%", l: "Accuracy" },
            { v: "<30m",  l: "Avg TAT"  },
          ].map((m, i) => (
            <div key={m.l} style={{ textAlign: "center", paddingLeft: i > 0 ? 16 : 0, marginLeft: i > 0 ? 16 : 0, borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.18)" : "none" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: CY, letterSpacing: "-0.02em", lineHeight: 1 }}>{m.v}</div>
              <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN COLUMNS ────────────────────────────────────────── */}
      <div style={{ display: "flex", flex: 1, minHeight: 620 }}>

        {/* COL A — The Challenge (222px) */}
        <div style={{ width: 222, flexShrink: 0, padding: "10px 12px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <SL label="The Challenge" />
          <div style={{ fontSize: 11, fontWeight: 800, color: N, letterSpacing: "-0.01em", marginBottom: 8, lineHeight: 1.25, flexShrink: 0 }}>
            9 Compounding Pressures<br />Facing Radiology Leaders
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 5, marginBottom: 9, flexShrink: 0 }}>
            {crisis.map((c) => <CCard key={c.label} icon={c.icon} label={c.label} />)}
          </div>
          <HR />
          <SL label="Our Solution" />
          <div style={{ fontSize: 9, color: TS, lineHeight: 1.6, marginBottom: 9, flexShrink: 0 }}>
            RadCard Global provides AI-assisted{" "}
            <PR>preliminary radiology reporting</PR>{" "}
            through a global network of experienced radiologists — enabling immediate capacity
            expansion without recruitment delays or permanent headcount.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 4, alignContent: "start", flex: 1 }}>
            {benefits.map((b) => <Chk key={b} text={b} />)}
          </div>
        </div>

        <VR />

        {/* COL B — Services + Who We Serve + Differentiators (228px) */}
        <div style={{ width: 228, flexShrink: 0, padding: "10px 12px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <SL label="Services Portfolio" />
          <div style={{ fontSize: 11, fontWeight: 800, color: N, letterSpacing: "-0.01em", marginBottom: 7, flexShrink: 0 }}>
            <PR>Preliminary Reporting</PR> Services
          </div>
          <div style={{ flexShrink: 0 }}>
            {services.map((s, i) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5.5px 8px", background: i % 2 === 0 ? BG : W, borderRadius: 4 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: CY, flexShrink: 0 }} />
                <span style={{ fontSize: 9, fontWeight: s.startsWith("Preliminary") ? 700 : 500, color: s.startsWith("Preliminary") ? B : T }}>{s}</span>
              </div>
            ))}
          </div>
          <HR />
          <SL label="Who We Serve" />
          <div style={{ flexShrink: 0 }}>
            {whoWeServe.map((w) => (
              <div key={w} style={{ display: "flex", alignItems: "center", gap: 7, padding: "4.5px 0", borderBottom: `1px solid ${BD}` }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: CY, flexShrink: 0 }} />
                <span style={{ fontSize: 9, color: T, fontWeight: 500 }}>{w}</span>
              </div>
            ))}
          </div>
          <HR />
          <SL label="Why RadCard Global" />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              {differentiators.map((d) => (
                <div key={d} style={{ display: "flex", alignItems: "center", gap: 7, padding: "4.5px 0", borderBottom: `1px solid ${BD}` }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: B, flexShrink: 0 }} />
                  <span style={{ fontSize: 9, color: T, fontWeight: 500 }}>{d}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "8px 10px", marginTop: 8, background: "rgba(43,188,212,0.07)", border: `1px solid rgba(43,188,212,0.2)`, borderRadius: 6, flexShrink: 0 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: CY, fontStyle: "italic" }}>"Global Workforce. Local Standards."</div>
              <div style={{ fontSize: 8, color: TS, marginTop: 3, lineHeight: 1.5 }}>
                Board-certified oversight · <span style={{ color: B, fontWeight: 600 }}>Preliminary reporting</span> at scale
              </div>
            </div>
          </div>
        </div>

        <VR />

        {/* COL C — Global Coverage + Coverage Stats + Pricing (252px) */}
        <div style={{ width: 252, flexShrink: 0, padding: "10px 12px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <SL label="Global Coverage" />
          <div style={{ fontSize: 11, fontWeight: 800, color: N, letterSpacing: "-0.01em", marginBottom: 7, flexShrink: 0 }}>
            7 Major Healthcare Markets
          </div>

          {/* Map: position:relative container + position:absolute SVG */}
          <div style={{ position: "relative", flex: 1, minHeight: 100, border: `1px solid ${BD}`, borderRadius: 6, overflow: "hidden", marginBottom: 8, background: BG }}>
            <WorldMap />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 8px", marginBottom: 5, flexShrink: 0 }}>
            {regions.map((r) => (
              <div key={r} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: CY, flexShrink: 0 }} />
                <span style={{ fontSize: 8.5, color: T, fontWeight: 500 }}>{r}</span>
              </div>
            ))}
          </div>

          <HR />

          {/* Coverage stats 2×2 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginBottom: 6, flexShrink: 0 }}>
            {coverageStats.map((s) => (
              <div key={s.l} style={{ background: BG, border: `1px solid ${BD}`, borderRadius: 5, padding: "6px 8px", textAlign: "center" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: B, letterSpacing: "-0.02em", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: 7.5, color: TS, marginTop: 2, lineHeight: 1.3 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <HR />

          {/* Pricing card */}
          <div style={{ flexShrink: 0 }}>
            <SL label="Pricing Overview" />
            <div style={{ background: N, borderRadius: 8, padding: "10px 12px" }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: CY, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>
                <PRD>Preliminary CT Reporting</PRD>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 5 }}>
                <span style={{ fontSize: 30, fontWeight: 800, color: CY, letterSpacing: "-0.03em", lineHeight: 1 }}>~$25</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>/ study</span>
              </div>
              <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)", lineHeight: 1.55 }}>
                Starting price. Varies by volume, turnaround requirements, modality mix, and
                engagement structure. Custom enterprise pricing available.
              </div>
            </div>
          </div>
        </div>

        <VR />

        {/* COL D — Cost Savings + Contact (flex:1) */}
        <div style={{ flex: 1, padding: "10px 14px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <SL label="Illustrative Cost Savings Analysis" />
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexShrink: 0, flexWrap: "wrap" }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: N, letterSpacing: "-0.01em" }}>Example Organization Scenario</div>
            <div style={{ fontSize: 8, fontWeight: 600, color: B, background: "rgba(21,85,186,0.08)", border: `1px solid rgba(21,85,186,0.22)`, borderRadius: 4, padding: "3px 9px", whiteSpace: "nowrap" }}>
              10,000 CT Studies Annually
            </div>
          </div>

          <div style={{ border: `1px solid ${BD}`, borderRadius: 7, overflow: "hidden", marginBottom: 6, flexShrink: 0 }}>
            <TRow isHead cat="Category" curr="Current Annual Cost" rcg="With RadCard Global" save="Annual Savings" />
            <TRow cat="Radiologist Overtime"                    curr="$350,000" rcg="$120,000"  save="$230,000" />
            <TRow cat="Locum Tenens Fees"                       curr="$280,000" rcg="$0"        save="$280,000" />
            <TRow cat="Recruitment & Onboarding"                curr="$150,000" rcg="$10,000"   save="$140,000" />
            <TRow cat="Operational Inefficiency (Lost Revenue)"  curr="$400,000" rcg="$100,000"  save="$300,000" />
            <TRow isTotal cat="TOTAL POTENTIAL ANNUAL SAVINGS"  curr=""         rcg=""          save="$950,000" />
          </div>

          <div style={{ fontSize: 7.5, color: TS, fontStyle: "italic", lineHeight: 1.5, marginBottom: 7, flexShrink: 0 }}>
            Illustrative example only. Actual savings vary based on organization size, workflow, case mix, staffing model, and operational structure.
          </div>

          <HR />

          {/* Contact + QR — flex:1 fills remaining space */}
          <div style={{ flex: 1, display: "flex", gap: 14, alignItems: "stretch", minHeight: 0 }}>

            {/* Left: text + CTA */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: 0 }}>
              <div>
                <SL label="Get Started" />
                <div style={{ fontSize: 11, fontWeight: 800, color: N, marginBottom: 7, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                  Schedule a Consultation<br />Request a Proposal
                </div>
                <div style={{ fontSize: 8.5, color: TS, lineHeight: 1.65, marginBottom: 9 }}>
                  RadCard Global serves 7 major healthcare markets through a follow-the-sun global
                  workforce model, powered by AI-assisted{" "}
                  <span style={{ color: B, fontWeight: 600 }}>preliminary reporting</span> technology.
                  Our team will assess your workflow and propose a tailored solution within 48 hours.
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    { icon: "🌐", v: "radcardhealth.com"      },
                    { icon: "✉️", v: "info@radcardhealth.com" },
                    { icon: "📞", v: "+91 6302160253"         },
                  ].map((c) => (
                    <div key={c.v} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 13 }}>{c.icon}</span>
                      <span style={{ fontSize: 9.5, color: T, fontWeight: 500 }}>{c.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA buttons — wired to callbacks */}
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <button style={btnPrimary} onClick={onSchedule}>Schedule a Consultation</button>
                <button style={btnOutline} onClick={onRequestProposal}>Request a Proposal</button>
              </div>
            </div>

            {/* Right: QR code only */}
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
              <div style={{ padding: 8, background: BG, border: `1px solid ${BD}`, borderRadius: 10 }}>
                <QRCodeSVG value="https://radcardhealth.com" size={92} bgColor={BG} fgColor={N} level="M" />
              </div>
              <span style={{ fontSize: 7.5, color: TS, textAlign: "center" }}>Scan to visit<br />radcardhealth.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── TIMELINE STRIP ──────────────────────────────────────── */}
      <div style={{ flexShrink: 0, borderTop: `1px solid ${BD}`, background: BG, padding: "8px 18px", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div style={{ width: 14, height: 2, background: CY, borderRadius: 1 }} />
          <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: B }}>
            Implementation Timeline · Discovery to Production Launch in 6 Weeks
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
          {timeline.map((step, i) => (
            <div key={step.period} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, padding: "7px 12px", borderRadius: 7, background: stepColors[i] }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9.5, fontWeight: 800, color: W, flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: 7.5, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: 1 }}>{step.period}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: W, lineHeight: 1.2 }}>{step.title}</div>
                </div>
              </div>
              {i < timeline.length - 1 && (
                <div style={{ width: 22, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                    <path d="M0 4.5h11.5M8 1l3.5 3.5L8 8" stroke={TS} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <div style={{ flexShrink: 0, background: N, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px", height: 46, borderTop: `2px solid rgba(43,188,212,0.4)` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <LogoBadge size={18} />
          <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.38)" }}>
            © RadCard Global · radcardhealth.com · info@radcardhealth.com · +91 6302160253
          </span>
        </div>
        <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.2)", fontStyle: "italic", textAlign: "center", flex: 1, padding: "0 20px" }}>
          Confidential — prepared for executive review. All pricing and savings figures are illustrative only.
        </div>
        <div style={{ display: "flex", gap: 9, flexShrink: 0 }}>
          <button style={{ ...btnPrimary, fontSize: 8 }} onClick={onSchedule}>Schedule a Consultation</button>
          <button style={{ ...btnOutline, fontSize: 8, border: "1px solid rgba(255,255,255,0.3)", color: W }} onClick={onRequestProposal}>Request a Proposal</button>
        </div>
      </div>
    </div>
  );
}
