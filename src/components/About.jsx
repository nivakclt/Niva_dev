const skillCategories = [
  {
    category: 'Frontend',
    code: '01',
    skills: [
      'React',
      'Next.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'Redux Toolkit',
    ],
  },
  {
    category: 'Backend & Database',
    code: '02',
    skills: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    category: 'Development Tools',
    code: '03',
    skills: ['Git & GitHub'],
  },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading reveal about-heading">
          <div className="about-heading-content">
            <p className="eyebrow">02 // ABOUT ME</p>
            <h2>
              Curious by nature.<br />
              <span className="muted-heading">Developer by craft.</span>
            </h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="lead-copy">
              I care about the details people feel, even when they
              don&apos;t see them.
            </p>
            <p>
              I build web experiences that balance clear design with
              practical engineering. I like breaking down complex ideas,
              learning new tools, and making interfaces feel simple
              and considered.
            </p>
            <p>
              I&apos;m always looking for the next interesting problem to solve
              and the next way to get a little better at my craft.
            </p>
            <a className="text-link" href="#contact">
              More about working together
              <span className="link-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="about-card reveal reveal-delay-1">
            <div className="card-topline">
              <span>TECHNICAL TOOLKIT</span>
              <span>12 TECHNOLOGIES</span>
            </div>
            <h3>Technologies & Stack</h3>
            <p className="toolkit-note">
              Organized across frontend architecture, server runtime, and tooling.
            </p>

            <div className="skill-categories">
              {skillCategories.map((group) => (
                <div className="skill-group" key={group.category}>
                  <div className="skill-group-heading">
                    <span className="skill-group-code">{group.code} //</span>
                    <span className="skill-group-title">{group.category}</span>
                  </div>
                  <div className="skill-badges">
                    {group.skills.map((skill) => (
                      <span className="skill-badge" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
