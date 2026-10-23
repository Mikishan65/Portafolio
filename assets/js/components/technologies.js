import { technologies } from "../data/portfolioData.js";

const categoryLabels = {
  frontend: "Frontend & Mobile",
  backend: "Backend & APIs",
  devops: "Cloud & DevOps",
  qa: "QA & Testing",
  database: "Bases de Datos",
  tools: "Herramientas"
};

function renderTechCard(tech, index) {
  return `
    <article class="tech-item-card reveal" data-category="${tech.category}" data-spotlight tabindex="0">
      <div class="tech-card-inner">
        <div class="tech-icon-wrapper" style="--brand-color: ${tech.color || '#5B4FE9'};">
          <i class="${tech.icon}" aria-hidden="true"></i>
        </div>
        <div class="tech-details">
          <span class="tech-category-tag">${categoryLabels[tech.category] || tech.category}</span>
          <h3 class="tech-name">${tech.name}</h3>
          <p class="tech-desc">${tech.detail}</p>
        </div>
      </div>
    </article>
  `;
}

export function createTechnologiesSection() {
  const categories = Object.keys(categoryLabels);

  return `
    <section id="technologies" class="section tech-section">
      <div class="section-shell">
        <div class="section-header reveal">
          <div class="section-header-badge">
            <i class="fa-solid fa-microchip" aria-hidden="true"></i>
            <span>STACK TECNOLÓGICO</span>
          </div>
          <h2 class="section-title">
            Herramientas para construir y estabilizar.
          </h2>
          <p class="section-subtitle">
            Un conjunto de tecnologías seleccionadas para cubrir desde la interfaz de usuario hasta la infraestructura y monitoreo en servidores Linux.
          </p>
        </div>

        <div class="tech-filter-bar reveal" role="group" aria-label="Filtrar por área tecnológica">
          <button class="tech-filter-btn is-active" type="button" data-tech-filter="all" aria-pressed="true">
            <span>Todos</span>
          </button>
          ${categories
            .map(
              (cat) => `
            <button class="tech-filter-btn" type="button" data-tech-filter="${cat}" aria-pressed="false">
              <span>${categoryLabels[cat]}</span>
            </button>`
            )
            .join("")}
        </div>

        <div class="tech-grid">
          ${technologies.map(renderTechCard).join("")}
        </div>
      </div>
    </section>
  `;
}
