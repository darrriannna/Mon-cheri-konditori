import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./components/About";

import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ProductCarousel from "./components/ProductCarousel";
function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="card"><ProductCard /></section>
      <section id="carousel"><ProductCarousel /></section>
      <section id="about"><About /></section>
      <Footer />
    </div>
  );
}

export default App;


