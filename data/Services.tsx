import { FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import {
  FaBug,
  FaCode,
  FaGitAlt,
  FaGlobe,
  FaLaptopCode,
  FaReact,
  FaServer,
  FaShopify,
} from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";

export const services = [
  {
    name: "Clean Code",
    icon: <FaCode />,
    description:
      "I write maintainable, well-documented, and optimized code that ensures your project is scalable and easy to understand by future developers.",
  },
  {
    name: "Responsive Design",
    icon: <FaMobileAlt />,
    description:
      "I ensure your website looks and works beautifully on all devices, from desktops to smartphones, delivering a seamless user experience.",
  },
  {
    name: "Debugging",
    icon: <FaBug />,
    description:
      "I quickly identify and fix issues in your application, enhancing performance, stability, and security.",
  },
  {
    name: "Front-End Design",
    icon: <FaPaintBrush />,
    description:
      "I create engaging and intuitive user interfaces using modern tools and frameworks, ensuring your website is visually appealing and functional.",
  },
  {
    name: "Back-End Development",
    icon: <FaServer />,
    description:
      "I build robust and secure server-side solutions, ensuring your application runs efficiently and integrates smoothly with databases and external services.",
  },
  {
    name: "Full Stack Web Development",
    icon: <FaLaptopCode />,
    description:
      "From concept to deployment, I provide complete web solutions, handling both front-end and back-end aspects of development.",
  },
  {
    name: "React Development",
    icon: <FaReact />,
    description:
      "I specialize in building fast, dynamic, and scalable applications using React.js, ensuring a rich user experience and maintainable codebase.",
  },
  {
    name: "Next.js Development",
    icon: <RiNextjsFill />,
    description:
      "I develop server-side rendered applications with Next.js for faster page loads, SEO optimization, and improved performance.",
  },
  {
    name: "API Dev & Integration",
    icon: <FaGlobe />,
    description:
      "I design and integrate secure, scalable APIs to connect your web applications with external services, enhancing functionality and efficiency.",
  },

  {
    name: "Version Control with Git",
    icon: <FaGitAlt />,
    description:
      "I ensure smooth team collaboration and version tracking using Git, setting up efficient workflows for managing code changes and preventing conflicts.",
  },

  {
    name: "NPM Package Creation",
    icon: <FiPackage />,
    description:
      "I develop and publish custom NPM packages, enabling you to reuse code across multiple projects and share functionalities with the community.",
  },
];
