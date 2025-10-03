import React from "react";
import "../styles/Footer.css";
import splashImage from "/assets/footer.png"; // replace with your PNG file path

export default function Footer() {
    return (
        <footer className="footer">
            {/* Running text line */}
            <div className="footer-marquee">
                <div className="marquee-text">
                    FIKA AS A WAY OF LIFE • FIKA AS A WAY OF LIFE • FIKA AS A WAY OF LIFE •
                </div>
            </div>

            {/* Content */}
            <div className="footer-container">
                {/* Snabblänkar */}
                <div className="footer-column">
                    <h3 className="footer-title">Snabblänkar</h3>
                    <ul className="footer-links">
                        <li><a href="#">Hem</a></li>
                        <li><a href="#">Om oss</a></li>
                        <li><a href="#">Köpvillkor</a></li>
                    </ul>
                </div>

                {/* Adress & e-post */}
                <div className="footer-column">
                    <h3 className="footer-title">Adress &amp; e-post</h3>
                    <p>Margaretaplatsen 6, Helsingborg</p>
                    <p>
                        <a href="mailto:moncheri.helsingborg@gmail.com">
                            moncheri.helsingborg@gmail.com
                        </a>
                    </p>
                </div>

                {/* Följ oss */}
                <div className="footer-column">
                    <h3 className="footer-title">Följ oss</h3>
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram">📷</a>
                        <a href="#" aria-label="Facebook">📘</a>
                    </div>
                </div>
            </div>

            {/* Splash image */}
            <img src={splashImage} alt="splash" className="footer-splash" />

            {/* Copyright overlay */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Mon Chéri &amp; Co AB — All rights reserved</p>
            </div>
        </footer>
    );
}




