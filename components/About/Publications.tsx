import Link from "next/link";
import React from "react";
import Image from "next/image";
import { blogItems } from "@/data/Blog.tsx";

type Props = {};

export default function Publications({}: Props) {
  return (
    <>
      {blogItems.map((blog) => {
        return (
          <div className="w-[340px] outline-none" key={blog.id}>
            <div className="w-full inline-block">
              <div className="mx-3">
                {/* image */}
                <div className="rounded-lg overflow-hidden relative mb-6 aspect-[6/4] ">
                  <Link
                    href={blog.url}
                    className="w-full h-full block transition-all duration-300"
                  >
                    <Image
                      src={blog.src}
                      alt={blog.alt}
                      className="object-cover object-center h-full transition-all duration-300 w-full max-w-full transform hover:scale-[1.07] "
                    />
                  </Link>
                  <Link
                    href=""
                    className="bg-white text-xs font-normal leading-[.9rem] py-1 px-2 rounded-[4px] absolute bottom-4 left-4 inline-block text-myPrimaryHover hover:text-white hover:bg-myPrimary transition-all duration-300 "
                  >
                    {blog.srcText}
                  </Link>
                </div>
                {/* text */}
                <div className="text">
                  <Link
                    href={blog.url}
                    className="text-xl font-medium leading-[1.3em] text-myBgDarkTwo dark:text-myRgbaLight mb-[14px] inline-block hover:text-myPrimary dark:hover:text-myPrimary transition-all duration-300 "
                  >
                    {blog.title}
                  </Link>
                  <div className="bottomText flex items-center">
                    <div className="text-sm font-normal text-myRgbaDark dark:text-white leading-[1.4em] pl-[15px] pr-[5px] ml-[3px] ">
                      {blog.readingTime}
                    </div>
                    <div className="text-sm font-normal text-myRgbaDark dark:text-white leading-[1.4em] pl-[15px] pr-[5px] ml-[3px] ">
                      {blog.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
