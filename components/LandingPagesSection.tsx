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

const landingPages = [
   {
      title: "E-commerce Platform",
      url: "zidio-project-three.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1753897864/Screenshot_2025-07-30_at_23-17-49_E-commerce_turllc.png",
      demoUrl: "https://zidio-project-three.vercel.app/",
   },
   {
      title: "AI Portfolio",
      url: "full-stack-portfolio.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1750497000/Screenshot_2025-06-20_at_10-31-47_Buddhadeb_Koner_FullStack_Web_Developer_d5qnbk.png",
      demoUrl: "https://full-stack-portfolio-nine-theta.vercel.app/",
   },
   {
      title: "Modern Developer Portfolio",
      url: "buddhadebkoner.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741678714/next-portfolio/works/zugytqjxnvodwx8cwrob.png",
      demoUrl: "https://buddhadebkoner.vercel.app/",
   },
   {
      title: "Notes Doo",
      url: "notesdoo.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1759997327/recentWork_tye4yp.png",
      demoUrl: "https://notesdoo.vercel.app/",
   },
   {
      title: "MongoDB Aggregation Pipeline",
      url: "mongodb-aggregation-pipeline-prrp.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1760068413/Screenshot_2025-10-10_at_09-23-19_Vite_React_vaapy0.png",
      demoUrl: "https://mongodb-aggregation-pipeline-prrp.vercel.app/",
   },
];

export default function LandingPagesSection() {
   const [api, setApi] = useState<CarouselApi>();

   const autoplayPlugin = useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
   );

   useEffect(() => {
      if (!api) return;
   }, [api]);

   return (
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="space-y-6 mb-12">
               <div className="flex items-center justify-between">
                  <div>
                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                        Popular Landing Pages
                     </h2>
                     <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2">
                        Explore my{" "}
                        <span className="text-highlight font-medium">
                           featured landing page designs
                        </span>{" "}
                        with stunning visuals and seamless user experience.
                     </p>
                  </div>
                  <Link
                     href="/landing-pages"
                     className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-card/80 backdrop-blur-sm border border-border text-foreground rounded-lg font-medium hover:bg-card hover:border-highlight transition-all"
                  >
                     View All
                     <svg
                        className="w-4 h-4"
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
                              <div className="flex items-center justify-between">
                                 <h3 className="text-xl font-semibold text-foreground">
                                    {page.title}
                                 </h3>
                                 <a
                                    href={page.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                                 >
                                    View Live
                                    <svg
                                       className="w-4 h-4"
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
         </div>
      </section>
   );
}
