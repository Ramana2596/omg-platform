import Link from "next/link";
import { services } from "../../data/services";

export default function ServiceDetail({ params }: { params: { slug: string } }) {
    const svc = services.find((s) => s.slug === params.slug);
    if (!svc) return <div className="container">Service not found</div>;

    return (
        <div className="container service-detail">
            <header className="detail-header">
                <h1>{svc.title}</h1>
                <p className="muted">{svc.short}</p>
            </header>

            <section className="detail-body">
                <h2>What we deliver</h2>
                <ul>
                    {svc.details.map((d) => (
                        <li key={d}>{d}</li>
                    ))}
                </ul>

                <div className="detail-ctas">
                    <button className="btn primary">Contact Consultant</button>
                    <button className="btn outline">Request Proposal</button>
                    <Link href="/services" className="btn">Back to Services</Link>
                </div>
            </section>
        </div>
    );
}
