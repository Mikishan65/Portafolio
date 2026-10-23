import { academicHighlights, educationEntries } from "../data/portfolioData.js";

function renderScoreItem(item, index) {
  return `
    <div class="score-card reveal">
      <div class="score-badge">
        <span class="score-value">${item.score}</span>
      </div>
      <div class="score-text">
        <h4 class="score-title">${item.subject}</h4>
        <p class="score-note">${item.note}</p>
      </div>
    </div>
  `;
}

function renderEducationCard(entry) {
  return `
    <article class="edu-card reveal" data-spotlight>
      <div class="edu-icon-col">
        <span class="edu-icon-circle"><i class="${entry.icon}" aria-hidden="true"></i></span>
      </div>
      <div class="edu-main">
        <div class="edu-header">
          <span class="edu-period">${entry.period}</span>
          <span class="edu-status-badge">${entry.statusBadge}</span>
        </div>
        <h3 class="edu-title">${entry.title}</h3>
        <h4 class="edu-subtitle">${entry.subtitle}</h4>
        <p class="edu-detail">${entry.detail}</p>
      </div>
    </article>
  `;
}

export function createEducationSection() {
  return `
    <section id="education" class="section education-section">
      <div class="section-shell">
        <div class="section-header reveal">
          <div class="section-header-badge">
            <i class="fa-solid fa-building-columns" aria-hidden="true"></i>
            <span>FORMACIÓN ACADÉMICA</span>
          </div>
          <h2 class="section-title">
            Una base sólida demostrable en cada materia.
          </h2>
          <p class="section-subtitle">
            Ingeniería de Sistemas en la Universidad UDI culminada con excelencia en desarrollo de software, auditoría de sistemas e infraestructura.
          </p>
        </div>

        <!-- Academic Telemetry Strip -->
        <div class="academic-telemetry-banner reveal">
          <div class="telemetry-stat">
            <span class="telemetry-number">54</span>
            <div class="telemetry-info">
              <strong>Materias Aprobadas</strong>
              <small>Plan de Estudios 360 UDI Completo</small>
            </div>
          </div>
          <div class="telemetry-divider" aria-hidden="true"></div>
          <div class="telemetry-stat">
            <span class="telemetry-number">100<small>/100</small></span>
            <div class="telemetry-info">
              <strong>Desarrollo Web I</strong>
              <small>Calificación de Excelencia</small>
            </div>
          </div>
          <div class="telemetry-divider" aria-hidden="true"></div>
          <div class="telemetry-stat">
            <span class="telemetry-number">99<small>/100</small></span>
            <div class="telemetry-info">
              <strong>Taller de Grado II & Práctica</strong>
              <small>Proyecto de Titulación</small>
            </div>
          </div>
        </div>

        <div class="scores-grid">
          ${academicHighlights.slice(0, 6).map(renderScoreItem).join("")}
        </div>

        <div class="education-institutions-list">
          ${educationEntries.map(renderEducationCard).join("")}
        </div>
      </div>
    </section>
  `;
}
