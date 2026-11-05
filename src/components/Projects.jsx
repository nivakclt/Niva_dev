const projects = [
  {
    number: '01',
    title: 'Redux E-Commerce Cart',
    type: 'E-COMMERCE WEB APPLICATION',
    description:
      'Built an e-commerce application using React and Redux Toolkit with product browsing, cart management, quantity updates, and a responsive user interface.',
    tags: ['React', 'Redux Toolkit', 'JavaScript', 'Bootstrap'],
    style: 'project-art-one',
    link: 'https://github.com/nivakclt/Ecart_Regex',
  },
  {
    number: '02',
    title: 'BookShelf Web Application',
    type: 'FULL STACK WEB APPLICATION',
    description:
      'Developed a bookstore application with book management, user authentication, and admin features using React, Node.js, Express.js, and MongoDB.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    style: 'project-art-two',
    link: 'https://github.com/nivakclt',
  },
  {
    number: '03',
    title: 'Resume Builder',
    type: 'REACT WEB APPLICATION',
    description:
      'Created a React-based resume builder that allows users to create and customize resumes with PDF export functionality.',
    tags: ['React', 'Axios', 'Canvas', 'jsPDF'],
    style: 'project-art-one',
    link: 'https://github.com/nivakclt',
  },
];

function ProjectArtwork({ variant, number }) {
  return (
    <div className={`project-art ${variant}`} aria-hidden="true">
      <div className="art-window"><span /><span /><span /><i>{number} / SELECTED WORK</i></div>
      <div className="art-shape art-shape-one" />
      <div className="art-shape art-shape-two" />
      <div className="art-caption">MAKE IT<br /><b>MATTER.</b></div>
      <div className="art-grid-lines" />
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading project-heading reveal">
          <div><p className="eyebrow">03 — SELECTED WORK</p><h2>Things I&apos;ve <span className="muted-heading">made.</span></h2></div>
          <p className="heading-aside">A few projects that reflect how I think,<br />build, and keep learning.</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project-card reveal${index ? ' reveal-delay-1' : ''}`} key={project.number}>
              <a className="project-art-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                <ProjectArtwork variant={project.style} number={project.number} />
              </a>
              <div className="project-info">
                <div className="project-meta"><span>{project.number} / {project.type}</span><span className="project-tags">{project.tags.join(' · ')}</span></div>
                <div className="project-title-row">
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <a className="round-arrow" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="projects-note reveal"><span>✳</span> Replace these sample cards with your real projects and links.</p>
      </div>
    </section>
  );
}
