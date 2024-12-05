"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="py-10">
        <div className="holder">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div className="relative w-full before-shadow">
              <Image
                src="/img/featured-UK-1.jpg"
                alt="alantra"
                className="size-full"
                width={1191}
                height={1296}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-light">
                We are nothing if not our people and their talent
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed">
                We are committed to providing opportunities to our professionals
                to realize their full potential within Alantra. We are looking
                for people who want to live by our long-term endeavor to build a
                financial services business which lives beyond their personal
                ambitions, well into the future. And we want people who make
                things happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <a href="https://www.alantra.com/careers/" target="_blank" rel="noopener noreferrer" className="read-more-btn" aria-label="Read more about Alantra careers">
        Read More 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.76 8.25" aria-hidden="true" focusable="false">
          <defs>
            <style>
              {`.arc-1 { fill: none; stroke: #515962; stroke-miterlimit: 10; stroke-width: 0.25px; }`}
            </style>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <line className="arc-1" y1="4.12" x2="12.14" y2="4.12"></line>
              <polyline className="arc-1" points="10.93 2.92 12.14 4.13 10.93 5.33"></polyline>
              <path className="arc-1 circle-path" d="M7.81,1.3A4,4,0,1,1,7.81,7"></path>
            </g>
          </g>
        </svg>
      </a> */}
    </>
  );
}