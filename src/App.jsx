import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Problems from "./components/Problems";
import Criteria from "./components/Criteria";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Prize from "./components/Prize";

import zyro from "./assets/logo/zyro_vector_white.png";
import blackhole_desktop from "./assets/background/blackhole_desktop.mp4";
import stars_desktop from "./assets/background/stars_desktop.mp4";
import coda from "./assets/music/Coda.mp3";
import inception from "./assets/music/Inception.mp3";

function App() {
  const play_toggle = () => {
    const music = document.getElementById("music");
    const music_btn = document.getElementById("music_btn");

    if (music.paused) {
      music_btn.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="musicnote"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path
        d="M12 5v8.55c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07-.46 2.74 1.86 5.08 4.59 4.65 1.96-.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2z"
        fill="#ffffff"
        className="color000000 svgShape"
      ></path>
    </svg>`;
      music.play();
    } else {
      music_btn.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="musicoff"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path
        d="M14 9.61V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-3c-.55 0-1 .45-1 1v3.61l2 2zM5.12 3.56c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l8.29 8.3v.28c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07-.46 2.74 1.86 5.08 4.59 4.65 1.96-.31 3.35-2.11 3.35-4.1v-1.58l5.02 5.02c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.12 3.56z"
        fill="#ffffff"
        className="color000000 svgShape"
      ></path>
    </svg>`;
      music.pause();
    }
  };

  const enter = () => {
    const entry_page = document.getElementById("enter_page");
    const main_page = document.getElementById("main_page");
    const blackhole = document.getElementById("blackhole");
    const starts = document.getElementById("starts");
    const text = document.getElementById("text");
    const music = document.getElementById("music");
    const music_btn = document.getElementById("music_btn");

    if (music.paused) {
      music_btn.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="musicnote"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path
        d="M12 5v8.55c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07-.46 2.74 1.86 5.08 4.59 4.65 1.96-.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2z"
        fill="#ffffff"
        className="color000000 svgShape"
      ></path>
    </svg>`;
      music.play();
    }

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
      <button
        id="music_btn"
        onClick={play_toggle}
        title="Contact Sale"
        className="fixed z-90 top-4 right-4  w-5 h-5 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:text-gray-500 opacity-50 active:opacity-25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="musicoff"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
            d="M14 9.61V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-3c-.55 0-1 .45-1 1v3.61l2 2zM5.12 3.56c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l8.29 8.3v.28c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07-.46 2.74 1.86 5.08 4.59 4.65 1.96-.31 3.35-2.11 3.35-4.1v-1.58l5.02 5.02c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.12 3.56z"
            fill="#ffffff"
            className="color000000 svgShape"
          ></path>
        </svg>
      </button>
      <div
        id="enter_page"
        className="flex flex-col h-screen overflow-hidden justify-center items-center text-white font-body"
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
        <audio id="music" loop>
          <source src={inception} type="audio/mpeg" />
          Your browser does not support the html audio tag.
        </audio>
        <div id="text" className="flex flex-col justify-center items-center">
          <img className="w-96 px-4 filter sm:px-0" src={zyro} alt="ZYRO" />
          <h3 className="m-3 text-lg">Presented By KGEC - Robotics Society</h3>
          <br />
          <br />
          <button
            onClick={enter}
            className="relative inline-flex items-center px-20 sm:px-56 py-1 overflow-hidden text-xl font-semibold text-white border-2 border-black rounded-sm duration-200 hover:skew-y-0 hover:text-black group hover:bg-gray-50 hover:drop-shadow-black-2xl"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

            <span className="relative">Enter</span>
            {/* <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            {">"}
          </span> */}
          </button>
        </div>
      </div>
      <div id="main_page" className="text-center hidden font-body">
        <Navbar />
        <Home />
        <Timeline />
        <Problems />
        <Criteria />
        <Prize />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
