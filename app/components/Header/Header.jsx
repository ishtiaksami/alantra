"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  // State for menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="py-1 relative z-50">
      <div className="holder">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="">
              {/* Hamburger Menu Button */}
              <button
                id="toggle-menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
                className="toggle-menu bg-transparent cursor-pointer w-[42px] flex flex-col items-center gap-[6px]"
              >
                <span
                  className={`block h-[2px] w-[32px] bg-[#1a482b] rounded-full transition-transform duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-[8px]" : ""
                  }`}
                ></span>
                <span
                  className={`block h-[2px] w-[32px] bg-[#1a482b] rounded-full transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-[2px] w-[32px] bg-[#1a482b] rounded-full transition-transform duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                  }`}
                ></span>
              </button>
              {/* Mega Menu */}
              <div
                id="megaMenu"
                className={`absolute left-0 mt-4 w-screen bg-white text-logo shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
                  isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="holder">
                  <div className="grid grid-cols-3 gap-6">
                    <ul>
                      <li>
                        <Link href={""}>About Us</Link>
                      </li>
                      <li>
                        <Link href={""}>What We Do</Link>
                      </li>
                      <li>
                        <Link href={""}>Team</Link>
                      </li>
                      <li>
                        <Link href={""}>Careers</Link>
                      </li>
                      <li>
                        <Link href={""}>Shareholders & Investors</Link>
                      </li>
                      <li>
                        <Link href={""}>News & Insights</Link>
                      </li>
                      <li>
                        <Link href={""}>Global Presence</Link>
                      </li>
                      <li>
                        <Link href={""}>Contact Us</Link>
                      </li>
                    </ul>
                    <Link href={"/"} className="">
                      <div>
                        <Image
                          src="/img/image6.jpg"
                          alt="alantra"
                          className="size-full"
                          width={1191}
                          height={1296}
                        />
                      </div>
                      <h4>Financial Results</h4>
                      <h3>
                        Alantra reports nine-month revenues of €109.5mn (-10.5%)
                        and a net profit of €3.3mn (-24.4%)
                      </h3>
                    </Link>
                    <Link href={"/"} className="">
                      <div>
                        <Image
                          src="/img/image7.jpg"
                          alt="alantra"
                          className="size-full"
                          width={1191}
                          height={1296}
                        />
                      </div>
                      <h4>Financial Results</h4>
                      <h3>
                        Alantra reports nine-month revenues of €109.5mn (-10.5%)
                        and a net profit of €3.3mn (-24.4%)
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-32 text-logo font-normal tracking-widest uppercase">
              <Link href="/">Alantra</Link>
            </h1>
          </div>
          <a href="#" className="searchBtn" id="openSearch">
            <svg
              width="26"
              height="26"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0381 16.5L12.4965 12.9521M14.4591 8.21053C14.4591 9.99027 13.7521 11.6971 12.4937 12.9556C11.2352 14.2141 9.52835 14.9211 7.74861 14.9211C5.96887 14.9211 4.26202 14.2141 3.00355 12.9556C1.74509 11.6971 1.03809 9.99027 1.03809 8.21053C1.03809 6.43078 1.74509 4.72394 3.00355 3.46547C4.26202 2.207 5.96887 1.5 7.74861 1.5C9.52835 1.5 11.2352 2.207 12.4937 3.46547C13.7521 4.72394 14.4591 6.43078 14.4591 8.21053V8.21053Z"
                stroke="#1a482b"
                strokeWidth="1.57895"
                strokeLinecap="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
