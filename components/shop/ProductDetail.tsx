"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Code2, ExternalLink, Youtube, ChevronLeft } from "lucide-react";
import { ShopProduct } from "@/data/shop";

interface ProductDetailProps {
   product: ShopProduct;
   backHref: string;
   backLabel: string;
}

const GlowBtn = ({ href, icon: Icon, label }: {
   href: string;
   icon: React.ElementType;
   label: string;
}) => (
   <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
      <div className="group relative flex items-center justify-center gap-3 w-full rounded-full px-6 py-3.5 border border-border/50 bg-background/40 backdrop-blur-2xl my-3 transition-all cursor-pointer overflow-hidden hover:border-highlight/60 hover:shadow-[0_0_20px_4px_var(--tw-shadow-color)] hover:shadow-highlight/25 hover:bg-accent/20 hover:scale-[1.02] duration-300 ease-in-out">
         <span className="absolute inset-0 bg-gradient-to-tr from-highlight to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
         <Icon className="w-5 h-5 shrink-0 text-foreground" aria-hidden />
         <p className="text-sm font-medium text-foreground transition-all group-hover:tracking-wide duration-300">
            {label}
         </p>
      </div>
   </a>
);

export default function ProductDetail({ product, backHref, backLabel }: ProductDetailProps) {
   const [currency, setCurrency] = useState<"INR" | "USD">("INR");

   const free = !product.priceINR;

   const priceLabel = free
      ? "FREE"
      : currency === "INR"
         ? `₹${product.priceINR}`
         : `$${product.priceUSD}`;

   const sourceLabel = free
      ? "Get Source Code — Free"
      : currency === "INR"
         ? `Buy Source Code — ₹${product.priceINR}`
         : `Buy Source Code — $${product.priceUSD}`;

   const sourceHref = free ? (product.sourceCodeUrl ?? "#") : (product.razorpayUrl ?? "#");

   return (
      <div className="px-5 sm:px-8 pt-8 pb-20">
         {/* Back link */}
         <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors group"
         >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            {backLabel}
         </Link>

         {/* Main layout — matches reference */}
         <div className="w-full lg:min-h-[60vh] flex max-lg:flex-col max-lg:items-center gap-10 justify-center lg:px-5">

            {/* Left — Thumbnail + buyers pulse */}
            <div className="max-sm:px-2 flex flex-col justify-center">
               <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={800}
                  height={450}
                  className="w-full max-w-sm lg:max-w-xl rounded-xl border border-border/50 object-cover"
                  priority
                  unoptimized
               />
               <div className="flex gap-1.5 items-center mt-2 ml-1 max-lg:justify-center">
                  <span className="relative flex items-center justify-center size-3.5">
                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                     <span className="relative inline-flex size-2.5 shrink-0 rounded-full bg-green-500" />
                  </span>
                  <span className="text-sm text-muted-foreground">
                     {product.buyers}+ people successfully bought this.
                  </span>
               </div>
            </div>

            {/* Right — Title + price + buttons */}
            <div className="max-sm:px-2 w-full max-w-sm flex flex-col items-center justify-center">
               <div className="w-full max-w-xs text-center">

                  {/* Title */}
                  <h1 className="bg-gradient-to-r from-foreground to-muted-foreground text-transparent bg-clip-text text-xl lg:text-2xl font-bold leading-snug mb-1">
                     {product.title}
                  </h1>

                  {/* Price + currency toggle */}
                  <div className="my-4 flex flex-col items-center gap-2">
                     {!free && (
                        <div className="flex items-center bg-accent/40 rounded-full p-1 border border-border/40">
                           <button
                              onClick={() => setCurrency("INR")}
                              className={`px-4 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${currency === "INR" ? "bg-highlight text-background shadow" : "text-muted-foreground hover:text-foreground"}`}
                           >
                              ₹ INR
                           </button>
                           <button
                              onClick={() => setCurrency("USD")}
                              className={`px-4 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${currency === "USD" ? "bg-highlight text-background shadow" : "text-muted-foreground hover:text-foreground"}`}
                           >
                              $ USD
                           </button>
                        </div>
                     )}
                     <p className={`text-3xl font-bold tracking-tight ${free ? "text-green-500 dark:text-green-400" : "text-foreground"}`}>
                        {priceLabel}
                     </p>
                     <p className="text-xs text-muted-foreground">
                        {free ? "No cost · Direct download" : "One-time payment · Lifetime access"}
                     </p>
                  </div>

                  {/* Buttons */}
                  <GlowBtn href={sourceHref} icon={Code2} label={sourceLabel} />
                  {product.livePreviewUrl && (
                     <GlowBtn href={product.livePreviewUrl} icon={ExternalLink} label="Live Preview" />
                  )}
                  {product.youtubeUrl && (
                     <GlowBtn href={product.youtubeUrl} icon={Youtube} label="YouTube Tutorial" />
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
