import React, { useState } from 'react';


const Certificates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const certificatesPerPage = 3;

  const certificates = [ 
    { 
      name: "UI / UX Design", 
      issuer: "California Institute of the Arts", 
      image: "uiuxd.png", // Use string filename like others
      link: "https://coursera.org/share/a26f7a5992a28d3608c4f877ffc35a9f" 
    }, 
    { 
      name: "Ethics in the Age of AI", 
      issuer: "LearnQuest", 
      image: "eitaoa.png", // Use string filename like others
      link: "https://coursera.org/share/0de25a313ef53a9d73971200278d3581" 
    }, 
    { 
      name: "Introduction to Computer Science and Programming", 
      issuer: "University of London", 
      image: "itcsap.png", 
      link: "https://coursera.org/share/cdc12bf0c783d9ecf8ea15f806b1509c" 
    }, 
    { 
      name: "Engineering Practices for Building Quality Software", 
      issuer: "University of Minnesota", 
      grade: "97.22%", 
      image: "epfbqs.png", 
      link: "https://coursera.org/share/68e90e9f9db87d4ff8ec3620097ed73a"     
    }, 
    { 
      name: "Web Design: Strategy and Information Architecture", 
      issuer: "California Institute of the Arts", 
      grade: "94.41%", 
      image: "wds.png", 
      link: "https://coursera.org/share/81b10903ff546f210937f50c36b37cb0" 
    }, 
    { 
      name: "Data Warehouse Concepts, Design, and Data Integration", 
      issuer: "University of Colorado System", 
      grade: "89.68%", 
      image: "dw.png", 
      link: "https://coursera.org/share/03ed1f99f8d37dbff875dd4568cda924" 
    }, 
    { 
      name: "Web Design: Wireframes to Prototypes", 
      issuer: "California Institute of the Arts", 
      grade: "95%", 
      image: "wbdw.png", 
      link: "https://coursera.org/share/d239f8526bdd107466cd011c2cbacc4d" 
    }, 
    { 
      name: "UX Design Fundamentals", 
      issuer: "California Institute of the Arts", 
      grade: "95.41%", 
      image: "uxdf.png", 
      link: "https://coursera.org/share/a9d4ca605f30bad0d07af4ddcea056be" 
    }, 
    { 
      name: "Introduction to Graph Theory", 
      issuer: "University of California San Diego", 
      grade: "100%", 
      image: "itgt.png", 
      link: "https://coursera.org/share/3539dfc36d819478553f2b5f25ee2c75" 
    }, 
    { 
      name: "Cyber-Physical Systems: Modeling and Simulation", 
      issuer: "University of California, Santa Cruz", 
      grade: "98.83%", 
      image: "cps.png", 
      link: "https://coursera.org/share/64f3739184f29d0a1ec519a923a90ab3" 
    }, 
    { 
      name: "Visual Elements of User Interface Design", 
      issuer: "California Institute of the Arts", 
      grade: "89.25%", 
      image: "veu.png", 
      link: "https://coursera.org/share/af1589762f4576a160f9b86082800562" 
    }, 
    { 
      name: "Data Science Methodology", 
      issuer: "IBM", 
      grade: "97%", 
      image: "dsm.png", 
      link: "https://coursera.org/share/eb2193ac0d9dabf0716853ba47160d60" 
    }, 
    { 
      name: "Computer Simulations", 
      issuer: "University of California, Davis", 
      grade: "92.84%", 
      image: "cs.png", 
      link: "https://coursera.org/share/09a2fb162be5e9106d95383f43b24ac8" 
    }, 
    { 
      name: "Introduction to Software Engineering", 
      issuer: "IBM", 
      grade: "91.20%", 
      image: "ise.png", 
      link: "https://coursera.org/share/4ac65ad156a50f813736805b5ac9e210" 
    }, 
    { 
      name: "Artificial Intelligence Data Fairness and Bias", 
      issuer: "LearnQuest", 
      grade: "100%", 
      image: "aid.png", 
      link: "https://coursera.org/share/06ed51bfa18736b6e5a8e48f9797b2e6" 
    }, 
    { 
      name: "Data Structures", 
      issuer: "University of California San Diego", 
      grade: "96%", 
      image: "ds.png", 
      link: "https://coursera.org/share/fd5b75fbf9c944aa0070a10483bbbcee" 
    }, 
    { 
      name: "Combinatorics and Probability", 
      issuer: "University of California San Diego", 
      grade: "100%", 
      image: "cap.png", 
      link: "https://coursera.org/share/3c66758d683d0d147748f3f66b22e237" 
    }, 
    { 
      name: "Artificial Intelligence Ethics in Action", 
      issuer: "LearnQuest", 
      grade: "100%", 
      image: "aie.png", 
      link: "https://coursera.org/share/5574ecac98da0f14b4a735db3ec88449" 
    }, 
    { 
      name: "Physics 102 - Electric Charges and Fields", 
      issuer: "Rice University", 
      grade: "100%", 
      image: "p62.png", 
      link: "https://coursera.org/share/a78d9be99df7ae3f889d959b23da9788" 
    }, 
    { 
      name: "Physics 101 - Forces and Kinematics", 
      issuer: "Rice University", 
      grade: "84.77%", 
      image: "p61.png", 
      link: "https://coursera.org/share/3775f7c60e814e93a3ccb669f47de2ab" 
    }, 
    { 
      name: "Artificial Intelligence Privacy and Convenience", 
      issuer: "LearnQuest", 
      grade: "100%", 
      image: "aip.png", 
      link: "https://coursera.org/share/406b68866d03c4bf525848f89cad901f" 
    }, 
    { 
      name: "Artificial Intelligence Algorithms Models and Limitations", 
      issuer: "LearnQuest", 
      grade: "100%", 
      image: "aia.png", 
      link: "https://coursera.org/share/e44a2255b71d67e8ef0b2d9c0c41e7ab" 
    }, 
    { 
      name: "Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming", 
      issuer: "Stanford University", 
      grade: "100%", 
      image: "gam.png", 
      link: "https://coursera.org/share/2292ddfea836e86fef1859727ba4ef33" 
    }, 
    { 
      name: "Python Classes and Inheritance", 
      issuer: "University of Michigan", 
      grade: "100%", 
      image: "pci.png", 
      link: "https://coursera.org/share/4a332f55a7a02ab00c6a2c11f43d6210" 
    }, 
    { 
      name: "Mathematics for Computer Science", 
      issuer: "University of London, Goldsmiths, University of London", 
      grade: "93.62%", 
      image: "mcs.png", 
      link: "https://coursera.org/share/e00ed4808ecf8a27a62623ee3786fbfd" 
    }, 
    { 
      name: "Introduction to Computer Programming", 
      issuer: "University of London, Goldsmiths, University of London", 
      grade: "83%", 
      image: "icp.png", 
      link: "https://coursera.org/share/79e7da00430b1e5134c578ee546e77a3" 
    }, 
    { 
      name: "How Computers Work", 
      issuer: "University of London, Goldsmiths, University of London", 
      grade: "92.28%", 
      image: "hcw.png", 
      link: "https://coursera.org/share/c909b8d261d7186ba5585343b8175a26" 
    }, 
    { 
      name: "Python Data Structures", 
      issuer: "University of Michigan", 
      grade: "97.60%", 
      image: "pds.png", 
      link: "https://coursera.org/share/aeff7fac3760056e22028bf622ba8998" 
    }, 
    { 
      name: "Database Management Essentials", 
      issuer: "University of Colorado System", 
      grade: "99.09%", 
      image: "dme.png", 
      link: "https://coursera.org/share/c097c81d18780e2de00fa659d03edfd4" 
    }, 
    { 
      name: "Programming for Everybody (Getting Started with Python)", 
      issuer: "University of Michigan", 
      grade: "97.52%", 
      image: "p4e.png", 
      link: "https://coursera.org/share/de2baaa1a9dbc2e633c031c3caa17cec" 
    } 
  ];

  const totalPages = Math.ceil(certificates.length / certificatesPerPage);
  const startIndex = (currentPage - 1) * certificatesPerPage;
  const currentCertificates = certificates.slice(startIndex, startIndex + certificatesPerPage);

  const handlePageChange = (page) => {
    if (page === currentPage || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Add exit animation
    setTimeout(() => {
      setCurrentPage(page);
      // Add enter animation delay
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleViewCertificate = (link) => {
    window.open(link, '_blank');
  };

  const getCategoryFromIssuer = (issuer) => {
    if (issuer.includes('California Institute of the Arts')) return 'ARTS';
    if (issuer.includes('LearnQuest')) return 'AI';
    if (issuer.includes('University of London')) return 'CS';
    if (issuer.includes('IBM')) return 'IBM';
    if (issuer.includes('Stanford')) return 'STANFORD';
    if (issuer.includes('Michigan')) return 'PYTHON';
    if (issuer.includes('Colorado')) return 'DATA';
    if (issuer.includes('San Diego')) return 'MATH';
    if (issuer.includes('Rice')) return 'PHYSICS';
    if (issuer.includes('Davis')) return 'SIM';
    if (issuer.includes('Santa Cruz')) return 'CPS';
    if (issuer.includes('Minnesota')) return 'SE';
    return 'CERT';
  };

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="certificates-content">
          <div className="section-header">
            <h2 className="gradient-text">Certificates</h2>
          </div>
          
          <div className="certificates-container">
            <div 
              className={`certificates-grid-new ${
                isTransitioning ? 'transitioning-out' : 'transitioning-in'
              }`}
              style={{
                transform: isTransitioning ? 'translateX(-100px)' : 'translateX(0)',
                opacity: isTransitioning ? 0 : 1,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {currentCertificates.map((cert, index) => (
                <div 
                  key={`${currentPage}-${index}`} 
                  className="certificate-card"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="certificate-image-container">
                    <div className="certificate-category">{getCategoryFromIssuer(cert.issuer)}</div>
                    <img src={`/${cert.image}`} alt={cert.name} className="certificate-image" />
                    {cert.grade && (
                      <div className="certificate-grade">{cert.grade}</div>
                    )}
                  </div>
                  <div className="certificate-info">
                    <h3 className="certificate-title">{cert.name}</h3>
                    <p className="certificate-institution">{cert.issuer}</p>
                    <button 
                      className="view-certificate-btn"
                      onClick={() => handleViewCertificate(cert.link)}
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
                disabled={isTransitioning}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .certificates-container {
          overflow: hidden;
          position: relative;
        }
        
        .certificates-grid-new {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }
        
        .certificate-card {
          animation: slideInFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
          transform: translateX(50px);
        }
        
        .transitioning-in .certificate-card {
          animation: slideInFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes slideInFromRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default Certificates;