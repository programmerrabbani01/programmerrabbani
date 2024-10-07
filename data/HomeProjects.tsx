import shopapp from "@/public/images/projects/project-1.jpeg";
import webdev from "@/public/images/projects/project-2.jpeg";
import chawala from "@/public/images/projects/project-3.jpeg";
import healthcare from "@/public/images/projects/project-4.jpeg";
import timekeeper from "@/public/images/projects/project-5.jpeg";
import { StaticImageData } from "next/image";

type Project = {
  id: number;
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
  technologies: string[];
  projectLink: string;
  githubLink: string;
};

export const homeProjects: Project[] = [
  {
    id: 1,
    src: shopapp,
    alt: "shopapp",
    title: "Shop App Website Development",
    description:
      "This project is built using Next.js, Clerk, TypeScript and  TailwindCSS, combining powerful technologies to create a modern, responsive, and secure web application.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Clerk"],
    projectLink: "https://shopapp-aone.vercel.app/",
    githubLink: "https://github.com/programmerrabbani01/shopapp",
  },
  {
    id: 2,
    src: webdev,
    alt: "webdev",
    title: "Web-Dev Portfolio",
    description:
      "This project is built using Next.js, Aos, TypeScript and  TailwindCSS, combining powerful technologies to create a modern, responsive, and secure web application.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Aos"],
    projectLink: "https://web-dev-portfolio-smoky-nu.vercel.app/",
    githubLink: "https://github.com/programmerrabbani01/webDev-portfolio",
  },
  {
    id: 3,
    src: chawala,
    alt: "chawala",
    title: "Chawla Architectural and Engineering",
    description:
      "This project is built using Javascript, Jquery, HTML5 and  CSS3, combining powerful technologies to create a modern, responsive, and secure web application.",
    technologies: ["Javascript", "Jquery", "HTML5", "CSS3"],
    projectLink: "https://programmerrabbani01.github.io/chawla/",
    githubLink: "https://github.com/programmerrabbani01/chawla",
  },
  {
    id: 4,
    src: healthcare,
    alt: "healthcare",
    title: "Health Care Website Development",
    description:
      "This project is built using React, React Router Dom, React Bootstrap and  Bootstrap, combining powerful technologies to create a modern, responsive, and secure web application.",
    technologies: ["React", "Bootstrap", "React Router Dom", "React Bootstrap"],
    projectLink: "https://test-app-783b7.web.app/",
    githubLink: "https://github.com/programmerrabbani01/gym-heroes",
  },
  {
    id: 5,
    src: timekeeper,
    alt: "timekeeper",
    title: "Time Keeper Website Development",
    description:
      "This project is built using React, React Router Dom, React Rating Stars, React Bootstrap and  Bootstrap, combining powerful technologies to create a modern, responsive, and secure web application.",
    technologies: [
      "React",
      "Bootstrap",
      "React Router Dom",
      "React Bootstrap",
      "React Rating Stars",
    ],
    projectLink: "https://timekeeper-bfc3b.web.app/",
    githubLink: "https://github.com/programmerrabbani01/timekeeper",
  },
];
