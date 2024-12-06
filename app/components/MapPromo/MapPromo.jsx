"use client";
import Link from "next/link";

export default function MapPromo() {
  return (
    <>
      <section
        className="py-8 md:py-16 mt-8 md:mt-16 bg-no-repeat bg-center bg-cover border border-solid border-border"
        style={{ backgroundImage: "url(/img/mapimg.jpg)" }}
      >
        <div className="holder !max-w-[980px] text-center space-y-12">
          <h2>Global Presence</h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <h3>18</h3>
              <p>countries</p>
            </div>
            <div>
              <h3>20</h3>
              <p>offices</p>
            </div>
            <div>
              <h3>100+</h3>
              <p>partners around the world</p>
            </div>
          </div>

          <Link href={"/"} className="btn gap-5">
            <span className="z-50">Find Out More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="10"
              viewBox="0 0 41 10"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.0946 4.47949L0 4.47949V5.52116L39.0951 5.52116L37.1992 7.56283L37.9625 8.27163L41 5.00056L37.9625 1.72949L37.1992 2.4383L39.0946 4.47949Z"
                fill="#515962"
              ></path>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
