export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="footer-copy">
          © {new Date().getFullYear()} Niva K. Built with React & Vite.
        </span>

        <span className="footer-status-tag">
          <span className="status-dot" />
          <span>ALL SYSTEMS OPERATIONAL</span>
        </span>

        <a className="back-top" href="#home" aria-label="Back to top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
