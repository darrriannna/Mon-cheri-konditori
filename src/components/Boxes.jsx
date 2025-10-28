import React from 'react';

import '../styles/Boxes.css';

const Boxes = () => {

    return (
        <div className="gift-container">
            <div className="gift-box" data-aos="zoom-in">
                <img src="/assets/small-box.png" alt="Gift Box 350kr" className="gift-image" />
                <p className="price-box">350kr</p>
            </div>

            <div className="gift-box" data-aos="zoom-in" data-aos-delay="200">
                <img src="/assets/big-box.png" alt="Gift Box 480kr" className="gift-image" />
                <p className="price-box">480kr</p>
            </div>
        </div>
    );
};

export default Boxes;
