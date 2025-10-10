"use client";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function Hero() {
   const [isDialogOpen, setIsDialogOpen] = useState(false);

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
                        <span className="text-sm">Available for Freelance Projects</span>
                     </HoverBorderGradient>
                  </div>

                  {/* Heading */}
                  <h1 className="font-[family-name:var(--font-manrope)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-semibold leading-tight lg:leading-[1.1]">
                     <span className="text-foreground">Consistency</span>
                     <br />
                     <span className="text-foreground">and Community</span>
                  </h1>

                  {/* Description */}
                  <p className="font-[family-name:var(--font-montserrat)] text-base sm:text-lg md:text-xl lg:text-[20px] font-medium leading-relaxed text-muted-foreground max-w-xl">
                     Building digital experiences that matter —{" "}
                     <span className="text-highlight font-semibold">
                        Crafting Innovative Web Solutions
                     </span>{" "}
                     with modern technologies, clean code, responsive design, performance optimization.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                     <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                           <button className="px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2 group">
                              Hire Me
                              <svg
                                 className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                           </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-md border-border">
                           <DialogHeader>
                              <DialogTitle className="text-2xl font-semibold text-foreground">
                                 Let's Work Together
                              </DialogTitle>
                              <DialogDescription className="text-muted-foreground">
                                 Fill out the form below and I'll get back to you as soon as possible.
                              </DialogDescription>
                           </DialogHeader>
                           <form className="space-y-4 mt-4">
                              {/* Name Field */}
                              <div className="space-y-2">
                                 <label htmlFor="name" className="text-sm font-medium text-foreground">
                                    Full Name
                                 </label>
                                 <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight/50 transition-all"
                                 />
                              </div>

                              {/* Email Field */}
                              <div className="space-y-2">
                                 <label htmlFor="email" className="text-sm font-medium text-foreground">
                                    Email Address
                                 </label>
                                 <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight/50 transition-all"
                                 />
                              </div>

                              {/* Company Field */}
                              <div className="space-y-2">
                                 <label htmlFor="company" className="text-sm font-medium text-foreground">
                                    Company (Optional)
                                 </label>
                                 <input
                                    id="company"
                                    type="text"
                                    placeholder="Your Company"
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight/50 transition-all"
                                 />
                              </div>

                              {/* Project Details Field */}
                              <div className="space-y-2">
                                 <label htmlFor="message" className="text-sm font-medium text-foreground">
                                    Project Details
                                 </label>
                                 <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight/50 transition-all resize-none"
                                 />
                              </div>

                              {/* Currency and Budget Field */}
                              <div className="grid grid-cols-2 gap-3">
                                 {/* Currency Selection */}
                                 <div className="space-y-2">
                                    <label htmlFor="currency" className="text-sm font-medium text-foreground">
                                       Currency
                                    </label>
                                    <select
                                       id="currency"
                                       className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-highlight/50 transition-all"
                                    >
                                       <option value="USD">USD ($)</option>
                                       <option value="INR">INR (₹)</option>
                                    </select>
                                 </div>

                                 {/* Budget Range */}
                                 <div className="space-y-2">
                                    <label htmlFor="budget" className="text-sm font-medium text-foreground">
                                       Budget Range
                                    </label>
                                    <select
                                       id="budget"
                                       className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-highlight/50 transition-all"
                                    >
                                       <option value="">Select range</option>
                                       <option value="1000-5000">1K - 5K</option>
                                       <option value="5000-10000">5K - 10K</option>
                                       <option value="10000-25000">10K - 25K</option>
                                       <option value="25000+">25K+</option>
                                    </select>
                                 </div>
                              </div>

                              {/* Submit Button */}
                              <div className="flex gap-3 pt-2">
                                 <button
                                    type="submit"
                                    className="flex-1 px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-all"
                                 >
                                    Send Message
                                 </button>
                                 <button
                                    type="button"
                                    onClick={() => setIsDialogOpen(false)}
                                    className="px-6 py-3 bg-transparent border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-all"
                                 >
                                    Cancel
                                 </button>
                              </div>
                           </form>
                        </DialogContent>
                     </Dialog>

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
