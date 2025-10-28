import React from "react";
import "../styles/Contact.css"; // import regular CSS

const Contact = () => {
    return (
        <section className="contact-section">
            <h2>Kontakt</h2>
            <form className="contact-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;

