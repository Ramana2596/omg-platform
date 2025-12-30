"use client";
import Link from "next/link";

export default function ServiceCard({ service }: { service: any }) {
    return (
        <article className="service-card reveal">
            <div>
                <h3>{service.title}</h3>
                <p className="muted">{service.short}</p>
            </div>
            <div className="service-actions">
                <Link href={`/services/${service.slug}`} className="btn outline">Learn More</Link>
                <Link href="/#contact" className="btn primary">Contact Consultant</Link>
            </div>
        </article>
    );
}
