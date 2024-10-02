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
    title: "S.S.C",
    subTitle: "GOVT. Jubilee High School",
    date: "2010-2012",
  },
  {
    id: 2,
    title: "BBA Honours",
    subTitle: "Patuakhali GOVT. College",
    date: "2016-2020",
  },
  {
    id: 3,
    title: "Web Development",
    subTitle: "Sorobindu, Dhaka.",
    date: "2020-2021",
  },
  {
    id: 4,
    title: "front-end web developer",
    subTitle: "Sorobindu, Dhaka.",
    date: "2021-2022",
  },
  {
    id: 5,
    title: "MERN full stack",
    subTitle: "Sorobindu, Dhaka.",
    date: "2022-2023",
  },
  {
    id: 6,
    title: "Web Development",
    subTitle: "Sorobindu, Dhaka.",
    date: "2020-2021",
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
                <p className="text-sm font-medium text-myGray dark:text-white">{exp.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-base font-semibold text-myBgDarkTwo leading-[1.5em] dark:text-white">
                    {exp.title}
                  </h4>
                  <h6 className="text-myGray text-sm font-normal leading-[1.42em]">
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
