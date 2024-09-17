import Image from "next/image";
import React from "react";
import profile from "@/public/images/hero.png";
import Link from "next/link";

type Props = {};

export default function StaticSidebar({}: Props) {
  return (
    <>
      <div className=" bg-white dark:bg-black staticBar_shadow h-full border-none rounded-2xl">
        <div className="p-6">
          {/* image */}
          <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg overflow-hidden text-center">
            <Image
              src={profile}
              alt="profile"
              width={220}
              height={220}
              className="xl:mt-[10px] object-cover  mx-auto profile_image"
            />
          </div>
          {/* text */}
          <div className="xl:mt-6">
            <h3 className="xl:text-2xl xl:mb-2 font-semibold leading-[1.333em]">
              Programmer Rabbani 👋
            </h3>
            <p className="xl:mt-2 text-[#576076] dark:text-[rgba(240,242,245,.7)] xl:text-base xl:leading-[1.5em] font-medium">
              A Passionate &nbsp;
              <span className="font-semibold dark:text-white text-[#1a1f2c]">
                Full Stack Developer &nbsp;
              </span>
              🖥️ &amp; &nbsp;
              <span className="font-semibold dark:text-white text-[#1a1f2c]">
                Product Designer &nbsp;
              </span>
              having&nbsp;
              <span className="font-semibold dark:text-white text-[#1a1f2c]">
                12 years
              </span>{" "}
              of Experiences over 24+ Country Worldwide.
            </p>
            <div className="xl:mt-6">
              <Link href="">Book A call</Link>
              <button>Copy Email</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
