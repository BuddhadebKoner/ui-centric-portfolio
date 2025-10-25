"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { events } from "@/data";

export default function EventsSection() {
   const autoplayPlugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))
   const [api, setApi] = useState<CarouselApi | undefined>()

   useEffect(() => {
      if (!api) return
   }, [api])

   const ev = events[0]

   return (
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center justify-between mb-8">
               <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Events & Workshops</h2>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2">
                     Highlights of events I&apos;ve conducted or participated in — talks, workshops and community meetups.
                  </p>
               </div>
               <Link
                  href="/events"
                  className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-lg font-medium hover:bg-card hover:border-highlight transition-all"
               >
                  View All
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
               </Link>
            </div>

            {/* Section body: carousel (left) + fixed info (right) */}
            <div className="relative">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Carousel column */}
                  <div>
                     <Carousel
                        setApi={setApi}
                        plugins={[autoplayPlugin.current]}
                        className="w-full"
                        opts={{ align: "start", loop: true }}
                        onMouseEnter={autoplayPlugin.current.stop}
                        onMouseLeave={autoplayPlugin.current.reset}
                     >
                        <CarouselContent>
                           {ev.images.map((img, idx) => (
                              <CarouselItem key={idx}>
                                 <div className="space-y-4">
                                    <div className="relative aspect-video overflow-hidden rounded-lg">
                                       {typeof img === "string" ? (
                                          <Image src={img} alt={`Event image ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                       ) : (
                                          <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                       )}
                                    </div>
                                 </div>
                              </CarouselItem>
                           ))}
                        </CarouselContent>
                     </Carousel>
                  </div>

                  {/* Fixed info column */}
                  <div className="flex flex-col justify-center">
                     <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">{ev.title}</h3>
                        <div className="text-xs sm:text-sm text-muted-foreground">{ev.date} • {ev.location}</div>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{ev.description}</p>

                        <div className="flex flex-wrap gap-2 mt-2">
                           {ev.tags.slice(0, 4).map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-accent/20 text-foreground rounded text-xs">{tag}</span>
                           ))}
                        </div>

                        <div className="flex gap-3 mt-6">
                           {ev.demoUrl && (
                              <a href={ev.demoUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                                 View Post
                                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                 </svg>
                              </a>
                           )}

                           <Link href="/events" className="px-6 py-3 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-lg font-medium hover:bg-card hover:border-highlight transition-all flex items-center gap-2">
                              Details
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Navigation Buttons - Bottom Right (like landing pages) */}
               <div className="flex justify-end gap-3 mt-6">
                  <button
                     onClick={() => api?.scrollPrev()}
                     disabled={!api?.canScrollPrev()}
                     className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:border-highlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                     aria-label="Previous slide"
                  >
                     <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                     </svg>
                  </button>
                  <button
                     onClick={() => api?.scrollNext()}
                     disabled={!api?.canScrollNext()}
                     className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:border-highlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                     aria-label="Next slide"
                  >
                     <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}
