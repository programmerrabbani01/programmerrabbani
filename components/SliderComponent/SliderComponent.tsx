"use client";
import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";

type Props = {
  children: React.ReactNode;
};

// Custom Left Arrow Component
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <FaLongArrowAltLeft
      className="w-9 h-9 rounded-lg border border-[#dbdfe5] dark:border-[#1a1f2c] hover:border-[#4770ff] dark:hover:border-[#4770ff] text-center leading-[36px] text-[13px] text-[#576076] hover:text-[#4770ff] cursor-pointer absolute top-[-68px] right-[57px] px-[10px] bg-white dark:bg-black z-[9] transition-all duration-300"
      onClick={onClick}
    />
  );
};

// Custom Right Arrow Component
const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <FaLongArrowAltRight
      className="w-9 h-9 rounded-lg border border-[#dbdfe5] dark:border-[#1a1f2c] hover:border-[#4770ff] dark:hover:border-[#4770ff] text-center leading-[36px] text-[13px] text-[#576076] hover:text-[#4770ff] cursor-pointer absolute top-[-68px] right-[13px] px-[10px] bg-white dark:bg-black z-[9] transition-all duration-300"
      onClick={onClick}
    />
  );
};

export default function SliderComponent({ children }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-wrapper mr-[-0.75rem] ml-[-0.75rem]">
      <div className="relative block">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
}
