import React from "react";
import ProblemCard from "./ProblemCard";
import dataJson from "../data.json";

export default function Problems() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-white">
      <h2 className="text-4xl my-16 sm:my-32">Problem Statements</h2>
      <div className="flex flex-col  sm:flex-row">
        {dataJson.problems.map((e) => {
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
