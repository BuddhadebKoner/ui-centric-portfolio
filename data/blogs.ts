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
      id: "my-first-interview-experience",
      title: "My First Interview Experience",
      excerpt: "15th November was my first technical interview ever. A memorable journey filled with learning and growth.",
      thumbnail: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: {
         name: "Buddhadeb Koner",
         avatar: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1762492868/next-portfolio/xyxj8fdggwypdx2bwdnp.png"
      },
      date: "20 Nov 2024",
      readTime: "4 min read",
      tags: ["Interview", "Full Stack", "React", "Next.js"],
      content: [
         {
            type: 'text',
            content: '15th November was my first technical interview ever, and it was with a leading tech company. I still remember feeling **nervous but excited**.'
         },
         {
            type: 'highlight',
            content: 'This was my first step into the professional world of software development, and every question taught me something valuable.'
         },
         {
            type: 'text',
            content: 'I applied for the **Full Stack Developer** role, and the interview started straight with technical questions:'
         },
         {
            type: 'heading',
            content: 'React & Frontend Questions'
         },
         {
            type: 'list',
            content: 'Technical questions asked:',
            items: [
               '**What is a React bundler?** – I couldn\'t answer.',
               '**What is DOM?** – Explained.',
               '**What is Virtual DOM?** – Explained.',
               '**What is `getElementById(\'root\')`?** – Explained.',
               '**Do you use Redux?** – No.',
               '**What is Context API?** – Explained well.'
            ]
         },
         {
            type: 'heading',
            content: 'Next.js Deep Dive'
         },
         {
            type: 'text',
            content: 'Then they asked about **Next.js** and I had to explain `SSR` and `CSR` – I explained the difference between server-side and client-side rendering in detail.'
         },
         {
            type: 'code',
            language: 'javascript',
            content: '// Example of Server-Side Rendering in Next.js\nexport async function getServerSideProps() {\n  const data = await fetchData();\n  return { props: { data } };\n}'
         },
         {
            type: 'heading',
            content: 'Practical Task'
         },
         {
            type: 'text',
            content: 'Then they gave me a laptop and asked me to initialize a React project and create folders the way I usually do. I created the structure and explained everything **confidently**.'
         },
         {
            type: 'heading',
            content: 'Backend & System Design'
         },
         {
            type: 'text',
            content: 'After that, more backend/system questions came:'
         },
         {
            type: 'list',
            content: 'Backend topics covered:',
            items: [
               '**Aggregation Pipeline** – Explained MongoDB aggregation.',
               '**How I used Redis** – Explained `caching` and performance optimization.',
               '**How I used WebSocket** – Explained real-time updates.',
               '**DevOps knowledge** (AWS, Docker, etc.) – Shared my current level honestly.'
            ]
         },
         {
            type: 'heading',
            content: 'Key Takeaway'
         },
         {
            type: 'highlight',
            content: '"Answer more specifically. Don\'t explain unnecessary things." - This feedback changed my approach to technical interviews forever.'
         },
         {
            type: 'heading',
            content: 'Feedback & Learning'
         },
         {
            type: 'text',
            content: 'Before leaving, I asked for feedback since it was my first interview. The interviewer gave me constructive criticism that helped me understand the importance of **concise and targeted answers**.'
         },
         {
            type: 'text',
            content: 'Overall, it was a **great learning experience**. I understood where I\'m strong, where I need to improve, and how to give clear answers. A memorable first step in my journey! 🚀'
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
