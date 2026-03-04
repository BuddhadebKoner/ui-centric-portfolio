"use client";

import { useState } from "react";
import ShopNavbar from "@/components/shop/ShopNavbar";
import ShopSidebar from "@/components/shop/ShopSidebar";
import { X, Zap } from "lucide-react";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isBannerVisible, setIsBannerVisible] = useState(true);

   const bannerHeight = isBannerVisible ? "2.75rem" : "0rem";
   const navbarTop = isBannerVisible ? "2.75rem" : "0rem";
   const contentTop = isBannerVisible ? "calc(2.75rem + 4rem)" : "4rem";

   return (
      <>
         {/* Fixed Background — same as portfolio */}
         <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1410] to-[#0f0a08]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f5] via-[#ebe8e0] to-[#e8e5dd] dark:opacity-0 opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-[#fbf1e0]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#fbf1e0]/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-[#fbf1e0]/10 to-transparent rounded-full blur-3xl" />
         </div>

         {/* Promo Banner */}
         <div
            className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-300 ${isBannerVisible ? "h-[2.75rem]" : "h-0"
               }`}
            aria-live="polite"
         >
            <div className="h-[2.75rem] flex items-center justify-center gap-3 px-4 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 dark:from-amber-600 dark:via-yellow-500 dark:to-amber-600">
               <Zap className="w-3.5 h-3.5 text-amber-900 dark:text-amber-950 shrink-0" />
               <p className="text-xs sm:text-sm font-semibold text-amber-900 dark:text-amber-950 text-center leading-tight truncate">
                  Up to{" "}
                  <span className="underline underline-offset-2 decoration-2">90% off</span>{" "}
                  on Advanced JavaScript Course —{" "}
                  <a
                     href="/shop/courses"
                     className="inline-flex underline underline-offset-2 font-bold hover:no-underline transition-all"
                  >
                     Grab it now
                  </a>
               </p>
               <button
                  onClick={() => setIsBannerVisible(false)}
                  className="ml-auto shrink-0 p-1 rounded hover:bg-amber-900/20 transition-colors text-amber-900 dark:text-amber-950"
                  aria-label="Dismiss banner"
               >
                  <X className="w-3.5 h-3.5" />
               </button>
            </div>
         </div>

         {/* Navbar */}
         <ShopNavbar
            onMenuToggle={() => setIsSidebarOpen((v) => !v)}
            navbarTop={bannerHeight}
         />

         {/* Sidebar */}
         <ShopSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            topOffset={contentTop}
         />

         {/* Main content wrapper */}
         <div
            className="transition-all duration-300"
            style={{ paddingTop: contentTop }}
         >
            {/* On desktop: offset content by sidebar width */}
            <div className="lg:pl-64 min-h-screen">
               <main className="no-scrollbar overflow-x-hidden w-full">
                  {children}
               </main>
            </div>
         </div>
      </>
   );
}
