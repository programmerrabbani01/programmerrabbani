import Card from "@/components/Card/Card.tsx";
import ScrollCard from "@/components/ScrollCard/ScrollCard.tsx";
import Image from "next/image";
import figma from "@/public/images/figma.png";
import notion from "@/public/images/notion.png";
import miro from "@/public/images/mico.png";
import framer from "@/public/images/framer.png";
import webflow from "@/public/images/webflow.png";
import zeplin from "@/public/images/zeplin.png";

const expert = [
  {
    id: 1,
    title: "Figma",
    src: figma,
    alt: "figma",
  },
  {
    id: 2,
    title: "Notion",
    src: notion,
    alt: "notion",
  },
  {
    id: 3,
    title: "Miro",
    src: miro,
    alt: "Miro",
  },
  {
    id: 4,
    title: "Framer",
    src: framer,
    alt: "Framer",
  },
  {
    id: 5,
    title: "Webflow",
    src: webflow,
    alt: "Webflow",
  },
  {
    id: 6,
    title: "Zeplin",
    src: zeplin,
    alt: "Zeplin",
  },
];

export default function HomePage() {
  return (
    <>
      <div className="flex items-start space-x-3">
        {/* 1st side */}

        <div className="xl:w-1/2">
          {/* card 1 */}
          <Card>
            {/* card body  */}
            <div className="overflow-hidden p-6">
              <h3 className="text-2xl font-semibold leading-[1.333em] mb-2 ">
                Work Experience
              </h3>
              <ScrollCard />
            </div>
          </Card>
          {/* card 2 */}
          <Card>
            <div className="mt-6">
              {/* card body  */}
              <div className="overflow-hidden p-6">
                <h3 className="text-2xl font-semibold leading-[1.333em] mb-2 ">
                  My Expert Area
                </h3>
                <div className="mt-6">
                  <div className="flex flex-wrap items-center">
                    {/*  */}
                    {expert.map((experts) => {
                      return (
                        <div className="xl:w-1/3 text-center" key={experts.id}>
                          <div className="px-[10px] mt-4">
                            <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg py-[14px] px-[10px]">
                              <Image
                                src={experts.src}
                                alt={experts.alt}
                                className="w-8 h-8 mx-auto object-contain"
                              />
                            </div>
                            <div className="text-base font-medium mt-2 leading-[1.5em] text-[#1a1f2c] dark:text-[rgba(240,242,245,.7)]">
                              {experts.title}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* second site */}
        <div className="xl:w-1/2">bye</div>
      </div>
    </>
  );
}
