import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/ProductCard.css";
import Boxes from "./Boxes";

const ProductCard = () => {
    const [showAllergens, setShowAllergens] = useState(false);

    const allergens = [
        { id: "citron", text: "Citron: Mejeri, ägg, vit choklad, mandel." },
        { id: "hallon", text: "Hallon: Gluten, mejeri, ägg, vit choklad." },
        { id: "passion", text: "Passionfrukt: Gluten, mejeri, passion frukt, vit choklad." },
        { id: "mango", text: "Mango: Mejeri, ägg, vit choklad." },
    ];

    // Animation variants
    const fadeLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
        },
    };

    const fadeItem = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="product-card">
            <motion.div
                className="product-card-wrapper"
                initial="hidden"
                animate="visible"
                variants={fadeRight}
            >
                {/* Image Column */}
                <motion.div className="product-image" variants={fadeLeft}>
                    <Boxes />
                </motion.div>

                {/* Text Column */}
                <motion.div className="product-info" variants={fadeRight}>
                    <motion.h2 className="title" variants={fadeItem}>
                        trompe l’oeil
                    </motion.h2>

                    <motion.p className="desc" variants={fadeItem}>
                        Vår bakelsebox består av fyra eller sex unika smaker: lime, hallon, passionfrukt, mango, äpple, blåbar.
                    </motion.p>

                    <motion.div variants={fadeItem}>
                        <p className="desc"><strong>Limebakelsen</strong> en frisk och syrlig bakelse med len limecurd och luftig citronmousse, täckt med belgisk choklad blandad med naturligt kakaosmör.</p>
                        <p className="desc"><strong>Hallonbakelsen</strong> fylld med hallonkompott och fräsch hallonmousse, täckt med belgisk choklad blandad med naturligt kakaosmör.</p>
                        <p className="desc"><strong>Passionsfruktsbakelsen</strong> en tropisk dröm med passionsfruktskräm och mousse som balanserar sötma och syra perfekt, täckt med belgisk choklad blandad med naturligt kakaosmör.</p>
                        <p className="desc"><strong>Mangobakelsen</strong> en len mangomousse med bitar av solmogen mango för en extra fruktig upplevelse, täckt med belgisk choklad blandad med naturligt kakaosmör.</p>
                        <p className="desc"><strong>Blåbarbakelsen</strong> fylld med blåbärskompott och luftig blåbärsmousse för en frisk och bärig smak, täckt med belgisk choklad blandad med naturligt kakaosmör.</p>
                        <p className="desc"><strong>Äpplebakelsen</strong> en saftig bakelse med äppelkompott och kryddig mousse, toppad med lätt syrlig äppelkräm och täckt med belgisk choklad blandad med naturligt kakaosmör.</p>
                    </motion.div>

                    <motion.p className="warning" variants={fadeItem}>
                        Måste beställas i förväg. Upphämtningsdagar är måndagar, onsdagar och fredagar.
                    </motion.p>

                    {/* Allergener toggle */}
                    <motion.div
                        className="allergen"
                        onClick={() => setShowAllergens(!showAllergens)}
                        variants={fadeItem}
                        whileHover={{ scale: 1.03 }}
                    >
                        <span>Allergener</span>
                        <span className="plus">{showAllergens ? "−" : "+"}</span>
                    </motion.div>

                    <AnimatePresence>
                        {showAllergens && (
                            <motion.div
                                className="allergen-list"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {allergens.map(item => (
                                    <p key={item.id}>{item.text}</p>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Order Button */}
                    <motion.div variants={fadeItem}>
                        <Link to="/bestalla">
                            <motion.button
                                className="order-btn"
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

export default ProductCard;
