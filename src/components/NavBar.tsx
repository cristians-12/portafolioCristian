import useThemeStore from "@/store/themeStore";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
function NavBar() {
  const { theme, setTheme } = useThemeStore();
  return (
    <nav
      className={`flex sticky top-0 w-full py-3 bg-[rgba(0,0,0,0.4)] ${
        theme === "dark" ? "text-white" : "text-black"
      } text-white z-30 justify-between items-center lg:px-10 px-5`}
    >
      <figure className="cursor-pointer font-extrabold text-[2rem] hover:text-red-500 text-transparent bg-gradient-to-b from-transparent via-red-500 to-red-600 bg-clip-text">
        {"<C-12 DEV/>"}
      </figure>

      <div className="flex items-center gap-10 text-lg font-medium">
        <div className="cursor-pointer hidden lg:block">Sobre mi</div>
        {theme === "light" ? (
          <div
            onClick={() => setTheme("dark")}
            className="bg-gray-800 hover:bg-gray-600 rounded-full p-2 cursor-pointer"
          >
            <FaMoon color="red" size={30} />
          </div>
        ) : (
          <div
            onClick={() => setTheme("light")}
            className="bg-gray-800 hover:bg-gray-600 rounded-full p-2 cursor-pointer"
          >
            <MdOutlineLightMode size={30} color="red" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
