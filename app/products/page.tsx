import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
    return (
        <div className="container products-page">
            <header className="page-header">
                <h1>Products</h1>
                <p>Explore our simulations, labs, and learning products.</p>
            </header>

            <section className="product-grid">
                {products.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                ))}
            </section>
        </div>
    );
}
