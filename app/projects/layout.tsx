import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Projects - Buddhadeb Koner | FullStack Web Developer",
   description:
      "Explore the portfolio of projects by Buddhadeb Koner. Featuring full-stack web applications built with React, Next.js, MERN stack, and modern web technologies.",
   keywords: [
      "Buddhadeb Koner Projects",
      "Web Development Portfolio",
      "React Projects",
      "Next.js Projects",
      "MERN Stack Projects",
      "Full-stack Applications",
      "E-commerce Platform",
      "Portfolio Projects",
   ],
   openGraph: {
      title: "Projects - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Explore the portfolio of projects by Buddhadeb Koner. Featuring full-stack web applications built with React, Next.js, MERN stack, and modern web technologies.",
      url: "https://buddhadebkoner.in/projects",
      images: [
         {
            url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1753897864/Screenshot_2025-07-30_at_23-17-49_E-commerce_turllc.png",
            width: 1200,
            height: 630,
            alt: "Buddhadeb Koner's Projects",
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title: "Projects - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Explore the portfolio of projects by Buddhadeb Koner. Featuring full-stack web applications built with React, Next.js, MERN stack, and modern web technologies.",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1753897864/Screenshot_2025-07-30_at_23-17-49_E-commerce_turllc.png",
      ],
   },
   alternates: {
      canonical: "https://buddhadebkoner.in/projects",
   },
};

export default function ProjectsLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return children;
}
