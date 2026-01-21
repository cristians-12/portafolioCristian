import React from "react";
import { Tilt } from "react-tilt";
import { MagicCard } from "@/components/ui/magic-card";
import useThemeStore from "@/store/themeStore";

interface CardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, image, description, link }) => {
  const { theme } = useThemeStore();
  return (
    <Tilt options={{ speed: 2000 }} className="lg:w-[20vw]">
      <a href={link}>
        <MagicCard
          className={`cursor-pointer ${
            theme === "dark" ? "bg-black text-white" : ""
          } flex-col items-center justify-center shadow-2xl p-5 border-none`}
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <img className="object-cover w-full h-[150px]" src={image} alt="" />
          <h2 className="font-extrabold text-red-600 my-2">{title}</h2>
          <p>{description}</p>
        </MagicCard>
      </a>
    </Tilt>
  );
};

export default Card;
