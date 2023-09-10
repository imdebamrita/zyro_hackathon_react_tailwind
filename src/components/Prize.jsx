import React from "react";

export default function Prize() {
  return (
    <div
      id="problems_section"
      className="flex flex-col sm:h-screen h-[calc(100vh)] justify-center items-center text-white"
    >
      <h2 className="text-4xl font-bold my-16 sm:mt-24 mb-8">Prizes</h2>
      <div className="flex flex-col md:flex-row justify-center items-center m-5 lg:mx-64 p-3 backdrop-blur-sm bg-black/50 rounded-xl">
        <p>Coming soon...</p>
        {/* <p className="p-8">
          IT IS AN AMAZING OPPORTUNITY FOR ENTHUSIASTS TO PARTICIPATE AND
          ENHANCE THEIR LEARNINGS.
        </p>
        <img
          src="https://kgec-robotics-society.github.io/hackathon/static/assets/goodies.png"
          alt="Prizes and goodies image"
          className="h-[calc(40vh)] mb-8 md:my-8"
        /> */}
      </div>
    </div>
  );
}
