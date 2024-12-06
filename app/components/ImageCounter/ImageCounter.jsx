"use client";
import Image from "next/image";
import Link from "next/link";

export default function ImageCounter() {
  return (
    <>
      <section className="py-8 md:py-16">
        <div className="holder">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div className="relative w-full before-shadow">
              <Image
                src="/img/Lobby.png"
                alt="alantra"
                className="size-full"
                width={1191}
                height={1296}
              />
            </div>
            <div className="space-y-10">
              <h2 className="text-4xl font-FS font-light">
                Independence adds value
              </h2>
              <ul className="grid grid-cols-3 gap-[25px 0]">
                <li className="flex flex-col justify-between [&>p]:text-base [&>p]:leading-[130%] [&>p]:tracking-wide space-y-2">
                  <p>Investment Banking</p>
                  <h3 className="text-4xl text-greenlight font-light">c.750</h3>
                  <p>deals in the last four years</p>
                </li>
                <li className="flex flex-col justify-between [&>p]:text-base [&>p]:leading-[130%] [&>p]:tracking-wide space-y-2">
                  <p>
                    Alternative
                    <br />
                    Asset Management
                  </p>
                  <h3 className="text-4xl text-greenlight font-light">
                    €16.8bn+
                  </h3>
                  <p>in AuM</p>
                </li>
                <li className="flex flex-col justify-between [&>p]:text-base [&>p]:leading-[130%] [&>p]:tracking-wide space-y-2">
                  <p>Financial Institutions Group</p>
                  <h3 className="text-4xl text-greenlight font-light">320+</h3>
                  <p>deals since 2019</p>
                </li>
              </ul>

              <Link
                href={"/"}
                className="read-more-btn flex items-center gap-5"
              >
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
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
