const tools = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Tailwind CSS',
  'Redux Toolkit',
  'Git & GitHub',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Next.js',
];
export default function About() {
  return (
   
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">02 — A LITTLE ABOUT ME</p>
          <h2>Curious by nature.<br /><span className="muted-heading">Developer by craft.</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="lead-copy">I care about the details people feel, even when they don&apos;t see them.</p>
            <p>
              I build web experiences that balance clear design with practical engineering.
              I like breaking down complex ideas, learning new tools, and making interfaces feel
              simple and considered.
            </p>
            <p>
              I&apos;m always looking for the next interesting problem to solve and the next way to
              get a little better at my craft.
            </p>
            <a className="text-link" href="#contact">More about working together <span aria-hidden="true">↗</span></a>
          </div>

          <div className="about-card reveal reveal-delay-1">
            <div className="card-topline"><span>TOOLKIT</span><span>01—05</span></div>
            <h3>Things I work with</h3>
            <p className="toolkit-note">A growing set of tools for building on the web.</p>
            <div className="tool-list">
              {tools.map((tool, index) => (
                <div className="tool-row" key={tool}>
                  <span className="tool-number">0{index + 1}</span><span>{tool}</span><span className="tool-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
