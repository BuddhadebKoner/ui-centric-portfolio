import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getWebsiteBySlug, websites } from "@/data/shop";
import ProductDetail from "@/components/shop/ProductDetail";

export function generateStaticParams() {
   return websites.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
   params,
}: {
   params: Promise<{ slug: string }>;
}): Promise<Metadata> {
   const { slug } = await params;
   const product = getWebsiteBySlug(slug);
   return {
      title: product ? `${product.title} - Buddhadeb Koner` : "Not Found",
   };
}

export default async function WebsiteDetailPage({
   params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const { slug } = await params;
   const product = getWebsiteBySlug(slug);
   if (!product) notFound();

   return (
      <ProductDetail
         product={product}
         backHref="/shop/websites"
         backLabel="Back to Websites"
      />
   );
}
