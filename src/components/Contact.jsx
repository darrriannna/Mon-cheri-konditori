import React from "react";

const Contact = () => {
    return (
        <div className="bg-white py-16 px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
            <form className="max-w-lg mx-auto space-y-4">
                <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
                <textarea placeholder="Message" className="w-full p-2 border rounded h-32"></textarea>
                <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">Send</button>
            </form>
        </div>
    );
};

export default Contact;
