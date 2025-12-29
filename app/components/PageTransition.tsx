"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition() {
    const pathname = usePathname();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // show overlay briefly on navigation
        setVisible(true);
        const t = setTimeout(() => setVisible(false), 300);
        return () => clearTimeout(t);
    }, [pathname]);

    return (
        <div aria-hidden className={"page-transition" + (visible ? " active" : "")}></div>
    );
}
