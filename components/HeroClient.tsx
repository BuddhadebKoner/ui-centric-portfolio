"use client";

import { useState, useRef } from "react";
import { Volume2 } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";

export default function HeroClient() {
   const audioRef = useRef<HTMLAudioElement>(null);

   return (
      <>
         {/* Name Badge */}
         <div className="w-full flex justify-start">
            <HoverBorderGradient
               containerClassName="rounded-full"
               as="button"
               className="bg-background/50 backdrop-blur-sm text-foreground flex items-center space-x-2 px-4 py-2 cursor-pointer"
               onClick={() => audioRef.current?.play()}
            >
               <span className="text-sm">Buddhadeb Koner</span>
               <Volume2 className="h-5 w-5 text-highlight" />
            </HoverBorderGradient>
         </div>

         {/* Audio element */}
         <audio ref={audioRef} src="/buddhadebkoner.mp3" preload="auto" />
      </>
   );
}

// Export a separate component for the action buttons
export function HeroButtons() {
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile: "",
      company: "",
      message: "",
      budget: "",
      currency: "INR",
   });
   const [submitStatus, setSubmitStatus] = useState<{
      type: "success" | "error" | null;
      message: string;
   }>({ type: null, message: "" });

   const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
   ) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: "" });

      try {
         const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         const data = await response.json();

         if (response.ok) {
            setSubmitStatus({
               type: "success",
               message: data.message || "Thank you! Your message has been received. If you don't receive a confirmation email within 5 minutes, please call directly at +91 9339813998.",
            });
            setFormData({
               name: "",
               email: "",
               mobile: "",
               company: "",
               message: "",
               budget: "",
               currency: "INR",
            });
            setTimeout(() => {
               setIsDialogOpen(false);
               setSubmitStatus({ type: null, message: "" });
            }, 5000);
         } else {
            setSubmitStatus({
               type: "error",
               message: data.error || "Failed to send message. Please try again.",
            });
         }
      } catch {
         setSubmitStatus({
            type: "error",
            message: "An error occurred. Please call directly at +91 9339813998.",
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div className="flex flex-wrap gap-4 pt-4">
         {/* Hire Me Button */}
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
            <DialogContent className="sm:max-w-[500px] bg-background/95 dark:bg-background/90 backdrop-blur-xl border border-border shadow-2xl">
               <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold text-foreground">
                     Let&apos;s Work Together
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                     Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </DialogDescription>
               </DialogHeader>

               {submitStatus.type && (
                  <div
                     className={`p-4 rounded-lg ${submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/50 text-green-600 dark:text-green-400"
                        : "bg-red-500/10 border border-red-500/50 text-red-600 dark:text-red-400"
                        }`}
                  >
                     <p className="font-medium">{submitStatus.message}</p>
                     {submitStatus.type === "success" && (
                        <p className="mt-2 text-sm opacity-90">
                           💡 Check your email for confirmation. For urgent queries, call:
                           <a href="tel:+919339813998" className="font-semibold underline ml-1">
                              +91 9339813998
                           </a>
                        </p>
                     )}
                     {submitStatus.type === "error" && (
                        <p className="mt-2 text-sm opacity-90">
                           📞 Direct contact:
                           <a href="tel:+919339813998" className="font-semibold underline ml-1">
                              +91 9339813998
                           </a>
                        </p>
                     )}
                  </div>
               )}
               <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                     <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name <span className="text-red-500">*</span>
                     </label>
                     <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight focus:border-highlight transition-all"
                     />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                     <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address <span className="text-red-500">*</span>
                     </label>
                     <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight focus:border-highlight transition-all"
                     />
                  </div>

                  {/* Mobile Number Field */}
                  <div className="space-y-2">
                     <label htmlFor="mobile" className="text-sm font-medium text-foreground">
                        Mobile Number <span className="text-red-500">*</span>
                     </label>
                     <input
                        id="mobile"
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight focus:border-highlight transition-all"
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
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight focus:border-highlight transition-all"
                     />
                  </div>

                  {/* Project Details Field */}
                  <div className="space-y-2">
                     <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Project Details <span className="text-red-500">*</span>
                     </label>
                     <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight focus:border-highlight transition-all resize-none"
                     />
                  </div>

                  {/* Budget Field */}
                  <div className="space-y-2">
                     <label htmlFor="budget" className="text-sm font-medium text-foreground">
                        Budget Range (INR)
                     </label>
                     <select
                        id="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-highlight focus:border-highlight transition-all"
                     >
                        <option value="" className="bg-background text-foreground">Select range</option>
                        <option value="1,000-5,000" className="bg-background text-foreground">₹1,000 - ₹5,000</option>
                        <option value="5,000-10,000" className="bg-background text-foreground">₹5,000 - ₹10,000</option>
                        <option value="10,000-25,000" className="bg-background text-foreground">₹10,000 - ₹25,000</option>
                        <option value="25,000-50,000" className="bg-background text-foreground">₹25,000 - ₹50,000</option>
                        <option value="50,000+" className="bg-background text-foreground">₹50,000+</option>
                     </select>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-3 pt-2">
                     <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                        {isSubmitting ? "Sending..." : "Send Message"}
                     </button>
                     <button
                        type="button"
                        onClick={() => setIsDialogOpen(false)}
                        disabled={isSubmitting}
                        className="px-6 py-3 bg-transparent border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                        Cancel
                     </button>
                  </div>
               </form>
            </DialogContent>
         </Dialog>

         {/* Check GitHub Button */}
         <a
            href="https://github.com/BuddhadebKoner"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-all flex items-center gap-2 group"
         >
            Check GitHub
            <svg
               className="w-4 h-4 group-hover:translate-x-1 transition-transform"
               fill="currentColor"
               viewBox="0 0 24 24"
            >
               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
         </a>
      </div>
   );
}
