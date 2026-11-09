export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="footer-copy">
          © {new Date().getFullYear()} Niva K. Built with React & Vite.
        </span>

        <a className="back-top" href="#home" aria-label="Back to top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
