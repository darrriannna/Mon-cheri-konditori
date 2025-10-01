import React from "react";
import "../styles/Hero.css";
import pastries from "/assets/Pasteries.jpg"; // <- Replace with your actual image

const Hero = () => {
    return (
        <section className="hero">
            <img src={pastries} alt="Pastries" className="hero-bg" />

            <div className="hero-content">
                <div className="hero-text-box">
                    <p>
                        Vi är ett litet bageri utanför Helsingborg som erbjuder tårta och
                        desserter till livets alla stunder, oavsett om du är privatperson
                        eller företag. Våra produkter är gjorda på närproducerade och/eller
                        ekologiska råvaror.
                    </p>
                    <p>
                        Vi tar inspiration från allt i livet och hoppas vi kunna glädja och
                        inspirera andra med våra bakverk.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

