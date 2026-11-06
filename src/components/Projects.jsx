const projects = [
  {
    number: '01',
    title: 'Redux E-Commerce Cart',
    type: 'E-COMMERCE WEB APPLICATION',
    description:
      'Developed a responsive e-commerce application featuring product listings, shopping cart management, and wishlist functionality. Implemented cart and wishlist state management using Redux Toolkit to maintain application data across components. Integrated REST APIs to fetch product data and display products dynamically in the user interface.',
    tags: ['React', 'Redux Toolkit', 'JavaScript', 'Bootstrap'],
    style: 'project-art-one',
    link: 'https://ecart-regex.vercel.app/',
  },
  {
    number: '02',
    title: 'BookShelf Web Application',
    type: 'FULL STACK WEB APPLICATION',
    description:
      'Architected a full-stack online bookstore using React.js, Node.js, Express.js, and MongoDB with user-friendly and responsive interfaces. Implemented JWT authentication, role-based access control, book management, and CRUD operations for users and administrators. Integrated Stripe for secure online payments and Google Gemini AI to automatically generate book abstracts based on the entered title to enhance book purchasing and user experience',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    style: 'project-art-two',
    link: 'https://book-store-frontend-tau-plum.vercel.app/',
  },
  {
    number: '03',
    title: 'Resume Builder',
    type: 'REACT WEB APPLICATION',
    description:
      'Architected a React-based resume builder with form-based data entry and resume preview functionality .Integrated backend APIs using Axios to save and retrieve resume data. Implemented PDF export functionality using html2canvas and jsPDF to enable resume downloads',
    tags: ['React', 'Axios', 'Canvas', 'jsPDF'],
    style: 'project-art-one',
    link: 'https://resume-builder-react-fe.vercel.app/',
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
      </div>
    </section>
  );
}
