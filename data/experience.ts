export interface Experience {
   company: string;
   role: string;
   description: string;
   website: string;
   logo: string;
   image: string;
   startDate: string;
   endDate: string | "Present";
   technologies: string[];
   highlights: string[];
}

export const experiences: Experience[] = [
   {
      company: "DevsIndia",
      role: "Full Stack Developer",
      description: "Leading development at DevsIndia — India's premier remote-first IT product company delivering world-class certification platform, AI-proctored exams, and an intuitive LMS. Architecting scalable microservices, real-time video monitoring, and sophisticated state management systems trusted by 50,000+ certified professionals.",
      website: "https://pro.devsindia.in/",
      logo: "https://res.cloudinary.com/dsohw9o0u/image/upload/v1756145439/logogifs_fo2xxr.gif",
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1765629470/devsindiaHome_vjpxz5.png",
      startDate: "2025-06",
      endDate: "Present",
      technologies: [
         "React",
         "Node.js",
         "Socket.io",
         "AWS",
         "Microservices",
         "Redux",
         "TypeScript",
         "MongoDB",
      ],
      highlights: [
         "Scaled platform to 50,000+ certified professionals",
         "Microservice architecture design & AWS infrastructure",
         "Socket implementation with AI-proctored video monitoring",
         "Complex state management & real-time LMS features",
         "MongoDB for Startups & AWS Activate program recipient",
      ],
   },
   {
      company: "Raji's Lab",
      role: "Marketing & Product Operations",
      description: "Contributing to Raji's Lab — a pioneering technology company building cutting-edge products that simplify daily life. Working on QR Attendee and QR Card Generator products used by schools, colleges, and businesses for streamlined attendance management.",
      website: "https://rajislab.com/",
      logo: "https://rajislab.com/Assets/QR%20Attender%20Logo.svg",
      image: "https://rajislab.com/Assets/Name_Roll1.png",
      startDate: "2023-01",
      endDate: "2025-6",
      technologies: [
         "React",
         "JavaScript",
         "Node.js",
         "QR Code APIs",
         "MongoDB",
         "Tailwind CSS",
         "Firebase",
         "PWA",
      ],
      highlights: [
         "Developed QR Attendee — QR-based attendance management app",
         "Built QR Card Generator for professional ID card creation",
         "Integrated real-time QR scanning with mobile PWA support",
         "Designed user-friendly interfaces for non-technical users",
         "Deployed scalable backend for cross-platform compatibility",
         "Supported seamless QR Attender + Card Generator integration",
      ],
   },

];
