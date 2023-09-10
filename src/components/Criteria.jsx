import React from "react";
import data from "../data.json";

export default function Criteria() {
  return (
    <div
      id="criteria_section"
      className="flex flex-col h-[calc(130vh)] sm:h-[calc(100vh)] justify-center items-center  text-white"
    >
      <h2 className="text-4xl font-bold my-16 sm:mt-24 mb-8">Criteria</h2>

      <div className="m-5 lg:mx-64 p-3 backdrop-blur-sm bg-black/50 rounded-xl">
        <div className="my-6 ">
          <h4 className="font-semibold">Team Size</h4>
          <h4>{data.criteria.team_size}</h4>
        </div>
        <div className="my-6">
          <h4 className="font-semibold">Who Can Participate</h4>
          <h4>{data.criteria.who_can_participate}</h4>
        </div>
        <div className="my-6">
          <h4 className="font-semibold ">About The Hackathon</h4>
          <h4>{data.criteria.about}</h4>
        </div>

        <div className="my-6">
          <h4 className="font-semibold ">Rules</h4>

          <ul className="list-none list-inside text-left">
            {data.criteria.rules.map((rule) => {
              return (
                <li key={rule.id}>
                  <span className="font-semibold text-blue-600">{">>"}</span>
                  {rule.rule}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
