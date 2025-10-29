import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import pastries from "/assets/Banner.png"; // Replace with your actual image

const Hero = () => {
    // Animation variants
    const textContainer = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                ease: "easeOut",
            },
        },
    };

    const textItem = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="hero">
            {/* Animated Background Image */}
            <motion.img
                src={pastries}
                alt="Pastries"
                className="hero-bg"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Masked Animated Text */}
            <motion.div
                className="masking-container"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <h1 className="masked-text">Mon Chéri</h1>
            </motion.div>

            {/* Hero Content */}
            <motion.div
                className="hero-content"
                variants={textContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="hero-text-box" variants={textContainer}>
                    <motion.h3 className="welcome-text" variants={textItem}>
                        Välkommen till Mon Chéri Konditori!
                    </motion.h3>

                    <motion.p variants={textItem}>
                        Vi är ett litet konditori i hjärtat av Helsingborg där alla våra
                        skapelser görs med kärlek och omsorg. Våra produkter är gjorda på
                        närproducerade och/eller ekologiska råvaror.
                    </motion.p>

                    <motion.p variants={textItem}>
                        Just nu erbjuder vi endast avhämtning, men med din kärlek till våra
                        desserter hoppas vi kunna växa och skapa ännu fler söta stunder
                        tillsammans framöver.
                    </motion.p>

                    <motion.div className="btn-hero" variants={textItem}>
                        <Link className="btn-hero-link" to="/bestalla">
                            <motion.button
                                className="order-btn-hero"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                Beställ här
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
