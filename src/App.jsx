import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Problems from "./components/Problems";
import Criteria from "./components/Criteria";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

import zyro from "./assets/logo/zyro_vector_white.png";
import blackhole_desktop from "./assets/background/blackhole_desktop.mp4";
import stars_desktop from "./assets/background/stars_desktop.mp4";

function App() {
  const enter = () => {
    const entry_page = document.getElementById("enter_page");
    const main_page = document.getElementById("main_page");
    const blackhole = document.getElementById("blackhole");
    const starts = document.getElementById("starts");
    const text = document.getElementById("text");

    var blackhole_classes = blackhole.className;
    var starts_classes = starts.className;
    var entry_classes = entry_page.className;
    var main_classes = main_page.className;
    var text_classes = text.className;

    text_classes = text_classes.replace("flex", "hidden");
    text.className = text_classes;

    starts_classes = starts_classes.concat(" zoom_fade_in_lite");
    starts.className = starts_classes;

    blackhole_classes = blackhole_classes.concat(" zoom_fade_in");
    blackhole.className = blackhole_classes;

    setTimeout(() => {
      entry_classes = entry_classes.replace("flex", "hidden");
      main_classes = main_classes.replace("hidden", " main_zoom_in");

      entry_page.className = entry_classes;
      main_page.className = main_classes;
    }, 3500);
  };

  return (
    <>
      <div
        id="enter_page"
        className="flex flex-col h-screen justify-center items-center text-white"
      >
        <video
          id="blackhole"
          autoPlay
          loop
          muted
          className="-z-30 w-screen h-screen object-cover fixed"
        >
          <source id="video_src" src={blackhole_desktop} type="video/mp4" />
        </video>
        <video
          id="starts"
          autoPlay
          loop
          muted
          className="-z-40 w-screen h-screen object-cover fixed"
        >
          <source id="video_src" src={stars_desktop} type="video/mp4" />
        </video>
        <div id="text" className="flex flex-col justify-center items-center">
          <img className="w-96 px-4 sm:px-0" src={zyro} alt="ZYRO" />
          <h3 className="m-3 text-lg">Presented By KGEC - Robotics Society</h3>
          <br />
          <br />
          <button
            onClick={enter}
            className="relative inline-flex items-center px-64 py-1 overflow-hidden text-xl font-semibold text-white border-2 border-black rounded-sm skew-y-6 duration-200 hover:skew-y-0 hover:text-black group hover:bg-gray-50 hover:drop-shadow-black-2xl"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

            <span className="relative">Enter</span>
            {/* <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            {">"}
          </span> */}
          </button>
        </div>
      </div>
      <div id="main_page" className="text-center hidden">
        <Navbar />
        <Home />
        <Timeline />
        <Problems />
        <Criteria />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
