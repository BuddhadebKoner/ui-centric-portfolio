"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
   X,
} from "lucide-react";

const navSections = [
   {
      label: "Products",
      items: [
         { label: "Websites", href: "/shop/websites", icon: Globe },
         { label: "Mobile Apps", href: "/shop/mobile-apps", icon: Smartphone },
      ],
   },
   {
      label: "Resources",
      items: [
         { label: "Source Code", href: "/shop/source-code", icon: Code2 },
         { label: "Courses", href: "/shop/courses", icon: BookOpen },
         { label: "Project Assets", href: "/shop/project-assets", icon: Package },
      ],
   },
   {
      label: "Community",
      items: [
         { label: "Get Certified", href: "/shop/get-certified", icon: Award },
         { label: "Buddhadeb Stars", href: "/shop/buddhadeb-stars", icon: Star },
         { label: "Stock Pictures", href: "/shop/stock-pictures", icon: ImageIcon },
         { label: "Roadmap", href: "/shop/roadmap", icon: Map },
      ],
   },
];

interface ShopSidebarProps {
   isOpen: boolean;
   onClose: () => void;
   topOffset?: string;
}

export default function ShopSidebar({ isOpen, onClose, topOffset = "6.75rem" }: ShopSidebarProps) {
   const pathname = usePathname();

   const NavContent = () => (
      <nav className="flex flex-col gap-4 p-4">
         {navSections.map((section) => (
            <div key={section.label}>
               <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-3 mb-1">
                  {section.label}
               </p>
               <div className="flex flex-col gap-0.5">
                  {section.items.map(({ label, href, icon: Icon }) => {
                     const isActive = pathname === href || pathname.startsWith(href + "/");
                     return (
                        <Link
                           key={href}
                           href={href}
                           onClick={onClose}
                           className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 group
                     ${isActive
                                 ? "bg-accent/40 dark:bg-accent/30 text-highlight"
                                 : "text-foreground/80 hover:bg-accent/30 dark:hover:bg-accent/20 hover:text-foreground"
                              }`}
                        >
                           <Icon
                              className={`w-4 h-4 shrink-0 transition-colors ${isActive ? "text-highlight" : "text-muted-foreground group-hover:text-foreground"
                                 }`}
                           />
                           <span>{label}</span>
                           {isActive && (
                              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-highlight" />
                           )}
                        </Link>
                     );
                  })}
               </div>
            </div>
         ))}
      </nav>
   );

   return (
      <>
         {/* Desktop Sidebar — always visible on lg+ */}
         <aside
            className="hidden lg:flex flex-col fixed left-0 bottom-0 w-64 overflow-y-auto border-r border-border/40 dark:border-border/20 bg-background/60 dark:bg-background/40 backdrop-blur-xl z-30 no-scrollbar transition-all duration-300"
            style={{ top: topOffset }}
         >
            <NavContent />
         </aside>

         {/* Mobile Backdrop */}
         <div
            className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
               }`}
            onClick={onClose}
            aria-hidden="true"
         />

         {/* Mobile Drawer */}
         <aside
            className={`fixed left-0 top-0 bottom-0 w-72 z-50 flex flex-col bg-background/95 dark:bg-background/90 backdrop-blur-2xl border-r border-border/40 dark:border-border/20 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
               }`}
         >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-4 pt-5 pb-3 border-b border-border/40 dark:border-border/20 shrink-0">
               <span className="text-lg font-bold text-foreground">
                  Buddhadeb <span className="text-highlight">Koner</span>
               </span>
               <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-accent/30 transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Close sidebar"
               >
                  <X className="w-5 h-5" />
               </button>
            </div>

            {/* Drawer nav */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
               <NavContent />
            </div>
         </aside>
      </>
   );
}
