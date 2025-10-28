import React from "react";
import { motion } from "framer-motion";
import "../styles/DessertShowcase.css";


const fadeIn = (direction = "up", delay = 0) => {
    const distance = 50;
    return {
        hidden: { opacity: 0, y: direction === "up" ? distance : direction === "down" ? -distance : 0 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay, ease: "easeOut" },
        },
    };
};

const DessertShowcase = () => {
    return (
        <section className="fest-container">
            <motion.div
                className="fest-wrapper"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Lemon Love Cakes */}
                <motion.div
                    className="lemon-container"
                    variants={fadeIn("up", 0.1)}
                >
                    <motion.div className="lemon-text" variants={fadeIn("up", 0.2)}>
                        <h2 className="lemon-title">Lemon Love Cakes</h2>
                        <p className="lemon-desc">
                            Våra saftiga Lemon Love Cakes är små smakexplosioner av frisk
                            citron och söt kärlek – perfekta till fikan med kollegorna eller
                            en mysig kväll med en kopp te och familjen.
                        </p>
                    </motion.div>

                    <motion.img
                        src="/assets/LemonLove.jpg"
                        alt="Lemon Love Cakes"
                        className="lemon-img"
                        variants={fadeIn("up", 0.3)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </motion.div>

                {/* Mousee Bento-tårta */}
                <motion.div
                    className="bento-container"
                    variants={fadeIn("up", 0.2)}
                >
                    <motion.div className="bento-text" variants={fadeIn("up", 0.3)}>
                        <h2 className="bento-title">Mousee Bento-tårta</h2>
                        <p className="bento-desc">
                            Våra små och söta Bento-tårtor är perfekta för 2–3 personer – en
                            gullig och personlig minitårta som vi dekorerar precis efter dina
                            önskemål. De kan göras i olika smaker och former, så kontakta oss
                            gärna för mer information eller specialbeställningar.
                        </p>
                    </motion.div>

                    <motion.img
                        src="/assets/MousseBento.jpg"
                        alt="Mousee Bento-tårta"
                        className="bento-img"
                        variants={fadeIn("up", 0.4)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </motion.div>

                {/* Medovyk */}
                <motion.div
                    className="medovyk-container"
                    variants={fadeIn("up", 0.3)}
                >
                    <motion.div className="medovyk-text" variants={fadeIn("up", 0.4)}>
                        <h2 className="medovyk-title">Medovyk</h2>
                        <p className="medovyk-desc">
                            En klassisk tårta med många lager av honungskaka och len grädde,
                            fylld med en frisk touch av hallon eller körsbär. Den här tårtan
                            sprider en känsla av värme och hemtrevnad – perfekt när du vill
                            bjuda på något riktigt mysigt.
                        </p>
                    </motion.div>

                    <motion.img
                        src="/assets/Medovyk.jpg"
                        alt="Medovyk"
                        className="medovyk-img"
                        variants={fadeIn("up", 0.5)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );

};

export default DessertShowcase;

