import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";
import productImage from "/assets/mix-fruit.jpeg"; // replace with your own image

const ProductCard = () => {
    const [showAllergens, setShowAllergens] = useState(false);

    const allergens = [
        { id: "citron", text: "Citron: Mejeri, ägg, vit choklad, mandel." },
        { id: "hallon", text: "Hallon: Gluten, mejeri, ägg, vit choklad." },
        { id: "passion", text: "Passionfrukt: Gluten, mejeri, passion frukt, vit choklad." },
        { id: "mango", text: "Mango: Mejeri, ägg, vit choklad." },
    ];

    return (
        <section className="product-card">
            {/* Image */}
            <div className="product-image">
                <img src={productImage} alt="Trompe-l’œil" />
            </div>

            {/* Text Content */}
            <div className="product-info">
                <h2 className="title">Frukt mix box</h2>
                <p className="desc">
                    Vår bakelsebox består av fyra unika smaker: citron, hallon, passionfrukt och mango.
                </p>

                <p className="desc"><strong>Citronbakelsen</strong> en frisk lemoncurd omsluten av len och syrlig citronmousse. </p>
                <p className="desc"><strong>Hallonbakelsen</strong> fylld med hallonkompott på en saftig hallonblondie, täckt av en fräsch hallonmousse. </p>
                <p className="desc"><strong>Passionsfruktsbakelsen</strong> en tropisk dröm med passionsfruktskräm och mousse som balanserar sötma och syra perfekt.</p>
                <p className="desc"><strong>Mangobakelsen</strong> en len mangomousse med vaniljbotten och bitar av solmogen mango för en extra fruktig upplevelse.</p>

                <p className="warning">
                    Måste beställas i förväg. Upphämtningsdagar är måndagar, onsdagar och fredagar.
                </p>

                <p className="price-card">350kr</p>

                {/* Allergener toggle */}
                <div
                    className="allergen"
                    onClick={() => setShowAllergens(!showAllergens)}
                >
                    <span>Allergener</span>
                    <span className="plus">{showAllergens ? "−" : "+"}</span>
                </div>

                {showAllergens && (
                    <div className="allergen-list">
                        {allergens.map(item => (
                            <p key={item.id}>{item.text}</p>
                        ))}
                    </div>
                )}

                {/* Order button */}
                <Link to="/bestalla">
                    <button className="order-btn">Beställ här</button>
                </Link>
            </div>
        </section>
    );
};

export default ProductCard;

