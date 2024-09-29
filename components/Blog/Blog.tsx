"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card.tsx";
import { blogItems } from "@/data/Blog.tsx";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogItemsPerPage = 6;

  const totalPages = Math.ceil(blogItems.length / blogItemsPerPage);

  const indexOfLastProject = currentPage * blogItemsPerPage;
  const indexOfFirstProject = indexOfLastProject - blogItemsPerPage;
  const currentBlogItems = blogItems.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // function for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Auto scroll to the top of the page when the current page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  }, [currentPage]);
  return (
    <>
      <Card>
        <div className="p-6 xl:pt-12 xl:px-10 xl:pb-10">
          {/* top info */}
          <div className="block mb-12">
            <div className="w-full">
              <h1 className="text-3xl xl:text-[38px] font-semibold text-[#1a1f2c] dark:text-[#f0f2f5] mb-6 leading-[1.2em] xl:leading-[.9em] ">
                My Recent Article and Publications
              </h1>
              <p className="text-lg leading-[1.5em] font-normal text-[#576076] dark:text-[rgba(240,242,245,.7)] text-justify ">
                If you’re searching for a product designer to bring your ideas
                to life or a design partner to help elevate your business, I’m
                here to help. With expertise in modern web technologies like
                JavaScript, Node.js, and React, I create custom solutions
                tailored to your needs. Whether building from scratch or
                refining existing platforms, I focus on crafting intuitive and
                efficient user experiences.
              </p>
            </div>
          </div>
          {/* top info */}

          {/* article publications */}
          <div className="articlePublications grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-5">
            {currentBlogItems.map((blog) => {
              return (
                <div className="w-full xl:w-[340px] outline-none" key={blog.id}>
                  <div className="w-full inline-block">
                    <div className="mx-3 mt-6 xl:mt-2">
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
                          className="bg-white text-xs font-normal leading-[.9rem] py-1 px-2 rounded-[4px] absolute bottom-4 left-4 inline-block text-[rgba(13,110,253,1)] hover:text-white hover:bg-[#4770ff] transition-all duration-300 "
                        >
                          {blog.srcText}
                        </Link>
                      </div>
                      {/* text */}
                      <div className="text">
                        <Link
                          href={blog.url}
                          className="text-xl font-medium leading-[1.3em] text-[#1a1f2c] dark:text-[rgba(240,242,245,.7)] mb-[14px] inline-block hover:text-[#4770ff] transition-all duration-300 "
                        >
                          {blog.title}
                        </Link>
                        <div className="bottomText flex items-center">
                          <div className="text-sm font-normal text-[rgba(87,96,118,.5)] dark:text-[#576076] leading-[1.4em] pl-[15px] pr-[5px] ml-[3px] ">
                            {blog.readingTime}
                          </div>
                          <div className="text-sm font-normal text-[rgba(87,96,118,.5)] dark:text-[#576076] leading-[1.4em] pl-[15px] pr-[5px] ml-[3px] ">
                            {blog.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* article publications */}

          {/* pagination */}
          <div className="mt-10 flex justify-center">
            <ul className="flex items-center gap-2 list-none pl-0">
              <li className="prev">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`w-9 h-9 border border-[#dbdfe5] bg-white dark:border-[#1a1f2c] dark:bg-black text-[#576076] rounded-lg text-base font-normal flex items-center justify-center hover:border-[#4770ff] dark:hover:border-[#4770ff] hover:text-[#4770ff] transition-all duration-300 ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <IconArrowNarrowLeft stroke={2} />
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-9 h-9 border border-[#dbdfe5] bg-white dark:border-[#1a1f2c] dark:bg-black text-[#576076] rounded-lg text-base font-normal flex items-center justify-center hover:border-[#4770ff] dark:hover:border-[#4770ff] hover:text-[#4770ff] transition-all duration-300 ${
                      currentPage === index + 1
                        ? "text-[#4770ff] border-[#4770ff]"
                        : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="next">
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`w-9 h-9 border border-[#dbdfe5] bg-white dark:border-[#1a1f2c] dark:bg-black text-[#576076] rounded-lg text-base font-normal flex items-center justify-center hover:border-[#4770ff] dark:hover:border-[#4770ff] hover:text-[#4770ff] transition-all duration-300 ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <IconArrowNarrowRight stroke={2} />
                </button>
              </li>
            </ul>
          </div>
          {/* pagination */}
        </div>
      </Card>
    </>
  );
}
