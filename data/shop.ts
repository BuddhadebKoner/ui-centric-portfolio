// ─── Types ────────────────────────────────────────────────────────────────────

export type TechStack =
   | "full-stack"
   | "react-js"
   | "next-js"
   | "javascript"
   | "html-css";

export type ProductCategory = "website" | "mobile-app" | "android-app";

export interface ShopProduct {
   slug: string;
   title: string;
   description: string;
   thumbnail: string;
   buyers: number;
   techStack: TechStack[];
   category: ProductCategory;
   priceINR?: number;
   priceUSD?: number;
   razorpayUrl?: string;
   sourceCodeUrl?: string;
   livePreviewUrl?: string;
   youtubeUrl?: string;
   tags?: string[];
}

// ─── Tech Stack Labels ────────────────────────────────────────────────────────

export const techStackLabels: Record<TechStack, string> = {
   "full-stack": "Full Stack",
   "react-js": "React JS",
   "next-js": "Next JS",
   javascript: "JavaScript",
   "html-css": "HTML & CSS",
};

// ─── Websites ─────────────────────────────────────────────────────────────────

export const websites: ShopProduct[] = [
   {
      slug: "ecommerce-platform",
      title: "E-Commerce Platform",
      description:
         "A comprehensive e-commerce platform with modern UI and seamless user experience. Built with React + Vite, TanStack Query, Clerk auth, Tailwind CSS, Spline 3D, and Stripe payments on an Express.js + MongoDB backend.",
      thumbnail:
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1753897864/Screenshot_2025-07-30_at_23-17-49_E-commerce_turllc.png",
      buyers: 78,
      techStack: ["react-js", "full-stack"],
      category: "website",
      priceINR: 499,
      priceUSD: 5.99,
      razorpayUrl: "https://pages.razorpay.com/pl_SM1XS7pfv9a6PW/view",
      livePreviewUrl: "https://clothstorefront.vercel.app/",
      youtubeUrl: "https://www.youtube.com/watch?v=VSzp-SanPc4",
      tags: ["ecommerce", "react", "stripe", "mongodb"],
   },
   {
      // FREE product
      slug: "url-shortener",
      title: "URL Shortener",
      description:
         "A modern URL shortener application that allows users to shorten long URLs and manage their links efficiently. Built with Next.js and MongoDB.",
      thumbnail:
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1749264353/Screenshot_2025-06-07_at_08-15-32_1_Post_Feed_LinkedIn_cfugl1.png",
      buyers: 0,
      techStack: ["next-js", "full-stack"],
      category: "website",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/url-shortener",
      livePreviewUrl: "https://abcredirect.vercel.app/",
      tags: ["url shortener", "nextjs", "mongodb"],
   },
   {
      slug: "notes-doo",
      title: "Notes Doo",
      description:
         "Notes sharing website — Share Knowledge, Excel Together. A platform to upload, browse, and share academic notes built with Next.js and TypeScript.",
      thumbnail:
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1759997327/recentWork_tye4yp.png",
      buyers: 0,
      techStack: ["next-js"],
      category: "website",
      priceINR: 1,
      priceUSD: 0.01,
      razorpayUrl: "https://rzp.io/rzp/M4C8hO7e",
      livePreviewUrl: "https://notesdoo.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/notes-do",
      tags: ["notes", "nextjs", "typescript"],
   },
   {
      slug: "kochugram",
      title: "Kochugram",
      description:
         "A dynamic social media platform designed for the Koch community with posts, likes, comments, and follow features. Built with React, TypeScript, and Appwrite.",
      thumbnail:
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1740969977/mern-blog/tdtyjvq7yq475tpwuy1a.png",
      buyers: 0,
      techStack: ["react-js"],
      category: "website",
      priceINR: 1,
      priceUSD: 0.01,
      razorpayUrl: "https://rzp.io/rzp/Y2BhBRRQ",
      livePreviewUrl: "https://kochugram-com.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/kochugram.com/",
      tags: ["social media", "react", "typescript", "appwrite"],
   },
];

// ─── Mobile Apps (includes Android apps) ─────────────────────────────────────

export const mobileApps: ShopProduct[] = [
   {
      slug: "react-native-fullstack-app",
      title: "React Native Full Stack App",
      description:
         "A full-stack mobile application built with React Native and a Node.js backend powered by MongoDB. Features complete authentication, real-time data, and a polished cross-platform UI for both iOS and Android.",
      thumbnail:
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1772650541/Gemini_Generated_Image_jfwnktjfwnktjfwn_rqnprn.png",
      buyers: 0,
      techStack: ["react-js", "full-stack"],
      category: "mobile-app",
      priceINR: 4899,
      priceUSD: 58.99,
      razorpayUrl: "https://rzp.io/rzp/Hcr5NYd",
      tags: ["react native", "nodejs", "mongodb", "mobile"],
   },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getWebsiteBySlug(slug: string): ShopProduct | undefined {
   return websites.find((p) => p.slug === slug);
}

export function getMobileAppBySlug(slug: string): ShopProduct | undefined {
   return mobileApps.find((p) => p.slug === slug);
}
