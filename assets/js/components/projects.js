import { projects } from "../data/portfolioData.js";

function getProjectCategory(project) {
  const signal = `${project.title} ${project.tags.join(" ")}`.toLowerCase();
  if (/vps|dokploy|docker|devops|dns/.test(signal)) return "devops";
  if (/mascotas|mobile|react native/.test(signal)) return "mobile";
  if (/base de datos|inventario|sql|postgresql|desktop/.test(signal)) return "data";
  return "web";
}

function renderProject(project, index) {
  const category = getProjectCategory(project);
  const labels = { devops: "Infraestructura", mobile: "Producto móvil", data: "Datos", web: "Producto web" };

  return `
    <article class="project-case project-case-${(index % 3) + 1} reveal" data-category="${category}">
      <div class="project-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</div>
      <div class="project-main">
        <div class="project-meta">
          <span>${labels[category]}</span>
          <span>Proyecto implementado</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <ul class="project-tags" aria-label="Tecnologías">
          ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
      </div>
      <div class="project-glyph" aria-hidden="true"><i class="${project.icon}"></i></div>
    </article>
  `;
}

export function createProjectsSection() {
  return `
    <section id="projects" class="section projects-section">
      <div class="section-shell">
        <div class="section-intro reveal">
          <p class="section-label">Trabajo seleccionado</p>
          <h2>Soluciones que cruzan la línea de llegada.</h2>
          <p>De la arquitectura y los datos al despliegue real. Cada pieza muestra una parte distinta del recorrido.</p>
        </div>

        <div class="filter-bar reveal" role="group" aria-label="Filtrar proyectos">
          <button class="filter-button is-active" type="button" data-project-filter="all" aria-pressed="true">Todos</button>
          <button class="filter-button" type="button" data-project-filter="devops" aria-pressed="false">Infraestructura</button>
          <button class="filter-button" type="button" data-project-filter="web" aria-pressed="false">Web</button>
          <button class="filter-button" type="button" data-project-filter="mobile" aria-pressed="false">Móvil</button>
          <button class="filter-button" type="button" data-project-filter="data" aria-pressed="false">Datos</button>
        </div>

        <div class="project-list">${projects.map(renderProject).join("")}</div>
      </div>
    </section>
  `;
}
