export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid container">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="status-dot" />
            <span>01 // INTRODUCTION</span>
          </div>

          <h1>
            Building digital<br />
            things with <span className="accent-text">purpose.</span>
          </h1>

          <p className="hero-description">
            Hey, I&apos;m <strong>Niva</strong> — a developer who enjoys turning thoughtful ideas into
            clean, useful experiences on the web.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-quiet" href="/resume.pdf" target="_blank" rel="noreferrer">
              View résumé <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-footnote">
            <span className="scroll-line" /> Scroll to explore
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-1" aria-label="Developer specification card for Niva">
          <div className="spec-card">
            <div className="spec-card-header">
              <div className="spec-card-status">
                <span className="status-dot" />
                <span>OPEN TO WORK</span>
              </div>
              <span className="spec-card-id">SPEC // DEV</span>
            </div>

            <div className="spec-card-image">
              <img src="/niva.png" alt="Niva K" />
              <div className="spec-card-overlay" />
            </div>

            <div className="spec-card-footer">
              <div className="spec-meta-item">
                <span className="spec-meta-label">Role</span>
                <span className="spec-meta-value">Full-Stack Dev</span>
              </div>
              <div className="spec-meta-item">
                <span className="spec-meta-label">Location</span>
                <span className="spec-meta-value">India</span>
              </div>
              <div className="spec-meta-item">
                <span className="spec-meta-label">Status</span>
                <span className="spec-meta-value accent">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-divider container">
        <span>01 // INTRODUCTION</span>
        <span>SCROLL DOWN <b>↓</b></span>
      </div>
    </section>
  );
}
