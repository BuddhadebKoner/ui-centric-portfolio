import type { Metadata } from "next";
import {
   Globe,
   Smartphone,
   Code2,
   BookOpen,
   Package,
   Award,
   Star,
   ImageIcon,
   Map,
   ArrowRight,
   ExternalLink,
   Users,
   ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { websites, mobileApps } from "@/data/shop";

export const metadata: Metadata = {
   title: "Business - Buddhadeb Koner",
   description:
      "Explore courses, source code, projects, and assets by Buddhadeb Koner.",
};

const resourceSections = [
   {
      group: "Resources",
      items: [
         {
            label: "Source Code",
            href: "/shop/source-code",
            icon: Code2,
            description: "Full source code for real-world applications.",
         },
         {
            label: "Courses",
            href: "/shop/courses",
            icon: BookOpen,
            description: "Hands-on JavaScript and web dev courses.",
         },
         {
            label: "Project Assets",
            href: "/shop/project-assets",
            icon: Package,
            description: "UI kits, icons, and design assets.",
         },
      ],
   },
   {
      group: "Community",
      items: [
         {
            label: "Get Certified",
            href: "/shop/get-certified",
            icon: Award,
            description: "Certificates that prove your skills.",
         },
         {
            label: "Buddhadeb Stars",
            href: "/shop/buddhadeb-stars",
            icon: Star,
            description: "Exclusive perks as a community star.",
         },
         {
            label: "Stock Pictures",
            href: "/shop/stock-pictures",
            icon: ImageIcon,
            description: "High-resolution stock photos.",
         },
         {
            label: "Roadmap",
            href: "/shop/roadmap",
            icon: Map,
            description: "Structured paths to master web dev.",
         },
      ],
   },
];

function PriceTag({ priceINR, sourceOnly }: { priceINR?: number; sourceOnly?: boolean }) {
   if (sourceOnly) {
      return (
         <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-500 border border-green-500/25">
            Free
         </span>
      );
   }
   if (priceINR !== undefined) {
      return (
         <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-highlight/15 text-highlight border border-highlight/25">
            ₹{priceINR.toLocaleString("en-IN")}
         </span>
      );
   }
   return null;
}

export default function ShopHome() {
   const featuredWebsites = websites.slice(0, 4);
   const featuredApps = mobileApps.slice(0, 2);

   return (
      <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto space-y-16">

         {/* ── Hero Banner ─────────────────────────────────────────── */}
         <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-gradient-to-br from-highlight/10 via-background to-background px-8 py-12 sm:px-12 sm:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-highlight/20 via-transparent to-transparent pointer-events-none" />
            <div className="relative max-w-2xl space-y-4">
               <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-highlight bg-highlight/10 border border-highlight/25 rounded-full px-3 py-1">
                  <ShoppingCart className="w-3.5 h-3.5" /> Developer Store
               </span>
               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Build faster with{" "}
                  <span className="text-highlight">real-world</span> source code
               </h1>
               <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
                  Production-grade websites, mobile apps, and resources — handcrafted by Buddhadeb Koner.
               </p>
               <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                     href="/shop/websites"
                     className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-all"
                  >
                     <Globe className="w-4 h-4" /> Browse Websites
                  </Link>
                  <Link
                     href="/shop/mobile-apps"
                     className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-semibold hover:bg-accent transition-all"
                  >
                     <Smartphone className="w-4 h-4" /> Mobile Apps
                  </Link>
               </div>
            </div>
         </div>

         {/* ── Featured Websites ────────────────────────────────────── */}
         <section>
            <div className="flex items-center justify-between mb-6">
               <div>
                  <h2 className="text-xl font-bold text-foreground">Website Templates</h2>
                  <p className="text-sm text-muted-foreground mt-0.5">Full-stack, production-ready</p>
               </div>
               <Link
                  href="/shop/websites"
                  className="inline-flex items-center gap-1 text-sm font-medium text-highlight hover:underline"
               >
                  View all <ArrowRight className="w-3.5 h-3.5" />
               </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
               {featuredWebsites.map((product) => {
                  const isFree = !product.priceINR && !!product.sourceCodeUrl;
                  return (
                     <Link
                        key={product.slug}
                        href={`/shop/websites/${product.slug}`}
                        className="group flex flex-col rounded-xl border border-border/50 bg-card/60 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/5 transition-all duration-200 overflow-hidden"
                     >
                        <div className="relative aspect-video overflow-hidden bg-muted/30">
                           <Image
                              src={product.thumbnail}
                              alt={product.title}
                              fill
                              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                           />
                           <div className="absolute top-2 left-2">
                              <PriceTag priceINR={product.priceINR} sourceOnly={isFree} />
                           </div>
                        </div>
                        <div className="p-4 flex flex-col gap-2 flex-1">
                           <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-highlight transition-colors">
                              {product.title}
                           </h3>
                           <p className="text-xs text-muted-foreground line-clamp-2 flex-1">
                              {product.description}
                           </p>
                           <div className="flex items-center justify-between pt-1">
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                 <Users className="w-3 h-3" />
                                 {product.buyers} buyers
                              </div>
                              <span className="text-xs text-highlight font-medium flex items-center gap-1">
                                 View <ExternalLink className="w-3 h-3" />
                              </span>
                           </div>
                        </div>
                     </Link>
                  );
               })}
            </div>
         </section>

         {/* ── Featured Mobile Apps ─────────────────────────────────── */}
         <section>
            <div className="flex items-center justify-between mb-6">
               <div>
                  <h2 className="text-xl font-bold text-foreground">Mobile Apps</h2>
                  <p className="text-sm text-muted-foreground mt-0.5">React Native &amp; cross-platform</p>
               </div>
               <Link
                  href="/shop/mobile-apps"
                  className="inline-flex items-center gap-1 text-sm font-medium text-highlight hover:underline"
               >
                  View all <ArrowRight className="w-3.5 h-3.5" />
               </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
               {featuredApps.map((product) => {
                  const isFree = !product.priceINR && !!product.sourceCodeUrl;
                  return (
                     <Link
                        key={product.slug}
                        href={`/shop/mobile-apps/${product.slug}`}
                        className="group flex gap-5 rounded-xl border border-border/50 bg-card/60 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/5 transition-all duration-200 overflow-hidden p-4"
                     >
                        <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-muted/30">
                           <Image
                              src={product.thumbnail}
                              alt={product.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                           />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                           <div className="flex items-start justify-between gap-2">
                              <h3 className="text-sm font-semibold text-foreground group-hover:text-highlight transition-colors leading-snug">
                                 {product.title}
                              </h3>
                              <PriceTag priceINR={product.priceINR} sourceOnly={isFree} />
                           </div>
                           <p className="text-xs text-muted-foreground line-clamp-2">
                              {product.description}
                           </p>
                           <div className="flex items-center gap-1 text-xs text-muted-foreground mt-auto">
                              <Users className="w-3 h-3" />
                              {product.buyers} buyers
                           </div>
                        </div>
                     </Link>
                  );
               })}
            </div>
         </section>

         {/* ── Other Resources ──────────────────────────────────────── */}
         <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
               More Resources &amp; Community
            </h2>
            <div className="flex flex-col gap-8">
               {resourceSections.map(({ group, items }) => (
                  <div key={group}>
                     <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60 mb-3">{group}</p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                        {items.map(({ label, href, icon: Icon, description }) => (
                           <Link
                              key={href}
                              href={href}
                              className="group relative flex flex-col gap-2.5 p-4 rounded-xl border border-border/40 bg-card/50 hover:border-highlight/40 hover:bg-accent/10 transition-all duration-200 overflow-hidden"
                           >
                              <div className="flex items-center justify-between">
                                 <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/40 text-highlight group-hover:scale-110 transition-transform duration-200">
                                    <Icon className="w-4 h-4" />
                                 </span>
                                 <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-highlight group-hover:translate-x-1 transition-all duration-200" />
                              </div>
                              <div>
                                 <h3 className="text-sm font-semibold text-foreground mb-0.5">{label}</h3>
                                 <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                              </div>
                           </Link>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </section>

      </div>
   );
}
