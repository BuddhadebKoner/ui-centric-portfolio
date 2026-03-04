"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Code2, ExternalLink, Youtube, ChevronLeft, Loader2 } from "lucide-react";
import { ShopProduct } from "@/data/shop";
import { GlowBtn, GlowButton } from "@/components/ui/GlowButton";
import PaymentSuccessDialog from "@/components/shop/PaymentSuccessDialog";
import {
   PaymentSuccessData,
   RazorpayOptions,
   RazorpayResponse,
   getPendingPayment,
   savePendingPayment,
} from "@/lib/razorpay";

interface ProductDetailProps {
   product: ShopProduct;
   backHref: string;
   backLabel: string;
}

export default function ProductDetail({ product, backHref, backLabel }: ProductDetailProps) {
   const [currency, setCurrency] = useState<"INR" | "USD">("INR");
   const [loading, setLoading] = useState(false);
   const [successData, setSuccessData] = useState<PaymentSuccessData | null>(null);
   const [error, setError] = useState<string | null>(null);

   const free = !product.priceINR;

   // On mount, check localStorage for a pending (unshared) payment for this product
   useEffect(() => {
      const pending = getPendingPayment(product.slug);
      if (pending) setSuccessData(pending);
   }, [product.slug]);

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

   const sourceHref = free ? (product.sourceCodeUrl ?? "#") : "#";

   const handlePayment = useCallback(async () => {
      if (free || !product.priceINR) return;

      setLoading(true);
      setError(null);

      try {
         const res = await fetch("/api/razorpay/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               amount: product.priceINR,
               currency: "INR",
               productSlug: product.slug,
               productTitle: product.title,
            }),
         });

         if (!res.ok) {
            const data = await res.json();
            throw new Error(data.error || "Failed to create order");
         }

         const { orderId, amount, key } = await res.json();

         const options: RazorpayOptions = {
            key,
            amount: amount * 100,
            currency: "INR",
            name: "Buddhadeb Koner",
            description: product.title,
            order_id: orderId,
            handler: async (response: RazorpayResponse) => {
               try {
                  const verifyRes = await fetch("/api/razorpay/verify-payment", {
                     method: "POST",
                     headers: { "Content-Type": "application/json" },
                     body: JSON.stringify({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                     }),
                  });

                  const verifyData = await verifyRes.json();

                  if (verifyData.verified) {
                     const paymentData: PaymentSuccessData = {
                        orderId: response.razorpay_order_id,
                        paymentId: response.razorpay_payment_id,
                        productTitle: product.title,
                        productSlug: product.slug,
                        amount: `₹${product.priceINR}`,
                        timestamp: Date.now(),
                        shared: false,
                     };
                     savePendingPayment(paymentData);
                     setSuccessData(paymentData);
                  } else {
                     setError("Payment verification failed. Please contact support with your payment ID.");
                  }
               } catch {
                  setError("Could not verify payment. Please contact support.");
               }
            },
            theme: { color: "#6366f1" },
            modal: {
               ondismiss: () => {
                  setLoading(false);
               },
            },
         };

         const rzp = new window.Razorpay(options);
         rzp.open();
      } catch (err: unknown) {
         const message = err instanceof Error ? err.message : "Something went wrong";
         setError(message);
      } finally {
         setLoading(false);
      }
   }, [free, product]);

   return (
      <>
         <Script
            src="https://checkout.razorpay.com/v1/checkout.js"
            strategy="lazyOnload"
         />

         <div className="px-5 sm:px-8 pt-8 pb-20">
            {/* Back link */}
            <Link
               href={backHref}
               className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors group"
            >
               <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
               {backLabel}
            </Link>

            {/* Main layout */}
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

                     {/* Error message */}
                     {error && (
                        <div className="mb-3 px-4 py-2.5 rounded-lg bg-red-500/10 border border-red-500/25 text-red-500 text-xs text-center">
                           {error}
                        </div>
                     )}

                     {/* Buttons */}
                     {free ? (
                        <GlowBtn href={sourceHref} icon={Code2} label={sourceLabel} />
                     ) : (
                        <GlowButton
                           onClick={handlePayment}
                           icon={loading ? Loader2 : Code2}
                           label={loading ? "Processing..." : sourceLabel}
                           disabled={loading}
                        />
                     )}
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

         {successData && (
            <PaymentSuccessDialog
               data={successData}
               onClose={() => setSuccessData(null)}
            />
         )}
      </>
   );
}
