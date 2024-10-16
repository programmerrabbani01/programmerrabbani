import React from "react";
import Coffee from "../Coffee/Coffee.tsx";

type Props = {};

export default function Footer({}: Props) {
  return (
    <>
      <div className="my_container">
        <div className="pt-6">
          <div className="text-center">
            <p className="text-sm text-[#1a1f2c] leading-[1.257em] font-normal dark:text-[rgba(240,242,245,.7)]">
              © 2022-2024 All Rights Reserved By
              <span className="text-[#4770ff] font-black ml-1">
                Programmer Rabbani .
              </span>
            </p>
          </div>
        </div>
      </div>
      <Coffee />
    </>
  );
}
