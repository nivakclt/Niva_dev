export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">N<span></span></span><span className="brand-name">niva<span className="brand-dot">/</span>dev</span></a>
        <p>Designed & built with care.</p>
        <a className="back-top" href="#home">Back to top ↑</a>
        <small>© {new Date().getFullYear()} Niva</small>
      </div>
    </footer>
  );
}
