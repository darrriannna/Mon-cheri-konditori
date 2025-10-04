import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // 👈 import from react-scroll
import { Link as RouterLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Left side: links */}
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        offset={-80} // adjust for navbar height
                        onClick={() => setMenuOpen(false)}
                    >
                        Hem
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={() => setMenuOpen(false)}
                    >
                        Om Oss
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to="villkor"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={() => setMenuOpen(false)}
                    >
                        Villkor
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to="footer"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={() => setMenuOpen(false)}
                    >
                        Kontakt
                    </ScrollLink>
                </li>
            </ul>

            {/* Center: Logo */}
            <div className="logo">
                <img src="../Logo.svg" alt="Logo" />
            </div>

            {/* Right side: Button */}
            <div className="nav-right">
                <RouterLink to="/bestalla">
                    <button className="order-btn">Beställ här</button>
                </RouterLink>

                <div
                    className={`burger ${menuOpen ? "toggle" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;



