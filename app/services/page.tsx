import Services from "@/components/Services/Services.tsx";
import StaticSidebar from "@/components/StaticSidebar/StaticSidebar.tsx";
import React from "react";

type Props = {};

export default function ServicesPage({}: Props) {
  return (
    <>
      <div className="my_container">
        <div className="xl:flex xl:items-start xl:space-x-6 xl:pt-[80px] lg:pt-[60px] md:pt-[60px] sm:pt-[60px] pt-[60px]">
          <div className="xl:w-1/3 w-full mt-6">
            <StaticSidebar />
          </div>
          <div className="xl:w-2/3 w-full mt-6">
            <Services />
          </div>
        </div>
      </div>
    </>
  );
}
