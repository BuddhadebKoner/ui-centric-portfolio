export interface Sponsor {
   id: string;
   name: string;
   logo: string;
   image: string;
   url: string;
   title: string;
   description: string;
   ctaText: string;
   ctaUrl: string;
   isActive: boolean;
}

export const sponsors: Sponsor[] = [
   {
      id: "devsindia",
      name: "Devsindia",
      logo: "https://devsindia.in/logo.svg",
      image: "https://res.cloudinary.com/dsohw9o0u/image/upload/v1766587914/Screenshot_2025-12-24_201847_iqtxop.webp",
      url: "https://www.devsindia.in/",
      title: "Get Premium Certified with Devsindia",
      description:
         "Industry-recognized certifications trusted by 50,000+ professionals. Advance your career today.",
      ctaText: "Learn More",
      ctaUrl: "https://www.devsindia.in/get-certified",
      isActive: true,
   },
   {
      id: "qrattendee",
      name: "QR Attendee",
      logo: "https://qrattendee.com/asserts/qrAttender-logo.svg",
      image: "https://qrattendee.com/asserts/key-features/qr-code.svg",
      url: "https://qrattendee.com/",
      title: "Simplify Attendance with QR Attendee",
      description:
         "Transform hours of paperwork into seconds. Scan QR codes, track attendance in real-time, and download instant reports.",
      ctaText: "Download App",
      ctaUrl: "https://play.google.com/store/apps/details?id=com.rajislab.qrattender",
      isActive: true,
   },
];
