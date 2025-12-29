"use client";
import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [saved, setSaved] = useState(false);

    function validate() {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return "Please enter a valid email.";
        }
        if (!name.trim()) return "Please enter your name.";
        return null;
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const err = validate();
        setError(err);
        if (err) return;

        try {
            const leads = JSON.parse(localStorage.getItem("contactLeads") || "[]");
            leads.push({ name, email, company, message, created: new Date().toISOString() });
            localStorage.setItem("contactLeads", JSON.stringify(leads));
            setSaved(true);
        } catch (e) {
            setError("Failed to save — please try again.");
        }
    }

    if (saved)
        return (
            <div className="contact-saved">
                <p>Thanks — we'll contact you soon.</p>
            </div>
        );

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            {error && <div className="form-error">{error}</div>}
            <div className="form-row">
                <input name="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-row">
                <input name="company" placeholder="Company (optional)" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className="form-row">
                <textarea name="message" placeholder="Message / Demo interest" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className="form-row">
                <button className="btn primary" type="submit">Request Demo</button>
            </div>
        </form>
    );
}
