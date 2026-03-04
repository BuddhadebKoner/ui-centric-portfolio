"use client";

import { useState, useCallback } from "react";
import { CheckCircle2, Copy, ArrowRight, Square, CheckSquare } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PaymentSuccessData, WHATSAPP_NUMBER, markPaymentShared } from "@/lib/razorpay";

interface PaymentSuccessDialogProps {
   data: PaymentSuccessData;
   onClose: () => void;
}

export default function PaymentSuccessDialog({ data, onClose }: PaymentSuccessDialogProps) {
   const [step, setStep] = useState<1 | 2>(1);
   const [contactInfo, setContactInfo] = useState("");
   const [confirmed, setConfirmed] = useState(false);
   const [copied, setCopied] = useState(false);
   const [shared, setShared] = useState(data.shared);

   const canClose = confirmed && shared;

   const handleCopyPaymentId = useCallback(() => {
      navigator.clipboard.writeText(data.paymentId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
   }, [data.paymentId]);

   const handleWhatsApp = useCallback(() => {
      if (!contactInfo.trim()) return;
      const msg = [
         `Hi, I just purchased *${data.productTitle}*`,
         ``,
         `Payment ID: ${data.paymentId}`,
         `Order ID: ${data.orderId}`,
         `Amount: ${data.amount}`,
         `GitHub/Email: ${contactInfo}`,
         ``,
         `Please verify and share the source code. Thank you!`,
      ].join("\n");
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
      markPaymentShared(data.productSlug);
      setShared(true);
      setStep(2);
   }, [contactInfo, data]);

   const handleDone = useCallback(() => {
      if (canClose) onClose();
   }, [canClose, onClose]);

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
         <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-border/50 bg-background shadow-2xl">

            {/* ── Step Indicator ──────────────────────────────── */}
            <div className="px-6 sm:px-8 pt-6 sm:pt-8">
               <div className="flex items-center gap-3 mb-6">
                  <StepDot active={step === 1} completed={step > 1} label="Send Details" number={1} />
                  <div className="flex-1 h-px bg-border/60 relative">
                     <div className={`absolute inset-y-0 left-0 bg-highlight transition-all duration-500 ${step > 1 ? "w-full" : "w-0"}`} />
                  </div>
                  <StepDot active={step === 2} completed={false} label="Confirm" number={2} />
               </div>
            </div>

            {/* ── Step 1: Send details via WhatsApp ──────────── */}
            {step === 1 && (
               <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <IconCircle className="bg-green-500/15 border-green-500/25">
                     <CheckCircle2 className="w-7 h-7 text-green-500" />
                  </IconCircle>

                  <h2 className="text-lg font-bold text-foreground text-center mb-0.5">
                     Payment Successful
                  </h2>
                  <p className="text-xs text-muted-foreground text-center mb-5">
                     {data.productTitle} — {data.amount}
                  </p>

                  {/* Payment ID */}
                  <div className="space-y-2 mb-5">
                     <div className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-accent/30 border border-border/40">
                        <span className="text-[11px] text-muted-foreground uppercase tracking-wide">Payment ID</span>
                        <button
                           onClick={handleCopyPaymentId}
                           className="flex items-center gap-1.5 text-xs font-mono text-foreground hover:text-highlight transition-colors"
                        >
                           {data.paymentId.slice(0, 18)}...
                           <Copy className="w-3 h-3" />
                        </button>
                     </div>
                     {copied && (
                        <p className="text-[11px] text-green-500 text-center">Copied to clipboard</p>
                     )}
                  </div>

                  {/* Contact input */}
                  <div className="mb-5">
                     <label className="block text-xs font-medium text-foreground mb-1.5">
                        GitHub username or Email
                     </label>
                     <input
                        type="text"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        placeholder="e.g. your-username or you@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-accent/10 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-highlight/40 focus:border-highlight/50 transition-all"
                     />
                     <p className="text-[11px] text-muted-foreground mt-1.5">
                        Source code will be delivered to this GitHub or email
                     </p>
                  </div>

                  {/* WhatsApp CTA */}
                  <button
                     onClick={handleWhatsApp}
                     disabled={!contactInfo.trim()}
                     className={`flex items-center justify-center gap-2.5 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${contactInfo.trim()
                        ? "bg-[#25D366] hover:bg-[#1ebe5a] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/35 hover:scale-[1.01] cursor-pointer"
                        : "bg-[#25D366]/20 text-[#25D366]/40 cursor-not-allowed"
                        }`}
                  >
                     <WhatsAppIcon className="w-5 h-5" />
                     Send via WhatsApp
                     <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-muted-foreground/60 text-center mt-3">
                     Your payment and contact details will be shared for verification
                  </p>
               </div>
            )}

            {/* ── Step 2: Confirm & Done ─────────────────────── */}
            {step === 2 && (
               <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <IconCircle className="bg-[#25D366]/15 border-[#25D366]/25">
                     <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
                  </IconCircle>

                  <h2 className="text-lg font-bold text-foreground text-center mb-0.5">
                     Details Sent
                  </h2>
                  <p className="text-xs text-muted-foreground text-center mb-6">
                     Your purchase details have been shared on WhatsApp
                  </p>

                  {/* Summary card */}
                  <SummaryRow label="Product" value={data.productTitle} />
                  <SummaryRow label="Amount" value={data.amount} />
                  <SummaryRow label="Delivery to" value={contactInfo} last />

                  {/* What happens next */}
                  <div className="rounded-xl border border-border/30 bg-accent/5 p-4 mb-5 mt-5">
                     <h3 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">What happens next</h3>
                     <ul className="text-xs text-muted-foreground space-y-2">
                        <NextStep number={1}>Payment will be manually verified</NextStep>
                        <NextStep number={2}>Source code will be delivered to your GitHub or email</NextStep>
                     </ul>
                  </div>

                  {/* Confirmation checkbox */}
                  <button
                     onClick={() => setConfirmed(!confirmed)}
                     className="flex items-start gap-2.5 text-left group mb-5 w-full"
                  >
                     {confirmed ? (
                        <CheckSquare className="w-[18px] h-[18px] shrink-0 text-highlight mt-0.5" />
                     ) : (
                        <Square className="w-[18px] h-[18px] shrink-0 text-muted-foreground group-hover:text-foreground mt-0.5 transition-colors" />
                     )}
                     <span className="text-xs text-muted-foreground leading-relaxed">
                        I have shared my payment details via WhatsApp and understand that the source code will be delivered after manual verification.
                     </span>
                  </button>

                  {/* Done button */}
                  <button
                     onClick={handleDone}
                     disabled={!canClose}
                     className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${canClose
                        ? "bg-foreground text-background hover:opacity-90 cursor-pointer"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                        }`}
                  >
                     {!confirmed ? "Confirm the checkbox to continue" : "Done"}
                  </button>
               </div>
            )}
         </div>
      </div>
   );
}

/* ── Small internal sub-components ─────────────────────────── */

function StepDot({ active, completed, label, number }: {
   active: boolean; completed: boolean; label: string; number: number;
}) {
   return (
      <div className="flex items-center gap-2">
         <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-all duration-300 ${active ? "bg-highlight text-background shadow-lg shadow-highlight/30"
               : completed ? "bg-green-500 text-background"
                  : "bg-muted text-muted-foreground"
            }`}>
            {completed ? <CheckCircle2 className="w-4 h-4" /> : number}
         </div>
         <span className={`text-xs font-medium transition-colors ${active ? "text-foreground" : "text-muted-foreground"}`}>
            {label}
         </span>
      </div>
   );
}

function IconCircle({ className, children }: { className: string; children: React.ReactNode }) {
   return (
      <div className="flex justify-center mb-4">
         <div className={`flex items-center justify-center w-14 h-14 rounded-full border ${className}`}>
            {children}
         </div>
      </div>
   );
}

function SummaryRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
   return (
      <div className={`rounded-xl border border-border/40 bg-accent/10 px-4 py-2.5 flex justify-between text-xs ${last ? "" : "mb-2"}`}>
         <span className="text-muted-foreground">{label}</span>
         <span className="text-foreground font-medium truncate ml-4">{value}</span>
      </div>
   );
}

function NextStep({ number, children }: { number: number; children: React.ReactNode }) {
   return (
      <li className="flex items-start gap-2.5">
         <span className="flex items-center justify-center w-5 h-5 rounded-full bg-highlight/15 text-highlight text-[10px] font-bold shrink-0 mt-0.5">
            {number}
         </span>
         {children}
      </li>
   );
}
