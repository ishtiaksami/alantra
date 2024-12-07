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
      <TextMedia />
      <NewsGrid />
      <ImageCounter />
      <MapPromo />
      <Footer />
    </>
  );
}
