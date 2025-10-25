"use client";

import { useEffect, useRef, useState } from "react";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Safari } from "@/components/ui/safari";
import Link from "next/link";
import { landingPages } from "@/data";

export default function LandingPagesSection() {
   const [api, setApi] = useState<CarouselApi>();

   const autoplayPlugin = useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
   );

   useEffect(() => {
      if (!api) return;
   }, [api]);

   return (
      <section className="py-12 sm:py-16 md:py-20">
         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                     <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                        Popular Landing Pages
                     </h2>
                     <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mt-1 sm:mt-2">
                        Explore my{" "}
                        <span className="text-highlight font-medium">
                           featured landing page designs
                        </span>{" "}
                        with stunning visuals and seamless user experience.
                     </p>
                  </div>
                  <Link
                     href="/landing-pages"
                     className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-md sm:rounded-lg text-xs sm:text-sm font-medium hover:bg-card hover:border-highlight transition-all"
                  >
                     View All
                     <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M9 5l7 7-7 7"
                        />
                     </svg>
                  </Link>
               </div>
            </div>

            {/* Landing Pages Carousel */}
            <div className="relative">
               <Carousel
                  setApi={setApi}
                  plugins={[autoplayPlugin.current]}
                  className="w-full"
                  opts={{
                     align: "start",
                     loop: true,
                  }}
                  onMouseEnter={autoplayPlugin.current.stop}
                  onMouseLeave={autoplayPlugin.current.reset}
               >
                  <CarouselContent>
                     {landingPages.map((page, index) => (
                        <CarouselItem key={index}>
                           <div className="space-y-4">
                              {/* Safari Browser Mockup */}
                              <Safari
                                 url={page.url}
                                 className="w-full"
                                 imageSrc={page.imageSrc}
                              />

                              {/* Page Info */}
                              <div className="flex items-center justify-between gap-2">
                                 <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground line-clamp-1">
                                    {page.title}
                                 </h3>
                                 <a
                                    href={page.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-foreground text-background rounded-md sm:rounded-lg text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1 sm:gap-2 whitespace-nowrap"
                                 >
                                    <span className="hidden sm:inline">View Live</span>
                                    <span className="sm:hidden">View</span>
                                    <svg
                                       className="w-3 h-3 sm:w-4 sm:h-4"
                                       fill="none"
                                       viewBox="0 0 24 24"
                                       stroke="currentColor"
                                    >
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                       />
                                    </svg>
                                 </a>
                              </div>
                           </div>
                        </CarouselItem>
                     ))}
                  </CarouselContent>
               </Carousel>

               {/* Navigation Buttons - Bottom Right */}
               <div className="flex justify-end gap-2 sm:gap-3 mt-4 sm:mt-6">
                  <button
                     onClick={() => api?.scrollPrev()}
                     disabled={!api?.canScrollPrev()}
                     className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:border-highlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                     aria-label="Previous slide"
                  >
                     <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                     </svg>
                  </button>
                  <button
                     onClick={() => api?.scrollNext()}
                     disabled={!api?.canScrollNext()}
                     className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:border-highlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                     aria-label="Next slide"
                  >
                     <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
