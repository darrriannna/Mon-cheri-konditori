import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Left side: links */}
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><a href="#">Hem</a></li>
                <li><a href="#">Företag</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>

            {/* Center: Logo */}
            <div className="logo"><img src="../Logo.svg" alt="" /></div>

            {/* Right side: Button */}
            <div className="nav-right">
                <button className="order-btn">Beställ här</button>
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


