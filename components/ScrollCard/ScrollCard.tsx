"use client";

import Image from "next/image";
import adobe from "@/public/images/experience/adobe.png";
import google from "@/public/images/experience/google.png";
import meta from "@/public/images/experience/meta.png";
import Marquee from "react-fast-marquee";

type Props = {};

const experience = [
  {
    id: 1,
    title: "Adobe",
    subTitle: "Senior UI UX Designer",
    date: "2021-2024",
    src: adobe,
    alt: "adobe",
  },
  {
    id: 2,
    title: "Google Inc.",
    subTitle: "Senior Product Designer",
    date: "2019-2021",
    src: google,
    alt: "google",
  },
  {
    id: 3,
    title: "Meta Inc.",
    subTitle: "Product Designer",
    date: "2018-2019",
    src: meta,
    alt: "meta",
  },
  {
    id: 4,
    title: "Adobe",
    subTitle: "Senior UI UX Designer",
    date: "2017-2018",
    src: adobe,
    alt: "adobe",
  },
  {
    id: 5,
    title: "Adobe",
    subTitle: "Senior UI UX Designer",
    date: "2021-2024",
    src: adobe,
    alt: "adobe",
  },
  {
    id: 6,
    title: "Google Inc.",
    subTitle: "Senior Product Designer",
    date: "2019-2021",
    src: google,
    alt: "google",
  },
  
];

export default function ScrollCard({}: Props) {
  return (
    <div className="h-[233px] overflow-hidden flex flex-col gap-4">
      <Marquee direction="up" style={{ width: "100%", overflowX: "unset" }}>
        <ul className="">
          {experience.map((exp) => (
            <li className="flex gap-[5px] my-2" key={exp.id}>
              <div className="mr-[30px]">
                <p className="text-sm font-medium text-[#576076]">{exp.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f0f2f5] dark:bg-[#0e1018] flex justify-center items-center">
                  <Image src={exp.src} alt={exp.alt} width={20} height={20} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#1a1f2c] leading-[1.5em] dark:text-[rgba(240,242,245,.7)]">
                    {exp.title}
                  </h4>
                  <h6 className="text-[#576076] text-sm font-normal leading-[1.42em]">
                    {exp.subTitle}
                  </h6>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
}
