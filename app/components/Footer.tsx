export default function Footer() {
  return (
    <footer className="site-footer reveal">
      <div className="container footer-inner">
        <div className="footer-links">
          <a href="/products">Products</a>
          <a href="/services">Services</a>
          <a href="#customers">Customers</a>
        </div>
        <div className="copyright">© {new Date().getFullYear()} OMG Platform</div>
      </div>
    </footer>
  );
}
