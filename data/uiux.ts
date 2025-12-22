export interface MockupProject {
   title: string;
   slug: string;
   description: string;
   image: string;
   tags: string[];
   category: "mockup" | "website-design";
   year: string;
   longDescription: string;
   challenge: string;
   solution: string;
   features: string[];
   tools: string[];
   gallery: string[];
   client?: string;
   duration?: string;
   demoUrl?: string;
}

export const uiuxProjects: MockupProject[] = [
   // Mockup and Poster Designs
   {
      title: "Portfolio Launch Poster",
      slug: "portfolio-launch-poster",
      description: "Eye-catching launch poster design for personal portfolio website with modern aesthetics and bold typography.",
      longDescription: "A visually striking launch poster designed to announce the release of my portfolio website. The design emphasizes bold typography, vibrant colors, and modern graphic elements to create immediate impact and generate excitement among potential clients and collaborators.",
      challenge: "Creating a launch announcement that stands out in crowded social media feeds while effectively communicating the brand identity and personality of the portfolio. The poster needed to be attention-grabbing yet professional, balancing creativity with clarity of message.",
      solution: "Developed a bold visual identity using contrasting colors and dynamic typography hierarchy. Incorporated modern design trends while maintaining professional aesthetics. The layout guides the viewer's eye from the main announcement to key details, creating a clear call-to-action for portfolio exploration.",
      features: [
         "Bold typography with hierarchy",
         "High contrast color scheme",
         "Modern gradient elements",
         "Strategic information layout",
         "Social media optimized dimensions",
         "Print and digital ready formats",
         "Brand identity consistency",
         "Clear call-to-action"
      ],
      tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      gallery: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407400/mocup-2_z1ips2.png"
      ],
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407400/mocup-2_z1ips2.png",
      tags: ["Poster Design", "Branding", "Typography"],
      category: "mockup",
      year: "2024",
      duration: "2 days"
   },
   {
      title: "Blog Website Launch Poster",
      slug: "blog-launch-poster",
      description: "Creative launch poster for blog website featuring clean design and engaging visual elements.",
      longDescription: "A promotional poster created to announce the launch of a blog website. The design combines clean aesthetics with engaging visual elements to attract readers and communicate the blog's focus areas. The poster balances information with visual appeal to generate interest.",
      challenge: "Designing a poster that effectively communicates the blog's purpose and content categories while maintaining visual interest. The design needed to appeal to the target audience and encourage them to visit the newly launched blog platform.",
      solution: "Created a clean, modern design that highlights key blog categories and unique selling points. Used strategic color placement and typography to create visual hierarchy. Incorporated subtle design elements that reflect the blog's content focus while maintaining readability and professional appeal.",
      features: [
         "Clean modern layout",
         "Category highlights",
         "Engaging color palette",
         "Typography emphasis",
         "Content preview elements",
         "Professional aesthetics",
         "Social media friendly format",
         "URL prominence"
      ],
      tools: ["Figma", "Adobe Illustrator", "Canva Pro"],
      gallery: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407396/mocup-1_itt9zw.png"
      ],
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407396/mocup-1_itt9zw.png",
      tags: ["Launch Design", "Blog", "Marketing"],
      category: "mockup",
      year: "2024",
      duration: "3 days"
   },
   {
      title: "Social Media Web App Poster",
      slug: "social-media-app-poster",
      description: "Dynamic poster design for social media web application launch with vibrant colors and modern UI elements.",
      longDescription: "A vibrant and energetic poster designed to promote a social media web application. The design captures the essence of social connectivity through dynamic visual elements and contemporary design patterns. The poster aims to generate excitement and user interest in the platform's features.",
      challenge: "Creating a design that conveys the social, interactive nature of the application while standing out in a competitive social media landscape. The poster needed to communicate the app's unique features and value proposition quickly and effectively.",
      solution: "Developed an energetic design using vibrant colors and dynamic layouts that reflect social interaction. Incorporated UI mockups to give viewers a preview of the actual application. Used modern design trends and clear messaging to highlight key features and benefits of the platform.",
      features: [
         "Vibrant color scheme",
         "UI mockup integration",
         "Dynamic composition",
         "Feature highlights",
         "Social media elements",
         "Modern design trends",
         "Clear value proposition",
         "Platform preview"
      ],
      tools: ["Figma", "Adobe Photoshop"],
      gallery: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407386/mocup-3_glsowp.png"
      ],
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407386/mocup-3_glsowp.png",
      tags: ["Social Media", "Web App", "UI Design"],
      category: "mockup",
      year: "2024",
      duration: "2 days"
   },
   {
      title: "Coding Bootcamp Poster",
      slug: "coding-bootcamp-poster",
      description: "Free coding bootcamp promotional poster designed for coding club with educational and inspiring visuals.",
      longDescription: "An inspiring promotional poster created for a free coding bootcamp organized by my coding club. The design aims to attract aspiring developers and communicate the educational value of the program. It combines technical elements with accessible design to appeal to both beginners and intermediate learners.",
      challenge: "Designing a poster that appeals to diverse skill levels while clearly communicating the bootcamp's value and free nature. The design needed to be both professional and approachable, technical yet welcoming to encourage maximum participation.",
      solution: "Created an educational yet inspiring design that balances technical imagery with accessible aesthetics. Used clear information hierarchy to highlight key details like 'Free', dates, and topics covered. Incorporated coding-related visual elements that resonate with the target audience while maintaining visual appeal.",
      features: [
         "Educational focus",
         "Clear information hierarchy",
         "Coding visual elements",
         "Free program emphasis",
         "Schedule and topic details",
         "Beginner-friendly design",
         "Club branding integration",
         "Registration call-to-action"
      ],
      tools: ["Figma", "Canva Pro", "Adobe Illustrator"],
      gallery: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407387/mocup-4_ycoeub.png"
      ],
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407387/mocup-4_ycoeub.png",
      tags: ["Education", "Bootcamp", "Community"],
      category: "mockup",
      year: "2024",
      duration: "3 days"
   },

   // Website Design Projects
   {
      title: "E-commerce Platform Design",
      slug: "ecommerce-platform-design",
      description: "Complete e-commerce web application designed from scratch with modern UI, seamless shopping experience, and comprehensive features.",
      longDescription: "A full-scale e-commerce platform designed entirely from scratch, featuring a modern and intuitive user interface that enhances the online shopping experience. The design encompasses all essential pages including home, product listings, product details, cart, checkout, user account, and admin dashboard. Every aspect was carefully crafted to optimize user flow and maximize conversion rates.",
      challenge: "Creating a comprehensive e-commerce solution that balances aesthetic appeal with functionality while ensuring seamless user experience across all touchpoints. The challenge was to design a system that works for both customers and administrators, handling complex features like product variations, inventory management, and secure checkout without overwhelming users.",
      solution: "Developed a clean, modern design system with consistent components throughout the platform. Implemented intuitive navigation patterns and clear visual hierarchy to guide users through the purchase journey. Created responsive layouts that work seamlessly across devices. The design prioritizes product presentation while maintaining easy access to cart and account features.",
      features: [
         "Modern homepage with featured products",
         "Advanced product filtering and search",
         "Detailed product pages with image galleries",
         "Smart shopping cart with recommendations",
         "Streamlined checkout process",
         "User account dashboard",
         "Order tracking system",
         "Admin panel for inventory management"
      ],
      tools: ["Figma", "React", "Tailwind CSS"],
      gallery: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407740/e-commerce-1_i15sib.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407737/e-commerce-2_mjbyye.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407688/e-commerce-3_qw5whj.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407692/e-commerce-4_ciai0h.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407699/e-commerce-5_jmpold.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407714/e-commerce-6_uv2dpg.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407720/e-commerce-7_kiyozd.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407723/e-commerce-8_ikthhi.png"
      ],
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407740/e-commerce-1_i15sib.png",
      tags: ["E-commerce", "Full Stack", "UI/UX"],
      category: "website-design",
      year: "2024",
      client: "Zidio Development",
      duration: "2 months",
      demoUrl: "https://zidio-project-three.vercel.app/"
   },
   {
      title: "SaaS Landing Page Design",
      slug: "saas-landing-page-design",
      description: "Professional SaaS landing page design with modern aesthetics, clear value proposition, and conversion-optimized layout.",
      longDescription: "A sophisticated landing page design for a SaaS application, meticulously crafted to convert visitors into customers. The design follows best practices in conversion optimization while maintaining a modern, professional aesthetic. Every section is strategically positioned to build trust, showcase features, and guide visitors toward sign-up.",
      challenge: "Designing a landing page that effectively communicates complex SaaS features while maintaining visual clarity and driving conversions. The challenge was to balance information density with visual appeal, ensuring potential customers quickly understand the value proposition without feeling overwhelmed.",
      solution: "Created a clean, structured layout with strategic use of white space and visual hierarchy. Implemented a storytelling approach that guides visitors from problem awareness to solution understanding to action. Used modern design elements, clear CTAs, and social proof strategically placed throughout the page to build confidence and drive conversions.",
      features: [
         "Compelling hero section with CTA",
         "Feature showcase with icons",
         "Benefits and value proposition",
         "Pricing comparison tables",
         "Customer testimonials",
         "FAQ section",
         "Trust badges and social proof",
         "Mobile-responsive design"
      ],
      tools: ["Figma", "Adobe Photoshop", "Principle"],
      gallery: [
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407882/Desktop_-_15_utc4i7.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407900/Desktop_-_14_uncwbc.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407893/Desktop_-_13_q48kr3.png",
         "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407887/Desktop_-_16_rt76n7.png"
      ],
      image: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1766407882/Desktop_-_15_utc4i7.png",
      tags: ["SaaS", "Landing Page", "Conversion Design"],
      category: "website-design",
      year: "2024",
      duration: "3 weeks"
   },
];
