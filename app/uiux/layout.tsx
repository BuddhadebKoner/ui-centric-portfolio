import { Metadata } from "next";

export const metadata: Metadata = {
   title: "UI/UX Design - Buddhadeb Koner | FullStack Web Developer",
   description:
      "Explore the UI/UX design portfolio of Buddhadeb Koner. Featuring modern mockups, website designs, posters, and creative design solutions with attention to user experience.",
   keywords: [
      "Buddhadeb Koner UI/UX",
      "UI Design Portfolio",
      "UX Design",
      "Mockup Design",
      "Website Design",
      "Poster Design",
      "Graphic Design",
      "User Interface Design",
      "User Experience Design",
      "Figma Designs",
      "Adobe Photoshop",
      "Modern Design",
      "Creative Design",
      "Portfolio Design",
      "Branding",
      "Visual Design",
   ],
   openGraph: {
      title: "UI/UX Design - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Explore the UI/UX design portfolio of Buddhadeb Koner. Featuring modern mockups, website designs, and creative design solutions.",
      url: "https://buddhadebkoner.in/uiux",
      siteName: "Buddhadeb Koner",
      images: [
         {
            url: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407400/mocup-2_z1ips2.png",
            width: 1200,
            height: 630,
            alt: "Buddhadeb Koner - UI/UX Design Portfolio",
         },
      ],
      locale: "en_IN",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "UI/UX Design - Buddhadeb Koner | FullStack Web Developer",
      description:
         "Explore the UI/UX design portfolio of Buddhadeb Koner. Featuring modern mockups, website designs, and creative design solutions.",
      creator: "@buddhadeb_koner",
      images: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407400/mocup-2_z1ips2.png",
      ],
   },
   alternates: {
      canonical: "https://buddhadebkoner.in/uiux",
   },
};

export default function UIUXLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return <>{children}</>;
}
