import React from "react";
import "../styles/ProductCard.css";
import productImage from "/assets/mix-fruit.jpeg"; // replace with your own image

const ProductCard = () => {
    return (
        <section className="product-card">
            {/* Image */}
            <div className="product-image">
                <img src={productImage} alt="Trompe-l’œil" />
            </div>

            {/* Text Content */}
            <div className="product-info">
                <p className="tag">POPULÄRT 🔥</p>
                <h2 className="title">Trompe-l’œil</h2>
                <p className="desc">
                    Succén som tagit våra sociala medier med storm. Vår bakelsebox består av
                    fyra olika: citron, hallon, kakao och mango.
                </p>

                <p className="desc"><strong>Citronbakelsen</strong> är en lemoncurd omsluten av en syrlig citronmousse.</p>
                <p className="desc"><strong>Hallonbakelsen</strong> är en hallonfyllning på en hallonblondie i en fräsch hallonmousse.</p>
                <p className="desc"><strong>Kakaobakelsen</strong> är en hasselnötsmousse och praliné omsluten av en fyllig chokladmousse.</p>
                <p className="desc"><strong>Mangobakelsen</strong> är en exotisk kompott med en kokosbotten i en tropisk mousse.</p>

                <p className="warning">
                    Måste beställas i förväg. Upphämtningsdagar är måndagar, onsdagar och fredagar.
                </p>

                <p className="price">350kr</p>

                <div className="allergen">
                    <span>Allergener</span>
                    <span className="plus">+</span>
                </div>



                <button className="order-btn">Beställ</button>
            </div>
        </section>
    );
};

export default ProductCard;
