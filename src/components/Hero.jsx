import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import pastries from "/assets/Pasteries.jpg"; // <- Replace with your actual image

const Hero = () => {
    return (
        <section className="hero">
            <img src={pastries} alt="Pastries" className="hero-bg" />

            <div className="hero-content">
                <div className="hero-text-box">
                    <h3 className="welcome-text">Välkommen till Mon Chéri Konditori!</h3>
                    <p>
                        Vi är ett litet konditori i hjärtat av Helsingborg där alla våra skapelser görs med kärlek och omsorg. Våra produkter är gjorda på närproducerade och/eller
                        ekologiska råvaror.
                    </p>
                    <p>
                        Just nu erbjuder vi endast avhämtning, men med din kärlek till våra desserter hoppas vi kunna växa och skapa ännu fler söta stunder tillsammans framöver.
                    </p>
                    <div className="btn-hero">
                        <Link to="/bestalla">
                            <button className="order-btn-hero">Beställ här</button>
                        </Link></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

