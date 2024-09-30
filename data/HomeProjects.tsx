import project1 from "@/public/images/download.png";
import project2 from "@/public/images/projects/project-2.png";
import project3 from "@/public/images/projects/project-3.png";
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
    src: project1,
    alt: "Project1",
    title: "Brand Identity and Motion Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    projectLink: "/",
    githubLink: "/",
  },
  {
    id: 2,
    src: project2,
    alt: "Project2",
    title: "Brand Identity and Motion Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    projectLink: "/",
    githubLink: "/",
  },
  {
    id: 3,
    src: project3,
    alt: "Project3",
    title: "Brand Identity and Motion Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    projectLink: "/",
    githubLink: "/",
  },
  {
    id: 4,
    src: project1,
    alt: "Project1",
    title: "Brand Identity and Motion Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    projectLink: "/",
    githubLink: "/",
  },
  {
    id: 5,
    src: project2,
    alt: "Project2",
    title: "Brand Identity and Motion Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    projectLink: "/",
    githubLink: "/",
  },
  {
    id: 6,
    src: project3,
    alt: "Project3",
    title: "Brand Identity and Motion Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    projectLink: "/",
    githubLink: "/",
  },
];
