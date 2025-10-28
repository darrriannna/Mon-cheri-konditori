import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";
import productImage from "/assets/Desserts.png"; // replace with your own image

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
                <h2 className="title">trompe l’oeil</h2>
                <p className="desc">
                    Vår bakelsebox består av fyra eller sex unika smaker: lime, hallon, passionfrukt, mango, äpple, blåbar.
                </p>

                <p className="desc"><strong>Limebakelsen</strong> en frisk och syrlig bakelse med len limecurd och luftig citronmousse, täckt med belgisk choklad blandad med naturligt kakaosmör.</p>
                <p className="desc"><strong>Hallonbakelsen</strong> fylld med hallonkompott och fräsch hallonmousse, täckt med belgisk choklad blandad med naturligt kakaosmör.</p>
                <p className="desc"><strong>Passionsfruktsbakelsen</strong> en tropisk dröm med passionsfruktskräm och mousse som balanserar sötma och syra perfekt, täckt med belgisk choklad blandad med naturligt kakaosmör.</p>
                <p className="desc"><strong>Mangobakelsen</strong> en len mangomousse med bitar av solmogen mango för en extra fruktig upplevelse, täckt med belgisk choklad blandad med naturligt kakaosmör.</p>
                <p className="desc"><strong>Blåbarbakelsen</strong> fylld med blåbärskompott och luftig blåbärsmousse för en frisk och bärig smak, täckt med belgisk choklad blandad med naturligt kakaosmör.</p>
                <p className="desc"><strong>Äpplebakelsen</strong> en saftig bakelse med äppelkompott och kryddig mousse, toppad med lätt syrlig äppelkräm och täckt med belgisk choklad blandad med naturligt kakaosmör.</p>

                <p className="warning">
                    Måste beställas i förväg. Upphämtningsdagar är måndagar, onsdagar och fredagar.
                </p>


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

