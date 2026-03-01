import Link from "next/link";

export interface BreadcrumbItem {
   label: string;
   href?: string;
}

interface BreadcrumbsProps {
   items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
   const baseUrl = "https://buddhadebkoner.in";

   // Build JSON-LD BreadcrumbList schema
   const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
         "@type": "ListItem",
         position: index + 1,
         name: item.label,
         ...(item.href
            ? {
               item:
                  item.href === "/"
                     ? baseUrl
                     : `${baseUrl}${item.href}`,
            }
            : {}),
      })),
   };

   return (
      <>
         {/* JSON-LD Structured Data for SEO */}
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />

         {/* Visual Breadcrumb Navigation */}
         <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
               {items.map((item, index) => {
                  const isLast = index === items.length - 1;

                  return (
                     <li key={index} className="flex items-center gap-1.5">
                        {index > 0 && (
                           <svg
                              className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M9 5l7 7-7 7"
                              />
                           </svg>
                        )}
                        {isLast || !item.href ? (
                           <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                              {item.label}
                           </span>
                        ) : (
                           <Link
                              href={item.href}
                              className="hover:text-highlight transition-colors"
                           >
                              {item.label}
                           </Link>
                        )}
                     </li>
                  );
               })}
            </ol>
         </nav>
      </>
   );
}
