"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
    </>
  );
}
