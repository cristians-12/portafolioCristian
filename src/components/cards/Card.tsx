import React from "react";
import { Tilt } from "react-tilt";
import { MagicCard } from "@/components/ui/magic-card";
import useThemeStore from "@/store/themeStore";

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  const { theme } = useThemeStore();
  return (
    <Tilt options={{ speed: 2000 }} className="w-[20vw]">
      <MagicCard
        className={`cursor-pointer ${
          theme === "dark" ? "bg-black text-white" : ""
        } flex-col items-center justify-center shadow-2xl p-5 border-none`}
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <img src={image} alt="" />
        <h2 className="text-transparent font-extrabold text-red-500 bg-clip-text">
          {title}
        </h2>
        <p>{description}</p>
      </MagicCard>
    </Tilt>
  );
};

export default Card;
