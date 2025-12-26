export interface TeamMember {
  name: string;
  image?: string;
  role?: string;
  linkedin?: string;
}

export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  images: string[];
  videoUrl?: string;
  team: TeamMember[];
  technologies: string[];
  liveUrl?: string;
  sourceCodeUrl?: string;
  devfolioUrl?: string;
  builtAt: string;
  eventLogo?: string;
  category?: string;
  winner?: boolean;
  winnerPosition?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "e503fefab259468f831d5cec206415e6",
    name: "SafeMask",
    tagline: "Privacy that disguises itself",
    description:
      "SafeMask is a privacy-focused crypto wallet that protects users by hiding real balances behind a normal-looking decoy interface. Designed for real-world safety, it prevents judgment, coercion, or unwanted attention by disguising sensitive wallet data while keeping everything securely encrypted. With features like hidden balances, decoy wallets, and secure key handling, SafeMask lets users manage crypto confidently and discreetly—even when someone else has access to their phone.",
    images: [
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F3d10b42cfb004204a67d71803c0487a2%2Fff5aa750-2843-4234-a495-967e6e921fe9.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F3d10b42cfb004204a67d71803c0487a2%2F67060e8f-1566-4aca-8bbd-655aa38e1aa4.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F3d10b42cfb004204a67d71803c0487a2%2F29db17c2-ef03-4d6b-b7f7-f7fad666a04e.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F3d10b42cfb004204a67d71803c0487a2%2F4d7b7f2c-b937-4789-abf3-3e1f8e8e7df6.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F3d10b42cfb004204a67d71803c0487a2%2F9c3e6d5b-a386-4ea0-8201-d92683293ea6.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F3d10b42cfb004204a67d71803c0487a2%2F99e2a174-f985-4386-b8a9-fd777f3c548c.png&w=1440&q=75",
    ],
    videoUrl: "https://youtube.com/embed/rnGMY664e8I",
    team: [
      {
        name: "Kartik Vyas",
        role: "Builder",
      },
      {
        name: "Nisarg Xplores",
        image:
          "https://assets.devfolio.co/users/3d10b42cfb004204a67d71803c0487a2/avatar-872db2d5-3e6b-4af8-a3ff-4d394b1800ae.jpeg",
        role: "Builder",
      },
    ],
    technologies: [
      "Ethereum",
      "Solidity",
      "TypeScript",
      "JavaScript",
      "Rust",
      "Docker",
      "Cryptography",
    ],
    sourceCodeUrl: "https://github.com/Kartikvyas1604/SafeMask",
    devfolioUrl: "https://devfolio.co/projects/safemask-04d4",
    builtAt: "Hack This Fall 2025",
    eventLogo:
      "https://assets.devfolio.co/hackathons/976fa65248ec49729382aebd38de94ab/assets/logo/832.png",
    category: "Security & Privacy",
    // winner: true,
    // winnerPosition: "Ethereum Track Winner & Hacker House Finalist",
  },
  {
    id: "0326835bf2fa4c188126c5383b0f2c83",
    name: "Donna",
    tagline: "Know what happened. Avoid what failed.",
    description:
      "Donna (Distributed Organizational Neural Network Assistant) helps teams prevent repeated mistakes by preserving institutional knowledge that’s usually lost across chats, tickets, docs, and employee turnover. It analyzes an organization’s codebase, project history, and communications to understand what worked, what failed, and why. By building a contextual map of past decisions and proactively warning teams when similar failure patterns reappear, Donna shortens onboarding, improves decision-making, and ensures hard-earned lessons are never forgotten.",
    images: [
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fe2b335399fc24aa884ea8864ccdf8f20%2Fbf9ee9c9-ea7b-4d3f-947a-4685a437aadd.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fe2b335399fc24aa884ea8864ccdf8f20%2F303402f9-b269-4eb4-a3e9-c966e8192d6b.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fe2b335399fc24aa884ea8864ccdf8f20%2F566a49fa-549c-4b8c-9459-5dc3a132c07a.png&w=1440&q=75",
    ],
    videoUrl: "https://youtube.com/embed/3ZRISKYuPUU",
    team: [
      {
        name: "Manas Nanivadekar",
        image:
          "https://assets.devfolio.co/users/e2b335399fc24aa884ea8864ccdf8f20/avatar-538e0146-a357-4692-8640-f15c6a5d2d70.jpeg",
        role: "Builder",
      },
      {
        name: "Jatin Khanijoan",
        role: "Builder",
      },
      {
        name: "Amaan Khan",
        role: "Builder",
      },
    ],
    technologies: ["Python", "LLMs", "AI Agents", "Knowledge Graphs"],
    liveUrl: "https://donna.riverbridge.org.in/",
    sourceCodeUrl: "https://github.com/Manas-Nanivadekar/DONNA",
    devfolioUrl: "https://devfolio.co/projects/donna-b7cd",
    builtAt: "Hack This Fall 2025",
    eventLogo:
      "https://assets.devfolio.co/hackathons/976fa65248ec49729382aebd38de94ab/assets/logo/832.png",
    category: "Developer Tools",
    // winner: true,
    // winnerPosition: "Hacker House & Demo Day Finalist",
  },
  {
    id: "dab0cb9a7e824b599b1cfcb47875b025",
    name: "RudraOne",
    tagline: "One platform, one screen, all of your data.",
    description:
      "RudraOne modernizes India’s emergency response operations by unifying telephony, live transcription, translation, mapping, and dispatch into a single real-time platform. It tackles fragmented systems, language barriers, high call volumes, and lack of situational awareness by providing dispatchers with live audio transcription, multilingual translation, accurate location tracking, and shared call state across teams. By reducing miscommunication and response delays, RudraOne enables faster, clearer, and more effective emergency response when every second matters.",
    images: [
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Ffa254afd96574ee0bb613c7470c378c7%2F9d9d7ed8-d8ff-450d-b98b-1cca75a26d77.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Ffa254afd96574ee0bb613c7470c378c7%2F4af295f3-7cd4-42c1-b8df-88d277e868df.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Ffa254afd96574ee0bb613c7470c378c7%2F13c8d813-fc88-471b-9632-091a7277adea.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Ffa254afd96574ee0bb613c7470c378c7%2Ff8141d50-287d-4af9-a46f-15048cc738f8.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Ffa254afd96574ee0bb613c7470c378c7%2F19b72b5b-d69c-434d-a78d-fa40ee62f408.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Ffa254afd96574ee0bb613c7470c378c7%2F218e92df-e341-43dc-a626-3f03e3913c74.jpeg&w=1440&q=75",
    ],
    videoUrl: "https://youtube.com/embed/Hbso7qwJCJk",
    team: [
      {
        name: "Shreesha Aithal",
        role: "Builder",
      },
      {
        name: "Pranav S Salian",
        role: "Builder",
      },
      {
        name: "Siddharth Shetty",
        role: "Builder",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Mapbox",
      "AI/ML",
      "WebSockets",
      "Twilio",
    ],
    sourceCodeUrl: "https://github.com/shreesha345/Rudra-One",
    devfolioUrl: "https://devfolio.co/projects/rudraone-c3ed",
    builtAt: "Hack This Fall 2025",
    eventLogo:
      "https://assets.devfolio.co/hackathons/976fa65248ec49729382aebd38de94ab/assets/logo/832.png",
    category: "Healthcare",
    // winner: true,
    // winnerPosition: "Vultr Cloud Track Runner-Up & Hacker House Finalist",
  },
  {
    id: "5a32146075874a46a31ec880ab6ec3e5",
    name: "4Diary",
    tagline: "Catering to your note needs with privacy and style",
    description:
      "4Diary is a privacy-first, end-to-end encrypted note-taking web app built for people who value both security and simplicity. It ensures that not even the server can read user content, avoids storing passwords entirely, and remains fully open-source and self-hostable. Accessible from any browser and enhanced with features like Kanban boards, 4Diary lets users capture their thoughts securely without trusting opaque platforms or sacrificing usability.",
    images: [
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fe4476fee8efa406e98feba78df93da53%2F8c24101b-0885-421e-bff9-9e3ca1c6deda.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fe4476fee8efa406e98feba78df93da53%2F3d566945-eea9-4e4d-83a1-433d3a3947b5.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fe4476fee8efa406e98feba78df93da53%2F1777c1cd-49fa-44bb-bc4d-b0ecdaf1ba7f.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fe4476fee8efa406e98feba78df93da53%2Fde27f416-81ae-4a3b-968a-320f15e9e69b.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fe4476fee8efa406e98feba78df93da53%2F3eff2075-b1cc-43c7-9b1e-4495321ca278.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fe4476fee8efa406e98feba78df93da53%2F7640e0f7-0374-46c4-a44a-c6f542dc78d0.jpeg&w=1440&q=75",
    ],
    videoUrl: "https://player.vimeo.com/video/1141388287",
    team: [
      {
        name: "Harsha Bhattacharyya",
        role: "Founder & Builder",
      },
    ],
    technologies: [
      "Next.js",
      "JavaScript",
      "MongoDB",
      "Redis",
      "Tailwind CSS",
      "Vercel",
      "End-to-End Encryption",
    ],
    liveUrl: "https://4diary.vercel.app/",
    sourceCodeUrl: "https://github.com/Harsha-Bhattacharyya/4diary",
    devfolioUrl: "https://devfolio.co/projects/diary-8fce",
    builtAt: "Hack This Fall 2025",
    eventLogo:
      "https://assets.devfolio.co/hackathons/976fa65248ec49729382aebd38de94ab/assets/logo/832.png",
    category: "Security & Privacy",
    // winner: true,
    // winnerPosition: "GitHub Track Winner & Hacker House Finalist",
  },
  {
    id: "55f05d2d19a649ce882145f36fda3c2e",
    name: "Wakarumade",
    tagline: "Learn until it clicks.",
    description:
      "Wakarumade helps children truly understand math word problems by breaking them into small, guided reasoning steps instead of focusing only on answers. It targets the real failure point—language comprehension—by scaffolding how kids think through problems, giving immediate feedback, and generating new practice questions based on where they struggled. The result is less guessing, clearer reasoning, and a learning experience that supports both kids and parents without repetitive re-explanations.",
    images: [
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F7be4df3280a9454aa33c706c7beeca13%2Feb7d9d09-cc91-4cff-aad6-a035fda116b0.png&w=1440&q=75",
    ],
    videoUrl: "https://youtube.com/embed/4-p-3T3RSig",
    team: [
      {
        name: "Makiko Ohashi",
        image:
          "https://assets.devfolio.co/users/7be4df3280a9454aa33c706c7beeca13/avatar-07da63d7-89d5-457e-8858-ee1426b62254.jpeg",
        role: "Founder & Builder",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "AI/LLMs",
    ],
    liveUrl: "https://wakarumade.vercel.app",
    sourceCodeUrl: "https://github.com/MakikoOhashi/wakarumade",
    devfolioUrl: "https://devfolio.co/projects/wakarumade-f890",
    builtAt: "Hack This Fall 2025",
    eventLogo:
      "https://assets.devfolio.co/hackathons/976fa65248ec49729382aebd38de94ab/assets/logo/832.png",
    category: "Education",
    // winner: true,
    // winnerPosition: "Hacker House & Demo Day Finalist",
  },
  // {
  //   id: "healthwise-ai",
  //   name: "HealthWise AI",
  //   tagline: "AI-powered health monitoring and early disease detection.",
  //   description:
  //     "HealthWise AI leverages machine learning to analyze health data from wearable devices and provide early warning signs for potential health issues. The platform offers personalized health insights, medication reminders, and connects users with healthcare professionals for timely consultations. Features include symptom tracking, health trend analysis, and AI-driven recommendations for lifestyle improvements.",
  //   images: ["/projects/healthwise-1.png", "/projects/healthwise-2.png"],
  //   team: [
  //     { name: "Priya Patel", image: "/team/priya.png", role: "ML Engineer" },
  //     {
  //       name: "James Chen",
  //       image: "/team/james.png",
  //       role: "Full Stack Developer",
  //     },
  //   ],
  //   technologies: [
  //     "Python",
  //     "TensorFlow",
  //     "React Native",
  //     "Firebase",
  //     "FastAPI",
  //   ],
  //   liveUrl: "https://healthwise-ai.com",
  //   sourceCodeUrl: "https://github.com/healthwise/healthwise-ai",
  //   devfolioUrl: "https://devfolio.co/projects/healthwise-ai",
  //   builtAt: "Hack This Fall 2024",
  //   eventLogo: "/events/htf-2024.png",
  //   category: "Healthcare",
  //   winner: true,
  //   winnerPosition: "2nd Place",
  // },
  // {
  //   id: "eduverse",
  //   name: "EduVerse",
  //   tagline: "Immersive VR-based learning platform for students.",
  //   description:
  //     "EduVerse transforms traditional education by providing immersive virtual reality experiences for students. From exploring ancient civilizations to conducting virtual chemistry experiments, EduVerse makes learning interactive and engaging. The platform supports multiple subjects, includes progress tracking, and allows teachers to create custom VR lessons.",
  //   images: [
  //     "/projects/eduverse-1.png",
  //     "/projects/eduverse-2.png",
  //     "/projects/eduverse-3.png",
  //   ],
  //   videoUrl: "https://www.youtube.com/embed/example123",
  //   team: [
  //     { name: "Alex Johnson", image: "/team/alex.png", role: "VR Developer" },
  //     { name: "Maya Singh", image: "/team/maya.png", role: "3D Artist" },
  //     { name: "Tom Wilson", image: "/team/tom.png", role: "Backend Developer" },
  //     {
  //       name: "Lisa Park",
  //       image: "/team/lisa.png",
  //       role: "Education Specialist",
  //     },
  //   ],
  //   technologies: ["Unity", "C#", "WebXR", "Node.js", "PostgreSQL", "AWS"],
  //   sourceCodeUrl: "https://github.com/eduverse/eduverse-vr",
  //   devfolioUrl: "https://devfolio.co/projects/eduverse",
  //   builtAt: "Hack This Fall 2023",
  //   eventLogo: "/events/htf-2023.png",
  //   category: "Education",
  //   winner: true,
  //   winnerPosition: "3rd Place",
  // },
  // {
  //   id: "farmconnect",
  //   name: "FarmConnect",
  //   tagline: "Direct farmer-to-consumer marketplace eliminating middlemen.",
  //   description:
  //     "FarmConnect bridges the gap between farmers and consumers by providing a direct marketplace platform. Farmers can list their produce, set fair prices, and connect directly with buyers. The platform includes features for order management, delivery tracking, and quality verification. Consumers get fresh produce at better prices while farmers earn more for their hard work.",
  //   images: ["/projects/farmconnect-1.png", "/projects/farmconnect-2.png"],
  //   team: [
  //     {
  //       name: "Vikram Reddy",
  //       image: "/team/vikram.png",
  //       role: "Product Manager",
  //     },
  //     {
  //       name: "Sarah Lee",
  //       image: "/team/sarah.png",
  //       role: "Full Stack Developer",
  //     },
  //   ],
  //   technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Twilio"],
  //   liveUrl: "https://farmconnect.in",
  //   sourceCodeUrl: "https://github.com/farmconnect/marketplace",
  //   devfolioUrl: "https://devfolio.co/projects/farmconnect",
  //   builtAt: "Hack This Fall 2023",
  //   eventLogo: "/events/htf-2023.png",
  //   category: "Agriculture",
  // },
  // {
  //   id: "codebuddy",
  //   name: "CodeBuddy",
  //   tagline: "AI pair programming assistant for developers.",
  //   description:
  //     "CodeBuddy is an intelligent coding assistant that helps developers write better code faster. It provides real-time code suggestions, bug detection, and automated code reviews. The tool integrates seamlessly with popular IDEs and supports multiple programming languages. Features include code explanation, refactoring suggestions, and learning resources for new concepts.",
  //   images: ["/projects/codebuddy-1.png"],
  //   team: [
  //     { name: "David Kim", image: "/team/david.png", role: "AI Engineer" },
  //     {
  //       name: "Emma Watson",
  //       image: "/team/emma.png",
  //       role: "Frontend Developer",
  //     },
  //     {
  //       name: "Ryan Patel",
  //       image: "/team/ryan.png",
  //       role: "Backend Developer",
  //     },
  //   ],
  //   technologies: [
  //     "Python",
  //     "OpenAI API",
  //     "TypeScript",
  //     "VS Code Extension API",
  //     "Redis",
  //   ],
  //   liveUrl: "https://codebuddy.dev",
  //   sourceCodeUrl: "https://github.com/codebuddy/codebuddy",
  //   devfolioUrl: "https://devfolio.co/projects/codebuddy",
  //   builtAt: "Hack This Fall 2022",
  //   eventLogo: "/events/htf-2022.png",
  //   category: "Developer Tools",
  // },
  // {
  //   id: "saferoute",
  //   name: "SafeRoute",
  //   tagline: "Real-time safety navigation for pedestrians and cyclists.",
  //   description:
  //     "SafeRoute provides real-time safety-optimized navigation for pedestrians and cyclists. The app analyzes crime data, street lighting, traffic patterns, and crowd density to suggest the safest routes. Users can share their live location with trusted contacts and trigger emergency alerts if needed. Community features allow users to report safety concerns and help improve route recommendations.",
  //   images: ["/projects/saferoute-1.png", "/projects/saferoute-2.png"],
  //   team: [
  //     { name: "Neha Gupta", image: "/team/neha.png", role: "Data Scientist" },
  //     {
  //       name: "Chris Brown",
  //       image: "/team/chris.png",
  //       role: "Mobile Developer",
  //     },
  //   ],
  //   technologies: ["Flutter", "Python", "FastAPI", "MongoDB", "Mapbox API"],
  //   liveUrl: "https://saferoute.app",
  //   sourceCodeUrl: "https://github.com/saferoute/saferoute-app",
  //   devfolioUrl: "https://devfolio.co/projects/saferoute",
  //   builtAt: "Hack This Fall 2022",
  //   eventLogo: "/events/htf-2022.png",
  //   category: "Safety",
  // },

  {
    id: "SecureHome",
    name: "SecureHome",
    tagline: "Ghar ki safety. AI ki shakti.",
    description:
      "This project redefines home security by transforming ordinary doorbells and cameras into an intelligent, proactive, and affordable AI-powered guardian. Instead of passive recording and delayed alerts, it identifies known and unknown visitors, detects suspicious behaviour in real time, protects children with smart safety modes, and communicates instantly through platforms people already use like Telegram. With conversational AI, two-way communication, and real-time threat understanding, the system doesn’t just record what happens at home - it understands intent, acts early, and keeps families genuinely informed and protected, without expensive hardware or subscriptions.",
    images: [
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F379860690b664df683ea223a6a2c9dd3%2F089b2808-5da0-41c6-a393-b775691c31fa.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F379860690b664df683ea223a6a2c9dd3%2Faea027a6-ce70-412d-83cc-722c7042f057.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F379860690b664df683ea223a6a2c9dd3%2F4303c2a2-b45b-4c08-978a-d15f53049590.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F379860690b664df683ea223a6a2c9dd3%2F27924d88-c7e4-4d7b-abf3-ddee6948b853.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F379860690b664df683ea223a6a2c9dd3%2Faac88106-621e-439e-b6a0-0796d0737cb6.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F379860690b664df683ea223a6a2c9dd3%2Fe24e0913-d265-4a8e-b922-02a04cf83959.jpeg&w=1440&q=75",
    ],
    videoUrl: "https://www.youtube.com/embed/hCx1eeWRhvA",
    team: [
      {
        name: "Megha Iyer",
        role: "Frontend Developer",
      },
      {
        name: "Sutej Haritsa",
        role: "Backend Developer",
      },
      {
        name: "Sudeep Roche",
        role: "UI/UX Designer",
      },
    ],
    technologies: ["React", "Node.js", "Flask", "OpenCV", "ESP8266 Wifi MCU"],
    sourceCodeUrl: "https://github.com/SudeepXR/Smart-Home-Security-System",
    devfolioUrl: "https://devfolio.co/projects/securehome-ac03",
    builtAt: "Hack This Fall 2025",
    eventLogo: "/assets/images/logo.png",
    category: "Security & Privacy",
  },

  {
    id: "Three21",
    name: "Three21 : AI Assisted 3D Visualizer Platform",
    tagline: "Where 3D meets Intelligence",
    description:
      "Three21 transforms static diagrams into high-fidelity, interactive 3D learning experiences. It automatically breaks down 3D models into parts, layers, geometry, and connections while a contextual, personalized multimodal AI explains how everything works in real time. Users can explore models conversationally, ask questions, and even pull live academic research, turning complex engineering concepts into intuitive, self-explaining visual knowledge.",
    images: [
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F156550eacbaa415ca53484a0c25350f1%2F6a9a47cb-9f55-4f69-b3ca-8e3f71960366.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F156550eacbaa415ca53484a0c25350f1%2Fbe0dcb4d-7e8f-48f2-aeca-1a4ecbaeaf71.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F156550eacbaa415ca53484a0c25350f1%2F29423549-75c5-410c-8061-40ba53a6d1a9.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F156550eacbaa415ca53484a0c25350f1%2F6e734d7a-36b7-480f-a5b2-56862a24c46c.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F156550eacbaa415ca53484a0c25350f1%2F73144894-5795-4c13-a6b0-774a3d3524b4.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F156550eacbaa415ca53484a0c25350f1%2Fee4b7769-3cf5-45c9-8e28-c69bc546178c.png&w=1440&q=75",
    ],
    videoUrl: "https://www.youtube.com/embed/-_31f2KVpRM",
    team: [
      {
        name: "Amon Sharma",
        role: "Builder",
      },
      {
        name: "Kaustubh Duse",
        role: "Builder",
      },
      {
        name: "Avni Singhal",
        role: "Builder",
      },
    ],
    technologies: [
      "React",
      "Three.js",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "AI/ML",
    ],
    liveUrl: "https://three21.vercel.app",
    sourceCodeUrl: "https://github.com/Amon20044/3D-AI-Three21",
    devfolioUrl:
      "https://devfolio.co/projects/three-ai-assisted-d-visualizer-platform-7825",
    builtAt: "Hack This Fall 2025",
    eventLogo:
      "https://assets.devfolio.co/hackathons/976fa65248ec49729382aebd38de94ab/assets/logo/832.png",
    category: "Education",
  },
  {
    id: "f9deb4d59980437f8252932cbc699438",
    name: "brnch",
    tagline: "dont think. backtest",
    description:
      "brnch turns plain-English investing ideas into real, backtested results. Instead of forcing users to learn complex tools or programming languages, it lets non-technical investors validate strategies instantly using historical market data. By unifying research, backtesting, and insights into a single platform, brnch removes guesswork and helps users understand whether an idea that sounds good on paper actually works in practice.",
    images: [
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fc9a8c7a3cf804a6d99aff7f93785292c%2Fd00aa8db-2c7f-44b6-a275-8b491ccd2e7e.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fc9a8c7a3cf804a6d99aff7f93785292c%2F172cb8ec-88f8-4e8c-9f6e-ff5d28437595.jpeg&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fc9a8c7a3cf804a6d99aff7f93785292c%2Fe5cac66c-8e5f-4af9-9d18-ec51d8485897.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fc9a8c7a3cf804a6d99aff7f93785292c%2Fd14ddabc-9ff9-4f26-96c6-828c1a19bce1.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fc9a8c7a3cf804a6d99aff7f93785292c%2F0f64e1ab-e811-4142-8593-01b9c7795311.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fc9a8c7a3cf804a6d99aff7f93785292c%2Fec4f7ef6-2669-4b8d-b13a-c20349a99ba5.png&w=1440&q=75",
    ],
    videoUrl: "https://youtube.com/embed/d5BdJA971g4",
    team: [
      {
        name: "Ayush Bohra",
        image:
          "https://assets.devfolio.co/users/c9a8c7a3cf804a6d99aff7f93785292c/avatar-8db97451-be44-4014-9a5a-e902df7d2392.jpeg",
        role: "Builder",
      },
      {
        name: "Rishabh Jain",
        role: "Builder",
      },
      {
        name: "Pradyut Das",
        image:
          "https://assets.devfolio.co/users/6e7fec6dfc444840a2ece8167bcd5741/avatar-e9febc7f-193c-400a-bc8c-3a0819299105.jpeg",
        role: "Builder",
      },
    ],
    technologies: [
      "Next.js",
      "Python",
      "Flask",
      "Docker",
      "MongoDB",
      "RAG",
      "vLLM",
    ],
    sourceCodeUrl: "https://github.com/CodeFingers809/finsim-htf",
    devfolioUrl: "https://devfolio.co/projects/brnch-b9d1",
    builtAt: "Hack This Fall 2025",
    eventLogo:
      "https://assets.devfolio.co/hackathons/976fa65248ec49729382aebd38de94ab/assets/logo/832.png",
    category: "Productivity",
    // winner: true,
    // winnerPosition: "Hacker House & Demo Day Finalist",
  },
  {
    id: "431a65159e1d42209b8a0caef1c73f66",
    name: "BotBlocks",
    tagline: "WordPress for Chat Bots",
    description:
      "BotBlocks makes building AI chatbots as simple as creating a WordPress website. Instead of complex flow builders or coding, users upload their data, choose pre-built chatbot functions, select a personality, pick a platform, and deploy in under a minute. Designed for small businesses, creators, and entrepreneurs, BotBlocks removes technical barriers and enables anyone to launch intelligent, production-ready chatbots without writing a single line of code.",
    images: [
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F1557475782ba4536ad3daab59a2db469%2F9373b2c8-6b51-4638-b5bd-f000563643bd.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F1557475782ba4536ad3daab59a2db469%2Faf5b7a6a-1d07-4dc7-8d2c-27d35f0ced7b.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F1557475782ba4536ad3daab59a2db469%2F637f489a-ae92-4f5c-8993-52389c0a04a0.png&w=1440&q=75",
    ],
    videoUrl: "https://youtube.com/embed/DkH-BT2oIUs",
    team: [
      {
        name: "Gourav Chandra",
        image:
          "https://assets.devfolio.co/users/1557475782ba4536ad3daab59a2db469/avatar-41e1eed9-9616-48ce-9d6c-e0b2df119db9.jpeg",
        role: "Builder",
      },
      {
        name: "Shriparna Prasad",
        image:
          "https://assets.devfolio.co/users/7aafd275b1484e7089c3830a8f13a8bb/avatar-67769678-1a6f-4b36-95c1-daac9266a70f.jpeg",
        role: "Builder",
      },
      {
        name: "Souvik Rahut",
        image:
          "https://assets.devfolio.co/users/e5a5961f628a461fa465b73c0ff2cdb1/avatar-b51fe3a6-8479-47b8-a070-6dacb284db78.jpeg",
        role: "Builder",
      },
    ],
    technologies: [
      "Python",
      "Streamlit",
      "REST APIs",
      "RAG",
      "Vector Databases",
      "ChromaDB",
    ],
    sourceCodeUrl: "https://github.com/gauravnetes/BotBlocks",
    devfolioUrl: "https://devfolio.co/projects/botblocks-77c8",
    builtAt: "Hack This Fall 2025",
    eventLogo:
      "https://assets.devfolio.co/hackathons/976fa65248ec49729382aebd38de94ab/assets/logo/832.png",
    category: "Developer Tools",
    // winner: true,
    // winnerPosition: "Hacker House & Demo Day Finalist",
  },

  {
    id: "c58b42109ee245028f247d372d13e85e",
    name: "Playlistify AI",
    tagline: "Your words. Your vibe. Perfect playlists.",
    description:
      'Playlistify AI turns natural language moods into perfectly curated Spotify playlists in under 30 seconds. Instead of scrolling through generic playlists or mastering complex filters, users simply describe how they feel—like "happy but tired" or "energetic yet calm"—and the system generates a playlist that matches their exact vibe. Built with privacy-first authentication and smart NLP-driven genre prioritization, Playlistify AI removes friction from music discovery and delivers exactly what users want to hear.',
    images: [
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fb20d082f97674690ab60ba3bdff3fb99%2F402ee746-fd76-4689-8204-1faded849bff.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fb20d082f97674690ab60ba3bdff3fb99%2Fa3018629-d6cc-4202-829c-e65958cf4088.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fb20d082f97674690ab60ba3bdff3fb99%2Fc9ea5e0f-a158-498c-ba15-1dc870a7722d.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fb20d082f97674690ab60ba3bdff3fb99%2F1545657e-002c-4e64-9bf1-3a3d986bcfeb.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fb20d082f97674690ab60ba3bdff3fb99%2F45ac8750-df24-418c-80fd-391d49d8fb03.png&w=1440&q=75",
      "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2Fb20d082f97674690ab60ba3bdff3fb99%2F14e480e1-d65e-4633-a339-75cf1d390ca1.png&w=1440&q=75",
    ],
    videoUrl: "https://youtube.com/embed/Fg-mkwssghQ",
    team: [
      {
        name: "Avanish Kasar",
        image:
          "https://assets.devfolio.co/users/b20d082f97674690ab60ba3bdff3fb99/avatar-4b77dfee-b08a-47f8-8c59-98728d379d9a.jpeg",
        role: "Lead Developer",
      },
      {
        name: "Jamil Khan",
        image:
          "https://assets.devfolio.co/users/8c258a8e60874e37ba9ec42b0cde20cd/avatar-3c31dbca-4cbc-4cfc-9b3a-5f062aa0c20b.jpeg",
        role: "Co-Developer",
      },
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "Spotify API",
      "OAuth",
      "Docker",
      "REST APIs",
      "Apify",
    ],
    liveUrl: "https://playlistify-ai.up.railway.app/landing.html",
    sourceCodeUrl: "https://github.com/avanishkasar/Playlistify-AI",
    devfolioUrl: "https://devfolio.co/projects/playlistify-ai-fa85",
    builtAt: "Hack This Fall 2025",
    eventLogo:
      "https://assets.devfolio.co/hackathons/976fa65248ec49729382aebd38de94ab/assets/logo/832.png",
    category: "Productivity",
    // winner: true,
    // winnerPosition: "Apify Challenge Winner & Hacker House Finalist",
  },
];

export const categories = [
  "All",
  "Sustainability",
  "Healthcare",
  "Productivity",
  "Education",
  "Agriculture",
  "Developer Tools",
  "Security & Privacy",
];

export const events = [
  "All Events",
  "Hack This Fall 2025",
  // "Hack This Fall 2024",
  // "Hack This Fall 2023",
  // "Hack This Fall 2022",
];
