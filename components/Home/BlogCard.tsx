import React from "react";
import Image, { StaticImageData } from "next/image.js";
import project from "@/public/images/projects/project-2.png";
import Link from "next/link.js";
import { GoArrowUpRight } from "react-icons/go";

// Define the BlogItem type
interface BlogItem {
  id: number;
  url: string;
  src: StaticImageData | string; // This is for Next.js Image component for static imports
  alt: string;
  title: string;
  readingTime: string;
  date: string;
}

interface BlogCardProps {
  item: BlogItem;
}

export default function BlogCard({ item }: BlogCardProps) {
  return (
    <>
      <div className="relative overflow-hidden group rounded-tl-lg rounded-tr-lg">
        <Image
          //   className="rounded-tl-lg transition-all duration-700 rounded-tr-lg w-full"
          className="object-cover object-center h-[300px] transition-all duration-300 w-full max-w-full transform hover:scale-[1.07] "
          src={item.src}
          alt={item.alt}
        />
        <Link
          className="flex md:-mr-28 md:group-hover:mr-0 duration-700  absolute top-2 right-2 md:text-base text-xs  gap-1 dark:bg-[#0E1018] bg-[#F0F2F5] px-2 py-1 rounded-tr-2xl transition-all hover:scale-110 text-success rounded-bl-2xl items-center dark:text-white"
          href={"/"}
        >
          Visit Site
          <GoArrowUpRight className="text-xl text-blue-700 dark:text-white" />
        </Link>
        <div className="bg-[#F0F2F5] dark:bg-[#0E1018] rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg pb-4 px-4">
          <h2 className="text-center pt-2 pb-1 dark:text-[#4770ff] text-[18px]">
            {item.title}
          </h2>
          <div className="text-[#576076] dark:text-[rgba(240,242,245,.7)] hidden line-clamp-2 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
            natus. Doloremque consequatur sint a eaque quibusdam expedita vero
            nemo harum sit iste fuga quae
          </div>
        </div>
      </div>
    </>
  );
}
