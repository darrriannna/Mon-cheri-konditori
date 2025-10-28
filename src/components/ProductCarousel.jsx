import React from "react";
import "../styles/ProductCarousel.css";

const products = [
    { id: 1, name: "Mango", img: "/assets/mango.png", ingredients: "Mangobitar, vit choklad mousse, vit choklad", price: "90 kr" },
    { id: 2, name: "Hallon", img: "/assets/hallon.png", ingredients: "Hallon, vit choklad mousse, vit choklad", price: "90 kr" },
    { id: 3, name: "Passion frukt", img: "/assets/passion.png", ingredients: "Passion frukt, vit choklad mousse, vit choklad", price: "90 kr" },
    { id: 4, name: "Lime", img: "/assets/lime.png", ingredients: "Lime & Äpplebitar med mynta, vit choklad mousse, vit choklad", price: "90 kr" },
    { id: 5, name: "Blåbär", img: "/assets/blabar.png", ingredients: "Blåbär, vit choklad mousse, vit choklad", price: "90 kr" },
    { id: 6, name: "Äpple", img: "/assets/apple.png", ingredients: "Äpplebitar med kanel, vit choklad mousse, vit choklad", price: "90 kr" },
];

const ProductGrid = () => (
    <section className="grid-section">
        <h2 className="title-products">Utforska vårt sortiment</h2>
        <div className="grid-container">
            {products.map((product) => (
                <div className="grid-item" key={product.id}>
                    <img src={product.img} alt={product.name} />
                    <h3 className="title-dessert">{product.name}</h3>
                    <p className="ingredients">{product.ingredients}</p>
                    <p className="price">{product.price}</p>
                </div>
            ))}
        </div>
    </section>
);

export default ProductGrid;




