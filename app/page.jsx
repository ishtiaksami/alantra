"use client";
import React from "react";
import TextMedia from "./components/TextMedia/TextMedia";
import NewsGrid from "./components/NewsGrid/NewsGrid";
import ImageCounter from "./components/ImageCounter/ImageCounter";
import MapPromo from "./components/MapPromo/MapPromo";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <TextMedia
        title="Alantra is a leading independent investment bank and financial advisory firm"
        content="We are a leading independent investment bank and financial advisory firm with a global network of offices in Europe, North America, and Asia. We provide a full range of services to corporations, financial institutions, governments, and private equity firms. Our clients include some of the world's most successful companies, as well as emerging growth companies and financial sponsors."
      // ctaButton={null}
      />
      <ImageCounter />
      <NewsGrid />
      <TextMedia
        image={{
          url: "/img/featured-UK-1.jpg",
          alt: "alantra",
          width: 1191,
          height: 1296,
        }}
        title="Alantra is a leading independent investment bank and financial advisory firm"
        content="We are a leading independent investment bank and financial advisory firm with a global network of offices in Europe, North America, and Asia. We provide a full range of services to corporations, financial institutions, governments, and private equity firms. Our clients include some of the world's most successful companies, as well as emerging growth companies and financial sponsors."
      // ctaButton={null} // or add specific ctaButton details if needed
      />

      <MapPromo />
      <Footer />
    </>
  );
}