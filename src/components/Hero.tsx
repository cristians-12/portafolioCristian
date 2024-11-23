import { useEffect } from "react";
import Particles from "./ui/particles";
import { useTheme } from "next-themes";
import useThemeStore from "@/store/themeStore";

function Hero() {
  const { theme } = useThemeStore();

  useEffect(() => {}, [theme]);
  return (
    <>
      <div
        className={`relative ${
          theme === "dark" ? "bg-slate-900" : null
        } flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl`}
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Desarrollo sitios web
        </span>
        <Particles
          className="absolute inset-0"
          quantity={200}
          ease={80}
          color={theme === "dark" ? "#ffffff" : "#000000"}
          refresh
        />
      </div>
    </>
  );
}

export default Hero;
