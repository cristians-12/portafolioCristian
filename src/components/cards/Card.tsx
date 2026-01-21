import React from "react";
import useThemeStore from "@/store/themeStore";
import { useHorizontalDrag } from "@/hooks/useHorizontalDrag";

interface CardProps {
  title: string;
  image: string;
  description: string;
  link: string;
  technologies: string[];
}

const Card: React.FC<CardProps> = ({ title, image, description, link, technologies }) => {
  const { theme } = useThemeStore();
  const scrollRef = useHorizontalDrag();
  return (
    <div
      className="lg:w-[20vw] rounded-2xl hover:scale-110
          bg-white/10
          border-white/20
          border

          hover:bg-white/30
          hover:shadow-2xl"
    >

      <div
        className={`cursor-pointer lg:h-[45vh] rounded-2xl ${theme === "dark" ? "bg-none text-white" : ""
          } flex-col items-center justify-center shadow-2xl p-5 border-none`}
      >
        <a href={link}>
          <img className="object-cover w-full h-[150px]" src={image} alt="" />
          <h2 className="font-extrabold text-red-600 my-2">{title}</h2>
          <div
            className="
    h-[100px]
    overflow-y-auto
    no-scrollbar
    text-sm
    opacity-90
    leading-relaxed
  "
          >
            {description}
          </div>
        </a>
        {/* ============================ SCROLL =========================== */}
        <div ref={scrollRef} className="mt-3 no-scrollbar overflow-x-auto w-[90%] cursor-grab active:cursor-grabbing">
          <div className="flex gap-3">
            {technologies.map((tech) => (
              <p
                key={tech}
                className="shrink-0 snap-start text-gray-400 border border-gray px-3 py-1 rounded-full whitespace-nowrap"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>

    </div >
  );
};

export default Card;
