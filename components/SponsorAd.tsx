"use client";

import { useMemo, useState, useEffect } from "react";
import { sponsors, type Sponsor } from "@/data";

/* ─── Helper: pick a random active sponsor, optionally by ID ─── */
function pickSponsor(sponsorId?: string): Sponsor | null {
   const active = sponsors.filter((s) => s.isActive);
   if (active.length === 0) return null;
   if (sponsorId) return active.find((s) => s.id === sponsorId) ?? null;
   return active[Math.floor(Math.random() * active.length)];
}

/* ════════════════════════════════════════════════════════════════
   CARD VARIANT  —  300 × 250 Google Ads display card
   Position: fixed bottom-left (default)
   ════════════════════════════════════════════════════════════════ */
interface SponsorAdProps {
   /** Lock to a specific sponsor id; omit for random */
   sponsorId?: string;
   /** Corner to anchor the fixed card. Default: "bottom-left" */
   position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
   /**
    * When true the card has no fixed positioning — use inside a shared
    * fixed wrapper (e.g. SponsorAdStack) to avoid overlap.
    */
   inline?: boolean;
}

const positionClasses: Record<NonNullable<SponsorAdProps["position"]>, string> = {
   "bottom-left": "fixed bottom-4 left-4  sm:bottom-6 sm:left-6",
   "bottom-right": "fixed bottom-4 right-4 sm:bottom-6 sm:right-6",
   "top-left": "fixed top-20  left-4  sm:top-24  sm:left-6",
   "top-right": "fixed top-20  right-4 sm:top-24  sm:right-6",
};

export default function SponsorAd({ sponsorId, position = "bottom-left", inline = false }: SponsorAdProps) {
   const sponsor = useMemo(() => pickSponsor(sponsorId), [sponsorId]);

   // Default collapsed on mobile (< 640px), expanded on sm+
   const [expanded, setExpanded] = useState(false);

   useEffect(() => {
      const isMobile = window.innerWidth < 640;
      setExpanded(!isMobile);
   }, []);

   if (!sponsor) return null;

   const outerClass = inline
      ? "w-[300px]"
      : `${positionClasses[position]} z-40 w-[300px]`;

   return (
      <div className={outerClass}>
         {/* "Ad" label — hidden when collapsed */}
         {expanded && (
            <p className="text-[11px] font-normal mb-1 select-none pl-0.5" style={{ color: "#70757a" }}>
               Ad
            </p>
         )}

         <div
            style={{
               width: 300,
               backgroundColor: "#ffffff",
               border: "1px solid #e0e0e0",
               borderRadius: 8,
               boxShadow: "0 1px 6px rgba(32,33,36,.28)",
               overflow: "hidden",
            }}
         >
            {/* ── Always-visible header strip ── */}
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 10px",
                  borderBottom: expanded ? "1px solid #e8eaed" : "none",
                  backgroundColor: "#f8f9fa",
                  cursor: "pointer",
                  userSelect: "none",
               }}
               onClick={() => setExpanded((v) => !v)}
               role="button"
               aria-expanded={expanded}
               aria-label={expanded ? "Collapse ad" : "Expand ad"}
            >
               <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                     src={sponsor.logo}
                     alt={sponsor.name}
                     style={{ height: 18, width: 18, objectFit: "contain", flexShrink: 0 }}
                     loading="lazy"
                  />
                  <span
                     style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#202124",
                        fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        maxWidth: 180,
                     }}
                  >
                     {sponsor.name}
                  </span>
                  <span
                     style={{
                        fontSize: 10,
                        color: "#70757a",
                        fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                        backgroundColor: "#e8eaed",
                        padding: "1px 5px",
                        borderRadius: 3,
                        flexShrink: 0,
                     }}
                  >
                     Ad
                  </span>
               </div>

               {/* Chevron toggle */}
               <span
                  style={{
                     display: "inline-flex",
                     alignItems: "center",
                     justifyContent: "center",
                     width: 24,
                     height: 24,
                     borderRadius: "50%",
                     backgroundColor: "#e8eaed",
                     flexShrink: 0,
                     transition: "background 150ms",
                  }}
               >
                  <svg
                     width="12"
                     height="12"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="#5f6368"
                     strokeWidth="2.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     style={{
                        transition: "transform 250ms ease",
                        transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                     }}
                  >
                     <path d="M6 9l6 6 6-6" />
                  </svg>
               </span>
            </div>

            {/* ── Expandable body ── */}
            <div
               style={{
                  maxHeight: expanded ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 300ms ease",
               }}
            >
               <a
                  href={sponsor.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group block relative"
                  style={{ textDecoration: "none" }}
               >
                  {/* AdChoices triangle */}
                  <div className="absolute top-0 right-0 z-10" style={{ width: 15, height: 15 }}>
                     <svg viewBox="0 0 15 15" width="15" height="15">
                        <path d="M15 0v15L0 0z" fill="#4285f4" opacity="0.85" />
                     </svg>
                  </div>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                     src={sponsor.image}
                     alt={sponsor.title}
                     style={{ width: 300, height: 157, objectFit: "cover", display: "block" }}
                     loading="lazy"
                  />

                  <div style={{ padding: "10px 12px 12px" }}>
                     <div
                        className="group-hover:underline"
                        style={{
                           fontSize: 15, fontWeight: 700, lineHeight: "20px", color: "#202124",
                           fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                           display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                        }}
                     >
                        {sponsor.title}
                     </div>

                     <div
                        style={{
                           marginTop: 4, fontSize: 13, lineHeight: "18px", color: "#1a73e8",
                           fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                           display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                        }}
                     >
                        {sponsor.description}
                     </div>

                     <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: 10 }}>
                        <span
                           className="group-hover:opacity-80"
                           style={{
                              display: "inline-flex", alignItems: "center", justifyContent: "center",
                              width: 36, height: 36, borderRadius: "50%", backgroundColor: "#202124",
                              transition: "opacity 200ms", flexShrink: 0,
                           }}
                        >
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 5l7 7-7 7" />
                           </svg>
                        </span>
                     </div>
                  </div>
               </a>
            </div>
         </div>
      </div>
   );
}

/* ════════════════════════════════════════════════════════════════
   HORIZONTAL VARIANT  —  Google Ads text+image banner
   Inline placement (not fixed); pass className for spacing
   ════════════════════════════════════════════════════════════════ */
interface SponsorAdHorizontalProps {
   /** Lock to a specific sponsor id; omit for random */
   sponsorId?: string;
   /** Extra wrapper class names */
   className?: string;
}

export function SponsorAdHorizontal({ sponsorId, className = "" }: SponsorAdHorizontalProps) {
   const sponsor = useMemo(() => pickSponsor(sponsorId), [sponsorId]);
   if (!sponsor) return null;

   return (
      <div className={`w-full my-4 sm:my-6 ${className}`}>
         {/* "Ad" label — identical to Google Ads */}
         <p className="text-[10px] font-normal mb-0.5 select-none" style={{ color: "#70757a" }}>
            Ad
         </p>

         {/* Compact single-row premium banner */}
         <a
            href={sponsor.ctaUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group relative flex items-center overflow-hidden w-full"
            style={{
               height: 64,
               backgroundColor: "#ffffff",
               border: "1px solid #e0e0e0",
               borderRadius: 10,
               boxShadow: "0 2px 8px rgba(32,33,36,.14), 0 0 0 0.5px rgba(32,33,36,.06)",
               textDecoration: "none",
            }}
         >
            {/* AdChoices triangle */}
            <div className="absolute top-0 right-0 z-10" style={{ width: 13, height: 13 }}>
               <svg viewBox="0 0 15 15" width="13" height="13">
                  <path d="M15 0v15L0 0z" fill="#4285f4" opacity="0.8" />
               </svg>
            </div>

            {/* Left accent stripe */}
            <div style={{ width: 4, alignSelf: "stretch", backgroundColor: "#1a73e8", flexShrink: 0 }} />

            {/* Logo — fixed size, never shrinks */}
            <div className="flex items-center justify-center flex-shrink-0" style={{ width: 56, height: 64 }}>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  style={{ height: 28, width: 28, objectFit: "contain", display: "block", flexShrink: 0 }}
                  loading="lazy"
               />
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 36, backgroundColor: "#e8eaed", flexShrink: 0 }} />

            {/* Title + company — always visible, takes remaining space */}
            <div className="flex flex-col justify-center min-w-0 flex-1 px-3">
               {/* Title */}
               <div
                  className="group-hover:underline"
                  style={{
                     fontSize: 13,
                     fontWeight: 700,
                     lineHeight: "17px",
                     color: "#202124",
                     fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                     overflow: "hidden",
                     whiteSpace: "nowrap",
                     textOverflow: "ellipsis",
                  }}
               >
                  {sponsor.title}
               </div>
               {/* Company name */}
               <div
                  style={{
                     fontSize: 11,
                     color: "#70757a",
                     fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                     marginTop: 2,
                     overflow: "hidden",
                     whiteSpace: "nowrap",
                     textOverflow: "ellipsis",
                  }}
               >
                  {sponsor.name}
               </div>
            </div>

            {/* Description — hidden on mobile, visible md+ */}
            <div
               className="hidden md:block flex-shrink-0 px-3"
               style={{ maxWidth: 300 }}
            >
               <div
                  style={{
                     fontSize: 12,
                     lineHeight: "16px",
                     color: "#1a73e8",
                     fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                     overflow: "hidden",
                     display: "-webkit-box",
                     WebkitLineClamp: 2,
                     WebkitBoxOrient: "vertical",
                  }}
               >
                  {sponsor.description}
               </div>
            </div>

            {/* CTA pill — always visible, fixed width, never shrinks */}
            <div className="flex-shrink-0 pr-4 pl-2">
               <span
                  className="group-hover:opacity-80"
                  style={{
                     display: "inline-flex",
                     alignItems: "center",
                     justifyContent: "center",
                     padding: "7px 18px",
                     borderRadius: 20,
                     backgroundColor: "#202124",
                     color: "#ffffff",
                     fontSize: 13,
                     fontWeight: 500,
                     fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                     whiteSpace: "nowrap",
                     transition: "opacity 200ms",
                  }}
               >
                  {sponsor.ctaText}
               </span>
            </div>
         </a>
      </div>
   );
}

/* ════════════════════════════════════════════════════════════════
   VERTICAL VARIANT  —  Google Ads 160×600 sidebar display ad
   Inline placement inside a sticky aside; width fixed at 160px
   ════════════════════════════════════════════════════════════════ */
interface SponsorAdVerticalProps {
   /** Lock to a specific sponsor id; omit for random */
   sponsorId?: string;
   /** Extra wrapper class names */
   className?: string;
}

export function SponsorAdVertical({ sponsorId, className = "" }: SponsorAdVerticalProps) {
   const sponsor = useMemo(() => pickSponsor(sponsorId), [sponsorId]);
   if (!sponsor) return null;

   return (
      <div className={`w-[160px] ${className}`}>
         {/* "Ad" label */}
         <p className="text-[10px] font-normal mb-0.5 select-none" style={{ color: "#70757a" }}>
            Ad
         </p>

         <a
            href={sponsor.ctaUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group block relative overflow-hidden"
            style={{
               width: 160,
               backgroundColor: "#ffffff",
               border: "1px solid #e0e0e0",
               borderRadius: 10,
               boxShadow: "0 2px 8px rgba(32,33,36,.14), 0 0 0 0.5px rgba(32,33,36,.06)",
               textDecoration: "none",
            }}
         >
            {/* AdChoices triangle */}
            <div className="absolute top-0 right-0 z-10" style={{ width: 13, height: 13 }}>
               <svg viewBox="0 0 15 15" width="13" height="13">
                  <path d="M15 0v15L0 0z" fill="#4285f4" opacity="0.8" />
               </svg>
            </div>

            {/* Top accent bar */}
            <div style={{ height: 4, backgroundColor: "#1a73e8", width: "100%" }} />

            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
               src={sponsor.image}
               alt={sponsor.title}
               style={{ width: 160, height: 120, objectFit: "cover", display: "block" }}
               loading="lazy"
            />

            {/* Content */}
            <div style={{ padding: "10px 10px 12px" }}>
               {/* Logo + company name */}
               <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                     src={sponsor.logo}
                     alt={sponsor.name}
                     style={{ height: 16, width: 16, objectFit: "contain", flexShrink: 0 }}
                     loading="lazy"
                  />
                  <span
                     style={{
                        fontSize: 10,
                        color: "#70757a",
                        fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                     }}
                  >
                     {sponsor.name}
                  </span>
               </div>

               {/* Title */}
               <div
                  className="group-hover:underline"
                  style={{
                     fontSize: 13,
                     fontWeight: 700,
                     lineHeight: "17px",
                     color: "#202124",
                     fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                     display: "-webkit-box",
                     WebkitLineClamp: 3,
                     WebkitBoxOrient: "vertical",
                     overflow: "hidden",
                     marginBottom: 6,
                  }}
               >
                  {sponsor.title}
               </div>

               {/* Description — Google blue */}
               <div
                  style={{
                     fontSize: 11,
                     lineHeight: "15px",
                     color: "#1a73e8",
                     fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                     display: "-webkit-box",
                     WebkitLineClamp: 4,
                     WebkitBoxOrient: "vertical",
                     overflow: "hidden",
                     marginBottom: 12,
                  }}
               >
                  {sponsor.description}
               </div>

               {/* CTA — full width dark pill */}
               <span
                  className="group-hover:opacity-80"
                  style={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     width: "100%",
                     padding: "8px 0",
                     borderRadius: 20,
                     backgroundColor: "#202124",
                     color: "#ffffff",
                     fontSize: 12,
                     fontWeight: 500,
                     fontFamily: "Google Sans, Roboto, Arial, sans-serif",
                     transition: "opacity 200ms",
                  }}
               >
                  {sponsor.ctaText}
               </span>
            </div>
         </a>
      </div>
   );
}
