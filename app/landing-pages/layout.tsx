import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Landing Pages - Buddhadeb Koner | FullStack Web Developer",
   description:
      "Discover beautiful landing page designs created by Buddhadeb Koner. Showcasing modern UI/UX designs for e-commerce, portfolios, and web applications.",
   keywords: [
      "Landing Pages",
      "UI Design",
      "UX Design",
      "Web Design",
      "Portfolio Designs",
      "E-commerce Design",
      "Modern UI",
      "Responsive Design",
   ],
   openGraph: {
      title: "Landing Pages - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Discover beautiful landing page designs created by Buddhadeb Koner. Showcasing modern UI/UX designs for e-commerce, portfolios, and web applications.",
      url: "https://buddhadebkoner.vercel.app/landing-pages",
      images: [
         {
            url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1750497000/Screenshot_2025-06-20_at_10-31-47_Buddhadeb_Koner_FullStack_Web_Developer_d5qnbk.png",
            width: 1200,
            height: 630,
            alt: "Landing Pages by Buddhadeb Koner",
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title: "Landing Pages - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Discover beautiful landing page designs created by Buddhadeb Koner. Showcasing modern UI/UX designs for e-commerce, portfolios, and web applications.",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1750497000/Screenshot_2025-06-20_at_10-31-47_Buddhadeb_Koner_FullStack_Web_Developer_d5qnbk.png",
      ],
   },
   alternates: {
      canonical: "https://buddhadebkoner.vercel.app/landing-pages",
   },
};

export default function LandingPagesLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return children;
}
