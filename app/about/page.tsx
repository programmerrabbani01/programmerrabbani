// import About from "@/components/About/About.tsx";
// import StaticSidebar from "@/components/StaticSidebar/StaticSidebar.tsx";
// import React from "react";

// type Props = {};

// export default function aboutPage({}: Props) {
//   return (
//     <>
//       <div className="my_container">
//         <div className="xl:flex xl:items-start xl:space-x-6 xl:pt-[80px] lg:pt-[60px] md:pt-[60px] sm:pt-[60px] pt-[60px]">
//           <div className="xl:w-1/3 w-full mt-6">
//             <StaticSidebar />
//           </div>
//           <div className="xl:w-2/3 w-full mt-6">
//             <About />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import About from "@/components/About/About.tsx";
import AboutBottom from "@/components/About/AboutBottom.tsx";
import StaticSidebar from "@/components/StaticSidebar/StaticSidebar.tsx";
import React from "react";

type Props = {};

export default function aboutPage({}: Props) {
  return (
    <>
      <div className="my_container">
        <div className="xl:flex xl:items-start xl:space-x-6 xl:pt-[80px] lg:pt-[60px] md:pt-[60px] sm:pt-[60px] pt-[60px]">
          {/* Sticky Sidebar */}
          <div className="xl:w-1/3 w-full mt-6 xl:sticky xl:top-[100px]">
            <StaticSidebar />
          </div>
          {/* Main Content */}
          <div className="xl:w-2/3 w-full mt-6">
            <About />
          </div>
        </div>
        <AboutBottom/>
      </div>
    </>
  );
}
