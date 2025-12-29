"use client";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
    return (
        <article className="product-card reveal">
            <div className="p-logo">
                <img src={product.logo} alt={product.title} />
            </div>
            <div className="p-body">
                <h3>{product.title}</h3>
                <p className="muted">{product.short}</p>
                <div className="p-modes">{product.modes.join(" • ")}</div>
                <div className="p-actions">
                    <Link href={`/products/${product.slug}`} className="btn outline">View Details</Link>
                </div>
            </div>
        </article>
    );
}
