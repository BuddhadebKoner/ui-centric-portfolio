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
            }, 5000); // Increased to 5 seconds to read the message
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
                           )}                           <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight/50 transition-all"
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
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight/50 transition-all"
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
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight/50 transition-all"
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
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight/50 transition-all resize-none"
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
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-highlight/50 transition-all"
                                 >
                                    <option value="">Select range</option>
                                    <option value="1,000-5,000">₹1,000 - ₹5,000</option>
                                    <option value="5,000-10,000">₹5,000 - ₹10,000</option>
                                    <option value="10,000-25,000">₹10,000 - ₹25,000</option>
                                    <option value="25,000-50,000">₹25,000 - ₹50,000</option>
                                    <option value="50,000+">₹50,000+</option>
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
