import { useEffect, useState } from "react";
import Particles from "./ui/particles";
import useThemeStore from "@/store/themeStore";

function Hero() {
  const { theme } = useThemeStore();
  const [text, setText] = useState("");
  const fullText = "Desarrollo sitios y servicios web.";
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlinkInterval);
  }, []);

  return (
    <>
      <div
        className={`relative ${
          theme === "dark" ? "bg-black" : "bg-white"
        } flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg transition-colors duration-500 md:shadow-xl`}
      >
        <span className="pointer-events-none whitespace-pre-wrap text-center text-4xl sm:text-6xl lg:text-8xl font-semibold leading-none text-transparent bg-gradient-to-b from-black to-red-600 bg-clip-text dark:from-white dark:to-slate-900/10">
          {text}
          <span
            className={`inline-block ${
              cursorVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            |
          </span>
        </span>
        <Particles
          className="absolute inset-0"
          quantity={500}
          ease={100}
          color={theme === "dark" ? "#ffffff" : "#000000"}
          refresh
        />
      </div>
    </>
  );
}

export default Hero;
