import { Skill } from "@/data/Data.tsx";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div className="">
      <Marquee>
        <div className="mt-4 flex cursor-pointer">
          {Skill.map((skill) => (
            <div
              key={skill.id}
              className="bg-success mr-2 ml-2 dark:bg-gray-100  dark:text-success dark:hover:bg-gray-200 dark:hover:text-success hover:bg-black transition-all py-3 px-6 text-7xl rounded-xl"
            >
              <div className="w-[70px]">{skill.icon}</div>
              <p className="text-xs text-center mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Skills;
