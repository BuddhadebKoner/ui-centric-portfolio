"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TermsAccordionSectionProps {
   number: string;
   title: string;
   children: React.ReactNode;
}

export default function TermsAccordionSection({
   number,
   title,
   children,
}: TermsAccordionSectionProps) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <section className="border border-border/20 rounded-lg overflow-hidden">
         {/* Mobile: clickable header */}
         <button
            className="w-full flex items-center justify-between px-5 py-4 lg:hidden text-left"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
         >
            <h2 className="text-base font-semibold text-foreground">
               {number}. {title}
            </h2>
            <ChevronDown
               className={`w-4 h-4 text-muted-foreground flex-shrink-0 ml-3 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                  }`}
            />
         </button>

         {/* Desktop: always-visible header */}
         <div className="hidden lg:block px-5 pt-5 pb-2">
            <h2 className="text-lg font-semibold text-foreground">
               {number}. {title}
            </h2>
         </div>

         {/* Content: hidden on mobile when closed, always visible on desktop */}
         <div
            className={`${isOpen ? "block" : "hidden"
               } lg:block px-5 pb-5 text-sm leading-relaxed text-muted-foreground space-y-3`}
         >
            {children}
         </div>
      </section>
   );
}
