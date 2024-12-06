"use client";
import React from "react";
import Link from "next/link";

export default function NewsGrid() {
  return (
    <>
      <section className="py-8 md:py-16">
        <div className="holder">
          <h2 className="text-4xl font-light leading-[130%] text-center pb-8">
            News & Insights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link
              href={"/"}
              className="space-y-4 border-[1px] border-solid border-[#e8e8e8] text-[#515962] hover:shadow-md transition-all duration-300"
            >
              <div className=" bg-[#fff] pt-9 px-9 pb-[4.375rem]">
                <p className="text-sm uppercase font-light pb-2">
                  Financial Results
                </p>
                <span className="text-[#515962]">24 October 2024</span>
                <h3 className="text-xl font-light tracking-wide text-[#515962] pt-5">
                  Alantra reports nine-month revenues of €109.5mn (-10.5%) and a
                  net profit of €3.3mn (-24.4%)
                </h3>
              </div>

              <div className="read-more-btn flex items-center gap-5 px-9 pb-9">
                <span>Read More</span>
                <svg
                  width={50}
                  height={50}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14.76 8.25"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <style>
                      {`.arc-1 { fill: none; stroke: #515962; stroke-miterlimit: 10; stroke-width: 0.25px; }`}
                    </style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <line
                        className="arc-1"
                        y1="4.12"
                        x2="12.14"
                        y2="4.12"
                      ></line>
                      <polyline
                        className="arc-1"
                        points="10.93 2.92 12.14 4.13 10.93 5.33"
                      ></polyline>
                      <path
                        className="arc-1 circle-path"
                        d="M7.81,1.3A4,4,0,1,1,7.81,7"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </Link>

            <Link
              href={"/"}
              className="space-y-4 border-[1px] border-solid border-[#e8e8e8] text-[#515962] hover:shadow-md transition-all duration-300"
            >
              <div className=" bg-[#fff] pt-9 px-9 pb-[4.375rem]">
                <p className="text-sm uppercase font-light pb-2">
                  Financial Results
                </p>
                <span className="text-[#515962]">24 October 2024</span>
                <h3 className="text-xl font-light tracking-wide text-[#515962] pt-5">
                  Alantra reports nine-month revenues of €109.5mn (-10.5%) and a
                  net profit of €3.3mn (-24.4%)
                </h3>
              </div>

              <div className="read-more-btn flex items-center gap-5 px-9 pb-9">
                <span>Read More</span>
                <svg
                  width={50}
                  height={50}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14.76 8.25"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <style>
                      {`.arc-1 { fill: none; stroke: #515962; stroke-miterlimit: 10; stroke-width: 0.25px; }`}
                    </style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <line
                        className="arc-1"
                        y1="4.12"
                        x2="12.14"
                        y2="4.12"
                      ></line>
                      <polyline
                        className="arc-1"
                        points="10.93 2.92 12.14 4.13 10.93 5.33"
                      ></polyline>
                      <path
                        className="arc-1 circle-path"
                        d="M7.81,1.3A4,4,0,1,1,7.81,7"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </Link>

            <Link
              href={"/"}
              className="space-y-4 border-[1px] border-solid border-[#e8e8e8] text-[#515962] hover:shadow-md transition-all duration-300"
            >
              <div className=" bg-[#fff] pt-9 px-9 pb-[4.375rem]">
                <p className="text-sm uppercase font-light pb-2">
                  Financial Results
                </p>
                <span className="text-[#515962]">24 October 2024</span>
                <h3 className="text-xl font-light tracking-wide text-[#515962] pt-5">
                  Alantra reports nine-month revenues of €109.5mn (-10.5%) and a
                  net profit of €3.3mn (-24.4%)
                </h3>
              </div>

              <div className="read-more-btn flex items-center gap-5 px-9 pb-9">
                <span>Read More</span>
                <svg
                  width={50}
                  height={50}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14.76 8.25"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <style>
                      {`.arc-1 { fill: none; stroke: #515962; stroke-miterlimit: 10; stroke-width: 0.25px; }`}
                    </style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <line
                        className="arc-1"
                        y1="4.12"
                        x2="12.14"
                        y2="4.12"
                      ></line>
                      <polyline
                        className="arc-1"
                        points="10.93 2.92 12.14 4.13 10.93 5.33"
                      ></polyline>
                      <path
                        className="arc-1 circle-path"
                        d="M7.81,1.3A4,4,0,1,1,7.81,7"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
