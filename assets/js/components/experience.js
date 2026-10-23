import { experienceEntries, siteMeta } from "../data/portfolioData.js";

function renderTimelineItem(entry, index) {
  const livePill = entry.liveUrl
    ? `<a href="${entry.liveUrl}" target="_blank" rel="noopener noreferrer" class="timeline-live-badge" title="Visitar desarrollo en vivo en producción">
         <span class="live-blink" aria-hidden="true"></span>
         <span>ccepcoin.tech ↗</span>
       </a>`
    : "";

  return `
    <li id="${entry.id}" class="timeline-step reveal" data-spotlight>
      <div class="timeline-rail" aria-hidden="true">
        <span class="rail-node" style="--node-accent: ${entry.color};">
          <i class="${entry.icon}" aria-hidden="true"></i>
        </span>
        <span class="rail-number">0${index + 1}</span>
      </div>

      <article class="timeline-card" style="--card-tint: ${entry.color};">
        <div class="timeline-card-head">
          <div class="timeline-badge-group">
            <span class="timeline-role-badge" style="--badge-accent: ${entry.color};">
              <i class="${entry.icon}" aria-hidden="true"></i>
              ${entry.badge}
            </span>
            ${livePill}
          </div>
          <div class="timeline-period-pill">
            <i class="fa-regular fa-calendar-check" aria-hidden="true"></i>
            <span>${entry.period}</span>
          </div>
        </div>

        <div class="timeline-title-row">
          <h3 class="role-title">${entry.role}</h3>
          <div class="company-sub-row">
            <strong class="company-name">${entry.company}</strong>
            <span class="company-loc"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${entry.location}</span>
          </div>
        </div>

        <ul class="timeline-tasks">
          ${entry.tasks.map((task) => `<li><span class="task-bullet" aria-hidden="true">▹</span><span>${task}</span></li>`).join("")}
        </ul>

        <div class="timeline-proof-strip">
          <div class="proof-content">
            <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
            <span><strong>Hito Verificable:</strong> ${entry.proof}</span>
          </div>
          ${entry.liveUrl ? `<a href="${entry.liveUrl}" target="_blank" rel="noopener noreferrer" class="proof-external-link">Probar sitio en vivo ↗</a>` : ''}
        </div>

        <div class="timeline-tags">
          ${entry.tags.map((tag) => `<span class="tech-chip">${tag}</span>`).join("")}
        </div>
      </article>
    </li>
  `;
}

export function createExperienceSection() {
  return `
    <section id="experience" class="section experience-section">
      <div class="section-shell experience-container">
        <!-- Sticky Career Command Center -->
        <div class="experience-sidebar reveal">
          <div class="sidebar-sticky-box">
            <span class="eyebrow"><i class="fa-solid fa-briefcase" aria-hidden="true"></i> TRAYECTORIA LABORAL · 2024 — 2026</span>
            <h2 class="section-title">
              Del código a producción.<br>
              <em>En el mundo real.</em>
            </h2>
            <p class="experience-lead">
              Una ruta profesional demostrable que conecta desarrollo de software en salud, aseguramiento de calidad (QA) certificado por DATEC, metodologías ágiles e infraestructura en servidores VPS con Dokploy.
            </p>

            <!-- Career Telemetry Stat Cards -->
            <div class="experience-telemetry-grid">
              <div class="exp-stat-card">
                <span class="exp-stat-num">4</span>
                <div class="exp-stat-info">
                  <strong>Roles Verificados</strong>
                  <small>CV Oficial 2026</small>
                </div>
              </div>
              <div class="exp-stat-card">
                <span class="exp-stat-num">100%</span>
                <div class="exp-stat-info">
                  <strong>Entregables Reales</strong>
                  <small>En producción y testeados</small>
                </div>
              </div>
              <div class="exp-stat-card">
                <span class="exp-stat-num">0</span>
                <div class="exp-stat-info">
                  <strong>Regresiones QA</strong>
                  <small>Matrices Jira & Zephyr</small>
                </div>
              </div>
            </div>

            <!-- Quick Station Navigator -->
            <div class="experience-stations-nav" role="navigation" aria-label="Navegar por estaciones laborales">
              <span class="stations-nav-label"><i class="fa-solid fa-route" aria-hidden="true"></i> Estaciones del recorrido:</span>
              <div class="stations-pills-row">
                <button type="button" class="station-jump-btn" data-jump-station="exp-ccepcoin">
                  <span>01</span> ccepcoin.tech
                </button>
                <button type="button" class="station-jump-btn" data-jump-station="exp-sofia">
                  <span>02</span> Sofia
                </button>
                <button type="button" class="station-jump-btn" data-jump-station="exp-datec">
                  <span>03</span> DATEC QA
                </button>
                <button type="button" class="station-jump-btn" data-jump-station="exp-hospital">
                  <span>04</span> Hospital
                </button>
              </div>
            </div>

            <a class="experience-cv-cta underlink" href="${siteMeta.cvUrl}" target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
              <span>Ver trayectoria completa en PDF</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <!-- Timeline Spine & Cards -->
        <ol class="timeline-list">
          ${experienceEntries.map(renderTimelineItem).join("")}
        </ol>
      </div>
    </section>
  `;
}
