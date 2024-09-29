import React from "react";
import Card from "../Card/Card.tsx";
import Skills from "../Skills/Skills.tsx";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import Coverflow from "../Coverflow/Coverflow.tsx";

type Props = {};

export default function AboutBottom({}: Props) {
  return (
    <>
      {/* skills */}
      <Card>
        <div className="mt-6">
          <div className="p-6">
            <div>
              <h2 className="text-2xl md:text-3xl text-black dark:text-blue-500 font-semibold ">
                My Skills
              </h2>
              <Skills />
            </div>
          </div>
        </div>
      </Card>
      {/* skills */}

      {/* my education */}

      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 mb-5 ">
          <Card>
            <div className="p-6">
              <div>
                <h2 className="text-2xl md:text-3xl mb-7 text-black dark:text-blue-500 font-semibold ">
                  My Education
                </h2>
                <div className="flex gap-7 items-center pl-3">
                  <div>
                    <FaBook className="text-gray-400 dark:text-blue-500  text-4xl" />
                  </div>
                  <div>
                    <p className="text-base dark:text-darkLight text-gray-400">
                      2012 - Present
                    </p>
                    <p className="text-lg sm:text-2xl dark:text-blue-500 capitalize mb-2 mt-2">
                      Secondary school certificate (S.S.C)
                    </p>
                    <p className="text-base capitalize text-gray-400">
                      Patuakhali GOVT. Jubilee High School, Patuakhali.
                    </p>
                  </div>
                </div>
                <hr className=" text-success my-5" />
                <div className="flex gap-7 items-center pl-3">
                  <div>
                    <FaBook className="text-gray-400 dark:text-blue-500  text-4xl" />
                  </div>
                  <div>
                    <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                      2016 - 2020
                    </p>
                    <p className="text-lg sm:text-2xl dark:text-blue-500 capitalize mb-2 mt-2">
                      BBA Honours in Accounting
                    </p>
                    <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                      Patuakhali GOVT. College, Patuakhali.
                    </p>
                  </div>
                </div>
                <hr className=" text-success my-5" />
                <div className="flex gap-7 items-center pl-3">
                  <div>
                    <FaBook className="text-gray-400 dark:text-blue-500  text-4xl" />
                  </div>
                  <div>
                    <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                      2020 - 2021
                    </p>
                    <p className="text-lg sm:text-2xl dark:text-blue-500 capitalize mb-2 mt-2">
                      Complete Web Development course
                    </p>
                    <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                      Sorobindu, Dhaka.
                    </p>
                  </div>
                </div>
                <hr className=" text-success my-5" />
                <div className="flex gap-7 items-center pl-3">
                  <div>
                    <FaBook className="text-gray-400 dark:text-blue-500  text-4xl" />
                  </div>
                  <div>
                    <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                      2021 - 2022
                    </p>
                    <p className="text-lg sm:text-2xl dark:text-blue-500 capitalize mb-2 mt-2">
                      front-end web developer course
                    </p>
                    <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                      Sorobindu, Dhaka.
                    </p>
                  </div>
                </div>

                <hr className=" text-success my-5" />
                <div className="flex gap-7 items-center pl-3">
                  <div>
                    <FaBook className="text-gray-400 dark:text-blue-500  text-4xl" />
                  </div>
                  <div>
                    <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                      2022 - 2023
                    </p>
                    <p className="text-lg sm:text-2xl dark:text-blue-500  capitalize mb-2 mt-2">
                      MERN full stack web app development course
                    </p>
                    <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                      sorobindu, Dhaka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div>
                <h2 className="text-2xl md:text-3xl mb-7 text-black dark:text-blue-500  font-semibold ">
                  My Experience
                </h2>
                <div className="">
                  <div className="flex gap-7 items-center pl-3">
                    <div>
                      <BsPersonWorkspace className="text-gray-400 dark:text-blue-500  text-4xl" />
                    </div>
                    <div>
                      <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                        2020 - 2021
                      </p>
                      <p className="text-lg sm:text-2xl dark:text-blue-500  capitalize mb-2 mt-2">
                        front-end web developer
                      </p>
                      <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                        BitwiseCode Technologies, Dhaka.
                      </p>
                    </div>
                  </div>
                  <hr className=" text-success my-5" />
                  <div className="flex gap-7 items-center pl-3">
                    <div>
                      <BsPersonWorkspace className="text-gray-400 dark:text-blue-500  text-4xl" />
                    </div>
                    <div>
                      <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                        2021 - 2022
                      </p>
                      <p className="text-lg sm:text-2xl dark:text-blue-500  capitalize mb-2 mt-2">
                        front-end Design and shopify developer
                      </p>
                      <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                        scraft.studio, indian. (Remote)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* my education */}

      {/* work & project */}
      <Card>
        <div className="mt-6">
          <div className="p-6">
            <div>
              <h2 className="text-2xl md:text-3xl mb-7 text-center text-black dark:text-blue-500  font-semibold ">
                Works & Projects
              </h2>
              <Coverflow />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
