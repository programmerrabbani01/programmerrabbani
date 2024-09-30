import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

import React from "react";

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

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <div className="relative overflow-hidden group rounded-tl-lg rounded-tr-lg">
        {/* Project Image */}
        <Link target="_blank" href="#">
          <div className="max-h-[250px] overflow-hidden">
            <Image
              className="w-full transform hover:translate-y-[-800px] rounded-tl-lg transition-transform duration-[2000ms] rounded-tr-lg "
              src={project.src}
              alt={project.alt}
            />
          </div>
        </Link>

        {/* Visit Site Link */}
        <Link
          className="flex md:-mr-28 md:group-hover:mr-0 duration-700 absolute top-2 right-2 md:text-base text-xs gap-1 dark:bg-[#0E1018] bg-[#F0F2F5] px-2 py-1 rounded-tr-2xl transition-all hover:scale-110 text-success rounded-bl-2xl items-center dark:text-white"
          href={project.projectLink}
          target="_blank"
        >
          Visit Site
          <GoArrowUpRight className="text-xl text-black dark:text-white" />
        </Link>

        {/* Github Link */}
        <Link
          className="flex md:-mt-28 md:group-hover:mt-0 duration-700 absolute top-2 left-2 text-base gap-1 bg-[#F0F2F5] dark:bg-[#0E1018] px-2 py-1 rounded-tr-2xl transition-all hover:scale-110 text-success rounded-bl-2xl items-center dark:text-white"
          href={project.githubLink}
          target="_blank"
        >
          <FaGithub className="text-2xl" />
        </Link>

        {/* Project Description */}
        <div className="bg-[#F0F2F5] dark:bg-[#0E1018] rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg pb-4 px-4">
          <h2 className="text-center pt-2 pb-1 text-[18px] text-black dark:text-[#4770ff]">
            {project.title}
          </h2>
          <div className="text-[#576076] dark:text-[rgba(240,242,245,.7)] line-clamp-2">
            {project.description}
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mt-2 justify-center items-center">
            {project.technologies.map((tech: string, index: number) => (
              <button
                key={index}
                className="rounded-md text-xs capitalize py-0.5 dark:bg-[#F0F2F5] bg-[#0E1018] dark:text-black text-white px-[8px] font-semibold"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
