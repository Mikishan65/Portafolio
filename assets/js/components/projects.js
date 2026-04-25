import { projects } from "../data/portfolioData.js";

function renderProject(project, index) {
  return `
    <article class="project-row reveal" style="--delay: ${80 + index * 70}ms">
      <div class="project-row-content">
        <h3 class="huge-text">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
      <div class="project-row-icon"><i class="${project.icon}"></i></div>
    </article>
  `;
}

export function createProjectsSection() {
  return `
    <section id="projects" class="section-block god-section">
      <div class="container-fluid">
        <div class="section-head reveal">
          <h2 class="massive-title">Proyectos Seleccionados.</h2>
        </div>
        <div class="project-list">
          ${projects.map(renderProject).join("")}
        </div>
      </div>
    </section>
  `;
}

