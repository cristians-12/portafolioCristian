import useThemeStore from "@/store/themeStore";
import { FaMoon, FaSun } from "react-icons/fa";
function NavBar() {
  const { theme, setTheme } = useThemeStore();
  return (
    <nav
      className={`flex fixed w-full py-3 bg-[rgba(0,0,0,0.4)] ${
        theme === "dark" ? "text-white" : "text-black"
      } text-white z-30 justify-between items-center px-10`}
    >
      <figure className="cursor-pointer font-bold text-[2rem]">C-12 DEV</figure>

      <div>
        {theme === "light" ? (
          <div
            onClick={() => setTheme("dark")}
            className="bg-gray-800 rounded-full p-2 cursor-pointer"
          >
            <FaSun size={30} color="yellow" />
          </div>
        ) : (
          <div
            onClick={() => setTheme("light")}
            className="bg-gray-800 rounded-full p-2 cursor-pointer"
          >
            <FaMoon color="yellow" size={30} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
