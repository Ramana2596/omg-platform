import Link from "next/link";
import { services } from "../../data/services";

export default function ServiceDetail({ params }: { params: { slug: string } }) {
    const svc = services.find((s) => s.slug === params.slug);
    if (!svc) return <div className="container">Service not found</div>;

    return (
        <div className="container service-detail">
            <div className="detail-header">
                <div>
                    <h1>{svc.title}</h1>
                    <div className="detail-modes">{svc.short}</div>
                </div>
            </div>

            <section className="detail-body">
                <h2>What we deliver</h2>
                <ul>
                    {svc.details.map((d) => (
                        <li key={d}>{d}</li>
                    ))}
                </ul>

                <div className="detail-ctas">
                    <Link href="/#contact" className="btn primary">Contact Consultant</Link>
                    <Link href="/services" className="btn primary">Back to Services</Link>
                </div>
            </section>
        </div>
    );
}
