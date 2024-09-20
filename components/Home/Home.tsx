"use client";

import React, { useState } from "react";
import Card from "@/components/Card/Card.tsx";
import ScrollCard from "@/components/ScrollCard/ScrollCard.tsx";
import Image from "next/image";
import figma from "@/public/images/expert/figma.png";
import notion from "@/public/images/expert/notion.png";
import miro from "@/public/images/expert/mico.png";
import framer from "@/public/images/expert/framer.png";
import webflow from "@/public/images/expert/webflow.png";
import zeplin from "@/public/images/expert/zeplin.png";
import Link from "next/link";
import { IconArrowRightSquare, IconPlus, IconX } from "@tabler/icons-react";
import project1 from "@/public/images/projects/project-1.png";
import project2 from "@/public/images/projects/project-2.png";

const expert = [
  {
    id: 1,
    title: "Figma",
    src: figma,
    alt: "figma",
  },
  {
    id: 2,
    title: "Notion",
    src: notion,
    alt: "notion",
  },
  {
    id: 3,
    title: "Miro",
    src: miro,
    alt: "Miro",
  },
  {
    id: 4,
    title: "Framer",
    src: framer,
    alt: "Framer",
  },
  {
    id: 5,
    title: "Webflow",
    src: webflow,
    alt: "Webflow",
  },
  {
    id: 6,
    title: "Zeplin",
    src: zeplin,
    alt: "Zeplin",
  },
];

const projects = [
  {
    id: 1,
    title: "Product Design",
    src: project1,
    alt: "project1",
  },
  {
    id: 1,
    title: "Product Design",
    src: project2,
    alt: "project2",
  },
];

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

// Define the Project type
type Project = {
  id: number;
  title: string;
  src: StaticImageData; // Assuming you're using Next.js Image component
  alt: string;
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  // Function to close the modal
  const closeModal = () => setSelectedImage(null);
  return (
    <>
      <div className="flex items-start space-x-3">
        {/* 1st side */}
        <div className="xl:w-1/2">
          {/* card 1 */}
          <Card>
            {/* card body  */}
            <div className="overflow-hidden p-6">
              <h3 className="text-2xl font-semibold leading-[1.333em] mb-2 ">
                Work Experience
              </h3>
              <ScrollCard />
            </div>
          </Card>
          {/* card 2 */}
          <Card>
            <div className="mt-6">
              {/* card body  */}
              <div className="overflow-hidden p-6">
                <h3 className="text-2xl font-semibold leading-[1.333em] mb-2 ">
                  My Expert Area
                </h3>
                <div className="mt-6">
                  <div className="flex flex-wrap items-center">
                    {/*  */}
                    {expert.map((experts) => {
                      return (
                        <div className="xl:w-1/3 text-center" key={experts.id}>
                          <div className="px-[10px] mt-4">
                            <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg py-[14px] px-[10px]">
                              <Image
                                src={experts.src}
                                alt={experts.alt}
                                className="w-8 h-8 mx-auto object-contain"
                              />
                            </div>
                            <div className="text-base font-medium mt-2 leading-[1.5em] text-[#1a1f2c] dark:text-[rgba(240,242,245,.7)]">
                              {experts.title}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* second site */}
        <div className="xl:w-1/2">
          <div className="border-none card_shadow bg-white dark:bg-black rounded-2xl h-full min-h-screen">
            <div className="p-6">
              {/* title */}
              <h3 className="flex items-center gap-[15px] justify-between text-2xl font-semibold leading-[1.333em] mb-2">
                Recent Projects
                <Link
                  href=""
                  className="text-base font-normal text-[#4770ff] leading-[1.5em] flex items-center border-b border-[#dbdfe5] dark:border-[#576076] hover:border-[#4770ff] dark:hover:border-[#4770ff] transition-all duration-300"
                >
                  All Projects <IconArrowRightSquare stroke={2} />
                </Link>
              </h3>
              {/* projects */}
              {projects.map((project) => {
                return (
                  <div className="mt-6" key={project.id}>
                    <div className="w-full">
                      <div className="bg-[#f0f2f5] dark:bg-[#0e1018] pt-6 px-6 rounded-lg overflow-hidden relative group">
                        <Image
                          src={project.src}
                          alt={project.alt}
                          className="w-full rounded-lg rounded-b-none"
                        />
                        <button
                          onClick={() => setSelectedImage(project.src)}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-[9] w-10 h-10 bg-white rounded-full leading-[38px] text-center filter drop-shadow-custom mt-[-10px] transition-all duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center "
                        >
                          <IconPlus
                            stroke={2}
                            className="w-[22px] h-[22px] text-[#4770ff]"
                          />
                        </button>

                        <div className="absolute bottom-0 left-0 project_info w-full">
                          <span className="text-xs font-medium text-[#4770ff] bg-white rounded-[4px] py-1 px-2 m-4 leading-[1.33em] inline-block ">
                            {project.title}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=""></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {/* {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={closeModal}
            >
              <IconX className="w-8 h-8" />
            </button>
            <Image
              src={selectedImage}
              alt="Selected Project"
              className="max-w-[567px] max-h-[392px]"
            />
          </div>
        </div>
      )} */}
      
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
    </>
  );
}
