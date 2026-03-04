import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import { ShopProduct } from "@/data/shop";

interface ProductGridProps {
   products: ShopProduct[];
   basePath: string;
}

export default function ProductGrid({ products, basePath }: ProductGridProps) {
   if (products.length === 0) {
      return (
         <div className="text-center py-16 text-muted-foreground text-sm">
            No products found for this filter.
         </div>
      );
   }

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
         {products.map((product) => {
            const free = !product.priceINR;
            return (
               <Link
                  key={product.slug}
                  href={`${basePath}/${product.slug}`}
                  className="group m-auto w-full overflow-hidden rounded-xl hover:ring-[1.5px] ring-highlight hover:-translate-y-1 transition-all duration-700"
               >
                  <h2 className="sr-only">{product.title}</h2>
                  <div className="relative w-full aspect-video bg-accent/20">
                     <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        className="rounded-xl object-cover w-full"
                        unoptimized
                     />

                     {/* Bottom gradient scrim */}
                     <div className="absolute inset-x-0 bottom-0 h-16 rounded-b-xl bg-gradient-to-t from-black/70 to-transparent" />

                     {/* Top-left — FREE or PREMIUM badge */}
                     {free ? (
                        <span className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-green-500/90 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                           FREE
                        </span>
                     ) : (
                        <span className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-highlight/90 backdrop-blur text-background text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                           PREMIUM
                        </span>
                     )}

                     {/* Bottom-right — buyers */}
                     <div className="absolute bottom-2 right-2.5 flex items-center gap-1 text-white/90 text-[11px] font-medium">
                        <Users className="w-3 h-3 shrink-0" />
                        <span>{product.buyers}+</span>
                     </div>
                  </div>
               </Link>
            );
         })}
      </div>
   );
}
