"use client";

import { useEffect, useState } from "react";
import { Iphone } from "@/components/ui/iphone";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   type CarouselApi,
} from "@/components/ui/carousel";
import { Download } from "lucide-react";

const appScreenshots = [
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772308422/Screenshot_20260301_010021_trn3on.jpg",
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772308421/Screenshot_20260301_010054_ycqawi.jpg",
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772308421/Screenshot_20260301_010101_l1vxwn.jpg",
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772308422/Screenshot_20260301_010258_zlhtet.jpg",
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772308424/Screenshot_20260301_010317_qzbeqw.jpg",
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772308421/Screenshot_20260301_010818_dmknky.jpg",
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772308424/Screenshot_20260301_010836_vz6syg.jpg",
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772308427/Screenshot_20260301_011048_r93qum.jpg",
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772308431/Screenshot_20260301_011318_unmqsh.jpg",
   "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772308433/Screenshot_20260301_011501_jcfza8.jpg",
];

const APK_DOWNLOAD_LINK =
   "https://github.com/BuddhadebKoner/attendance-native-app/releases/tag/smart-attdence";

export default function SubHero() {
   const [api, setApi] = useState<CarouselApi>();
   const [current, setCurrent] = useState(0);

   useEffect(() => {
      if (!api) return;
      setCurrent(api.selectedScrollSnap());
      api.on("select", () => setCurrent(api.selectedScrollSnap()));
   }, [api]);

   return (
      <section className="py-20">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
               <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                     Recent Work
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-xl">
                     Latest and most Impactful Project that{" "}
                     <span className="text-highlight font-medium">
                        Combine Fresh Insights
                     </span>{" "}
                     with real-world application.
                  </p>
               </div>

               <a
                  href={APK_DOWNLOAD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 w-fit"
               >
                  <Download className="h-4 w-4" />
                  Download APK
               </a>
            </div>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-12">
               <span className="inline-block h-3 w-3 rounded-full bg-green-500 animate-pulse" />
               <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
                  Smart Attendance — Android App
               </span>
            </div>

            {/* Single large phone frame — drag to browse */}
            <div className="flex flex-col items-center gap-8">
               <Carousel
                  setApi={setApi}
                  opts={{ loop: true, align: "center" }}
                  className="w-[260px] sm:w-[320px] md:w-[370px] lg:w-[420px] cursor-grab active:cursor-grabbing"
               >
                  <CarouselContent>
                     {appScreenshots.map((src, index) => (
                        <CarouselItem key={index}>
                           <Iphone
                              src={src}
                              className="w-full drop-shadow-2xl select-none"
                           />
                        </CarouselItem>
                     ))}
                  </CarouselContent>
               </Carousel>

               {/* Dot indicators */}
               <div className="flex items-center justify-center gap-2">
                  {appScreenshots.map((_, index) => (
                     <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Go to screenshot ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${index === current
                           ? "w-6 bg-foreground"
                           : "w-2 bg-foreground/25 hover:bg-foreground/50"
                           }`}
                     />
                  ))}
               </div>

               {/* Counter */}
               <p className="text-xs text-muted-foreground tracking-wide tabular-nums -mt-4">
                  {current + 1} / {appScreenshots.length} — drag to browse
               </p>
            </div>
         </div>
      </section>
   );
}
