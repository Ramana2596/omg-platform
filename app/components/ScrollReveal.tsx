"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        const els = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[];
        if (!els.length) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        els.forEach((el) => {
            // if already visible, mark immediately
            const rect = el.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight) {
                el.classList.add('visible');
            } else {
                obs.observe(el);
            }
        });

        return () => obs.disconnect();
        // re-run when pathname changes so new page elements are observed
    }, [pathname]);

    return null;
}
