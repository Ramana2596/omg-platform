"use client";
import { useState } from "react";
import DemoModal from "./DemoModal";

export default function DemoTrigger({ productSlug }: { productSlug?: string }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button className="btn primary" onClick={() => setOpen(true)}>Register / Try Demo</button>
            <DemoModal open={open} onClose={() => setOpen(false)} productSlug={productSlug} />
        </>
    );
}
