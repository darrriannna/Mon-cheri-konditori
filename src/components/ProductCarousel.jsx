import React, { useRef } from "react";
import "../styles/ProductCarousel.css";
import img1 from "/assets/Mango.png";     // replace with real images
import img2 from "/assets/Hallon.png";
import img3 from "/assets/Passion.png";
import img4 from "/assets/Lemons.jpg";

const products = [
    {
        id: 1,
        name: "Mango",
        ingredients: "Vit choklad mousse, mangobitar, vanilj, vit choklad",
        img: img1
    },
    {
        id: 2,
        name: "Hallon",
        ingredients: "Havregryn, russin, kanel",
        img: img2
    },
    {
        id: 3,
        name: "Passion frukt",
        ingredients: "Mandelmjöl, äggvita, hallon, choklad",
        img: img3
    },
    {
        id: 4,
        name: "Lemon",
        ingredients: "Kakao, kokos, chokladbitar",
        img: img4
    },
];

const ProductCarousel = () => {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="carousel-section">
            <h2 className="carousel-title">Utforska vårt sortiment</h2>
            <p className="carousel-subtitle">
                Självklart kan du beställa även till en helt vanlig fika. Här är ett urval av vårt sortiment, önskar du något särskilt är du alltid välkommen med en förfrågan så ser vi om vi kan lösa det.
            </p>

            <div className="carousel-container">
                <button className="arrow left" onClick={() => scroll("left")}>‹</button>

                <div className="carousel" ref={carouselRef}>
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.img} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p className="ingredients">{product.ingredients}</p>
                        </div>
                    ))}
                </div>

                <button className="arrow right" onClick={() => scroll("right")}>›</button>
            </div>
        </section>
    );
};

export default ProductCarousel;
