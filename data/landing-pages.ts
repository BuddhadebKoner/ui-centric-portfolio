export interface LandingPage {
   title: string;
   url: string;
   imageSrc: string;
   demoUrl: string;
   description: string;
   tags: string[];
}

export const landingPages: LandingPage[] = [
   {
      title: "Book Your Hotel",
      url: "bookyourhotel.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1761368429/Screenshot_2025-10-25_at_10-14-56_BookYourHotel_-_India_s_Premier_Hotel_Booking_Platform_totvc6.png",
      demoUrl: "https://bookyourhotel.vercel.app/",
      description: "India's Premier Hotel Booking Platform built with LiteAPI. Seamless booking experience with real-time availability.",
      tags: ["Next.js-v15", "LiteAPI", "Tailwind CSS-v4.0", "TypeScript"],
   },
   {
      title: "E-commerce Platform",
      url: "zidio-project-three.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1753897864/Screenshot_2025-07-30_at_23-17-49_E-commerce_turllc.png",
      demoUrl: "https://zidio-project-three.vercel.app/",
      description: "A comprehensive e-commerce platform with modern UI and seamless user experience.",
      tags: ["React-v19", "Vite", "TanStack Query", "Tailwind CSS-v4.0"],
   },
   {
      title: "AI Portfolio",
      url: "full-stack-portfolio.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1750497000/Screenshot_2025-06-20_at_10-31-47_Buddhadeb_Koner_FullStack_Web_Developer_d5qnbk.png",
      demoUrl: "https://full-stack-portfolio-nine-theta.vercel.app/",
      description: "An AI-powered full-stack portfolio website with GEMINI AI integration.",
      tags: ["Next.js-v15", "React-v19", "Tailwind CSS-v4.0", "TypeScript"],
   },
   {
      title: "Modern Developer Portfolio",
      url: "buddhadebkoner.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741678714/next-portfolio/works/zugytqjxnvodwx8cwrob.png",
      demoUrl: "https://buddhadebkoner.vercel.app/",
      description: "A sleek and modern portfolio design tailored for developers with elegant interface.",
      tags: ["Next.js-v15", "React-v19", "Tailwind CSS-v4.0"],
   },
   {
      title: "Notes Doo",
      url: "notesdoo.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1759997327/recentWork_tye4yp.png",
      demoUrl: "https://notesdoo.vercel.app/",
      description: "Notes sharing website — Share Knowledge, Excel Together.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
   },
   {
      title: "MongoDB Aggregation Pipeline",
      url: "mongodb-aggregation-pipeline-prrp.vercel.app",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1760068413/Screenshot_2025-10-10_at_09-23-19_Vite_React_vaapy0.png",
      demoUrl: "https://mongodb-aggregation-pipeline-prrp.vercel.app/",
      description: "A focused learning environment to practice MongoDB aggregation pipelines.",
      tags: ["MongoDB", "Aggregation", "Vite", "React"],
   },
];
