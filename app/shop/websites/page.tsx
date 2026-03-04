"use client";

import { useState } from "react";
import { websites, techStackLabels, TechStack } from "@/data/shop";
import ProductGrid from "@/components/shop/ProductGrid";

const allStacks: TechStack[] = [
   "full-stack",
   "react-js",
   "next-js",
   "javascript",
   "html-css",
];

export default function WebsitesPage() {
   const [activeFilter, setActiveFilter] = useState<TechStack | null>(null);

   const filtered = activeFilter
      ? websites.filter((p) => p.techStack.includes(activeFilter))
      : websites;

   return (
      <div className="px-6 lg:px-20 pt-10 mb-20">
         {/* Header */}
         <div className="py-2.5">
            <h1 className="bg-gradient-to-r from-foreground to-muted-foreground text-transparent bg-clip-text text-2xl lg:text-3xl font-semibold">
               Website Projects
            </h1>
            <p className="text-sm mt-2 max-w-xl text-muted-foreground">
               Discover premium full-stack website templates and starters ideal for
               developers, freelancers, and final year students.
            </p>
         </div>

         {/* Filter chips */}
         <div className="flex flex-wrap gap-4 mt-8">
            <button
               onClick={() => setActiveFilter(null)}
               className="flex items-center justify-center gap-2 bg-white/6 backdrop-blur px-6 h-9 rounded-full cursor-pointer border border-border/50 text-foreground hover:ring ring-foreground/25 hover:scale-103 active:scale-97 transition-all"
            >
               <p className="text-sm flex items-center gap-1">
                  <span className={`transition-all duration-300 ${activeFilter === null ? "text-3xl" : "text-[0px]"}`}>
                     •
                  </span>
                  All
               </p>
            </button>
            {allStacks.map((stack) => (
               <button
                  key={stack}
                  onClick={() => setActiveFilter(stack === activeFilter ? null : stack)}
                  className="flex items-center justify-center gap-2 bg-white/6 backdrop-blur px-6 h-9 rounded-full cursor-pointer border border-border/50 text-muted-foreground hover:ring ring-foreground/25 hover:scale-103 active:scale-97 transition-all"
               >
                  <p className="text-sm flex items-center gap-1">
                     <span className={`transition-all duration-300 ${activeFilter === stack ? "text-3xl text-foreground" : "text-[0px]"}`}>
                        •
                     </span>
                     <span className={activeFilter === stack ? "text-foreground" : ""}>
                        {techStackLabels[stack]}
                     </span>
                  </p>
               </button>
            ))}
         </div>

         {/* Grid */}
         <ProductGrid products={filtered} basePath="/shop/websites" />
      </div>
   );
}
