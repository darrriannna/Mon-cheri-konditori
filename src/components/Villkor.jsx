import React from "react";
import "../styles/Villkor.css";

const infoData = [
    {
        icon: "/assets/order.png",
        title: "Beställning",
        text: "Alla beställningar behöver göras minst 24 timmar innan upphämtning. Du kan enkelt lägga din beställning via vår webbplats eller genom att skicka ett DM till oss på Instagram."
    },
    {
        icon: "/assets/card.png",
        title: "Betalning",
        text: "Vi tar emot betalning via Swish och kort. För alla beställningar gäller 100% förskottsbetalning, eftersom våra konditorer lägger ner mycket tid och kärlek på varje dessert och vi vill undvika matsvinn."
    },
    {
        icon: "/assets/car.png",
        title: "Upphämtning",
        text: "Upphämtning sker på fasta dagar: måndag, onsdag och fredag. Vårt konditori ligger nära centrum i Helsingborg och när du lagt din beställning får du detaljer om tid och plats i en bekräftelse via e-post."
    },
    {
        icon: "/assets/allergi.png",
        title: "Allergier",
        text: (
            <div>
                Våra desserter kan innehålla nötter, gluten och laktos.
                <ul>
                    <li>Citron: mejeri, ägg, vit choklad, mandel</li>
                    <li>Hallon: gluten, mejeri, ägg, vit choklad</li>
                    <li>Passionfrukt: gluten, mejeri, passionfrukt, vit choklad</li>
                    <li>Mango: mejeri, ägg, vit choklad</li>
                </ul>
            </div>
        )
    },
    {
        icon: "/assets/cold.png",
        title: "Förvaring",
        text: "Vill du förlänga njutningen av dina desserter? Du kan förvara dem i frys upp till tre dagar. Kom ihåg att ta ut dem cirka 20–30 minuter innan servering och låt dem stå i rumstemperatur för att få bästa smak och konsistens."
    },
    {
        icon: "/assets/present.png",
        title: "Erbjudande",
        text: "Efter din första beställning får du 10% rabatt på nästa order. Använd koden som skickas med i din beställningsbekräftelse för att ta del av erbjudandet."
    }
];

export default function InfoGrid() {
    return (
        <div className="villkor">
            <section className="info-grid">
                {infoData.map((item, index) => (
                    <div key={index} className="info-card">
                        {/* Title row with icon and heading */}
                        <div className="title-row">
                            <img src={item.icon} alt={item.title} className="icon" />
                            <h3>{item.title}</h3>
                        </div>
                        {/* Text block */}
                        <div className="text">{item.text}</div>
                    </div>
                ))}
            </section></div>
    );
}

