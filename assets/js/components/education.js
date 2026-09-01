import { academicHighlights, educationEntries } from "../data/portfolioData.js";

export function createEducationSection() {
  return `
    <section id="education" class="section education-section">
      <div class="section-shell">
        <div class="education-title reveal">
          <p class="section-label">Formación</p>
          <h2>Una base académica que sí se puede comprobar.</h2>
        </div>

        <div class="academic-proof">
          <div class="proof-summary reveal">
            <strong>54</strong>
            <span>materias aprobadas</span>
            <p>Plan de Ingeniería de Sistemas culminado en la UDI, en etapa final de titulación.</p>
          </div>
          <div class="score-ribbon" role="list" aria-label="Calificaciones destacadas">
            ${academicHighlights
              .slice(0, 5)
              .map(
                (item) => `
                <article class="score-item reveal" role="listitem">
                  <strong>${item.score}</strong>
                  <h3>${item.subject}</h3>
                  <p>${item.note}</p>
                </article>`
              )
              .join("")}
          </div>
        </div>

        <div class="education-path">
          ${educationEntries
            .map(
              (entry) => `
              <article class="education-entry reveal">
                <span><i class="${entry.icon}" aria-hidden="true"></i></span>
                <div>
                  <p>${entry.period} · ${entry.statusBadge}</p>
                  <h3>${entry.title}</h3>
                  <strong>${entry.subtitle}</strong>
                  <p>${entry.detail}</p>
                </div>
              </article>`
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
