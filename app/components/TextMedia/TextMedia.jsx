"use client";
import React from 'react'
import Image from "next/image";
import Btn from '../Btn/Btn';

export default function TextMedia({ image, title, content }) {
  return (
    <>
      <section className="py-8 md:py-16">
        <div className="holder">
          <div className="grid lg:grid-cols-2 items-center">
            {image && (
              <div className="relative w-full before-shadow">
                <Image
                  src={image?.url}
                  alt={image?.alt}
                  className="size-full"
                  width={image?.width}
                  height={image?.height}
                />
              </div>
            )}
            <div className="space-y-4 [&>p]:text-lg [&>p]:lg:text-xl [&>p]:leading-relaxed pt-8 md:pl-10 pl-0">

              {title && (
                <h2 className="text-4xl font-light">
                  {`${title}`}
                </h2>
              )}
              {content && (
                <p className="text-4xl font-light">
                  {`${content}`}
                </p>
              )}

              <Btn />

            </div>
          </div>
        </div>
      </section >
    </>
  );
}
