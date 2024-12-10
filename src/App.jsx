import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div>
        <div className=" px-10 lg:px-28 mx-auto text-white bg-zinc-900 overflow-hidden lg:overflow-hidden"> 
          <Navbar />
          <Hero/>
          <About/>
          <Technologies />
          <Experience />
          <Project />
          <Contact />
      </div>
    </div>
  );
};

export default App;
