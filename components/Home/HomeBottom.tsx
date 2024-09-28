import React from "react";
import Card from "../Card/Card.tsx";
import { IconArrowRightSquare, IconBrandSkype } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { HomeServices } from "@/data/HomeService.tsx";

type Props = {};



export default function HomeBottom({}: Props) {
  return (
    <>
      <div className="mt-6 flex xl:flex-row flex-col">
        
        <div className="xl:w-2/6 w-full xl:pl-3 xl:mt-0 mt-6">
          <Card>
            <div className="p-6">
              {/* scroll */}
              <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg h-14 mb-6 flex items-center overflow-hidden whitespace-nowrap">
                {/* <Marquee speed={100}> */}
                <div className="text-lg font-medium text-[#576076] mr-[10px] leading-[1.6em]  text_slider">
                  Available For Hire 🚀 Crafting Digital Experiences 🎨
                  Available For Hire 🚀 Crafting Digital Experiences 🎨
                </div>
                {/* </Marquee> */}
              </div>
              {/* text */}
              <h3 className="text-[40px] font-semibold text-[#1a1f2c] leading-[1.375em] dark:text-[#f0f2f5] mb-6 ">
                Let's👋<span className="block">Work Together</span>
              </h3>
              <Link
                href=""
                className="text-base font-medium text-[#4770ff] border-b border-b-[#dbdfe5] hover:border-b-[#4770ff] transition-all duration-300 inline-block"
              >
                <div className="flex items-center mb-1">
                  Let's Talk <IconBrandSkype stroke={2} className="ml-[8px]" />
                </div>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
