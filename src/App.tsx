import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import useThemeStore from "./store/themeStore";
import Works from "@/components/Works";

function App() {
  const { theme } = useThemeStore();
  return (
    <>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-black text-white" : "bg-white"
        } `}
      >
        <NavBar />
        <Hero />
        <About />
        <Works />
      </div>
    </>
  );
}

export default App;
