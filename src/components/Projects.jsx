function ECommercePreview() {
  return (
    <div className="preview-canvas ecommerce-canvas" aria-hidden="true">
      <div className="preview-chrome">
        <div className="chrome-dots">
          <span /><span /><span />
        </div>
        <span className="chrome-title">ecart.store // REDUX STATE</span>
        <span className="chrome-tag">CART: 2 ITEMS · $189.90</span>
      </div>
      <div className="preview-body ecommerce-body">
        <div className="ecom-product-card">
          <div className="ecom-product-meta">
            <span className="ecom-badge">In Stock</span>
            <span className="ecom-sku">SKU #9042</span>
          </div>
          <div className="ecom-product-title">Wireless ANC Headphones</div>
          <div className="ecom-price-row">
            <span className="ecom-price">$129.99</span>
            <span className="ecom-action">dispatch(addToCart)</span>
          </div>
        </div>
        <div className="ecom-cart-panel">
          <div className="ecom-panel-header">
            <span>Redux State Tree</span>
            <span className="ecom-status">SYNCED</span>
          </div>
          <div className="ecom-cart-row">
            <span>Headphones (x1)</span>
            <span>$129.99</span>
          </div>
          <div className="ecom-cart-row">
            <span>Mechanical Keyboard (x1)</span>
            <span>$59.91</span>
          </div>
          <div className="ecom-total-row">
            <span>Subtotal</span>
            <span>$189.90</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookShelfPreview() {
  return (
    <div className="preview-canvas bookshelf-canvas" aria-hidden="true">
      <div className="preview-chrome">
        <div className="chrome-dots">
          <span /><span /><span />
        </div>
        <span className="chrome-title">bookshelf.app // FULL-STACK ARCHITECTURE</span>
        <div className="chrome-badges">
          <span className="chrome-badge ai">Gemini AI Active</span>
          <span className="chrome-badge auth">JWT Authenticated</span>
        </div>
      </div>
      <div className="preview-body bookshelf-body">
        <div className="book-card-main">
          <div className="book-meta-top">
            <span className="book-genre">COMPUTER SCIENCE</span>
            <span className="book-rating">★ 4.9 · CRUD / ADMIN READY</span>
          </div>
          <div className="book-title">Designing Data-Intensive Applications</div>
          <div className="book-author">Martin Kleppmann · In Stock ($34.99)</div>
          <div className="book-ai-box">
            <div className="ai-box-label">
              <span className="ai-spark">✳</span> Google Gemini AI Abstract Generation
            </div>
            <p className="ai-box-text">
              Automated synthesis: Explores architectural trade-offs across storage engines, distributed consensus, and fault-tolerant streaming pipelines.
            </p>
          </div>
        </div>
        <div className="book-stack-sidebar">
          <div className="stack-pill"><span>DB:</span> MongoDB Atlas</div>
          <div className="stack-pill"><span>API:</span> Express REST</div>
          <div className="stack-pill"><span>UI:</span> React Client</div>
          <div className="stack-pill"><span>PAY:</span> Stripe Gateway</div>
        </div>
      </div>
    </div>
  );
}

function ResumeBuilderPreview() {
  return (
    <div className="preview-canvas resume-canvas" aria-hidden="true">
      <div className="preview-chrome">
        <div className="chrome-dots">
          <span /><span /><span />
        </div>
        <span className="chrome-title">builder.engine // DOCUMENT COMPILER</span>
        <span className="chrome-tag">FORMAT: ATS COMPLIANT</span>
      </div>
      <div className="preview-body resume-body">
        <div className="resume-sheet">
          <div className="resume-sheet-header">
            <div className="resume-name">Niva K</div>
            <div className="resume-sub">Full-Stack Developer · React & Node.js</div>
          </div>
          <div className="resume-section">
            <div className="resume-sec-title">DYNAMIC SECTIONS</div>
            <div className="resume-item">
              <span className="resume-bullet">▹</span>
              <span>Full-Stack Architecture & RESTful API integration</span>
            </div>
            <div className="resume-item">
              <span className="resume-bullet">▹</span>
              <span>Client-side state & responsive interface systems</span>
            </div>
          </div>
        </div>
        <div className="resume-export-panel">
          <div className="export-title">Export Pipeline</div>
          <div className="export-step"><span>01</span> Form Data Serializer</div>
          <div className="export-step"><span>02</span> Axios API Storage</div>
          <div className="export-step active"><span>03</span> jsPDF + html2canvas</div>
          <div className="export-button">Download PDF (248 KB) ↗</div>
        </div>
      </div>
    </div>
  );
}

const featuredProject = {
  number: '01',
  title: 'BookShelf Web Application',
  type: 'FEATURED // FULL-STACK WEB APPLICATION',
  description:
    'Architected a full-stack online bookstore using React.js, Node.js, Express.js, and MongoDB with user-friendly and responsive interfaces. Implemented JWT authentication, role-based access control, book management, and CRUD operations for users and administrators. Integrated Stripe for secure online payments and Google Gemini AI to automatically generate book abstracts based on the entered title to enhance book purchasing and user experience.',
  tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'Stripe'],
  link: 'https://book-store-frontend-tau-plum.vercel.app/',
  Preview: BookShelfPreview,
};

const supportingProjects = [
  {
    number: '02',
    title: 'Redux E-Commerce Cart',
    type: 'E-COMMERCE WEB APPLICATION',
    description:
      'Developed a responsive e-commerce application featuring product listings, shopping cart management, and wishlist functionality. Implemented cart and wishlist state management using Redux Toolkit to maintain application data across components. Integrated REST APIs to fetch product data and display products dynamically in the user interface.',
    tags: ['React', 'Redux Toolkit', 'JavaScript', 'Bootstrap'],
    link: 'https://ecart-regex.vercel.app/',
    Preview: ECommercePreview,
  },
  {
    number: '03',
    title: 'Resume Builder',
    type: 'REACT WEB APPLICATION',
    description:
      'Architected a React-based resume builder with form-based data entry and resume preview functionality. Integrated backend APIs using Axios to save and retrieve resume data. Implemented PDF export functionality using html2canvas and jsPDF to enable resume downloads.',
    tags: ['React', 'Axios', 'Canvas', 'jsPDF'],
    link: 'https://resume-builder-react-fe.vercel.app/',
    Preview: ResumeBuilderPreview,
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading project-heading reveal">
          <div>
            <p className="eyebrow">03 // SELECTED WORK</p>
            <h2>
              Things I&apos;ve <span className="muted-heading">built.</span>
            </h2>
          </div>
          <p className="heading-aside">
            Production web applications reflecting practical engineering,<br />
            clean state architecture, and user-centered design.
          </p>
        </div>

        {/* Featured Flagship Project */}
        <div className="featured-project-wrapper reveal">
          <article className="project-card project-card-featured">
            <a
              className="project-preview-link"
              href={featuredProject.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${featuredProject.title}`}
            >
              <featuredProject.Preview />
            </a>

            <div className="project-info">
              <div className="project-meta">
                <span className="project-badge-feat">
                  {featuredProject.number} // {featuredProject.type}
                </span>
                <span className="project-tags">{featuredProject.tags.join(' · ')}</span>
              </div>
              <div className="project-title-row">
                <div>
                  <h3>{featuredProject.title}</h3>
                  <p>{featuredProject.description}</p>
                </div>
                <a
                  className="project-launch-btn"
                  href={featuredProject.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View live ${featuredProject.title}`}
                >
                  Live Demo <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Supporting Projects (Balanced 2-Column Grid) */}
        <div className="supporting-projects-grid">
          {supportingProjects.map((project, index) => (
            <article
              className={`project-card supporting-card reveal reveal-delay-${index + 1}`}
              key={project.number}
            >
              <a
                className="project-preview-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
              >
                <project.Preview />
              </a>

              <div className="project-info">
                <div className="project-meta">
                  <span>{project.number} // {project.type}</span>
                  <span className="project-tags">{project.tags.join(' · ')}</span>
                </div>
                <div className="project-title-row">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <a
                    className="round-arrow"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title}`}
                  >
                    ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
