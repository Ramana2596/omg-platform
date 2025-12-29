"use client";
import { useState, useEffect } from "react";

export default function DemoModal({ open, onClose, productSlug }: { open: boolean; onClose: () => void; productSlug?: string }) {
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (!open) {
            setSaved(false);
            setEmail("");
            setCompany("");
        }
    }, [open]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const leads = JSON.parse(localStorage.getItem("demoLeads") || "[]");
        leads.push({ email, company, product: productSlug || null, created: new Date().toISOString() });
        localStorage.setItem("demoLeads", JSON.stringify(leads));
        setSaved(true);
    }

    if (!open) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>×</button>
                <h3>Request Demo</h3>
                {saved ? (
                    <div className="modal-saved">
                        <p>Thanks — we'll contact you soon.</p>
                        <button className="btn" onClick={onClose}>Close</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="demo-form">
                        <input required placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input placeholder="Company (optional)" value={company} onChange={(e) => setCompany(e.target.value)} />
                        <div className="form-actions">
                            <button className="btn primary" type="submit">Request Demo</button>
                            <button type="button" className="btn outline" onClick={onClose}>Cancel</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
