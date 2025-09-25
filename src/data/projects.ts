import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with modern UI and secure payment processing.",
    longDescription: "Built a comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, payment integration with Stripe, and admin dashboard. The platform supports multiple payment methods and includes real-time inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.com",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    longDescription: "Developed a real-time task management application using WebSockets for live collaboration. Features include drag-and-drop task organization, team member assignment, deadline tracking, and progress visualization.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Socket.io", "Express", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-task-manager-demo.com",
    featured: true
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts.",
    longDescription: "Created a weather application that provides current conditions and 7-day forecasts. Features include location search, weather maps, and personalized recommendations based on weather conditions.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "PWA"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-demo.com",
    featured: false
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media performance tracking.",
    longDescription: "Built an analytics platform that aggregates data from multiple social media platforms. Provides insights on engagement, reach, and audience demographics with interactive charts and exportable reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Python", "FastAPI", "Redis", "D3.js"],
    githubUrl: "https://github.com/yourusername/social-analytics",
    liveUrl: "https://your-analytics-demo.com",
    featured: true
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations.",
    longDescription: "Designed and developed a personal portfolio website showcasing projects, skills, and experience. Features include dark/light mode, smooth scrolling animations, and a contact form with email integration.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Netlify"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.com",
    featured: false
  },
  {
    id: "6",
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses.",
    longDescription: "Developed a chat application that integrates with OpenAI's API to provide intelligent responses. Features include message history, user authentication, and customizable AI personalities.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "OpenAI API", "WebSocket", "JWT"],
    githubUrl: "https://github.com/yourusername/ai-chat",
    liveUrl: "https://your-ai-chat-demo.com",
    featured: false
  }
];
