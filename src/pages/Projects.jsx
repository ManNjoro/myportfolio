import React from 'react';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="project-tile">These are some of my works</h2>
        <div className="cards">
          <div className="card">
            <a href="https://mannjoro.github.io/akanp/">
              <img src="assets/img/akan.png" alt="akan names" />
              <div className="card-description">
                <h3>Akan Names</h3>
                <p>Description of Akan Names project goes here.</p>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="https://mannjoro.github.io/duka/">
              <img src="assets/img/duka.png" alt="duka" />
              <div className="card-description">
                <h3>Duka</h3>
                <p>Description of Duka project goes here.</p>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="https://mannjoro.github.io/parlour/">
              <img src="assets/img/parlour.png" alt="Beauty parlour" />
              <div className="card-description">
                <h3>Beauty Parlour</h3>
                <p>Description of Beauty Parlour project goes here.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
