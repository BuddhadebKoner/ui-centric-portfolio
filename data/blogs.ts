export interface BlogContent {
   type: 'text' | 'heading' | 'list' | 'image' | 'code' | 'link' | 'highlight';
   content: string;
   items?: string[];
   language?: string;
   url?: string;
}

export interface Blog {
   id: string;
   title: string;
   excerpt: string;
   thumbnail: string;
   author: {
      name: string;
      avatar: string;
   };
   date: string;
   readTime: string;
   tags: string[];
   content: BlogContent[];
}

export const blogs: Blog[] = [
   {
      id: "small-mistakes-big-lessons",
      title: "Small Mistakes, Big Lessons: Learning to Take Things Seriously",
      excerpt: "A personal reflection on how tiny moments of carelessness can create significant setbacks, and why being mindful in everything we do matters more than we think.",
      thumbnail: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: {
         name: "Buddhadeb Koner",
         avatar: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1762492868/next-portfolio/xyxj8fdggwypdx2bwdnp.png"
      },
      date: "27 Nov 2025",
      readTime: "6 min read",
      tags: ["Personal Growth", "Life Lessons", "Productivity", "Mindfulness", "Career"],
      content: [
         {
            type: 'text',
            content: 'Sometimes, the smallest oversights create the biggest headaches. Recently, I experienced this firsthand, and it taught me a lesson I won\'t forget anytime soon.'
         },
         {
            type: 'highlight',
            content: 'It wasn\'t a major catastrophe. It was just carelessness. But that carelessness cost me dearly.'
         },
         {
            type: 'heading',
            content: 'The Wake-Up Call'
         },
         {
            type: 'text',
            content: 'I missed something important. Something I should have been prepared for. Looking back, I realize it wasn\'t about capability or skill—it was about **attention** and **priority**.'
         },
         {
            type: 'text',
            content: 'I was casual when I should have been serious. I assumed things would work out, that I had time, that it wasn\'t urgent. And before I knew it, the opportunity had passed, leaving me with nothing but regret and frustration.'
         },
         {
            type: 'heading',
            content: 'The Weight of Small Ignorance'
         },
         {
            type: 'text',
            content: 'What hurts the most isn\'t the mistake itself—it\'s knowing it was **completely avoidable**. A little more attention, a little more discipline, and things could have been different.'
         },
         {
            type: 'list',
            content: 'Here\'s what I realized:',
            items: [
               '**Small ignorance = Big consequences** - Minor oversights can derail major opportunities',
               '**Casual attitudes backfire** - Taking things lightly often leads to taking things seriously too late',
               '**Prevention is easier than regret** - A few minutes of focus can save days of stress',
               '**Every moment matters** - What seems insignificant today can be critical tomorrow'
            ]
         },
         {
            type: 'highlight',
            content: 'Don\'t underestimate the power of small mistakes. They accumulate. They compound. And eventually, they block your path forward.'
         },
         {
            type: 'heading',
            content: 'The Productivity Killer'
         },
         {
            type: 'text',
            content: 'The aftermath of this mistake has been draining. Instead of moving forward with my projects and goals, I\'ve been stuck dealing with the consequences. My **productivity** has taken a hit, not just because of the setback itself, but because of the mental weight it carries.'
         },
         {
            type: 'text',
            content: 'When you make an avoidable mistake, it doesn\'t just affect that one thing—it creates a **ripple effect**:'
         },
         {
            type: 'list',
            content: 'The domino effect of carelessness:',
            items: [
               '❌ **Mental stress** - Constant worry about what went wrong',
               '❌ **Lost time** - Trying to fix or cope with the situation',
               '❌ **Decreased focus** - Struggling to concentrate on other tasks',
               '❌ **Damaged confidence** - Questioning your own reliability',
               '❌ **Missed opportunities** - Being too distracted to seize new chances'
            ]
         },
         {
            type: 'heading',
            content: 'Breaking the Cycle'
         },
         {
            type: 'text',
            content: 'The most important question isn\'t "Why did this happen?" It\'s "How do I make sure this **never happens again**?"'
         },
         {
            type: 'text',
            content: 'Here\'s what I\'m committing to moving forward:'
         },
         {
            type: 'list',
            content: 'My action plan:',
            items: [
               '✅ **Take everything seriously** - Even if it seems minor, treat it with importance',
               '✅ **Focus on what matters** - Don\'t let distractions pull you away from priorities',
               '✅ **Double-check deadlines** - Make it a habit to verify dates and times',
               '✅ **Set reminders** - Use technology to compensate for human forgetfulness',
               '✅ **Learn from mistakes** - Document what went wrong and how to prevent it',
               '✅ **Don\'t repeat errors** - Recognize patterns and break them consciously'
            ]
         },
         {
            type: 'highlight',
            content: 'Mistakes are only failures if you don\'t learn from them. The same mistake twice? That\'s a choice, not an accident.'
         },
         {
            type: 'heading',
            content: 'Focus on Present, Not Future Anxiety'
         },
         {
            type: 'text',
            content: 'One thing I\'ve learned through this experience is that **worrying about the future is pointless** if you\'re not taking care of the present.'
         },
         {
            type: 'text',
            content: 'Your future isn\'t decided by hope or luck—it\'s decided by **what you do today**. Your present work, your present discipline, your present focus—that\'s what shapes tomorrow.'
         },
         {
            type: 'list',
            content: 'Instead of stressing about the future:',
            items: [
               '🎯 **Work on present skills** - Build the foundation that creates future opportunities',
               '🎯 **Complete today\'s tasks** - Don\'t procrastinate thinking you\'ll do it tomorrow',
               '🎯 **Be consistent** - Daily progress compounds into long-term success',
               '🎯 **Stay disciplined** - Your habits today determine your reality tomorrow'
            ]
         },
         {
            type: 'text',
            content: 'If your present is strong, your future will automatically fall into place. Stop worrying about what\'s coming and start **owning what\'s here**.'
         },
         {
            type: 'heading',
            content: 'The Emotional Toll'
         },
         {
            type: 'text',
            content: 'I won\'t lie—this has been tough emotionally. There\'s frustration, disappointment, and a lot of self-criticism. But staying stuck in those emotions won\'t change anything.'
         },
         {
            type: 'text',
            content: 'What I\'m learning is that **it\'s okay to feel the weight of a mistake**, but it\'s not okay to let it define you. Acknowledge it, learn from it, and then **move forward**.'
         },
         {
            type: 'highlight',
            content: 'Your mistakes don\'t define your potential. Your response to those mistakes does.'
         },
         {
            type: 'heading',
            content: 'A Message to Anyone Reading This'
         },
         {
            type: 'text',
            content: 'If you\'re someone who tends to be casual about things, who thinks "I\'ll handle it later" or "It\'s not that important," let me tell you from experience:'
         },
         {
            type: 'text',
            content: '**It catches up to you.**'
         },
         {
            type: 'text',
            content: 'That small thing you\'re ignoring? It might become your biggest regret. That deadline you think you can skip? It might be the one that matters most. That task you\'re putting off? It might be the difference between progress and stagnation.'
         },
         {
            type: 'list',
            content: 'Don\'t make the same mistakes I did:',
            items: [
               '⚠️ **Be mindful** - Pay attention to the details',
               '⚠️ **Be prepared** - Don\'t assume things will work out',
               '⚠️ **Be responsible** - Own your commitments',
               '⚠️ **Be serious** - Treat your goals with the respect they deserve'
            ]
         },
         {
            type: 'heading',
            content: 'Moving Forward with Purpose'
         },
         {
            type: 'text',
            content: 'This experience has been a harsh teacher, but an important one. I\'m not going to pretend it didn\'t hurt. I\'m not going to act like it wasn\'t a setback.'
         },
         {
            type: 'text',
            content: 'But I am going to make sure it **means something**. I\'m going to let this be the moment I stopped being casual and started being intentional. The moment I stopped ignoring the small things and started treating everything with care.'
         },
         {
            type: 'highlight',
            content: 'The best time to start taking things seriously was yesterday. The second best time is now.'
         },
         {
            type: 'heading',
            content: 'Final Thoughts'
         },
         {
            type: 'text',
            content: 'If there\'s one thing I want you to take away from this, it\'s this:'
         },
         {
            type: 'text',
            content: '**Don\'t let small carelessness create big problems.** Be present. Be focused. Be serious about your work and your commitments.'
         },
         {
            type: 'text',
            content: 'Learn from your mistakes, but don\'t repeat them. Your future depends on what you do in the present. Make it count. 💪'
         },
         {
            type: 'highlight',
            content: 'Success isn\'t about never making mistakes—it\'s about never making the same mistake twice.'
         }
      ]
   },
   {
      id: "my-first-interview-experience",
      title: "My First Interview Experience",
      excerpt: "My first technical interview as a Full Stack Developer. A nervous yet exciting journey through React, Next.js, and backend questions that taught me valuable lessons.",
      thumbnail: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: {
         name: "Buddhadeb Koner",
         avatar: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1762492868/next-portfolio/xyxj8fdggwypdx2bwdnp.png"
      },
      date: "15 Nov 2024",
      readTime: "5 min read",
      tags: ["Interview", "Full Stack", "React", "Next.js", "Career"],
      content: [
         {
            type: 'text',
            content: '**15th November** was my first technical interview ever. I still remember feeling nervous but excited.'
         },
         {
            type: 'text',
            content: 'I applied for the **Full Stack Developer** role, and the interview started straight with technical questions:'
         },
         {
            type: 'heading',
            content: 'React & Frontend Deep Dive'
         },
         {
            type: 'list',
            content: 'The interviewer fired rapid questions:',
            items: [
               '**What is a React bundler?** – I couldn\'t answer this one.',
               '**What is DOM?** – Explained.',
               '**What is Virtual DOM?** – Explained.',
               '**What is `getElementById(\'root\')`?** – Explained.',
               '**Do you use Redux?** – No.',
               '**What is Context API?** – Explained well.'
            ]
         },
         {
            type: 'text',
            content: 'I was also asked about **helmet in frontend and backend** – this caught me off guard, but I explained it as a security middleware for setting HTTP headers.'
         },
         {
            type: 'heading',
            content: 'Next.js Rendering Concepts'
         },
         {
            type: 'text',
            content: 'Then they asked about **Next.js**:'
         },
         {
            type: 'text',
            content: '**"Explain SSR and CSR"** – I explained the difference between **server-side rendering** and **client-side rendering**, covering how SSR improves SEO and initial load time while CSR provides better interactivity after the first load.'
         },
         {
            type: 'heading',
            content: 'Hands-On Practical Task'
         },
         {
            type: 'text',
            content: 'Then they gave me a laptop and asked me to **initialize a React project** and create folders the way I usually do.'
         },
         {
            type: 'text',
            content: 'I created the structure and explained everything **confidently** – showing my project organization approach with separate folders for components, pages, utils, and services.'
         },
         {
            type: 'heading',
            content: 'Backend & System Architecture'
         },
         {
            type: 'text',
            content: 'After that, more **backend and system questions** came:'
         },
         {
            type: 'list',
            content: 'Backend topics covered:',
            items: [
               '**Aggregation Pipeline** – Explained how I use MongoDB aggregation for complex queries.',
               '**How I used Redis** – Explained `caching` and performance optimization strategies.',
               '**How I used WebSocket** – Explained real-time communication implementation.',
               '**DevOps knowledge** (AWS, Docker, etc.) – Shared my current level honestly.'
            ]
         },
         {
            type: 'heading',
            content: 'The Valuable Feedback'
         },
         {
            type: 'text',
            content: 'Before leaving, I asked for feedback since it was my first interview.'
         },
         {
            type: 'highlight',
            content: '"Answer more specifically. Don\'t explain unnecessary things."'
         },
         {
            type: 'text',
            content: 'That simple sentence hit differently. They were telling me to be **precise** and **focused** in my answers – don\'t over-explain or add unnecessary context.'
         },
         {
            type: 'heading',
            content: 'Key Lessons Learned'
         },
         {
            type: 'list',
            content: 'What this interview taught me:',
            items: [
               '✅ **Be specific** – Answer the exact question asked',
               '✅ **Don\'t over-explain** – Keep it concise and relevant',
               '✅ **Know your gaps** – Be honest about what you don\'t know',
               '✅ **Stay confident** – Even in practical tasks under pressure',
               '✅ **Ask for feedback** – It\'s the best way to improve'
            ]
         },
         {
            type: 'heading',
            content: 'Final Thoughts'
         },
         {
            type: 'text',
            content: 'Overall, it was a **great learning experience**. I understood where I\'m strong, where I need to improve, and how to give clear, targeted answers in technical interviews.'
         },
         {
            type: 'text',
            content: 'A memorable first step in my journey. 🚀'
         },
         {
            type: 'highlight',
            content: 'First interviews are not about perfection – they\'re about learning, growth, and understanding what the industry expects from you.'
         }
      ]
   },
   {
      id: "gdg-durgapur-ai-innovation-summit",
      title: "GDG Durgapur: AI & Innovation Summit Experience",
      excerpt: "An incredible day at GDG Durgapur exploring AI innovations, networking with fellow developers, and learning about the future of technology.",
      thumbnail: "https://images.unsplash.com/photo-1663057826282-20a3fdd8efbb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: {
         name: "Buddhadeb Koner",
         avatar: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1762492868/next-portfolio/xyxj8fdggwypdx2bwdnp.png"
      },
      date: "1 Nov 2025",
      readTime: "5 min read",
      tags: ["GDG", "AI", "Community", "Google", "Innovation"],
      content: [
         {
            type: 'text',
            content: 'Last week, I had the amazing opportunity to attend the **GDG Durgapur: AI & Innovation Summit** at Durgapur Srijoni auditorium. It was an incredible experience filled with learning, networking, and inspiration! 🚀'
         },
         {
            type: 'highlight',
            content: 'Being part of the Google Developer Group community opened my eyes to the vast possibilities of AI and how it\'s transforming the tech industry.'
         },
         {
            type: 'heading',
            content: 'What is GDG?'
         },
         {
            type: 'text',
            content: '**Google Developer Groups (GDG)** are community-driven organizations that bring together developers, tech enthusiasts, and students to learn about Google technologies and innovations. These groups organize events, workshops, and meetups to foster collaboration and knowledge sharing.'
         },
         {
            type: 'heading',
            content: 'The Event Highlights'
         },
         {
            type: 'text',
            content: 'The summit was packed with insightful sessions covering various aspects of **Artificial Intelligence** and its practical applications in modern development:'
         },
         {
            type: 'list',
            content: 'Key topics covered:',
            items: [
               '**Gemini AI** - Google\'s latest AI model and its capabilities',
               '**Machine Learning** fundamentals and real-world use cases',
               '**AI-powered development tools** that boost productivity',
               '**Cloud AI services** and integration with applications',
               '**Responsible AI** practices and ethical considerations'
            ]
         },
         {
            type: 'image',
            content: 'https://res.cloudinary.com/dsfztnp9x/image/upload/v1762357605/gdg_durgapur_2_fyqyrk.jpg'
         },
         {
            type: 'heading',
            content: 'Networking & Community'
         },
         {
            type: 'text',
            content: 'One of the best parts of the event was meeting fellow developers and tech enthusiasts. We shared experiences, discussed projects, and exchanged ideas about the future of AI in web development.'
         },
         {
            type: 'text',
            content: 'The energy in the room was **contagious**! Everyone was excited about AI and eager to learn how to integrate it into their projects. I made some great connections with developers working on innovative AI-powered applications.'
         },
         {
            type: 'image',
            content: 'https://res.cloudinary.com/dsfztnp9x/image/upload/v1762357600/gdg_durgapur_1_ktfgzk.jpg'
         },
         {
            type: 'heading',
            content: 'Key Takeaways'
         },
         {
            type: 'list',
            content: 'What I learned from this experience:',
            items: [
               '**AI is accessible** - Tools like `Gemini` and `TensorFlow` make it easier than ever to integrate AI',
               '**Community matters** - Learning together accelerates growth',
               '**Practical applications** - AI isn\'t just theory, it solves real problems',
               '**Stay curious** - The AI field is evolving rapidly, continuous learning is essential'
            ]
         },
         {
            type: 'heading',
            content: 'Hands-on with Gemini'
         },
         {
            type: 'text',
            content: 'During the event, we got hands-on experience with **Gemini AI**. Here\'s a simple example of how easy it is to integrate AI into your applications:'
         },
         {
            type: 'code',
            language: 'javascript',
            content: '// Using Gemini API in a Next.js application\nimport { GoogleGenerativeAI } from "@google/generative-ai";\n\nconst genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);\nconst model = genAI.getGenerativeModel({ model: "gemini-pro" });\n\nconst result = await model.generateContent("Explain AI in simple terms");\nconsole.log(result.response.text());'
         },
         {
            type: 'image',
            content: 'https://res.cloudinary.com/dsfztnp9x/image/upload/v1762357602/gdg_durgapur3_nfvigk.jpg'
         },
         {
            type: 'heading',
            content: 'The Venue & Organization'
         },
         {
            type: 'text',
            content: 'The event was held at the beautiful **Durgapur Srijoni auditorium**, which provided the perfect environment for learning and networking. The organizers did an outstanding job managing everything from registration to the closing ceremony.'
         },
         {
            type: 'highlight',
            content: 'A huge shoutout to the GDG Durgapur team for organizing such an amazing event! Your dedication to building a strong developer community is truly inspiring.'
         },
         {
            type: 'image',
            content: 'https://res.cloudinary.com/dsfztnp9x/image/upload/v1762357598/gdg_durgapur_8_kta9hj.jpg'
         },
         {
            type: 'heading',
            content: 'My AI Journey Continues'
         },
         {
            type: 'text',
            content: 'This event has inspired me to explore AI more deeply in my projects. I\'m currently working on integrating **Gemini AI** into my portfolio website to create an interactive chat experience for visitors.'
         },
         {
            type: 'text',
            content: 'If you\'re a developer interested in AI, I highly recommend joining your local **GDG chapter**. These communities provide invaluable learning opportunities and connections that can accelerate your career growth.'
         },
         {
            type: 'image',
            content: 'https://res.cloudinary.com/dsfztnp9x/image/upload/v1762357599/gdg_durgapur_7_v3tblc.jpg'
         },
         {
            type: 'heading',
            content: 'Final Thoughts'
         },
         {
            type: 'text',
            content: 'The **GDG Durgapur AI & Innovation Summit** was more than just an event—it was a celebration of technology, community, and the exciting future ahead. I left with new knowledge, new friends, and renewed enthusiasm for building AI-powered applications.'
         },
         {
            type: 'text',
            content: 'Thank you to everyone who made this event possible, and to all the attendees who made it memorable. Can\'t wait for the next GDG event! 🎉'
         },
         {
            type: 'highlight',
            content: 'Stay curious, keep building, and never stop learning! The future of AI is in our hands. 💡'
         }
      ]
   },
   {
      id: "building-realtime-mcq-quiz-websocket",
      title: "Building a Real-Time MCQ Quiz System with WebSocket",
      excerpt: "A deep dive into building a real-time quiz platform with WebSocket, featuring auto-submission, attempt tracking, and detailed analytics.",
      thumbnail: "https://images.unsplash.com/photo-1668007285666-7cfa7a55827b?q=80&w=1843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: {
         name: "Buddhadeb Koner",
         avatar: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1762492868/next-portfolio/xyxj8fdggwypdx2bwdnp.png"
      },
      date: "15 Nov 2024",
      readTime: "8 min read",
      tags: ["WebSocket", "Node.js", "React", "Real-time", "Full Stack"],
      content: [
         {
            type: 'text',
            content: 'Recently, I built a **real-time MCQ quiz system** that uses WebSocket for instant communication between students and the server. The project features automatic question timing, attempt tracking, and comprehensive result analytics. Let me walk you through the architecture and implementation! 🚀'
         },
         {
            type: 'heading',
            content: 'System Overview'
         },
         {
            type: 'text',
            content: 'The quiz system is built with a focus on **real-time communication** and **user experience**. Here are the core features:'
         },
         {
            type: 'list',
            content: 'Core Features:',
            items: [
               '**Real-time WebSocket communication** for instant updates',
               '**5 MCQ questions** with 10-second timer per question',
               '**3 attempts** to change answer per question',
               '**Auto-submission** on max attempts or timeout',
               '**Private scoring** - results shown only at the end',
               '**Detailed performance analytics** with answer breakdown'
            ]
         },
         {
            type: 'heading',
            content: 'Quiz Rules & Constraints'
         },
         {
            type: 'list',
            content: 'The system enforces these rules:',
            items: [
               '⏰ **Time Limit**: 10 seconds per question',
               '🔄 **Attempts**: Maximum 3 answer changes per question',
               '⚡ **Auto-Submit**: Automatic submission on 3rd selection or timeout',
               '✋ **Early Submit**: Manual submission allowed at any time',
               '🔒 **Privacy**: No immediate feedback, results shown at the end'
            ]
         },
         {
            type: 'highlight',
            content: 'The key challenge was managing real-time state synchronization between client and server while maintaining quiz integrity and preventing cheating.'
         },
         {
            type: 'heading',
            content: 'Architecture Overview'
         },
         {
            type: 'text',
            content: 'The system follows a **client-server architecture** with WebSocket for bidirectional communication. Here\'s how the components interact:'
         },
         {
            type: 'code',
            language: 'plaintext',
            content: '┌─────────────────────────────────────┐\n│      FRONTEND (React + Vite)        │\n├─────────────────────────────────────┤\n│  • Connection Management            │\n│  • Question Display                 │\n│  • Timer & Attempt Counter          │\n│  • Warning System                   │\n│  • Results Dashboard                │\n└──────────────┬──────────────────────┘\n               │ WebSocket\n               ▼\n┌─────────────────────────────────────┐\n│      BACKEND (Node.js + ws)         │\n├─────────────────────────────────────┤\n│  • Session Management               │\n│  • Question Timer                   │\n│  • Attempt Tracking                 │\n│  • Answer Processing                │\n│  • Results Calculation              │\n└─────────────────────────────────────┘'
         },
         {
            type: 'heading',
            content: 'WebSocket Message Protocol'
         },
         {
            type: 'text',
            content: 'Communication between client and server uses **JSON messages** with specific types. Here are the main message types:'
         },
         {
            type: 'text',
            content: '**Client → Server Messages:**'
         },
         {
            type: 'code',
            language: 'javascript',
            content: '// Answer Selection\n{\n  "type": "answer",\n  "answerIndex": 2\n}\n\n// Manual Submission\n{\n  "type": "submit",\n  "answerIndex": 1\n}\n\n// Connection Health Check\n{\n  "type": "ping"\n}'
         },
         {
            type: 'text',
            content: '**Server → Client Messages:**'
         },
         {
            type: 'code',
            language: 'javascript',
            content: '// Welcome Message\n{\n  "type": "welcome",\n  "studentId": "student_1234567890_abc123def",\n  "totalQuestions": 5,\n  "instructions": ["Rule 1", "Rule 2"]\n}\n\n// Question Data\n{\n  "type": "question",\n  "questionNumber": 1,\n  "question": "What does HTML stand for?",\n  "options": ["A", "B", "C", "D"],\n  "timeLimit": 10,\n  "attemptsRemaining": 3\n}'
         },
         {
            type: 'heading',
            content: 'Attempt System Logic'
         },
         {
            type: 'text',
            content: 'One of the most interesting features is the **3-attempt system**. Each answer selection counts as an attempt, and users can change their answer up to 3 times:'
         },
         {
            type: 'code',
            language: 'javascript',
            content: '// Backend: Handle Answer Selection\nfunction handleAnswer(session, answerIndex) {\n  session.currentAttempts++;\n  session.selectedAnswer = answerIndex;\n  \n  const remaining = session.maxAttempts - session.currentAttempts;\n  \n  if (remaining === 0) {\n    // Auto-submit on 3rd attempt\n    processAnswer(session, answerIndex);\n  } else {\n    // Send attempt warning\n    session.ws.send(JSON.stringify({\n      type: "attempt-warning",\n      message: `Answer selected! ${remaining} attempts remaining...`,\n      attemptsRemaining: remaining\n    }));\n  }\n}'
         },
         {
            type: 'heading',
            content: 'Question Timer Implementation'
         },
         {
            type: 'text',
            content: 'Each question has a **10-second timer** that runs on the server. If the timer expires, the question is automatically marked as timed out:'
         },
         {
            type: 'code',
            language: 'javascript',
            content: '// Start question timer\nfunction startQuestionTimer(session) {\n  clearTimeout(session.questionTimer);\n  \n  session.questionTimer = setTimeout(() => {\n    if (!session.hasAnswered) {\n      handleTimeOut(session);\n    }\n  }, session.questionTimeLimit * 1000);\n}\n\n// Handle timeout\nfunction handleTimeOut(session) {\n  session.answers.push({\n    questionId: session.currentQuestionIndex,\n    selectedAnswer: null,\n    isCorrect: false,\n    timedOut: true,\n    timeTaken: session.questionTimeLimit\n  });\n  \n  sendFeedbackAndNextQuestion(session);\n}'
         },
         {
            type: 'heading',
            content: 'Session Management'
         },
         {
            type: 'text',
            content: 'Each student connection creates a **quiz session** that tracks their progress:'
         },
         {
            type: 'code',
            language: 'javascript',
            content: '// Quiz Session Structure\nconst session = {\n  ws: WebSocketConnection,\n  studentId: `student_${Date.now()}_${randomString}`,\n  currentQuestionIndex: 0,\n  answers: [],\n  score: 0,\n  startTime: new Date(),\n  questionTimer: null,\n  currentAttempts: 0,\n  maxAttempts: 3,\n  questionTimeLimit: 10,\n  hasAnswered: false\n};'
         },
         {
            type: 'heading',
            content: 'Results & Analytics'
         },
         {
            type: 'text',
            content: 'At the end of the quiz, students receive **detailed analytics** including their score, time taken, and a question-by-question breakdown:'
         },
         {
            type: 'code',
            language: 'javascript',
            content: '// Final Results Message\n{\n  "type": "results",\n  "score": 4,\n  "totalQuestions": 5,\n  "percentage": 80,\n  "totalTime": 45,\n  "answerBreakdown": [\n    {\n      "questionNumber": 1,\n      "question": "What does HTML stand for?",\n      "yourAnswer": "Hyper Text Markup Language",\n      "correctAnswer": "Hyper Text Markup Language",\n      "isCorrect": true,\n      "attempts": 1,\n      "timeTaken": 5\n    }\n  ],\n  "summary": {\n    "correct": 4,\n    "incorrect": 1,\n    "timeouts": 0,\n    "maxAttemptsReached": 1\n  }\n}'
         },
         {
            type: 'heading',
            content: 'Frontend Implementation'
         },
         {
            type: 'text',
            content: 'The React frontend manages **WebSocket connection**, **question state**, and **UI updates**:'
         },
         {
            type: 'code',
            language: 'javascript',
            content: '// React: WebSocket Connection\nconst [ws, setWs] = useState(null);\nconst [question, setQuestion] = useState(null);\nconst [timer, setTimer] = useState(10);\nconst [attempts, setAttempts] = useState(3);\n\nuseEffect(() => {\n  const websocket = new WebSocket("ws://localhost:3000");\n  \n  websocket.onmessage = (event) => {\n    const data = JSON.parse(event.data);\n    \n    switch(data.type) {\n      case "question":\n        setQuestion(data);\n        setTimer(data.timeLimit);\n        setAttempts(data.attemptsRemaining);\n        break;\n      case "attempt-warning":\n        setAttempts(data.attemptsRemaining);\n        break;\n      case "results":\n        showResults(data);\n        break;\n    }\n  };\n  \n  setWs(websocket);\n}, []);'
         },
         {
            type: 'heading',
            content: 'Technology Stack'
         },
         {
            type: 'list',
            content: 'Technologies used in this project:',
            items: [
               '**Backend**: `Node.js` + `Express` + `ws` (WebSocket library)',
               '**Frontend**: `React` + `Vite` + `Tailwind CSS`',
               '**Communication**: `WebSocket` for real-time bidirectional updates',
               '**Architecture**: Functional programming approach for maintainability'
            ]
         },
         {
            type: 'heading',
            content: 'Project Structure'
         },
         {
            type: 'code',
            language: 'plaintext',
            content: 'student-server/\n├── backend/\n│   ├── server.js\n│   ├── package.json\n│   └── src/\n│       ├── controllers/\n│       │   └── controller.js\n│       └── routes/\n│           └── socket.route.js\n└── frontend/\n    ├── src/\n    │   ├── App.jsx\n    │   ├── main.jsx\n    │   └── index.css\n    ├── package.json\n    └── .env'
         },
         {
            type: 'heading',
            content: 'Key Challenges & Solutions'
         },
         {
            type: 'list',
            content: 'Problems solved during development:',
            items: [
               '**State Synchronization** - Used WebSocket for instant state updates between client/server',
               '**Timer Accuracy** - Server-side timers prevent client-side manipulation',
               '**Connection Handling** - Automatic cleanup on disconnect prevents memory leaks',
               '**Privacy Protection** - Generic feedback messages prevent answer leaking'
            ]
         },
         {
            type: 'highlight',
            content: 'The functional programming approach made the codebase more maintainable and testable, with pure functions handling each aspect of the quiz flow.'
         },
         {
            type: 'heading',
            content: 'Security Features'
         },
         {
            type: 'list',
            content: 'Security measures implemented:',
            items: [
               '✅ **CORS configuration** for cross-origin requests',
               '✅ **Input validation** on all WebSocket messages',
               '✅ **Session isolation** - each connection is independent',
               '✅ **Server-side timing** - prevents client manipulation',
               '✅ **Error handling** with graceful degradation'
            ]
         },
         {
            type: 'heading',
            content: 'Future Enhancements'
         },
         {
            type: 'text',
            content: 'Some features I\'m planning to add in future versions:'
         },
         {
            type: 'list',
            content: 'Planned improvements:',
            items: [
               'User authentication and progress tracking',
               'Database integration for question storage',
               'Leaderboard and competitive mode',
               'Question difficulty levels',
               'Topic-based quiz categories',
               'Mobile app with React Native'
            ]
         },
         {
            type: 'heading',
            content: 'Lessons Learned'
         },
         {
            type: 'text',
            content: 'Building this project taught me valuable lessons about **real-time systems**, **state management**, and **user experience design**. The most important takeaway was understanding how to balance **functionality** with **simplicity** in the user interface.'
         },
         {
            type: 'highlight',
            content: 'Real-time applications require careful consideration of network latency, connection handling, and state synchronization. WebSocket provides the perfect tool for this use case!'
         },
         {
            type: 'text',
            content: 'If you\'re interested in building real-time applications, I highly recommend starting with WebSocket. It\'s powerful, efficient, and opens up endless possibilities for interactive web experiences. Happy coding! 💻'
         }
      ]
   }
];
