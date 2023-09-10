import React from "react";
import data from "../data.json";

export default function Faq() {
  return (
    <div
      id="faq_section"
      className="flex flex-col h-[calc(100svh)] justify-center items-center text-white"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl my-16 sm:my-32">
            Frequently Asked Questions
          </h2>
        </div> */}
        <h2 className="text-4xl font-bold my-16 sm:mt-24 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <ul className="max-w-2xl mx-auto mt-20 divide-y backdrop-blur-sm bg-black/50 shadow shadow-blue-600 rounded-xl">
            {data.faqs.map((faq) => {
              if (!faq.contact) {
                return (
                  <li key={faq.id}>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer shadow-blue-600">
                        <span className="text-lg">{faq.question}</span>
                        <svg
                          className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          ></path>
                        </svg>
                      </summary>

                      <article className="px-4 pb-4">
                        <p>{faq.answer}</p>
                      </article>
                    </details>
                  </li>
                );
              }
              return (
                <li key={faq.id}>
                  <details className="group">
                    <summary className="flex items-center justify-between gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer shadow-blue-600">
                      <span className="text-lg">{faq.question}</span>
                      <svg
                        className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </summary>

                    <article className="px-4 pb-4">
                      <p>{faq.answer}</p>
                      <a href="tel:+919851021801" className="">
                        M: <span className="text-blue-600">+91 9851021801</span>
                      </a>
                      <br />
                      <a href="tel:+919749166798">
                        M: <span className="text-blue-600">+91 9749166798</span>
                      </a>
                      <br />
                      <a href="mailto: kgecroboticssociety@gmail.com">
                        Email:{" "}
                        <span className="text-blue-600">
                          kgecroboticssociety@gmail.com
                        </span>
                      </a>
                    </article>
                  </details>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
