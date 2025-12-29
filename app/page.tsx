import Link from "next/link";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <section id="hero" className="hero reveal">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Learn by Doing, Guided by Professionals</h1>
            <p className="lead">Experience operations management through immersive simulations and guided mentorship.</p>
            <div className="hero-ctas">
              <Link href="/products" className="btn outline">See Details</Link>
              <a href="#contact" className="btn outline">Request Demo</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/omg-preview.png" alt="OMG simulation preview" />
          </div>
        </div>
      </section>

      <section id="how" className="how-works container reveal">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Join</h3>
            <p>Sign up and get instant access to course materials and simulations.</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Learn</h3>
            <p>Engage in guided simulations and hands-on exercises with mentor feedback.</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Apply</h3>
            <p>Apply learnings to real-world scenarios and measure outcomes.</p>
          </div>
        </div>
      </section>

      <section id="audience" className="audience container reveal">
        <h2>Who Is It For</h2>
        <div className="audience-grid">
          <div className="audience-item">Student<br /><small>Practical experience for coursework</small></div>
          <div className="audience-item">Academia<br /><small>Adopt simulations for teaching</small></div>
          <div className="audience-item">Professionals<br /><small>Upskill with applied learning</small></div>
          <div className="audience-item">Corporates<br /><small>Team training &amp; licensing</small></div>
        </div>
      </section>

      <section id="partners" className="partners container reveal">
        <h2>Partners & Customers</h2>
        <div className="logo-grid">
          <div className="logo">ITEC</div>
        </div>
      </section>

      <section id="customers" className="testimonials container reveal">
        <h2>Current Customers</h2>
        <div className="testimonials-grid">
          <article className="testimonial">
            <div className="t-logo">ITEC</div>
            <p>"Engaging and practical — students love it."</p>
            <div className="rating">★★★★★</div>
          </article>
        </div>
      </section>

      <section id="contact" className="contact container reveal">
        <h2>Get in Touch / Request Demo</h2>
        <p>Interested in a demo or partnership? Fill the form or email us.</p>
        <ContactForm />
      </section>
    </>
  );
}
