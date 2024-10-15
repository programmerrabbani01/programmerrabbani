import {
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaNpm,
  FaSass,
  FaShopify,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
//skills icons
import { IoLogoJavascript } from "react-icons/io";
import { SiAdobexd, SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode, FaReact } from "react-icons/fa6";


import {
  IconBrandAppleArcade,
  IconDeviceMobileVibration,
  IconMessage,
  IconPencilHeart,
  IconSmartHome,
  IconUserCircle,
} from "@tabler/icons-react";

export const navLinks = [
  {
    id: 1,
    label: "Home",
    url: "/",
    icon: <IconSmartHome stroke={2} className="mr-[4px] icon" />,
  },
  {
    id: 2,
    label: "About",
    url: "/about",
    icon: <IconUserCircle stroke={2} className="mr-[4px] icon" />,
  },
  {
    id: 3,
    label: "Expertise",
    url: "/expertise",
    icon: <IconDeviceMobileVibration stroke={2} className="mr-[4px] icon" />,
  },
  {
    id: 4,
    label: "Portfolio",
    url: "/portfolio",
    icon: <IconBrandAppleArcade stroke={2} className="mr-[4px] icon" />,
  },
  {
    id: 5,
    label: "Blog",
    url: "/blog",
    icon: <IconPencilHeart stroke={2} className="mr-[4px] icon" />,
  },
  {
    id: 6,
    label: "Contacts",
    url: "/contact",
    icon: <IconMessage stroke={2} className="mr-[4px] icon" />,
  },
];

export const Skill = [
  {
    id: 1,
    icon: <FaNode />,
    label: "Node JS",
  },
  {
    id: 2,
    icon: <IoLogoJavascript />,
    label: "Javascript",
  },
  {
    id: 3,
    icon: <SiExpress />,
    label: "Express",
  },
  {
    id: 4,
    icon: <BiLogoMongodb />,
    label: "Mongodb",
  },
  {
    id: 5,
    icon: <FaReact />,
    label: "React",
  },
  {
    id: 6,
    icon: <RiNextjsFill />,
    label: "Next JS",
  },
  {
    id: 7,
    icon: <TbBrandRedux />,
    label: "Redux Toolkit",
  },
  {
    id: 8,
    icon: <FaFigma />,
    label: "Figma To HTML",
  },
  {
    id: 9,
    icon: <SiAdobexd />,
    label: "XD To HTML",
  },
  {
    id: 10,
    icon: <FaSass />,
    label: "Sass",
  },
  {
    id: 11,
    icon: <RiTailwindCssFill />,
    label: "Tailwind Css",
  },
  {
    id: 12,
    icon: <FaBootstrap />,
    label: "Bootstrap",
  },
  {
    id: 13,
    icon: <FaGithub />,
    label: "Github",
  },
  {
    id: 14,
    icon: <FaNpm />,
    label: "NPM",
  },
];
