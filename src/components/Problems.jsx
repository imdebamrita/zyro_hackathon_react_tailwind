import React from "react";
import ProblemCard from "./ProblemCard";
import data from "../data.json";

export default function Problems() {
  return (
    <div
      id="problems_section"
      className="flex flex-col sm:h-screen h-[calc(180vh)] justify-center items-center text-white"
    >
      <h2 className="text-4xl font-bold my-16 sm:mt-24 mb-8">
        Problem Statements
      </h2>
      <div className="flex flex-col  sm:flex-row">
        {data.problems.map((e) => {
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
