import React from "react";
import notion from "@/public/images/expert/notion.png";
import webFlow from "@/public/images/expert/webflow.png";
import mico from "@/public/images/expert/mico.png";
import framer from "@/public/images/expert/framer.png";
import zeplin from "@/public/images/expert/zeplin.png";
import figma from "@/public/images/expert/figma.png";
import Image from "next/image";

type Props = {};

const workItems = [
  {
    id: 1,
    src: figma,
    alt: "figma",
  },
  {
    id: 2,
    src: notion,
    alt: "notion",
  },
  {
    id: 3,
    src: webFlow,
    alt: "webFlow",
  },
  {
    id: 4,
    src: mico,
    alt: "mico",
  },
  {
    id: 5,
    src: framer,
    alt: "framer",
  },
  {
    id: 6,
    src: zeplin,
    alt: "zeplin",
  },
  {
    id: 7,
    src: figma,
    alt: "figma",
  },
  {
    id: 8,
    src: notion,
    alt: "notion",
  },
  {
    id: 9,
    src: webFlow,
    alt: "webFlow",
  },
  {
    id: 10,
    src: mico,
    alt: "mico",
  },
  {
    id: 11,
    src: framer,
    alt: "framer",
  },
  {
    id: 12,
    src: zeplin,
    alt: "zeplin",
  },
];

export default function WorkingArea({}: Props) {
  return (
    <>
      <div className="flex gap-5 flex-wrap ">
        {/* items */}
        {workItems.map((wItems) => {
          return (
            <div
              key={wItems.id}
              className="rounded-2xl bg-[#f0f2f5] dark:bg-[#0e1018] w-20 h-20 flex items-center justify-center "
            >
              <Image src={wItems.src} alt={wItems.alt} width={48} height={48} />
            </div>
          );
        })}
      </div>
    </>
  );
}
