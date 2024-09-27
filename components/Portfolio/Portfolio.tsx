"use client";

import React, { useEffect, useState } from "react";
import Card from "../Card/Card.tsx";
import Image from "next/image";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconDots,
  IconPlus,
} from "@tabler/icons-react";
import project1 from "@/public/images/projects/project-1.png";
import project2 from "@/public/images/projects/project-2.png";
import project3 from "@/public/images/projects/project-3.png";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

// Dummy project data
const projects = [
  {
    id: 1,
    name: "FlowSaaS - SaaS Application Tools",
    category: "SaaS App | UI UX Design",
    imgSrc: project1,
  },
  {
    id: 2,
    name: "AIMug - AI Writing Application Tools",
    category: "Product Design | Application",
    imgSrc: project2,
  },
  {
    id: 3,
    name: "FlowArch - Architecture Service Website",
    category: "UI UX Design | Development",
    imgSrc: project3,
  },
  {
    id: 4,
    name: "FlowSaaS - SaaS Application Tools",
    category: "SaaS App | UI UX Design",
    imgSrc: project1,
  },
  {
    id: 5,
    name: "AIMug - AI Writing Application Tools",
    category: "Product Design | Application",
    imgSrc: project2,
  },
  {
    id: 6,
    name: "FlowArch - Architecture Service Website",
    category: "UI UX Design | Development",
    imgSrc: project3,
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Function to close the modal
  const closeModal = () => setSelectedImage(null);

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
          {/* top info start */}
          <div className="block mb-12">
            <div className="w-full">
              <h1 className="text-3xl xl:text-[40px] font-semibold text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.2em] xl:leading-[.9em] mb-6 ">
                Check Out My Latest{" "}
                <span className="text-[#4770ff]">Projects</span>
              </h1>
              <p className="text-lg font-normal leading-[1.5em] text-justify text-[#576076] dark:text-[rgba(240,242,245,.7)] ">
                I bring your ideas to life with custom web solutions using
                modern technologies like JavaScript, Node.js, React, and more.
                Whether starting from scratch or refining existing platforms, I
                create intuitive and efficient experiences tailored to your
                needs.
              </p>
            </div>
          </div>
          {/* top info start */}

          {/* projects */}
          <div className="flex flex-wrap">
            {currentProjects.map((project) => (
              <div className="w-full " key={project.id}>
                <div className="p-[14px] md:p-6 lg:p-6 xl:p-6 bg-[#f0f2f5] dark:bg-[#0e1018] rounded-2xl overflow-hidden relative group mt-6 px-3">
                  <Image
                    src={project.imgSrc}
                    alt={project.name}
                    className="w-full rounded-lg rounded-b-none"
                  />
                  <button
                    onClick={() => setSelectedImage(project.imgSrc)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-[9] w-10 h-10 bg-white rounded-full leading-[38px] text-center filter drop-shadow-custom mt-[-10px] transition-all duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                  >
                    <IconPlus
                      stroke={2}
                      className="w-[22px] h-[22px] text-[#4770ff]"
                    />
                  </button>
                </div>
                <div className="project_text p-6 flex gap-[30px] justify-between">
                  <div className="projectInfo">
                    <Link
                      href=""
                      className="text-lg md:text-xl lg:text-xl xl:text-2xl leading-[1.3em] font-medium text-[#1a1f2c] dark:text-[rgba(240,242,245,.7)] mb-[2px] border-b border-b-transparent hover:text-[#4770ff] dark:hover:text-[#4770ff] hover:border-b-[#4770ff] transition-all duration-300"
                    >
                      {project.name}
                    </Link>
                    <p className="text-base font-normal leading-[1.5em] text-[#576076]">
                      {project.category}
                    </p>
                  </div>
                  <div className="projectVisit">
                    <Link
                      href=""
                      className="text-sm font-normal leading-[1em] text-[#576076] dark:text-[rgba(240,242,245,.7)] hover:text-[#4770ff] dark:hover:text-[#4770ff] transition-all duration-300"
                    >
                      Visit Site ↗
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* projects */}

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

          {/* work-together-slider start */}
          <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg overflow-hidden p-6 mt-[50px] ">
            <div className="flex items-center gap-6">
              {/* slider item */}
              <div className="inline-block auto_scroll_list text_slider whitespace-nowrap">
                {/* Duplicate links for sliding effect */}
                {Array(2)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className="inline-block">
                      <Link
                        href=""
                        className="inline-block text-[30px] md:text-[40px] lg:text-[40px] xl:text-[40px] font-medium text-[#576076] leading-[.9em] mx-[15px] relative before:absolute before:w-[10px] before:h-[10px] before:bg-[#576076] before:rounded-full before:top-1/2 before:left-[-32px] before:transform before:-translate-y-1/2 hover:text-[#1a1f2c] dark:hover:text-white transition-all duration-300 mr-10"
                      >
                        Let's 👋 Work Together
                      </Link>
                      <Link
                        href=""
                        className="inline-block text-[30px] md:text-[40px] lg:text-[40px] xl:text-[40px]  font-medium text-[#576076] leading-[.9em] mx-[15px] relative before:absolute before:w-[10px] before:h-[10px] before:bg-[#576076] before:rounded-full before:top-1/2 before:left-[-32px] before:transform before:-translate-y-1/2 hover:text-[#1a1f2c] dark:hover:text-white transition-all duration-300 mr-10 "
                      >
                        Let's 👋 Work Together
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* work-together-slider end */}
        </div>

        {/* Image Modal */}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the image
            >
              <Image
                src={selectedImage}
                alt="Selected Project"
                className="max-w-[567px] max-h-[392px]"
              />
            </div>
          </div>
        )}
      </Card>
    </>
  );
}
