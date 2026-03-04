import React from "react";

/* ── Link variant (anchor tag) ─────────────────────────────── */
export const GlowBtn = ({ href, icon: Icon, label }: {
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

/* ── Button variant (onClick) ──────────────────────────────── */
export const GlowButton = ({ onClick, icon: Icon, label, disabled }: {
   onClick: () => void;
   icon: React.ElementType;
   label: string;
   disabled?: boolean;
}) => (
   <button onClick={onClick} disabled={disabled} className="block w-full">
      <div className={`group relative flex items-center justify-center gap-3 w-full rounded-full px-6 py-3.5 border border-border/50 bg-background/40 backdrop-blur-2xl my-3 transition-all overflow-hidden hover:border-highlight/60 hover:shadow-[0_0_20px_4px_var(--tw-shadow-color)] hover:shadow-highlight/25 hover:bg-accent/20 hover:scale-[1.02] duration-300 ease-in-out ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
         <span className="absolute inset-0 bg-gradient-to-tr from-highlight to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
         <Icon className="w-5 h-5 shrink-0 text-foreground" aria-hidden />
         <p className="text-sm font-medium text-foreground transition-all group-hover:tracking-wide duration-300">
            {label}
         </p>
      </div>
   </button>
);
