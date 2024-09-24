import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {};

const testimonialItems = [
  {
    id: 1,
    linkText: "Framer.com ↗",
    linkUrl: "https://framer.com",
    reviewText: `"We've been using BentoFolio for over a year now, and I must say,it's been a game-changer for us. The user interface is intuitive and the feature.`,
    authorName: "Oliver Clain",
    authorProfession: "Product Designer",
  },
  {
    id: 2,
    linkText: "Framer.com ↗",
    linkUrl: "https://framer.com",
    reviewText: `"We've been using BentoFolio for over a year now, and I must say,it's been a game-changer for us. The user interface is intuitive and the feature.`,
    authorName: "Oliver Clain",
    authorProfession: "Product Designer",
  },
];

export default function Testimonial({}: Props) {
  return (
    <>
      {testimonialItems.map((item) => {
        return (
          <div className="w-[340px] outline-none" key={item.id}>
            <div className="bg-[#f0f2f5] dark:bg-[#0e1018] p-6 mx-3 rounded-lg shadow-md">
              {/* rating */}
              <div className="flex items-center justify-between gap-[30px] mb-[20px]">
                {/* rating */}
                <div className="rating flex items-center">
                  <FaStar className="text-[#faad3d] text-sm" />
                  <FaStar className="text-[#faad3d] text-sm" />
                  <FaStar className="text-[#faad3d] text-sm" />
                  <FaStar className="text-[#faad3d] text-sm" />
                  <FaStar className="text-[#faad3d] text-sm" />
                </div>
                <div className="website">
                  <Link
                    href={item.linkUrl}
                    className="bg-white text-sm font-normal leading-[.9rem] py-1 px-2 rounded-[4px] text-[rgba(13,110,253,1)] hover:bg-[#4770ff] hover:text-white transition-all duration-300 "
                  >
                    {item.linkText}
                  </Link>
                </div>
              </div>
              {/* details */}
              <div className="details mb-[30px]">
                <p className=" text-lg text-[#1a1f2c] dark:text-[#f0f2f5] font-normal leading-[1.5em] ">
                  {item.reviewText}
                </p>
              </div>
              {/* designation */}

              <div className="text-base font-normal leading-[1.6em] text-[#616670]">
                <strong className="dark:text-[#f0f2f5] text-[#1a1f2c] text-base font-medium ">
                  {item.authorName}
                </strong>{" "}
                - {item.authorProfession}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
