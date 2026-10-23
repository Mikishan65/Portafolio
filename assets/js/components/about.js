import { aboutFocus, profilePillars, siteMeta } from "../data/portfolioData.js";

function renderPillarCard(pillar, index) {
  return `
    <article class="pillar-card reveal" data-spotlight>
      <div class="pillar-icon-box">
        <i class="${pillar.icon}" aria-hidden="true"></i>
      </div>
      <div class="pillar-content">
        <span class="pillar-number" aria-hidden="true">0${index + 1}</span>
        <h3 class="pillar-title">${pillar.title}</h3>
        <p class="pillar-desc">${pillar.desc}</p>
      </div>
    </article>
  `;
}

export function createAboutSection() {
  return `
    <section id="about" class="section about-section">
      <div class="section-shell">
        <div class="section-header reveal">
          <div class="section-header-badge">
            <i class="fa-solid fa-user-gear" aria-hidden="true"></i>
            <span>ENFOQUE DE INGENIERÍA</span>
          </div>
          <h2 class="section-title">
            No me quedo en una sola capa del problema.
          </h2>
          <p class="section-subtitle">
            Entiendo el producto de software, construyo la solución, aseguro su calidad funcional y gestiono su llegada a producción. Esta perspectiva integral garantiza sistemas que no fallan en vivo.
          </p>
        </div>

        <div class="pillars-grid">
          ${profilePillars.map(renderPillarCard).join("")}
        </div>

        <div class="principles-banner reveal">
          <div class="principles-header">
            <i class="fa-solid fa-compass" aria-hidden="true"></i>
            <strong>Principios que guían cada entrega técnica:</strong>
          </div>
          <div class="principles-grid">
            ${aboutFocus
              .map(
                (item) => `
              <div class="principle-item">
                <span class="principle-check" aria-hidden="true">✔</span>
                <p>${item}</p>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
