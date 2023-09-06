import React from "react";

import zyro from "../assets/logo/zyro_vector_white.png";
import milkyway_desktop from "../assets/background/milkyway_desktop.mp4";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-white">
      <video
        autoPlay
        loop
        muted
        className="-z-50 w-screen h-screen object-cover fixed"
      >
        <source src={milkyway_desktop} type="video/mp4" />
      </video>
      {/* <h1 className="text-8xl -top-16 m-2">ZYRO</h1> */}
      <img className="w-96 px-4 sm:px-0 filter" src={zyro} alt="ZYRO" />
      <br />
      <br />
      <h3 className="m-3 text-xl">Presented By KGEC - Robotics Society</h3>
      <button className="backdrop-blur-sm bg-black/50  rounded-md p-3 m-3 hover:bg-black/80 hover:text-blue-300 hover:drop-shadow-white-2xl">
        <a href="#">Register Now</a>
      </button>
      <h3 className="m-3 text-xl">Sponsors</h3>
      <div className="flex justify-center items-center space-x-4">
        <img
          className="w-24"
          src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png"
          alt=""
        />
        <img
          className="w-24"
          src="https://upload.wikimedia.org/wikipedia/donate/thumb/f/fd/Amazon-logo-white.svg/2560px-Amazon-logo-white.svg.png"
          alt=""
        />
      </div>
    </div>
  );
}
