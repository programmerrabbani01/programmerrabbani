import React from "react";
import Card from "../Card/Card.tsx";
import { FaCheck, FaCircle } from "react-icons/fa";
import SliderComponent from "../SliderComponent/SliderComponent.tsx";
import WorkingArea from "./WorkingArea.tsx";
import AwardItems from "./AwardItems.tsx";
import Publications from "./Publications.tsx";
import Link from "next/link";
import Testimonial from "../Testimonial/Testimonial.tsx";

export default function About() {
  return (
    <>
      <Card>
        <div className="p-2 sm:pt-12 sm:px-10 sm:pb-10 md:pt-12 md:px-10 md:pb-10 lg:pt-12 lg:px-10 lg:pb-10 xl:pt-12 xl:px-10 xl:pb-10">
          {/* top info start */}

          <div className="p-2 pt-2 text-justify container mx-auto max-w-5xl text-black dark:text-white">
            {/* top */}
            <div className="flex md:flex-row lg:flex-row xl:flex-row flex-col gap-4 flex-grow justify-between">
              <h1 className="text-[30px] xl:text-[40px] text-[#1a1f2c] dark:text_bg font-semibold mb-6 leading-[1.2em] order-2 md:order-none lg:order-none xl:order-none">
                About Me
              </h1>
              {/* available Button */}
              <div className="text-base xl:text-lg font-medium text-myPrimary bg-myBgLight dark:bg-myBgDark py-2 px-4 w-fit h-full leading-[1.5em] rounded-lg flex items-center gap-2 order-1 md: lg:order-none xl:order-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <FaCircle className="relative inline-flex h-2 w-2" />
                </span>
                Available For Hire
              </div>
            </div>
            {/* top */}
            <div className="sm:text-[15px] text-sm font-semibold xl:leading-[1.333em] leading-[1.5em] text-black dark:text-white text-justify mb-4">
              👨‍💻 MERN Stack Developer | Full Stack Engineer | Problem Solver |
              Tech Enthusiast
            </div>
            <p className="sm:text-base text-sm font-normal xl:leading-[1.333em] leading-[1.5em] text-black dark:text-white text-justify">
              👋
              <span className="font-semibold text-dark dark:text-white">
                Greetings! {"I'm"} G M GOLAM RABBANI, aka Rabbani
              </span>
              , a passionate and results-driven &nbsp;
              <span className="text-dark dark:text-white font-semibold">
                Full-Stack MERN Developer &nbsp;
              </span>
              specializing in robust web apps. with expertise in creating
              feature-rich, scalable web applications. I specialize in building
              dynamic and intuitive user interfaces using &nbsp;
              <span className="font-semibold text-dark dark:text-white">
                React &nbsp;
              </span>
              and &nbsp;
              <span className="font-semibold text-dark dark:text-white">
                Next.js
              </span>
              , backed by robust server-side logic powered by &nbsp;
              <span className="font-semibold text-dark dark:text-white">
                Node.js &nbsp;
              </span>
              and &nbsp;
              <span className="font-semibold text-dark dark:text-white">
                Express.js
              </span>
              , Prisma and managing data with &nbsp;
              <span className="font-semibold text-dark dark:text-white">
                MongoDB &nbsp;
              </span>
              , and &nbsp;
              <span className="font-semibold text-dark dark:text-white">
                MySQL
              </span>
              .
            </p>

            <p className="sm:text-base text-sm text-black dark:text-white mb-6 mt-2">
              "I specialize in optimizing code and design to create seamless
              user experiences. I'm always seeking challenging projects where I
              can apply my expertise, especially with cutting-edge technology.
              With extensive experience across the full development stack, I
              ensure smooth integration between front-end and back-end systems.
              Whether crafting interactive UIs or engineering high-performance
              APIs, I build full-stack applications that efficiently manage data
              flow and user interactions. This results in modern, feature-rich
              web experiences that are both high-performing and user-centric.
              Let's connect and innovate together!"
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black dark:text_bg">
              Technical Expertise:
            </h2>
            <ul className=" list-none mb-6">
              <li className="sm:text-base text-sm text-black dark:text-white mb-2">
                🚀
                <span className="font-semibold text-black dark:text-white">
                  Frontend Expertise:
                </span>
                I excel at transforming designs into responsive, dynamic user
                interfaces using &nbsp;
                <span className="font-semibold text-black dark:text-white">
                  React
                </span>{" "}
                and &nbsp;
                <span className="font-semibold text-black dark:text-white">
                  Next.js
                </span>
                , My focus is on delivering engaging, visually striking
                experiences that are intuitive and user-friendly.
              </li>
              <li className="sm:text-base text-sm text-black dark:text-white mb-2">
                💻{" "}
                <span className="font-semibold text-black dark:text-white">
                  Backend Development:
                </span>{" "}
                I specialize in building scalable, secure RESTful APIs using
                &nbsp;
                <span className="font-semibold text-black dark:text-white">
                  Node.js
                </span>
                ,&nbsp;
                <span className="font-semibold text-black dark:text-white">
                  Express.js
                </span>
                , and &nbsp;
                <span className="font-semibold text-black dark:text-white">
                  Prisma
                </span>{" "}
                My expertise ensures efficient data handling and robust
                server-side logic, providing seamless integration between the
                front-end and back-end.
              </li>
              <li className="sm:text-base text-sm text-black dark:text-white">
                📊{" "}
                <span className="font-semibold text-black dark:text-white">
                  Database Management:{" "}
                </span>
                Proficient in{" "}
                <span className="font-semibold text-black dark:text-white">
                  MongoDB
                </span>
                , and{" "}
                <span className="font-semibold text-black dark:text-white">
                  MySQL
                </span>
                , I design optimized database architectures for fast, reliable
                data storage and retrieval, ensuring performance remains robust
                even under heavy load.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black dark:text_bg">
              Technical Skills
            </h2>
            <ul className=" list-none mb-6">
              <li className="sm:text-base text-sm items-center text-black dark:text-white mb-2">
                <span className="flex items-center gap-1 font-semibold text-black dark:text-white">
                  <FaCheck />
                  Frontend Development:
                </span>
                React.js, Next.js, TypeScript, Redux Toolkit & Toolkit Query,
                Tailwind CSS, Shadcn ui, Bootstrap, API integration
              </li>
              <li className="sm:text-base text-sm text-black dark:text-white mb-2">
                <span className="font-semibold flex items-center gap-1 text-black dark:text-white">
                  <FaCheck />
                  Backend Development:
                </span>{" "}
                Node.js, Express.js, Prisma, MySQL, MongoDB, REST API
              </li>
              <li className="sm:text-base text-sm text-black dark:text-white mb-2">
                <span className="font-semibold flex items-center gap-1 text-black dark:text-white">
                  <FaCheck />
                  Project Management Tools:
                </span>{" "}
                Firebase, Heroku, Netlify, Vercel, Postman, Trello
              </li>
              <li className="sm:text-base text-sm text-black dark:text-white mb-2">
                <span className="font-semibold flex items-center gap-1 text-black dark:text-white">
                  <FaCheck />
                  Version Control:
                </span>{" "}
                Git, GitHub
              </li>
              <li className="sm:text-base text-sm text-black dark:text-white mb-2">
                <span className="font-semibold flex items-center gap-1 text-black dark:text-white">
                  <FaCheck />
                  Design:
                </span>{" "}
                Responsive Web Design, UI
              </li>
              <li className="sm:text-base text-sm text-black dark:text-white">
                <span className="font-semibold flex items-center gap-1 text-black dark:text-white">
                  <FaCheck />
                  Problem Solving:
                </span>{" "}
                Debugging, troubleshooting, performance optimization
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black dark:text_bg">
              What Sets Me Apart
            </h2>
            <p className="sm:text-lg text-sm text-black dark:text-white mb-6">
              {"I’m"} not just a developer. {"I’m"} a problem solver. I excel at
              tackling challenges head-on and discovering innovative solutions
              that enhance both functionality and performance. My commitment to
              continuous learning keeps me current with the latest trends in web
              development, empowering me to integrate cutting-edge technologies
              into my projects.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black dark:text_bg">
              ✉️ {"Let’s"} Work Together
            </h2>
            <p className="sm:text-base text-sm text-black dark:text-white">
              If you're interested in discussing collaboration opportunities,
              web development projects, or simply want to connect, feel free to
              reach out. {"I’m"} always excited to engage with like-minded
              professionals and explore new avenues together!
            </p>

            <p className="sm:text-base text-[12px] text-black dark:text-white mt-6">
              📧
              <span className="font-semibold text-black dark:text-white">
                Email:
              </span>
              programmerrabbani@gmail.com
              <br />
              🌐
              <Link
                href=""
                className="text_bg hover:underline transition-all duration-300 ml-1"
              >
                Linkedin
              </Link>
            </p>
          </div>

          {/* top info end */}

          {/* working with area start */}

          <div className="workingWithArea hidden">
            <h2 className="text-2xl xl:text-3xl font-medium text-[#1a1f2c] dark:text-myBgLight leading-[1.2em] mb-8 ">
              Working With 50+ Brands ✨ Worldwide
            </h2>
            {/* working area main */}
            <WorkingArea />
          </div>
          {/* working with area end */}

          {/*  Trusted Clients Start */}
          <div className="mt-[50px] hidden">
            <h2 className="text-2xl xl:text-[30px] font-medium leading-[1.3em] xl:leading-[1.2em] mb-8 ">
              Trusted By 1200+ Clients
            </h2>
            {/* slider */}
            <SliderComponent>
              <Testimonial />
            </SliderComponent>
          </div>
          {/*  Trusted Clients End */}

          {/* Awards and Recognitions Start */}
          <div className="awardsRecognitions mt-[50px] hidden">
            <h2 className="text-2xl xl:text-3xl font-medium text-[#1a1f2c] dark:text-myBgLight leading-[1.3em] xl:leading-[1.2em] mb-8 ">
              Awards and Recognitions
            </h2>
            {/* Awards and Recognitions Items */}
            <AwardItems />
          </div>
          {/* Awards and Recognitions End */}

          {/* Article and Publications Start */}
          <div className="mt-[50px] hidden">
            <h2 className="text-2xl xl:text-3xl font-medium text-[#1a1f2c] dark:text-myBgLight leading-[1.3em] xl:leading-[1.2em] mb-8 ">
              Article and Publications
            </h2>
            {/* slider */}
            <SliderComponent>
              <Publications />
            </SliderComponent>
          </div>
          {/* Article and Publications End */}
        </div>
      </Card>
    </>
  );
}
