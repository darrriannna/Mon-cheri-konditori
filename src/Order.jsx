import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // keep, replace keys later
import "./styles/Order.css";

function startOfDay(d) {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
}
function sameDay(a, b) {
    if (!a || !b) return false;
    return startOfDay(a).getTime() === startOfDay(b).getTime();
}
function formatSwedishDate(d) {
    if (!d) return "";
    const weekday = new Intl.DateTimeFormat("sv-SE", { weekday: "long" }).format(d);
    const month = new Intl.DateTimeFormat("sv-SE", { month: "long" }).format(d);
    const day = d.getDate();
    return `${weekday}, ${month} ${day}`;
}
function buildMonthMatrix(year, month) {
    const first = new Date(year, month, 1);
    const startOffset = (first.getDay() + 6) % 7; // Monday-first
    const start = new Date(year, month, 1 - startOffset);
    const weeks = [];
    let cur = new Date(start);
    for (let r = 0; r < 6; r++) {
        const week = [];
        for (let c = 0; c < 7; c++) {
            week.push(new Date(cur));
            cur.setDate(cur.getDate() + 1);
        }
        weeks.push(week);
    }
    return weeks;
}

export default function Order() {
    const now = new Date();
    const [viewYear, setViewYear] = useState(now.getFullYear());
    const [viewMonth, setViewMonth] = useState(now.getMonth());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [step, setStep] = useState(1);
    const [sending, setSending] = useState(false);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "+46 ",
        email: "",
        qty: 1,
        notes: "",
    });

    // only the three pickup times
    const timeslots = ["12:00", "14:00", "18:00"];
    const weeks = buildMonthMatrix(viewYear, viewMonth);
    const allowedDays = [1, 3, 5]; // Mon=1 Wed=3 Thu=4

    const prevMonth = () => {
        let m = viewMonth - 1;
        let y = viewYear;
        if (m < 0) { m = 11; y--; }
        setViewMonth(m); setViewYear(y);
    };
    const nextMonth = () => {
        let m = viewMonth + 1;
        let y = viewYear;
        if (m > 11) { m = 0; y++; }
        setViewMonth(m); setViewYear(y);
    };

    const chooseDate = (d) => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);

        if (!allowedDays.includes(d.getDay())) return;
        if (d < tomorrow) return; // block same-day and past dates

        setSelectedDate(new Date(d));
        setSelectedTime("");
    };

    const goToForm = () => {
        if (!selectedDate || !selectedTime) return;
        setStep(2);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const goBack = () => {
        setStep(1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.firstName || !form.lastName || !form.email) {
            alert("Fyll i för- och efternamn samt e-post.");
            return;
        }
        const templateParams = {
            firstName: form.firstName,
            lastName: form.lastName,
            phone: form.phone,
            email: form.email,
            product: "Fruit mix box",
            qty: form.qty,
            notes: form.notes || "-",
            date: selectedDate ? selectedDate.toISOString().split("T")[0] : "",
            time: selectedTime,
        };
        try {
            setSending(true);
            // replace the strings below with your EmailJS values
            await emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                templateParams,
                "YOUR_PUBLIC_KEY"
            );
            setStep(3);
        } catch (err) {
            console.error(err);
            alert("Något gick fel vid sändning. Försök igen.");
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="order-page">
            <div className="order-wrapper">
                <div className="order-top">
                    <button className="back-link" onClick={() => window.history.back()}>
                        ‹ VÄLJ UPPHÄMTNINGSTID
                    </button>

                </div>

                <div className="banner">
                    <div className="banner-inner">Mon Chéri Fruit mix box upphämtning Helsingborg </div>
                </div>

                {step === 1 && (
                    <div className="booking-card">
                        <div className="booking-layout">
                            <div className="calendar-panel">
                                <div className="month-nav">
                                    <button onClick={prevMonth} aria-label="Previous">‹</button>
                                    <div className="month-label">
                                        {new Intl.DateTimeFormat("sv-SE", { month: "long", year: "numeric" }).format(new Date(viewYear, viewMonth, 1))}
                                    </div>
                                    <button onClick={nextMonth} aria-label="Next">›</button>
                                </div>

                                <div className="weekday-row">
                                    {["Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön"].map((d) => <div key={d} className="weekday">{d}</div>)}
                                </div>

                                <div className="month-grid">
                                    {weeks.map((week, i) => week.map((day, j) => {
                                        const inMonth = day.getMonth() === viewMonth;
                                        const isSelected = selectedDate && sameDay(day, selectedDate);
                                        const isAllowed = allowedDays.includes(day.getDay());

                                        // calculate if too soon (< 24h)
                                        const tomorrow = new Date();
                                        tomorrow.setDate(tomorrow.getDate() + 1);
                                        tomorrow.setHours(0, 0, 0, 0);
                                        const isTooSoon = day < tomorrow;

                                        return (
                                            <button
                                                key={`${i}-${j}`}
                                                className={
                                                    "day-tile" +
                                                    (inMonth ? "" : " muted") +
                                                    (isSelected ? " selected" : "") +
                                                    (!isAllowed || isTooSoon ? " disabled" : "")
                                                }
                                                onClick={() => isAllowed && inMonth && !isTooSoon && chooseDate(day)}
                                                disabled={!isAllowed || !inMonth || isTooSoon}
                                            >
                                                <span className="day-number">{day.getDate()}</span>
                                            </button>
                                        );
                                    }))}
                                </div>

                            </div>

                            <div className="time-panel">
                                <div className="time-header">
                                    <div className="selected-day">{selectedDate ? formatSwedishDate(selectedDate) : "Välj en dag"}</div>
                                    <div className="timezone">TIDSZON: STOCKHOLM (GMT+02:00)</div>
                                </div>

                                <div className="timeslots">
                                    <h3>Tillgängliga tider</h3>
                                    <div className="timeslot-grid">
                                        {timeslots.map((t) => (
                                            <button
                                                key={t}
                                                className={"timeslot" + (t === selectedTime ? " selected" : "")}
                                                onClick={() => selectedDate && setSelectedTime(t)}
                                                disabled={!selectedDate}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="cta-row">
                                    <button
                                        className="btn-primary"
                                        onClick={goToForm}
                                        disabled={!selectedDate || !selectedTime}
                                    >
                                        Fortsätt
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <form className="booking-card form-card" onSubmit={handleSubmit}>
                        <div className="form-top">
                            <div className="form-title">DIN INFORMATION</div>
                            <div className="chosen">
                                <div className="small">Vald tid</div>
                                <div className="bold">{selectedDate ? `${formatSwedishDate(selectedDate)} kl. ${selectedTime}` : ""}</div>
                            </div>
                        </div>

                        <div className="form-fields">
                            <label className="underlined">
                                Förnamn *
                                <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required />
                            </label>

                            <label className="underlined">
                                Efternamn *
                                <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required />
                            </label>

                            <label className="underlined">
                                Telefon *
                                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                            </label>

                            <label className="underlined">
                                E-postadress *
                                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                            </label>

                            <div className="product-row">
                                <div className="product-name">Fruit mix box</div>
                                <div className="qty">
                                    <label>Antal</label>
                                    <select className="antal" value={form.qty} onChange={(e) => setForm({ ...form, qty: Number(e.target.value) })}>
                                        {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </div>
                            </div>

                            <label>
                                Övrigt meddelande (Ej allergier mm)
                                <textarea className="medel" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
                            </label>
                        </div>

                        <div className="form-actions">
                            <button type="button" className="btn-secondary" onClick={goBack}>Tillbaka</button>
                            <button type="submit" className="btn-primary" disabled={sending}>{sending ? "Skickar..." : "BEKRÄFTA AVTALAD TID"}</button>
                        </div>
                    </form>
                )}

                {step === 3 && (
                    <div className="booking-card confirm-card">
                        <h2>Tack! Din beställning är mottagen.</h2>
                        <p>En bekräftelse har skickats till {form.email}. Vi ser fram emot att leverera.</p>
                        <div style={{ marginTop: 20, textAlign: "center" }}>
                            <button className="btn-primary" onClick={() => window.location.assign("/")}>Tillbaka till startsidan</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
