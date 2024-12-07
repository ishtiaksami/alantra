"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  // State for menu visibility
  return (
    <>
      <footer className="py-6">
        <div className="holder xl:flex justify-between items-end">
          <div className="[&>p]:uppercase [&>p]:text-content [&>p]:text-sm [&>p]:tracking-wider [&>p]:pt-4">
            <h1 className="text-2xl text-greenlight font-light tracking-widest uppercase opacity-60">
              <Link href="/">Alantra</Link>
            </h1>
            <span className="!text-sm font-light">
              PARA ACCEDER A ACCIONISTAS E INVERSORES{" "}
              <Link href={""} className="text-greenlight underline">
                PINCHE AQUI
              </Link>
            </span>
            <p>© Copyright 2024</p>
          </div>

          <ul className="font-FS xl:flex items-center pt-5 xl:pt-0">
            <li>
              <Link
                href={""}
                className="hover:text-greenlight duration-300 transition-all uppercase text-content text-sm tracking-wider relative px-1 before:bg-[#d0d2d4] before:h-[10px] before:absolute before:right-0 before:-mt-[5px] before:top-2/4 before:w-px "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="hover:text-greenlight duration-300 transition-all uppercase text-content text-sm tracking-wider relative px-1 before:bg-[#d0d2d4] before:h-[10px] before:absolute before:right-0 before:-mt-[5px] before:top-2/4 before:w-px "
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="hover:text-greenlight duration-300 transition-all uppercase text-content text-sm tracking-wider relative px-1 before:bg-[#d0d2d4] before:h-[10px] before:absolute before:right-0 before:-mt-[5px] before:top-2/4 before:w-px "
              >
                Data Protection
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="hover:text-greenlight duration-300 transition-all uppercase text-content text-sm tracking-wider relative px-1 before:bg-[#d0d2d4] before:h-[10px] before:absolute before:right-0 before:-mt-[5px] before:top-2/4 before:w-px "
              >
                Cybersecurity
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="hover:text-greenlight duration-300 transition-all uppercase text-content text-sm tracking-wider relative px-1 before:bg-[#d0d2d4] before:h-[10px] before:absolute before:right-0 before:-mt-[5px] before:top-2/4 before:w-px "
              >
                Cookies Decl
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="hover:text-greenlight duration-300 transition-all uppercase text-content text-sm tracking-wider relative px-1 before:bg-[#d0d2d4] before:h-[10px] before:absolute before:right-0 before:-mt-[5px] before:top-2/4 before:w-px "
              >
                Config cookies
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="hover:text-greenlight duration-300 transition-all uppercase text-content text-sm tracking-wider relative px-1 before:bg-[#d0d2d4] before:h-[10px] before:absolute before:right-0 before:-mt-[5px] before:top-2/4 before:w-px "
              >
                Whistleblowing
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
