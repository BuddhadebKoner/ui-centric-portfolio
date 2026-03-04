import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMobileAppBySlug, mobileApps } from "@/data/shop";
import ProductDetail from "@/components/shop/ProductDetail";

export function generateStaticParams() {
   return mobileApps.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
   params,
}: {
   params: Promise<{ slug: string }>;
}): Promise<Metadata> {
   const { slug } = await params;
   const product = getMobileAppBySlug(slug);
   return {
      title: product ? `${product.title} - Buddhadeb Koner` : "Not Found",
   };
}

export default async function MobileAppDetailPage({
   params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const { slug } = await params;
   const product = getMobileAppBySlug(slug);
   if (!product) notFound();

   return (
      <ProductDetail
         product={product}
         backHref="/shop/mobile-apps"
         backLabel="Back to Mobile Apps"
      />
   );
}
