import { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { WorkforceCrisis } from "./components/WorkforceCrisis";
import { WhyTraditionalFails } from "./components/WhyTraditionalFails";
import { Solution } from "./components/Solution";
import { GlobalCoverage } from "./components/GlobalCoverage";
import { PreliminaryReporting } from "./components/PreliminaryReporting";
import { HowItWorks } from "./components/HowItWorks";
import { QualityCompliance } from "./components/QualityCompliance";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { ConsultationForm } from "./components/ConsultationForm";
import { FloatingButtons } from "./components/FloatingButtons";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { PreliminaryReportingPage } from "./components/PreliminaryReportingPage";
import { SolutionsPage } from "./components/SolutionsPage";
import { RegionsPage } from "./components/RegionsPage";
import { QualityPage } from "./components/QualityPage";
import { WhyRadCardPage } from "./components/WhyRadCardPage";
import { CapabilityStatement, printCapabilityStatement } from "./components/CapabilityStatement";
import { C } from "./components/Nav";

const SEO: Record<string, { title: string; desc: string }> = {
  home: {
    title: "RadCard Global — Teleradiology & Preliminary Reporting | Scale Without Headcount",
    desc: "RadCard Global is a teleradiology company providing preliminary reporting services to radiology groups, hospitals, and imaging centers across 7 global markets.",
  },
  "preliminary-reporting": {
    title: "Preliminary Reporting Services — RadCard Global Teleradiology",
    desc: "Scalable teleradiology and preliminary reporting including overflow coverage, overnight reporting, weekend coverage, and subspecialty support for radiology practices worldwide.",
  },
  solutions: {
    title: "Radiology Workforce Solutions — RadCard Global",
    desc: "Teleradiology workforce augmentation, capacity expansion, and AI-enhanced workflow solutions for radiology groups, hospitals, and imaging centers.",
  },
  "why-radcard": {
    title: "Why RadCard Global — Built for Enterprise Radiology",
    desc: "Discover why leading radiology groups and health systems choose RadCard Global for teleradiology and preliminary reporting services.",
  },
  regions: {
    title: "Regions We Serve — RadCard Global | US, UK, EU, ME, AU, NZ, SG",
    desc: "RadCard Global provides teleradiology and preliminary reporting services across 7 major healthcare markets.",
  },
  quality: {
    title: "Quality & Compliance — RadCard Global",
    desc: "Multi-layer quality assurance, peer review, structured reporting, and clinical governance for teleradiology and preliminary reporting services.",
  },
  about: {
    title: "About RadCard Global — Board-Certified Radiologist-Led Teleradiology",
    desc: "RadCard Global is a board-certified radiologist-led teleradiology company building the future of global radiology operations.",
  },
  contact: {
    title: "Contact RadCard Global — Schedule a Consultation",
    desc: "Schedule a consultation or request a proposal to discuss how RadCard Global's teleradiology services can support your radiology operations.",
  },
};

function injectFavicon() {
  const existing = document.querySelector("link[rel~='icon']");
  if (existing) existing.remove();
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><rect width="36" height="36" rx="9" fill="${C.accentCyan}"/><polyline points="5,18 11,18 14,8 18,28 22,18 31,18" stroke="${C.navy}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;
  const blob = new Blob([svgContent], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/svg+xml";
  link.href = url;
  document.head.appendChild(link);
}

// ─── Capability Statement Modal ──────────────────────────────────────
const DOC_W = 1123;
const DOC_H = 850; // slightly taller than 794 to account for increased font sizes

function CapabilityModal({ onClose, onSchedule, onRequestProposal }: { onClose: () => void; onSchedule: () => void; onRequestProposal: () => void }) {
  // Lazy init: compute scale BEFORE first render so there's no layout flash on mobile
  const [scale, setScale] = useState<number>(() =>
    Math.min(1, (window.innerWidth - 16) / DOC_W)
  );

  useEffect(() => {
    const updateScale = () =>
      setScale(Math.min(1, (window.innerWidth - 16) / DOC_W));
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", updateScale);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", updateScale);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const scaledW = Math.round(DOC_W * scale);
  const scaledH = Math.round(DOC_H * scale);

  return (
    <div style={{
      // Use explicit top/left/right/bottom — more reliable than inset on iOS Safari
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 9000, background: "#060e1bF5",
      display: "flex", flexDirection: "column",
    }}>
      {/* ── Toolbar: always fits on any screen width ── */}
      <div style={{
        flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 14px", gap: 10,
        background: "#060e1b",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}>
        {/* Title — truncates gracefully on mobile */}
        <div style={{
          flex: 1, fontSize: 12, fontWeight: 700,
          color: "rgba(255,255,255,0.9)", fontFamily: C.font,
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          minWidth: 0,
        }}>
          RadCard Global — Capability Statement
        </div>
        {/* Actions — always visible, never pushed off-screen */}
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          <button
            onClick={printCapabilityStatement}
            style={{
              padding: "8px 14px", borderRadius: 8,
              background: C.accentCyan, border: "none",
              fontSize: 12, fontWeight: 700, color: C.navy,
              fontFamily: C.font, cursor: "pointer", whiteSpace: "nowrap",
            }}
          >Save as PDF</button>
          <button
            onClick={onClose}
            style={{
              width: 36, height: 36, flexShrink: 0, borderRadius: 8,
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.85)", fontSize: 22, lineHeight: 1,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: C.font,
            }}
          >×</button>
        </div>
      </div>

      {/* ── Scrollable document area ── */}
      {/*  overflow:auto in BOTH axes so mobile can scroll if needed         */}
      {/*  justifyContent:flex-start keeps doc pinned to left — no centering */}
      {/*  that could clip the left edge on small viewports                  */}
      <div style={{
        flex: 1,
        overflow: "auto",
        WebkitOverflowScrolling: "touch" as any,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 12,
      }}>
        {/*
          Clipping wrapper: takes up EXACTLY the scaled pixel dimensions.
          This prevents the scroll container from reserving the full
          pre-scale DOC_H (794px) which would leave a dead gap on mobile.
        */}
        <div style={{
          width: scaledW, height: scaledH,
          flexShrink: 0, position: "relative",
          overflow: "hidden",
        }}>
          {/*
            The document itself is always DOC_W × DOC_H and then
            transformed. position:absolute + top/left:0 + transformOrigin
            top-left ensures the scale origin matches the wrapper top-left.
          */}
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: DOC_W,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
          }}>
            <CapabilityStatement
              onSchedule={() => { onClose(); onSchedule(); }}
              onRequestProposal={() => { onClose(); onRequestProposal(); }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Home page ────────────────────────────────────────────────────────
function HomePage({ navigate, onSchedule, onCapabilityStatement }: { navigate: (p: string) => void; onSchedule: () => void; onCapabilityStatement: () => void }) {
  return (
    <>
      <Hero navigate={navigate} onSchedule={onSchedule} onCapabilityStatement={onCapabilityStatement} />
      <WorkforceCrisis />
      <WhyTraditionalFails />
      <PreliminaryReporting onSchedule={onSchedule} />
      <HowItWorks />
      <Solution onSchedule={onSchedule} navigate={navigate} />
      <GlobalCoverage navigate={navigate} />
      <QualityCompliance />
      <FinalCTA onSchedule={onSchedule} />
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [formOpen, setFormOpen] = useState(false);
  const [capOpen, setCapOpen] = useState(false);

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  useEffect(() => {
    injectFavicon();
  }, []);

  useEffect(() => {
    const seo = SEO[page] || SEO.home;
    document.title = seo.title;
    const updateMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    updateMeta("description", seo.desc);
    updateMeta("og:title", seo.title, true);
    updateMeta("og:description", seo.desc, true);
    updateMeta("og:type", "website", true);
    updateMeta("og:site_name", "RadCard Global", true);
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", seo.title);
    updateMeta("twitter:description", seo.desc);
    const schemaId = "radcard-schema";
    let schemaEl = document.getElementById(schemaId);
    if (!schemaEl) {
      schemaEl = document.createElement("script");
      schemaEl.id = schemaId;
      schemaEl.setAttribute("type", "application/ld+json");
      document.head.appendChild(schemaEl);
    }
    schemaEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "RadCard Global",
      "description": "Teleradiology company providing preliminary reporting services",
      "url": "https://www.radcardhealth.com",
      "email": "info@radcardhealth.com",
      "telephone": "+91-6302160253",
      "areaServed": ["United States", "United Kingdom", "Europe", "Middle East", "Australia", "New Zealand", "Singapore"],
      "serviceType": "Teleradiology and Preliminary Radiology Reporting",
    });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage navigate={navigate} onSchedule={openForm} onCapabilityStatement={() => setCapOpen(true)} />;
      case "preliminary-reporting": return <PreliminaryReportingPage onSchedule={openForm} navigate={navigate} />;
      case "solutions": return <SolutionsPage onSchedule={openForm} navigate={navigate} />;
      case "why-radcard": return <WhyRadCardPage onSchedule={openForm} navigate={navigate} />;
      case "regions": return <RegionsPage onSchedule={openForm} />;
      case "quality": return <QualityPage onSchedule={openForm} />;
      case "about": return <AboutPage onSchedule={openForm} />;
      case "contact": return <ContactPage />;
      default: return <HomePage navigate={navigate} onSchedule={openForm} onCapabilityStatement={() => setCapOpen(true)} />;
    }
  };

  return (
    <div style={{ fontFamily: C.font, minHeight: "100vh", overflowX: "hidden" }}>
      <Nav currentPage={page} navigate={navigate} onSchedule={openForm} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} onSchedule={openForm} />
      <FloatingButtons onSchedule={openForm} />
      {formOpen && <ConsultationForm onClose={closeForm} />}
      {capOpen && (
        <CapabilityModal
          onClose={() => setCapOpen(false)}
          onSchedule={openForm}
          onRequestProposal={() => { setCapOpen(false); navigate("contact"); }}
        />
      )}
    </div>
  );
}
