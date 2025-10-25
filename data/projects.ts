export interface Project {
   title: string;
   description: string;
   demoUrl: string;
   sourceCodeUrl: string;
   image: string;
   tags: string[];
   isNew?: boolean;
}

export const projects: Project[] = [
   {
      title: "Book Your Hotel",
      description: "India's Premier Hotel Booking Platform built with LiteAPI. Explore hotels, search destinations, and confirm bookings seamlessly with real-time availability.",
      demoUrl: "https://bookyourhotel.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/BookYourHotel",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1761368429/Screenshot_2025-10-25_at_10-14-56_BookYourHotel_-_India_s_Premier_Hotel_Booking_Platform_totvc6.png",
      tags: ["Next.js-v15", "LiteAPI", "Tailwind CSS-v4.0", "TypeScript"],
      isNew: true,
   },
   {
      title: "AI powered Portfolio",
      description: "An AI-powered full-stack portfolio website that showcases your skills and projects with GEMINI AI integration.",
      demoUrl: "https://full-stack-portfolio-nine-theta.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/AI-Powered-FullStack-Portfolio",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1750497000/Screenshot_2025-06-20_at_10-31-47_Buddhadeb_Koner_FullStack_Web_Developer_d5qnbk.png",
      tags: ["Next.js-v15", "React-v19", "Tailwind CSS-v4.0", "TypeScript"],
   },
   {
      title: "URL Shortener",
      description: "A modern URL shortener application that allows users to shorten long URLs and manage their links efficiently.",
      demoUrl: "https://abcredirect.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/url-shortener",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1749264353/Screenshot_2025-06-07_at_08-15-32_1_Post_Feed_LinkedIn_cfugl1.png",
      tags: ["Next.js-v15", "React-v19", "Tailwind CSS-v4.0"],
   },
   {
      title: "Modern Portfolio Developers",
      description: "Experience a sleek and modern portfolio design tailored for developers with elegant, responsive interface.",
      demoUrl: "https://buddhadebkoner.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/devaloper-modern-portfolio/",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741678714/next-portfolio/works/zugytqjxnvodwx8cwrob.png",
      tags: ["Next.js-v15", "React-v19", "Tailwind CSS-v4.0"],
   },
   {
      title: "MERN Blog",
      description: "Discover an engaging blog platform built with the MERN stack with custom admin panel for content management.",
      demoUrl: "https://blog-app-sandy-sigma.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/Blog-App/",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741078414/mern-blog/blogs/bkdijkurwg0tawqboovl.png",
      tags: ["MERN", "Tailwind CSS", "MongoDB", "Express"],
   },
   {
      title: "Kochugram",
      description: "A dynamic social media platform designed for the Koch community with posts, likes, comments, and follow features.",
      demoUrl: "https://kochugram-com.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/kochugram.com/",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1740969977/mern-blog/tdtyjvq7yq475tpwuy1a.png",
      tags: ["REACT", "Tailwind CSS", "TypeScript", "appWrite"],
   },
   {
      title: "Notes Doo",
      description: "Notes sharing website — Share Knowledge, Excel Together.",
      demoUrl: "https://notesdoo.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/notes-do",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1759997327/recentWork_tye4yp.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
   },
   {
      title: "MongoDB Aggregation Pipeline",
      description: "A focused learning environment to practice MongoDB aggregation pipelines with Users, Books, and Authors collections.",
      demoUrl: "https://mongodb-aggregation-pipeline-prrp.vercel.app/",
      sourceCodeUrl: "https://github.com/BuddhadebKoner/mongodb-aggregation-pipeline",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1760068413/Screenshot_2025-10-10_at_09-23-19_Vite_React_vaapy0.png",
      tags: ["MongoDB", "Aggregation", "Vite", "React"],
   },
];
