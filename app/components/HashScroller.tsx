"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HashScroller() {
    const pathname = usePathname();

    useEffect(() => {
        // run after route change; attempt to scroll to hash (if present)
        if (typeof window === "undefined") return;
        const scrollToHash = () => {
            const hash = window.location.hash;
            if (!hash) return;
            const id = hash.slice(1);
            const el = document.getElementById(id);
            if (el) {
                // small delay to ensure page content rendered
                setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
            }
        };

        // try immediate, and also after a short delay
        scrollToHash();
        const t = setTimeout(scrollToHash, 150);
        // also handle hashchange events
        window.addEventListener("hashchange", scrollToHash);
        return () => {
            clearTimeout(t);
            window.removeEventListener("hashchange", scrollToHash);
        };
    }, [pathname]);

    return null;
}
