import { IconAward } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import adobe from "@/public/images/experience/adobe.png";
import behance from "@/public/images/award/behance.png";
import nominee from "@/public/images/award/awwwards.png";
import dribbble from "@/public/images/award/dribbble.png";

type Props = {};

const awardItems = [
  {
    id: 1,
    projectUrl: "#",
    src: adobe,
    alt: "adobe",
    title: "Adobe Design Contest",
    date: "2022 - 2023",
    winnerTag: "Runner Up",
  },
  {
    id: 2,
    projectUrl: "#",
    src: behance,
    alt: "behance",
    title: "Dribbble Design Contest",
    date: "2022 - 2023",
    winnerTag: "Gold Winner",
  },
  {
    id: 3,
    projectUrl: "#",
    src: nominee,
    alt: "nominee",
    title: "Awwwards Nominee",
    date: "2022 - 2023",
    winnerTag: "Runner Up",
  },
  {
    id: 4,
    projectUrl: "#",
    src: dribbble,
    alt: "dribbble",
    title: "Behance Design Contest",
    date: "2022 - 2023",
    winnerTag: "Gold Winner",
  },
];

export default function AwardItems({}: Props) {
  return (
    <>
      {awardItems.map((items) => {
        return (
          <Link
            href=""
            className="block w-full group mb-[18px] last:mb-0"
            key={items.id}
          >
            <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg border border-transparent p-6 flex flex-wrap gap-[20px] justify-between items-center  transition-all duration-300 group-hover:bg-transparent group-hover:border-[#dbdfe5] group-hover:dark:border-[rgba(13,110,253,1)]">
              {/* Award name */}
              <div className="flex flex-wrap items-center gap-6 max-w-[300px] w-full ">
                {/* icon */}
                <div className="w-10 h-10 bg-white dark:bg-black rounded-lg flex items-center justify-center group-hover:bg-[#f0f2f5] group-hover:dark:bg-[#0e1018] transition-all duration-300 ">
                  <Image
                    src={items.src}
                    alt={items.alt}
                    width={24}
                    height={24}
                  />
                </div>
                {/* text */}
                <div className="text">
                  <div className="text-lg font-medium leading-[1.2em]">
                    {items.title}
                  </div>
                  <div className="text-base font-normal leading-[1.6em] text-[#616670]">
                    {items.date}
                  </div>
                </div>
              </div>
              {/* winner tag */}
              <div className="w-[140px]">
                <h4 className="text-base font-medium text-[#1a1f2c] dark:text-[#f0f2f5] flex gap-[6px] items-center">
                  <IconAward stroke={2} className="w-5 h-5" />
                  {items.winnerTag}
                </h4>
              </div>
              {/* project button */}
              <div className="projectButton">
                <span className="bg-white dark:bg-black text-[#1a1f2c] dark:text-[rgba(240,242,245,.7)] text-sm font-normal leading-[.9rem] py-2 px-3 border-0 rounded-[4px] transition-all duration-300 group-hover:bg-[#f0f2f5] group-hover:text-[rgba(13,110,253,1)] group-hover:dark:bg-[#0E1018]">
                  View Project ↗
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
