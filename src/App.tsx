import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import useThemeStore from "./store/themeStore";
import Works from "@/components/Works";
import Technologies from "./components/Technologies";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

function App() {
  const { theme } = useThemeStore();
  return (
    <>
      <div
        className={`min-h-screen ${theme === "dark" ? "bg-[#08101c] text-white" : "bg-white"
          } `}
      >
        <NavBar />
        <Hero />
        <main className="lg:px-[15rem] px-[3rem]">
          <About />
          <Technologies />

        </main>

        <div>
          <Works />
        </div>

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
