import React from "react";
import Problems_list from "../data";
import ProblemCard from "./ProblemCard";
import iot from "../assets/logo/iot.png";
import aiml from "../assets/logo/ai_ml.png";
import mech from "../assets/logo/mechatronics.png";
import milkyway_desktop from "../assets/background/milkyway_desktop.mp4";

export default function Problems() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-white">
      <video
        autoPlay
        loop
        muted
        className="-z-40 w-screen h-screen object-cover fixed"
      >
        <source src={milkyway_desktop} type="video/mp4" />
      </video>
      <h2 className="text-4xl my-16 sm:my-32">Problem Statements</h2>
      <div className="flex flex-col  sm:flex-row">
        {Problems_list.map((e) => {
          return (
            <ProblemCard
              key={e.id}
              logo={e.logo}
              title={e.title}
              description={e.description}
              link={e.link}
              alt={e.alt}
            />
          );
        })}
      </div>
    </div>
  );
}
