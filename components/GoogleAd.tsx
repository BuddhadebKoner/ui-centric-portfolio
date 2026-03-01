"use client";

import { useEffect } from "react";

declare global {
   interface Window {
      adsbygoogle: unknown[];
   }
}

interface GoogleAdProps {
   adSlot: string;
   adFormat?: string;
   fullWidthResponsive?: boolean;
   className?: string;
   style?: React.CSSProperties;
}

export default function GoogleAd({
   adSlot,
   adFormat = "auto",
   fullWidthResponsive = true,
   className = "",
   style = { display: "block" },
}: GoogleAdProps) {
   useEffect(() => {
      try {
         (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
         // AdSense already initialized or blocked
      }
   }, []);

   return (
      <ins
         className={`adsbygoogle ${className}`}
         style={style}
         data-ad-client="ca-pub-7019770614779391"
         data-ad-slot={adSlot}
         data-ad-format={adFormat}
         data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
   );
}
