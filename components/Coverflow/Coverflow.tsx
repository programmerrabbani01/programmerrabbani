"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { homeProjects } from "@/data/HomeProjects.tsx";
import { StaticImageData } from "next/image";

// Example projects data

type Project = {
  id: number;
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
  technologies: string[];
  projectLink: string;
  githubLink: string;
};

export default function Coverflow() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true} // Infinite loop
        autoplay={{
          delay: 3000, // Slide delay (3 seconds)
          disableOnInteraction: false,
        }}
        speed={1000} // Speed reduced for smoother transitions
        centeredSlides={true}
        slidesPerView={3} // Show 3 slides at a time
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide on small screens
          },
          480: {
            slidesPerView: 2, // 2 slides on medium screens
          },
          1024: {
            slidesPerView: 3, // 3 slides on large screens
          },
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {homeProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
