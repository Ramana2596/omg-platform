import Link from "next/link";
import { products } from "../../data/products";

export default function ProductDetail({ params }: { params: { slug: string } }) {
    const prod = products.find((p) => p.slug === params.slug);
    if (!prod) return <div className="container">Product not found</div>;

    return (
        <div className="container product-detail">
            <div className="detail-header">
                <img src={prod.logo} alt={prod.title} className="detail-logo" />
                <div>
                    <h1>{prod.title}</h1>
                    <p className="muted">{prod.short}</p>
                    <div className="detail-modes">{prod.modes.join(" • ")}</div>
                </div>
            </div>

            <section className="detail-body">
                <h2>Features</h2>
                <ul>
                    {prod.features.map((f) => (
                        <li key={f}>{f}</li>
                    ))}
                </ul>

                <div className="detail-ctas">
                    <a href="https://appomgplatform.vercel.app/" className="btn primary" target="_blank" rel="noreferrer">Register</a>
                    <Link href="/products" className="btn">Back to Products</Link>
                </div>
            </section>
        </div>
    );
}
