import React from "react";
import Card from "../Card/Card.tsx";
import Counter from "./Counter.tsx";
import Coverflow from "../Coverflow/Coverflow.tsx";
import Link from "next/link";
import BlogCard from "./BlogCard.tsx";
import { blogItems } from "@/data/Blog.tsx";
import WorkingTogether from "./WorkingTogether.tsx";

type Props = {};

export default function HomeBottom({}: Props) {
  const blogItemsPerPage = 3;

  // Show only the first 3 blogs
  const currentBlogItems = blogItems.slice(0, blogItemsPerPage);

  return (
    <>
      {/* slider */}
      <div className=" w-full mt-6 hidden">
        <Card>
          <div className="p-6">
            {/* scroll */}
            <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg h-14 flex items-center overflow-hidden whitespace-nowrap">
              {/* <Marquee speed={100}> */}
              <div className="text-lg font-medium text-[#576076] mr-[10px] leading-[1.6em]  text_slider">
                Available For Hire 🚀 Crafting Digital Experiences 🎨 Available
                For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire
                🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀
                Crafting Digital Experiences 🎨 Available For Hire 🚀 Crafting
                Digital Experiences 🎨 Available For Hire 🚀 Crafting Digital
                Experiences 🎨 Available For Hire 🚀 Crafting Digital
                Experiences 🎨 Available For Hire 🚀 Crafting Digital
                Experiences 🎨
              </div>
              {/* </Marquee> */}
            </div>
            {/* text */}
          </div>
        </Card>
      </div>
      {/* slider */}

      {/* counter */}
      <Counter />
      {/* counter */}

      {/* projects */}
      <div className="mt-6">
        <Card>
          <div className="p-6">
            <h2 className="text-2xl sm:text-3xl mb-7 text-center font-semibold ">
              Works & Projects
            </h2>
            <Coverflow />
          </div>
        </Card>
      </div>
      {/* projects */}

      {/* Blog */}
      <div className="mt-6">
        <Card>
          <div className="p-6">
            <div className="flex justify-between items-center mb-7">
              <h2 className="text-2xl sm:text-3xl  text-black dark:text-white font-semibold ">
                Article and Publications
              </h2>
              <Link
                href=""
                className="text-base font-semibold hover:underline underline-offset-8 transition-all duration-300 text-[#4770ff] group"
              >
                View more
                <span className="block h-[2px] max-w-0 group-hover:max-w-full bg-[#4770ff] transition-all duration-300"></span>
              </Link>
            </div>
            {/*  */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              {currentBlogItems.map((item) => {
                return <BlogCard key={item.id} item={item} />;
              })}
            </div>
          </div>
        </Card>
      </div>
      {/* Blog */}

      {/* lets work together */}
      <div className="mt-6">
        <Card>
          <div className="p-6">
            <WorkingTogether />
          </div>
        </Card>
      </div>
      {/* lets work together */}
    </>
  );
}
