"use client";

import React, { useEffect, useState } from "react";
import Card from "../Card/Card.tsx";
import Image from "next/image";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconPlus,
} from "@tabler/icons-react";
import Link from "next/link";
import { projects } from "@/data/Portfolio.tsx";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

// Dummy project data

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
              <h1 className="text-3xl xl:text-[40px] font-semibold text-myBgDarkTwo dark:text_bg leading-[1.2em] xl:leading-[.9em] mb-6 ">
                Check Out My Latest
                <span className="">Projects</span>
              </h1>
              {/* <p className="text-lg font-normal leading-[1.5em] text-justify text-myGray dark:text-myRgbaLight ">
                I bring your ideas to life with custom web solutions using
                modern technologies like JavaScript, Node.js, React, and more.
                Whether starting from scratch or refining existing platforms, I
                create intuitive and efficient experiences tailored to your
                needs.
              </p> */}
            </div>
          </div>
          {/* top info start */}

          {/* projects */}
          <div className="flex flex-wrap">
            {currentProjects.map((project) => (
              <div className="w-full " key={project.id}>
                <div className="p-[14px] md:p-6 lg:p-6 xl:p-6 bg-myBgLight dark:bg-myBgDark rounded-2xl overflow-hidden relative group mt-6 px-3">
                  <div className="max-h-[300px] overflow-hidden">
                    <Image
                      src={project.imgSrc}
                      alt={project.name}
                      className="w-full rounded-lg rounded-b-none transform hover:translate-y-[-500px] rounded-tl-lg transition-transform duration-[2000ms] rounded-tr-lg"
                    />
                  </div>

                  {/* <button
                    onClick={() => setSelectedImage(project.imgSrc)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-[9] w-10 h-10 bg-white rounded-full leading-[38px] text-center filter drop-shadow-custom mt-[-10px] transition-all duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                  >
                    <IconPlus
                      stroke={2}
                      className="w-[22px] h-[22px] text-myPrimary"
                    />
                  </button> */}
                </div>
                <div className="project_text p-6 flex gap-[30px] justify-between">
                  <div className="projectInfo">
                    <Link
                      href={project.visitLink}
                      target="_blank"
                      className="text-lg md:text-xl lg:text-xl xl:text-2xl leading-[1.3em] font-medium text-myBgDarkTwo dark:text-white mb-[2px] border-b border-b-transparent hover:text-myPrimary dark:hover:text-myPrimary hover:border-b-myPrimary transition-all duration-300"
                    >
                      {project.name}
                    </Link>
                    <p className="text-base font-normal leading-[1.5em] text-myGray max-w-md text-justify">
                      {project.description}
                    </p>
                  </div>
                  <div className="projectVisit">
                    <Link
                      href={project.visitLink}
                      target="_blank"
                      className="text-sm font-normal leading-[1em] text-myGray dark:text-white hover:text-white hover:bg-myPrimaryHover dark:hover:text-white dark:hover:bg-myPrimaryHover transition-all duration-300 bg-myBgLight dark:bg-myBgDark py-2 px-3 rounded-[4px]"
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
                  className={`w-9 h-9 border border-[#dbdfe5] bg-white dark:border-myBgDarkTwo dark:bg-black text-myGray rounded-lg text-base font-normal flex items-center justify-center hover:border-myPrimary dark:hover:border-myPrimary hover:text-myPrimary transition-all duration-300 ${
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
                    className={`w-9 h-9 border border-[#dbdfe5] bg-white dark:border-myBgDarkTwo dark:bg-black text-myGray rounded-lg text-base font-normal flex items-center justify-center hover:border-myPrimary dark:hover:border-myPrimary hover:text-myPrimary transition-all duration-300 ${
                      currentPage === index + 1
                        ? "text-myPrimary border-myPrimary"
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
                  className={`w-9 h-9 border border-[#dbdfe5] bg-white dark:border-myBgDarkTwo dark:bg-black text-myGray rounded-lg text-base font-normal flex items-center justify-center hover:border-myPrimary dark:hover:border-myPrimary hover:text-myPrimary transition-all duration-300 ${
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
