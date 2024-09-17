import Image from "next/image";
import React from "react";
import profile from "@/public/images/hero.png";

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
              className="xl:mt-[10px] align-middle profile_image xl:w-[180px] xl:h-[250px] object-cover mx-auto w-[426px]"
            />
          </div>
          {/* text */}
          <div className="">Bye</div>
        </div>
      </div>
    </>
  );
}
