import { FaReact, FaNodeJs, FaLaravel, FaDocker } from "react-icons/fa";
import { SiNestjs, SiNextdotjs, SiTypescript } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";

type Technology = {
  name: string;
  icon: React.ReactNode;
};

export const technologies: Technology[] = [
  {
    name: "React.js",
    icon: <FaReact size={40} color="red" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={40} color="red" />,
  },
  {
    name: "Nest.js",
    icon: <SiNestjs size={40} color="red" />,
  },
  {
    name: "Laravel 10/11",
    icon: <FaLaravel size={40} color="red" />,
  },
  {
    name: "Vue3.js",
    icon: <IoLogoVue size={40} color="red" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={40} color="red" />,
  },
  {
    name: "Docker",
    icon: <FaDocker size={40} color="red" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript size={40} color="red" />,
  },
];
