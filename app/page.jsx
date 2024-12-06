"use client";
import React from "react";
import TextMedia from "./components/TextMedia/TextMedia";
import NewsGrid from "./components/NewsGrid/NewsGrid";
import ImageCounter from "./components/ImageCounter/ImageCounter";

export default function Home() {
  return (
    <>
      <TextMedia />
      <NewsGrid />
      <ImageCounter />
    </>
  );
}
