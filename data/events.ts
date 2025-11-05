export interface EventImage {
   src: string;
   alt: string;
}

export interface Event {
   title: string;
   description: string;
   demoUrl: string;
   sourceCodeUrl?: string;
   images: string[] | EventImage[];
   date: string;
   location: string;
   tags: string[];
}

export const events: Event[] = [
   {
      title: "GDG Durgapur: AI & Innovation Summit",
      description:
         "Great experience at the GDG Durgapur event! A big thank you to everyone who organized such an amazing session — full of fun, learning, and exciting insights into AI. The event brought together developers, enthusiasts, and industry experts to explore the latest trends in artificial intelligence and its practical applications.",
      demoUrl:
         "https://gdg.community.dev/gdg-durgapur/",
      sourceCodeUrl: "",
      images: [
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1762357605/gdg_durgapur_2_fyqyrk.jpg",
            alt: "Buddhadeb Koner holding Gemini banner at GDG Durgapur event",
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1762357602/gdg_durgapur3_nfvigk.jpg",
            alt: "GDG Durgapur event entry card",
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1762357600/gdg_durgapur_1_ktfgzk.jpg",
            alt: "Group photo with friends at GDG Durgapur event",
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1762357599/gdg_durgapur_7_v3tblc.jpg",
            alt: "Friends group at GDG Durgapur AI & Innovation Summit",
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1762357598/gdg_durgapur_8_kta9hj.jpg",
            alt: "GDG Durgapur event venue - Durgapur Srijoni auditorium",
         }
      ],
      date: "2025-11-01",
      location: "Durgapur, India",
      tags: [
         "GDG",
         "AI",
         "Google Developer Group",
         "community event",
         "artificial intelligence",
         "innovation",
      ],
   },
   {
      title: "Tech Community Meetup: Web Development Workshop",
      description:
         "Organized and led an interactive workshop on modern web development techniques for local tech enthusiasts. This community event focused on Next.js, Tailwind CSS, and TypeScript fundamentals through hands-on coding sessions, networking opportunities, and collaborative problem-solving exercises.",
      demoUrl:
         "https://www.linkedin.com/feed/update/urn:li:activity:7268438874941460481/",
      sourceCodeUrl: "",
      images: [
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743102987/next-portfolio/events/noadz1h59wlazgqhwkfx.jpg",
            alt: "Buddhadeb Koner presenting at web development workshop",
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103006/next-portfolio/events/zuqaractc6jfrf3nlp38.jpg",
            alt: "Attendees participating in coding exercises at tech meetup",
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103007/next-portfolio/events/yweyqmqszjgh4kcu0uae.jpg",
            alt: "Group discussion during web development workshop",
         },
         {
            src: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1743103017/next-portfolio/events/uxiggs4uqvjmgmfqhk7o.jpg",
            alt: "Networking session at community tech event",
         },
      ],
      date: "2023-03-15",
      location: "Durgapur, India",
      tags: [
         "community event",
         "web development workshop",
         "tech meetup",
         "coding workshop",
         "developer networking",
      ],
   },
];
