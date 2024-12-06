"use client";
import { useState } from "react";
import "./global.css";
import Header from "./components/Header/Header";

export default function RootLayout({ children }) {
  // State for menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
