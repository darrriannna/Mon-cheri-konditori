import React from "react";
import "../styles/About.css";
import whiskImg from "/assets/whisker.png";
import textCircle from "/assets/text-cirle.png"; // your circular text

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-image-wrapper">
                <div className="image-group">
                    <img src={textCircle} alt="Circular text" className="rotating-text" />
                    <img src={whiskImg} alt="Whisk with cream" className="whisk-img" />
                </div>
            </div>

            <div className="about-content">
                <h2>OM OSS</h2>
                <p>
                    Mon Chéri Konditori i Helsingborg skapar eleganta och högkvalitativa
                    desserter med fokus på råvaror av bästa möjliga standard. Vi öppnar våra
                    dörrar i oktober 2025 och erbjuder en upplevelse där smak, estetik och
                    hantverk möts. Vår ambition är att ge våra kunder en exklusiv och
                    oförglömlig dessertupplevelse, oavsett om det gäller små beställningar
                    eller större evenemang.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;

