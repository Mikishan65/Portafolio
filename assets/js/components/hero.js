import { heroHighlights, heroStats, siteMeta } from "../data/portfolioData.js";

function renderHighlight(item) {
  return `<span class="tag-pill"><i class="${item.icon}"></i>${item.text}</span>`;
}

function renderStat(item) {
  return `<div class="metric-strip reveal" data-reveal="right"><strong>${item.value}</strong><span>${item.label}</span></div>`;
}

function renderMarqueeChip(text) {
  return `<span class="marquee-chip">${text}</span>`;
}

export function createHero() {
  const marqueeItems = [
    "Full Stack",
    "QA Engineer",
    "Frontend",
    "Backend",
    "APIs REST",
    "Scrum / Kanban",
    "SQL",
    "Azure",
    "Testing"
  ];

  const marqueeRow = marqueeItems.map(renderMarqueeChip).join("");

  return `
    <header id="home" class="hero section-block">
      <div class="container">
        <div class="hero-shell">
          <div class="hero-grid">
            <div class="hero-copy reveal" data-reveal="left">
              <p class="eyebrow">Portafolio profesional 2026</p>
              <div class="hero-ribbons">
                <span class="ribbon-badge">Full Stack</span>
                <span class="ribbon-badge">QA First</span>
              </div>
              <h1>${siteMeta.headline} <span>sin sacrificar velocidad</span></h1>
              <p class="hero-description">
                Soy <strong>${siteMeta.fullName}</strong>. ${siteMeta.bio}
              </p>

              <div class="hero-actions">
                <a class="btn-main" href="#projects"><i class="fa-solid fa-code-branch"></i>Ver proyectos</a>
                <a class="btn-ghost" href="#contact"><i class="fa-solid fa-paper-plane"></i>Contactar</a>
              </div>

              <div class="tag-list">
                ${heroHighlights.map(renderHighlight).join("")}
              </div>
            </div>

            <aside class="hero-side">
              <div class="profile-header reveal" data-reveal="right" style="--delay: 120ms">
                <img class="profile-photo" src="${siteMeta.avatar}" alt="Foto de ${siteMeta.shortName}" />
                <div>
                  <h2>${siteMeta.fullName}</h2>
                  <p>${siteMeta.role}</p>
                </div>
              </div>

              <div class="metric-strips">
                ${heroStats.map(renderStat).join("")}
              </div>

              <div class="hero-side-note reveal" data-reveal="right" style="--delay: 210ms">
                <span>Enfoque actual</span>
                <p>Construyo interfaces, lógica de negocio y pruebas con una misma línea de trabajo para entregar productos más sólidos.</p>
              </div>
            </aside>
          </div>

          <div class="hero-marquee" aria-hidden="true">
            <div class="marquee-track">
              ${marqueeRow}
              ${marqueeRow}
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}
