import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Blogs - Buddhadeb Koner | FullStack Web Developer",
   description:
      "Read insightful articles and blogs by Buddhadeb Koner on web development, programming, technology trends, interview experiences, and software engineering best practices.",
   keywords: [
      "Buddhadeb Koner Blogs",
      "Web Development Blogs",
      "Programming Articles",
      "Tech Blog",
      "Interview Experience",
      "Coding Tutorials",
      "Software Engineering",
      "React Blog",
      "Next.js Articles",
      "MERN Stack Tutorials",
      "Full Stack Development Blog",
      "Career Guidance",
      "Campus Placement Experience",
   ],
   openGraph: {
      title: "Blogs - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Read insightful articles and blogs by Buddhadeb Koner on web development, programming, technology trends, and software engineering best practices.",
      url: "https://buddhadebkoner.in/blogs",
      siteName: "Buddhadeb Koner",
      images: [
         {
            url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285469/next-portfolio/xyxj8fdggwypdx2bwdnp.png",
            width: 1200,
            height: 630,
            alt: "Buddhadeb Koner - Tech Blogs and Articles",
         },
      ],
      locale: "en_IN",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Blogs - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Read insightful articles and blogs by Buddhadeb Koner on web development, programming, technology trends, and software engineering best practices.",
      creator: "@buddhadeb_koner",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285469/next-portfolio/xyxj8fdggwypdx2bwdnp.png",
      ],
   },
   alternates: {
      canonical: "https://buddhadebkoner.in/blogs",
   },
};

export default function BlogsLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return <>{children}</>;
}
