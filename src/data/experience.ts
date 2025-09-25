import { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    startDate: "2022-01",
    current: true,
    description: [
      "Led development of a microservices architecture serving 100k+ daily active users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with product team to define technical requirements"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"]
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    startDate: "2020-06",
    endDate: "2021-12",
    current: false,
    description: [
      "Developed responsive web applications for clients across various industries",
      "Optimized website performance resulting in 40% faster load times",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Maintained and updated legacy codebases"
    ],
    technologies: ["React", "Vue.js", "JavaScript", "Sass", "Webpack", "Git"]
  },
  {
    id: "3",
    title: "Junior Web Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    startDate: "2019-03",
    endDate: "2020-05",
    current: false,
    description: [
      "Built and maintained company website and internal tools",
      "Assisted in developing MVP for the company's main product",
      "Participated in agile development processes and daily standups",
      "Learned modern web development practices and tools"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"]
  }
];
