"use client";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Hero() {
   return (
      <section id="hero" className="min-h-[80vh] flex items-center justify-center pt-16">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* Left Content */}
               <div className="space-y-8">
                  {/* Badge with Hover Border Gradient */}
                  <div className="inline-block">
                     <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="div"
                        className="bg-background/50 backdrop-blur-sm text-muted-foreground flex items-center space-x-2 px-4 py-2"
                     >
                        <svg
                           className="h-3 w-3 text-highlight"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span className="text-sm">Trusted by 1.5M+ Developers Worldwide</span>
                     </HoverBorderGradient>
                  </div>

                  {/* Heading */}
                  <h1 className="font-[family-name:var(--font-manrope)] text-[72px] font-semibold leading-[72px]">
                     <span className="text-foreground">Consistency</span>
                     <br />
                     <span className="text-foreground">and Community</span>
                  </h1>

                  {/* Description */}
                  <p className="font-[family-name:var(--font-montserrat)] text-[20px] font-medium leading-[28px] text-muted-foreground max-w-xl">
                     Content is everywhere. We provide what is rare —{" "}
                     <span className="text-highlight font-semibold">
                        An Unmatched, Community-Driven Learning Experience
                     </span>{" "}
                     with peer learning, bounties, code reviews, doubt sessions, alumni network.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                     <button className="px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2 group">
                        Start Learning
                        <svg
                           className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                     </button>
                     <button className="px-6 py-3 bg-transparent border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-all flex items-center gap-2">
                        See The Impact
                        <svg
                           className="w-4 h-4"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                     </button>
                  </div>
               </div>

               {/* Right Image */}
               <div className="relative lg:block hidden">
                  <div className="relative w-full max-w-lg ml-auto">
                     {/* Main Image with gradient fade */}
                     <div className="relative overflow-hidden">
                        {/* Subtle side fades */}
                        {/* <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background/30 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background/30 to-transparent z-10 pointer-events-none"></div> */}

                        <Image
                           src="https://res.cloudinary.com/dsfztnp9x/image/upload/v1759997435/Picsart_25-10-09_13-33-53-323_vk0dqp.png"
                           alt="Profile"
                           width={500}
                           height={600}
                           className="w-full h-auto object-cover"
                           priority
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
