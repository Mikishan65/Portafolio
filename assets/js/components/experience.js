import { experienceEntries } from "../data/portfolioData.js";

function renderExperience(entry, index) {
  return `
    <li class="route-stop reveal">
      <div class="route-time">
        <span class="route-number">${String(index + 1).padStart(2, "0")}</span>
        <span>${entry.period}</span>
      </div>
      <article class="route-content">
        <div class="route-heading">
          <div>
            <p>${entry.company}</p>
            <h3>${entry.role}</h3>
          </div>
          <span class="route-badge">${entry.badge}</span>
        </div>
        <ul class="route-tasks">
          ${entry.tasks.map((task) => `<li>${task}</li>`).join("")}
        </ul>
        <div class="route-tags">${entry.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </article>
    </li>
  `;
}

export function createExperienceSection() {
  return `
    <section id="experience" class="section experience-section">
      <div class="section-shell experience-layout">
        <div class="experience-sticky reveal">
          <p class="section-label">Trayectoria</p>
          <h2>Aprender rápido.<br>Resolver mejor.<br><em>Entregar estable.</em></h2>
          <p>Una ruta que une salud, control de calidad, equipos ágiles e infraestructura para clientes.</p>
        </div>
        <ol class="route-list">${experienceEntries.map(renderExperience).join("")}</ol>
      </div>
    </section>
  `;
}
