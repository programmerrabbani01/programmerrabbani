import Link from "next/link";
import React from "react";

type Props = {};

export default function WorkingTogether({}: Props) {
  return (
    <>
      <div className="bg-myBgLight dark:bg-myBgDark rounded-lg overflow-hidden p-6">
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
                    className="inline-block text-[30px] md:text-[40px] lg:text-[40px] xl:text-[40px] font-medium text-myGray  leading-[.9em] mx-[15px] relative before:absolute before:w-[10px] before:h-[10px] before:bg-myGray before:rounded-full before:top-1/2 before:left-[-32px] before:transform before:-translate-y-1/2 hover:text-myBgDarkTwo dark:hover:text-white transition-all duration-300 mr-10"
                  >
                    Let's 👋 Work Together
                  </Link>
                  <Link
                    href=""
                    className="inline-block text-[30px] md:text-[40px] lg:text-[40px] xl:text-[40px]  font-medium text-myGray  leading-[.9em] mx-[15px] relative before:absolute before:w-[10px] before:h-[10px] before:bg-myGray before:rounded-full before:top-1/2 before:left-[-32px] before:transform before:-translate-y-1/2 hover:text-myBgDarkTwo dark:hover:text-white transition-all duration-300 mr-10 "
                  >
                    Let's 👋 Work Together
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
