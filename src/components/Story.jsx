import React from "react";
import "../styles/DessertStory.css";

export default function DessertStory() {
    return (
        <div className="dessert-container">
            <div className="dessert-grid">
                {/* Left question text */}
                <div className="dessert-question">
                    <h2>
                        HUR <br /> SKAPAR VI VÅRA DESSERTER?
                    </h2>
                </div>

                {/* Images and slogans */}
                <div className="dessert-steps">
                    {/* Step 1 */}
                    <div className="dessert-card">
                        <img
                            src="/assets/step1.jpg"
                            alt="Baker mixing"
                            className="dessert-image"
                        />
                        <p>MED MASSOR AV KÄRLEK</p>
                    </div>

                    {/* Step 2 */}
                    <div className="dessert-card">
                        <img
                            src="/assets/cream-step2.jpg"
                            alt="Bowl with cream"
                            className="dessert-image"
                        />
                        <p className="highlight">MED NATURLIGA RÅVAROR</p>
                    </div>

                    {/* Step 3 */}
                    <div className="dessert-card">
                        <img
                            src="/assets/passion-step3.png"
                            alt="Passionfruit dessert"
                            className="dessert-image"
                        />
                        <p>MED PASSION FÖR VÅRT HANTVERK</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
