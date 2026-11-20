
function ECommercePreview() {
  const products = [
    { icon: '🎧', name: 'Wireless Headphones', price: '$129.99', bg: '#e5eafa' },
    { icon: '⌚', name: 'Smart Watch', price: '$89.99', bg: '#e8e4f6' },
    { icon: '📷', name: 'Digital Camera', price: '$249.99', bg: '#f5e9df' },
    { icon: '🎮', name: 'Gaming Controller', price: '$69.99', bg: '#e2eee8' },
  ];

  return (
    <div className="preview-canvas ecommerce-canvas" aria-hidden="true">
      <div className="preview-chrome">
        <div className="chrome-dots"><span /><span /><span /></div>
        <span className="chrome-title">ecart.store // ONLINE SHOPPING</span>
        <span className="chrome-tag">CART: 2 ITEMS</span>
      </div>

      <div style={{ background: '#f8f9fc', color: '#20243a', padding: '15px 22px', minHeight: 235 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid #e8e9ef', paddingBottom: 12, gap: 8
        }}>
          <strong style={{ fontSize: 19, color: '#5544a5', letterSpacing: '-1px' }}>ecart.</strong>
          <span style={{ fontSize: 10, color: '#606477' }}>Home　 Products　 Categories</span>
          <span style={{ fontSize: 10, color: '#5544a5' }}>♡　🛒 2</span>
        </div>

        <div style={{
          background: 'linear-gradient(110deg, #e9e8fa, #dce9f7)',
          borderRadius: 9, padding: '17px 20px', marginTop: 13,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div>
            <span style={{ color: '#6556a9', fontSize: 8, letterSpacing: 1.5 }}>NEW COLLECTION</span>
            <h3 style={{ fontSize: 20, margin: '7px 0', color: '#252641' }}>Upgrade Your Everyday.</h3>
            <p style={{ fontSize: 9, color: '#65677d', margin: '0 0 10px' }}>
              Find products you'll love.
            </p>
            <span style={{
              background: '#6556a9', color: 'white', padding: '7px 12px',
              borderRadius: 4, fontSize: 9, display: 'inline-block'
            }}>Shop Now →</span>
          </div>
          <div style={{ fontSize: 52, paddingRight: 14 }}>🎧</div>
        </div>

        <div style={{ marginTop: 14 }}>
          <strong style={{ fontSize: 12 }}>Trending Products</strong>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 9, marginTop: 9
          }}>
            {products.map((product) => (
              <div key={product.name} style={{
                background: '#fff', borderRadius: 6, padding: 7,
                boxShadow: '0 2px 8px #2526410c', minWidth: 0
              }}>
                <div style={{
                  height: 55, background: product.bg, borderRadius: 4,
                  display: 'grid', placeItems: 'center', fontSize: 25
                }}>{product.icon}</div>
                <p style={{
                  fontSize: 8, fontWeight: 600, margin: '6px 0 3px',
                  color: '#303249'
                }}>{product.name}</p>
                <strong style={{ fontSize: 9, color: '#6556a9' }}>{product.price}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BookShelfPreview() {
  const books = [
    { title: 'Atomic Habits', author: 'James Clear', price: '$18.99', cover: '#8063a9', text: '#fff' },
    { title: 'The Alchemist', author: 'Paulo Coelho', price: '$14.50', cover: '#d6b58a', text: '#35291e' },
    { title: 'Deep Work', author: 'Cal Newport', price: '$21.00', cover: '#416b87', text: '#fff' },
    { title: 'Ikigai', author: 'Héctor García', price: '$16.99', cover: '#9c7862', text: '#fff' },
  ];

  return (
    <div className="preview-canvas bookshelf-canvas" aria-hidden="true">
      <div className="preview-chrome">
        <div className="chrome-dots"><span /><span /><span /></div>
        <span className="chrome-title">bookshelf.app // YOUR ONLINE BOOKSTORE</span>
        <span className="chrome-tag">EXPLORE BOOKS</span>
      </div>

      <div style={{
        background: '#faf8f5', color: '#302c36',
        minHeight: 235, padding: '14px 22px'
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', borderBottom: '1px solid #e9e3dc',
          paddingBottom: 11, gap: 8
        }}>
          <strong style={{ fontSize: 18, color: '#765c91' }}>BookShelf.</strong>
          <span style={{ fontSize: 10, color: '#716a73' }}>Home　 Books　 Categories</span>
          <span style={{ fontSize: 10, color: '#765c91' }}>Search　 ♡　 🛒</span>
        </div>

        <div style={{
          background: 'linear-gradient(110deg, #eee6f2, #f5eadb)',
          borderRadius: 8, padding: '16px 19px',
          marginTop: 12, display: 'flex',
          justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div>
            <span style={{
              fontSize: 8, letterSpacing: 1.5,
              color: '#876b9b'
            }}>A WORLD OF STORIES AWAITS</span>
            <h3 style={{
              fontSize: 21, lineHeight: 1.2,
              margin: '7px 0', color: '#342b40'
            }}>Discover Your Next Favorite Book.</h3>
            <p style={{ fontSize: 9, color: '#716878', margin: '0 0 10px' }}>
              Stories, knowledge and inspiration in one place.
            </p>
            <span style={{
              background: '#765c91', color: '#fff',
              padding: '7px 12px', borderRadius: 4,
              fontSize: 9, display: 'inline-block'
            }}>Explore Books →</span>
          </div>

          <div style={{ display: 'flex', gap: 5, alignItems: 'center', paddingRight: 8 }}>
            {books.slice(0, 3).map((book) => (
              <div key={book.title} style={{
                width: 37, height: 66, background: book.cover,
                color: book.text, display: 'grid', placeItems: 'center',
                textAlign: 'center', fontSize: 7, fontWeight: 700,
                padding: 3, boxShadow: '3px 4px 7px #0003'
              }}>{book.title.toUpperCase()}</div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 13 }}>
          <strong style={{ fontSize: 12 }}>Featured Books</strong>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 10, marginTop: 8
          }}>
            {books.map((book) => (
              <div key={book.title} style={{ minWidth: 0 }}>
                <div style={{
                  height: 65, background: book.cover, color: book.text,
                  display: 'grid', placeItems: 'center', textAlign: 'center',
                  fontSize: 9, fontWeight: 700, padding: 5,
                  borderRadius: 3, boxShadow: '2px 3px 6px #0002'
                }}>{book.title.toUpperCase()}</div>
                <p style={{
                  fontSize: 8, fontWeight: 600,
                  margin: '5px 0 2px', color: '#3c3541'
                }}>{book.title}</p>
                <span style={{ fontSize: 7, color: '#827985' }}>{book.author}</span>
                <p style={{
                  fontSize: 9, color: '#765c91',
                  fontWeight: 700, margin: '3px 0'
                }}>{book.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeBuilderPreview() {
  return (
    <div className="preview-canvas resume-canvas" aria-hidden="true">
      <div className="preview-chrome">
        <div className="chrome-dots"><span /><span /><span /></div>
        <span className="chrome-title">resumebuilder.app // EDITOR</span>
        <span className="chrome-tag">PDF EXPORT</span>
      </div>

      <div style={{
        background: '#e9eaf1', minHeight: 235, padding: '14px 17px',
        color: '#25273b'
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', marginBottom: 12
        }}>
          <strong style={{ fontSize: 15, color: '#5d5196' }}>ResumeCraft.</strong>
          <span style={{ fontSize: 9, color: '#77788a' }}>My Resumes　 Templates　 Help</span>
          <span style={{
            background: '#6556a9', color: '#fff',
            padding: '7px 10px', borderRadius: 4, fontSize: 8
          }}>Download PDF ↓</span>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '0.85fr 1.15fr',
          gap: 13, alignItems: 'stretch'
        }}>
          <div style={{
            background: '#fff', borderRadius: 6, padding: 12,
            boxShadow: '0 2px 8px #0000000d'
          }}>
            <span style={{
              color: '#8978c0', fontSize: 8,
              letterSpacing: 1
            }}>RESUME EDITOR</span>
            <h3 style={{ fontSize: 14, margin: '7px 0 10px' }}>
              Build your resume
            </h3>
            {['Personal Details', 'Education', 'Experience', 'Skills', 'Projects'].map((item, i) => (
              <div key={item} style={{
                padding: '7px 5px', marginBottom: 5,
                background: i === 0 ? '#f0edfa' : '#f7f7fa',
                borderRadius: 3, fontSize: 8,
                color: i === 0 ? '#6556a9' : '#66677a'
              }}>✦　{item}</div>
            ))}
          </div>

          <div style={{
            background: '#fff', padding: '15px 16px',
            boxShadow: '0 3px 10px #00000014',
            minHeight: 180
          }}>
            <h2 style={{
              fontSize: 19, margin: 0,
              color: '#302e45'
            }}>Niva K</h2>
            <span style={{
              color: '#7767ad', fontSize: 8
            }}>FULL-STACK DEVELOPER</span>
            <hr style={{
              border: 0, borderTop: '1px solid #e5e2eb',
              margin: '9px 0'
            }} />
            <strong style={{ fontSize: 8, color: '#574b85' }}>PROFILE</strong>
            <p style={{
              fontSize: 8, lineHeight: 1.5,
              color: '#6a6975', margin: '4px 0 8px'
            }}>Motivated developer passionate about building responsive web applications.</p>
            <strong style={{ fontSize: 8, color: '#574b85' }}>EDUCATION</strong>
            <p style={{
              fontSize: 8, color: '#6a6975',
              margin: '4px 0 8px'
            }}>Bachelor of Computer Applications</p>
            <strong style={{ fontSize: 8, color: '#574b85' }}>TECHNICAL SKILLS</strong>
            <p style={{
              fontSize: 8, color: '#6a6975',
              margin: '4px 0'
            }}>React · JavaScript · Node.js · MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotelyPreview() {
  return (
    <div className="preview-canvas notely-canvas" aria-hidden="true">
      <div className="preview-chrome">
        <div className="chrome-dots">
          <span /><span /><span />
        </div>
        <span className="chrome-title">notely.app // YOUR DIGITAL NOTEBOOK</span>
        <span className="chrome-tag">MY WORKSPACE</span>
      </div>

      <div className="preview-body notely-body">
        <div className="notely-sidebar">
          <div className="notely-logo">Notely.</div>
          <div className="notely-menu-item active">▤ All Notes</div>
          <div className="notely-menu-item">☆ Favorites</div>
          <div className="notely-menu-item">▣ Archived</div>
          <div className="notely-menu-item">⚙ Settings</div>
        </div>

        <div className="notely-content">
          <div className="notely-heading">
            <div>
              <span className="notely-label">YOUR WORKSPACE</span>
              <div className="notely-title">My Notes</div>
            </div>
            <span className="notely-add">+ New Note</span>
          </div>

          <div className="notely-notes-grid">
            <div className="notely-note paper-one">
              <span>PERSONAL</span>
              <strong>Ideas & Inspiration</strong>
              <p>Collecting thoughts, plans and creative ideas.</p>
            </div>

            <div className="notely-note paper-two">
              <span>STUDY</span>
              <strong>Learning Journal</strong>
              <p>Important concepts and development notes.</p>
            </div>

            <div className="notely-note paper-three">
              <span>PROJECTS</span>
              <strong>Project Planning</strong>
              <p>Tasks, progress and upcoming goals.</p>
            </div>
          </div>
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
  {
    number: '04',
    title: 'Notely – Notes Management Application',
    type: 'FULL-STACK WEB APPLICATION',
    description:
      'Developed a notes management application that provides an organized workspace for creating and managing personal notes. Designed an intuitive interface with a premium stationery-inspired visual style.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: 'https://notely-nine-omega.vercel.app/',
    Preview: NotelyPreview,
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
                <span className="project-tags">
                  {featuredProject.tags.join(' · ')}
                </span>
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

        {/* Supporting Projects */}
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
                  <span className="project-tags">
                    {project.tags.join(' · ')}
                  </span>
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
