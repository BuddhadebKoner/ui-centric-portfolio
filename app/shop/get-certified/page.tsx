import type { Metadata } from "next";
import { Award } from "lucide-react";

export const metadata: Metadata = { title: "Get Certified - Buddhadeb Koner" };

export default function GetCertifiedPage() {
   return (
      <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-5xl mx-auto">
         <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/40 dark:bg-accent/30 text-highlight">
               <Award className="w-5 h-5" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Get Certified</h1>
         </div>
         <div className="rounded-xl border border-border/40 dark:border-border/20 bg-card/40 dark:bg-card/20 p-8 sm:p-12 text-center">
            <p className="text-muted-foreground text-sm">Coming soon — check back later.</p>
         </div>
      </div>
   );
}
