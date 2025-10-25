
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { youtubeVideos } from "@/data";

export default function YouTubeSection() {
   const [api, setApi] = useState<CarouselApi>();

   const autoplayPlugin = useRef(
      Autoplay({ delay: 4000, stopOnInteraction: true })
   );

   useEffect(() => {
      if (!api) return;
   }, [api]);

   return (
      <section className="py-12 sm:py-16 md:py-20">
         <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  YouTube Videos
               </h2>
               <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
                  Watch my{" "}
                  <span className="text-highlight font-medium">
                     tutorials and guides
                  </span>{" "}
                  on web development and programming.
               </p>
            </div>

            {/* Videos Carousel */}
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
                  <CarouselContent className="-ml-2 sm:-ml-4">
                     {youtubeVideos.map((video, index) => (
                        <CarouselItem key={index} className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3">
                           <a
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg sm:rounded-xl overflow-hidden hover:border-highlight transition-all hover:shadow-lg block h-full"
                           >
                              {/* Video Thumbnail */}
                              <div className="relative aspect-video overflow-hidden bg-muted">
                                 <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    width={1280}
                                    height={720}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                 />
                                 {/* Play Button Overlay */}
                                 <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                       <svg
                                          className="w-8 h-8 text-white ml-1"
                                          fill="currentColor"
                                          viewBox="0 0 24 24"
                                       >
                                          <path d="M8 5v14l11-7z" />
                                       </svg>
                                    </div>
                                 </div>
                              </div>

                              {/* Video Content */}
                              <div className="p-6">
                                 <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-highlight transition-colors">
                                    {video.title}
                                 </h3>
                              </div>
                           </a>
                        </CarouselItem>
                     ))}
                  </CarouselContent>
               </Carousel>

               {/* Navigation Buttons - Bottom Right */}
               <div className="flex justify-end gap-3 mt-6">
                  <button
                     onClick={() => api?.scrollPrev()}
                     disabled={!api?.canScrollPrev()}
                     className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:border-highlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                     aria-label="Previous slide"
                  >
                     <svg
                        className="w-5 h-5 text-foreground"
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
                     className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-card hover:border-highlight transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                     aria-label="Next slide"
                  >
                     <svg
                        className="w-5 h-5 text-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                  </button>
               </div>
            </div>

            {/* Channel Link */}
            <div className="mt-12 text-center">
               <a
                  href="https://www.youtube.com/@AsyncBuddhadeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
               >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Subscribe to Channel
               </a>
            </div>
         </div>
      </section>
   );
}
