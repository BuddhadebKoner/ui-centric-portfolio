"use client";

import { useEffect } from "react";

declare global {
   interface Window {
      adsbygoogle: unknown[];
   }
}

interface GoogleAdProps {
   adSlot: string;
   variant?: "horizontal" | "sidebar";
   className?: string;
   showLabel?: boolean;
}

export default function GoogleAd({
   adSlot,
   variant = "horizontal",
   className = "",
   showLabel = true,
}: GoogleAdProps) {
   useEffect(() => {
      try {
         (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
         // AdSense already initialized or blocked
      }
   }, []);

   if (variant === "sidebar") {
      return (
         <div className={`${className}`}>
            {showLabel && (
               <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest text-center mb-1 select-none">
                  Ad
               </p>
            )}
            <div className="w-[160px] min-h-[600px] overflow-hidden rounded-md bg-card/20 flex items-start justify-center">
               <ins
                  className="adsbygoogle"
                  style={{ display: "block", width: "160px", height: "600px" }}
                  data-ad-client="ca-pub-7019770614779391"
                  data-ad-slot={adSlot}
                  data-ad-format="vertical"
                  data-full-width-responsive="false"
               />
            </div>
         </div>
      );
   }

   // horizontal (default)
   return (
      <div className={`w-full my-6 sm:my-8 ${className}`}>
         {showLabel && (
            <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest text-center mb-1 select-none">
               Advertisement
            </p>
         )}
         <div className="w-full overflow-hidden rounded-md bg-card/20 min-h-[90px] flex items-center justify-center">
            <ins
               className="adsbygoogle w-full"
               style={{ display: "block" }}
               data-ad-client="ca-pub-7019770614779391"
               data-ad-slot={adSlot}
               data-ad-format="horizontal"
               data-full-width-responsive="true"
            />
         </div>
      </div>
   );
}
