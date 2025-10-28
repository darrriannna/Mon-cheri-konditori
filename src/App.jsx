import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import InfoGrid from "./components/Villkor";
import ProductCard from "./components/ProductCard";
import ProductCarousel from "./components/ProductCarousel";
import DessertOrderFlow from "./Order";
import Boxes from "./components/Boxes";// import your order flow page
import DessertStory from "./components/Story";
import DessertShowcase from "./components/DessertShowcase";




function App() {

  return (
    <Router>
      <Routes>
        {/* Main site (your current layout) */}
        <Route
          path="/"
          element={
            <div className="font-sans scroll-smooth">
              <Navbar />
              <section id="home"><Hero /></section>
              <section id="card"><ProductCard /></section>
              <section id="villkor"><Boxes /></section>
              <section id="villkor"><InfoGrid /></section>
              <section id="carousel"><ProductCarousel /></section>
              <section id="desserts"><DessertShowcase /></section>
              <section id="about"><About /></section>
              <section id="story"><DessertStory /></section>
              <Footer />
            </div>
          }
        />

        {/* Order page */}
        <Route path="/bestalla" element={<DessertOrderFlow />} />
      </Routes>
    </Router>
  );
}

export default App;



