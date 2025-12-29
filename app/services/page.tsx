import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function ServicesPage() {
    return (
        <div className="container services-page">
            <header className="page-header">
                <h1>Services</h1>
                <p>Consulting, customised analytics and corporate upskilling.</p>
            </header>

            <section className="services-grid">
                {services.map((s) => (
                    <ServiceCard key={s.slug} service={s} />
                ))}
            </section>
        </div>
    );
}
