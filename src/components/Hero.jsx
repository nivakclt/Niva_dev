export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid container">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> DEVELOPER PORTFOLIO</p>
          <h1>Building digital<br />things with <span className="accent-text">purpose.</span></h1>
          <p className="hero-description">
            Hey, I&apos;m <strong>Niva</strong> — a developer who enjoys turning thoughtful ideas into
            clean, useful experiences on the web.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
            <a className="button button-quiet" href="/resume.pdf" target="_blank" rel="noreferrer">View résumé <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-footnote"><span className="scroll-line" /> Scroll to explore</div>
        </div>

        <div className="hero-visual reveal reveal-delay-1" aria-label="Portrait of Niva">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="portrait-frame">
            <img src="/niva.png" alt="Niva" />
            <div className="portrait-overlay" />
          </div>
          <div className="visual-label label-top"><span className="label-square" /> FOCUSED ON THE DETAILS</div>
          <div className="visual-label label-bottom"><span>✳</span> DESIGN-MINDED DEVELOPMENT</div>
          <div className="visual-index">01 <span>/ 04</span></div>
        </div>
      </div>
      <div className="hero-divider container"><span>01 — INTRODUCTION</span><span>SCROLL DOWN <b>↓</b></span></div>
    </section>
  );
}
