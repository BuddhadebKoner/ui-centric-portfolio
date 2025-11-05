import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SpotifyNowPlaying from "@/components/SpotifyNowPlaying";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buddhadebkoner.vercel.app"),
  title: {
    default: "Buddhadeb Koner | FullStack Web Developer",
    template: "%s | Buddhadeb Koner",
  },
  description:
    "Discover the personal portfolio of Buddhadeb Koner – a creative FullStack Web Developer specializing in MERN stack, Next.js, and modern web technologies. Building high-performance web applications.",
  keywords: [
    "Buddhadeb Koner",
    "FullStack Developer",
    "Web Developer",
    "MERN Stack",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "MongoDB",
    "Express.js",
    "Portfolio",
    "Web Development",
    "Software Engineer",
    "UI/UX Designer",
    "Freelance Developer",
    "Remote Developer",
  ],
  authors: [{ name: "Buddhadeb Koner", url: "https://buddhadebkoner.vercel.app" }],
  creator: "Buddhadeb Koner",
  publisher: "Buddhadeb Koner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Buddhadeb Koner | FullStack Web Developer",
    description:
      "Discover the personal portfolio of Buddhadeb Koner – a creative FullStack Web Developer producing great software.",
    url: "https://buddhadebkoner.vercel.app/",
    siteName: "Buddhadeb Koner",
    images: [
      {
        url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285469/next-portfolio/xyxj8fdggwypdx2bwdnp.png",
        width: 1200,
        height: 630,
        alt: "Buddhadeb Koner - FullStack Web Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddhadeb Koner | FullStack Web Developer",
    description:
      "Discover the personal portfolio of Buddhadeb Koner – a creative FullStack Web Developer producing great software.",
    creator: "@buddhadeb_koner",
    images: [
      "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285469/next-portfolio/xyxj8fdggwypdx2bwdnp.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://buddhadebkoner.vercel.app/",
  },
  verification: {
    google: "tIuTbVILH-G_9w4nWpFt1f6Ic9oaKmSLhbReePTbMCA",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Buddhadeb Koner",
    url: "https://buddhadebkoner.vercel.app/",
    image:
      "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285469/next-portfolio/xyxj8fdggwypdx2bwdnp.png",
    jobTitle: "FullStack Web Developer",
    description:
      "FullStack Web Developer specializing in MERN stack, Next.js, and modern web technologies.",
    alumniOf: "Self-taught Developer",
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "Express.js",
      "Tailwind CSS",
      "Git",
      "AWS",
      "UI/UX Design",
    ],
    sameAs: [
      "https://github.com/BuddhadebKoner",
      "https://x.com/buddhadeb_koner",
      "https://www.linkedin.com/in/buddhadeb-koner/",
      "https://www.instagram.com/buddhadeb_koner/",
      "https://www.facebook.com/jeet.koner.36",
      "https://peerlist.io/buddhadeb",
    ],
    email: "iambuddhadebkoner@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Theme initialization script - runs before page render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemeFromCookie() {
                  const cookies = document.cookie.split('; ');
                  const themeCookie = cookies.find(cookie => cookie.startsWith('theme='));
                  return themeCookie ? themeCookie.split('=')[1] : null;
                }
                
                function getSystemTheme() {
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                
                const savedTheme = getThemeFromCookie();
                const theme = savedTheme || getSystemTheme();
                
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`${manrope.variable} ${montserrat.variable} antialiased`}>
        <SpotifyNowPlaying />
        <div className="overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
