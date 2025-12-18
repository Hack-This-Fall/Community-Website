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
    id: 'safemask',
    name: 'SafeMask',
    tagline: 'Privacy that disguises itself',
    description:
      'SafeMask helps you stay private by hiding your real crypto wallet inside an app that looks completely normal. It keeps your money out of sight so no one can judge, question, or pressure you if they happen to check your phone. With things like a decoy wallet and hidden balances, you can use crypto anywhere without feeling watched or unsafe. It’s simply a calmer, safer way to manage your money.',
    images: [
      'https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F3d10b42cfb004204a67d71803c0487a2%2Fff5aa750-2843-4234-a495-967e6e921fe9.png&w=1440&q=75',
      'https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F3d10b42cfb004204a67d71803c0487a2%2F29db17c2-ef03-4d6b-b7f7-f7fad666a04e.png&w=1440&q=75',
      'https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fhackthisfall%2Fprojects%2F3d10b42cfb004204a67d71803c0487a2%2F99e2a174-f985-4386-b8a9-fd777f3c548c.png&w=1440&q=75',
    ],
    videoUrl: 'https://www.youtube.com/embed/rnGMY664e8I',
    team: [
      {
        name: 'Anya Sharma',
        image: '/team/anya.png',
        role: 'Frontend Developer',
      },
      {
        name: 'Rahul Verma',
        image: '/team/rahul.png',
        role: 'Backend Developer',
      },
      { name: 'Chloe Kim', image: '/team/chloe.png', role: 'UI/UX Designer' },
    ],
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Google Maps API',
      'TensorFlow',
    ],
    liveUrl: 'https://github.com/Kartikvyas1604/SafeMask',
    sourceCodeUrl: 'https://github.com/ecomute/ecomute-commute',
    devfolioUrl: 'https://devfolio.co/projects/ecomute-commute',
    builtAt: 'Hack This Fall 2024',
    eventLogo: '/assets/images/logo.png',
    category: 'Sustainability',
    winner: true,
    winnerPosition: '1st Place',
  },
  {
    id: 'healthwise-ai',
    name: 'HealthWise AI',
    tagline: 'AI-powered health monitoring and early disease detection.',
    description:
      'HealthWise AI leverages machine learning to analyze health data from wearable devices and provide early warning signs for potential health issues. The platform offers personalized health insights, medication reminders, and connects users with healthcare professionals for timely consultations. Features include symptom tracking, health trend analysis, and AI-driven recommendations for lifestyle improvements.',
    images: ['/projects/healthwise-1.png', '/projects/healthwise-2.png'],
    team: [
      { name: 'Priya Patel', image: '/team/priya.png', role: 'ML Engineer' },
      {
        name: 'James Chen',
        image: '/team/james.png',
        role: 'Full Stack Developer',
      },
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'React Native',
      'Firebase',
      'FastAPI',
    ],
    liveUrl: 'https://healthwise-ai.com',
    sourceCodeUrl: 'https://github.com/healthwise/healthwise-ai',
    devfolioUrl: 'https://devfolio.co/projects/healthwise-ai',
    builtAt: 'Hack This Fall 2024',
    eventLogo: '/events/htf-2024.png',
    category: 'Healthcare',
    winner: true,
    winnerPosition: '2nd Place',
  },
  {
    id: 'eduverse',
    name: 'EduVerse',
    tagline: 'Immersive VR-based learning platform for students.',
    description:
      'EduVerse transforms traditional education by providing immersive virtual reality experiences for students. From exploring ancient civilizations to conducting virtual chemistry experiments, EduVerse makes learning interactive and engaging. The platform supports multiple subjects, includes progress tracking, and allows teachers to create custom VR lessons.',
    images: [
      '/projects/eduverse-1.png',
      '/projects/eduverse-2.png',
      '/projects/eduverse-3.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/example123',
    team: [
      { name: 'Alex Johnson', image: '/team/alex.png', role: 'VR Developer' },
      { name: 'Maya Singh', image: '/team/maya.png', role: '3D Artist' },
      { name: 'Tom Wilson', image: '/team/tom.png', role: 'Backend Developer' },
      {
        name: 'Lisa Park',
        image: '/team/lisa.png',
        role: 'Education Specialist',
      },
    ],
    technologies: ['Unity', 'C#', 'WebXR', 'Node.js', 'PostgreSQL', 'AWS'],
    sourceCodeUrl: 'https://github.com/eduverse/eduverse-vr',
    devfolioUrl: 'https://devfolio.co/projects/eduverse',
    builtAt: 'Hack This Fall 2023',
    eventLogo: '/events/htf-2023.png',
    category: 'Education',
    winner: true,
    winnerPosition: '3rd Place',
  },
  {
    id: 'farmconnect',
    name: 'FarmConnect',
    tagline: 'Direct farmer-to-consumer marketplace eliminating middlemen.',
    description:
      'FarmConnect bridges the gap between farmers and consumers by providing a direct marketplace platform. Farmers can list their produce, set fair prices, and connect directly with buyers. The platform includes features for order management, delivery tracking, and quality verification. Consumers get fresh produce at better prices while farmers earn more for their hard work.',
    images: ['/projects/farmconnect-1.png', '/projects/farmconnect-2.png'],
    team: [
      {
        name: 'Vikram Reddy',
        image: '/team/vikram.png',
        role: 'Product Manager',
      },
      {
        name: 'Sarah Lee',
        image: '/team/sarah.png',
        role: 'Full Stack Developer',
      },
    ],
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Twilio'],
    liveUrl: 'https://farmconnect.in',
    sourceCodeUrl: 'https://github.com/farmconnect/marketplace',
    devfolioUrl: 'https://devfolio.co/projects/farmconnect',
    builtAt: 'Hack This Fall 2023',
    eventLogo: '/events/htf-2023.png',
    category: 'Agriculture',
  },
  {
    id: 'codebuddy',
    name: 'CodeBuddy',
    tagline: 'AI pair programming assistant for developers.',
    description:
      'CodeBuddy is an intelligent coding assistant that helps developers write better code faster. It provides real-time code suggestions, bug detection, and automated code reviews. The tool integrates seamlessly with popular IDEs and supports multiple programming languages. Features include code explanation, refactoring suggestions, and learning resources for new concepts.',
    images: ['/projects/codebuddy-1.png'],
    team: [
      { name: 'David Kim', image: '/team/david.png', role: 'AI Engineer' },
      {
        name: 'Emma Watson',
        image: '/team/emma.png',
        role: 'Frontend Developer',
      },
      {
        name: 'Ryan Patel',
        image: '/team/ryan.png',
        role: 'Backend Developer',
      },
    ],
    technologies: [
      'Python',
      'OpenAI API',
      'TypeScript',
      'VS Code Extension API',
      'Redis',
    ],
    liveUrl: 'https://codebuddy.dev',
    sourceCodeUrl: 'https://github.com/codebuddy/codebuddy',
    devfolioUrl: 'https://devfolio.co/projects/codebuddy',
    builtAt: 'Hack This Fall 2022',
    eventLogo: '/events/htf-2022.png',
    category: 'Developer Tools',
  },
  {
    id: 'saferoute',
    name: 'SafeRoute',
    tagline: 'Real-time safety navigation for pedestrians and cyclists.',
    description:
      'SafeRoute provides real-time safety-optimized navigation for pedestrians and cyclists. The app analyzes crime data, street lighting, traffic patterns, and crowd density to suggest the safest routes. Users can share their live location with trusted contacts and trigger emergency alerts if needed. Community features allow users to report safety concerns and help improve route recommendations.',
    images: ['/projects/saferoute-1.png', '/projects/saferoute-2.png'],
    team: [
      { name: 'Neha Gupta', image: '/team/neha.png', role: 'Data Scientist' },
      {
        name: 'Chris Brown',
        image: '/team/chris.png',
        role: 'Mobile Developer',
      },
    ],
    technologies: ['Flutter', 'Python', 'FastAPI', 'MongoDB', 'Mapbox API'],
    liveUrl: 'https://saferoute.app',
    sourceCodeUrl: 'https://github.com/saferoute/saferoute-app',
    devfolioUrl: 'https://devfolio.co/projects/saferoute',
    builtAt: 'Hack This Fall 2022',
    eventLogo: '/events/htf-2022.png',
    category: 'Safety',
  },
];

export const categories = [
  "All",
  "Sustainability",
  "Healthcare",
  "Education",
  "Agriculture",
  "Developer Tools",
  "Safety",
];

export const events = [
  "All Events",
  "Hack This Fall 2024",
  "Hack This Fall 2023",
  "Hack This Fall 2022",
];
