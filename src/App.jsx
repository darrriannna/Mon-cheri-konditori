import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./components/About";
import Contact from "./components/Contact";
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
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;


