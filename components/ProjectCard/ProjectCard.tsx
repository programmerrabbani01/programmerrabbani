import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import project from "@/public/images/projects/project-2.png";


import React from 'react'

type Props = {}

export default function ProjectCard({}: Props) {
  return (
    <>  <div className="relative overflow-hidden group rounded-tl-lg rounded-tr-lg">
    {/* Project Image */}
    <Link target="_blank" href="#">
      <Image
        className="rounded-tl-lg transition-all duration-700 rounded-tr-lg w-full"
        src={project}
        alt="project"
      />
    </Link>

    {/* Visit Site Link */}
    <Link
      className="flex md:-mr-28 md:group-hover:mr-0 duration-700 absolute top-2 right-2 md:text-base text-xs gap-1 dark:bg-blue-500 bg-yellow-500 px-2 py-1 rounded-tr-2xl transition-all hover:scale-110 text-success rounded-bl-2xl items-center dark:text-white"
      href="#"
      target="_blank"
    >
      Visit Site
      <GoArrowUpRight className="text-xl text-blue-700 dark:text-white" />
    </Link>

    {/* Github Link */}
    <Link
      className="flex md:-mt-28 md:group-hover:mt-0 duration-700 absolute top-2 left-2 text-base gap-1 bg-yellow-500 dark:bg-blue-500 px-2 py-1 rounded-tr-2xl transition-all hover:scale-110 text-success rounded-bl-2xl items-center dark:text-white"
      href="#"
      target="_blank"
    >
      <FaGithub className="text-2xl" />
    </Link>

    {/* Project Description */}
    <div className="bg-[#F0F2F5] dark:bg-gray-100 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg pb-4 px-4">
      <h2 className="text-center pt-2 pb-1 text-[18px]">
        {" "}
        Brand Identity and Motion Design
      </h2>
      <div className="text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
        natus. Doloremque consequatur sint a eaque quibusdam expedita vero
        nemo harum sit iste fuga quae
      </div>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mt-2 justify-center items-center">
        <button className="rounded-md text-xs capitalize py-0.5 bg-yellow-500 dark:bg-blue-500 dark:text-white text-success px-[8px] font-semibold ">
          React
        </button>
        <button className="rounded-md text-xs capitalize py-0.5 bg-yellow-500 dark:bg-blue-500 dark:text-white text-success px-[8px] font-semibold ">
          Next.js
        </button>
        <button className="rounded-md text-xs capitalize py-0.5 bg-yellow-500 dark:bg-blue-500 dark:text-white text-success px-[8px] font-semibold ">
          TailwindCSS
        </button>
        <button className="rounded-md text-xs capitalize py-0.5 bg-yellow-500 dark:bg-blue-500 dark:text-white text-success px-[8px] font-semibold ">
          Framer Motion
        </button>
      </div>
    </div>
  </div></>
  )
}