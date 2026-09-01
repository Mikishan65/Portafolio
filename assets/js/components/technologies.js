import { technologies } from "../data/portfolioData.js";

const categoryLabels = {
  frontend: "Experiencias",
  backend: "Lógica y APIs",
  devops: "Producción",
  qa: "Calidad",
  database: "Datos",
  tools: "Flujo de trabajo"
};

function renderTechnology(technology, index) {
  return `
    <li class="tech-word tech-word-${(index % 5) + 1} reveal" tabindex="0">
      <i class="${technology.icon}" aria-hidden="true"></i>
      <span>${technology.name}</span>
      <small>${technology.detail}</small>
    </li>
  `;
}

export function createTechnologiesSection() {
  const categories = [...new Set(technologies.map((technology) => technology.category))];

  return `
    <section id="technologies" class="section technology-section">
      <div class="section-shell technology-layout">
        <div class="technology-intro reveal">
          <p class="section-label">Caja de herramientas</p>
          <h2>La tecnología cambia. La capacidad de aprender, no.</h2>
          <p>Trabajo con un stack amplio porque cada problema pide una combinación distinta. Toca o enfoca cada herramienta para ver dónde la aplico.</p>
          <div class="category-key">
            ${categories.map((category) => `<span>${categoryLabels[category] || category}</span>`).join("")}
          </div>
        </div>
        <ul class="tech-cloud" aria-label="Tecnologías y herramientas">
          ${technologies.map(renderTechnology).join("")}
        </ul>
      </div>
    </section>
  `;
}
