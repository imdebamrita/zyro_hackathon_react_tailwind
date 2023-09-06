import React from "react";
import zyro from "../assets/logo/zyro_vector_white.png";

export default function Navbar() {
  return (
    <nav className="backdrop-blur-sm bg-white/30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 absolute">
        <a href="#" className="flex items-center">
          <img src={zyro} className="h-8 mr-3" alt="Zyro Logo" />
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 duration-150 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#timeline_section"
                className="block py-2 pl-3 pr-4 duration-150 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                href="#problems_section"
                className="block py-2 pl-3 pr-4 duration-150 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Problems
              </a>
            </li>
            <li>
              <a
                href="#criteria_section"
                className="block py-2 pl-3 pr-4 duration-150 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Criteria
              </a>
            </li>
            <li>
              <a
                href="#faq_section"
                className="block py-2 pl-3 pr-4 duration-150 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
