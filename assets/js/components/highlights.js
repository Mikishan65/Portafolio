import { stackSkills } from "../data/portfolioData.js";

const workTraits = [
  { name: "Ágil", icon: "fa-solid fa-bolt", desc: "Avanzo en sprints iterativos convirtiendo requerimientos en código entregable." },
  { name: "Adaptable", icon: "fa-solid fa-arrows-split-up-and-left", desc: "Me muevo con fluidez entre frontend, backend, QA funcional e infraestructura VPS." },
  { name: "Autodidacta", icon: "fa-solid fa-book-open-reader", desc: "Investigo la documentación oficial y aplico nuevas tecnologías rápidamente." },
  { name: "Práctico", icon: "fa-solid fa-wrench", desc: "Priorizo arquitecturas limpias y código mantenible que no genere deuda técnica." },
  { name: "Perseverante", icon: "fa-solid fa-shield", desc: "Sostengo la depuración y pruebas hasta estabilizar el entorno de producción." }
];

export function createHighlightsSection() {
  return `
    <section id="highlights" class="section highlights-section">
      <div class="section-shell">
        <div class="section-header reveal">
          <div class="section-header-badge">
            <i class="fa-solid fa-lightbulb" aria-hidden="true"></i>
            <span>COMPETENCIAS Y ACTITUD</span>
          </div>
          <h2 class="section-title">
            La disciplina técnica también es parte del stack.
          </h2>
          <p class="section-subtitle">
            Cualidades profesionales que garantizan compromiso, comunicación clara y entregas puntuales.
          </p>
        </div>

        <div class="traits-grid">
          ${workTraits
            .map(
              (trait, index) => `
            <article class="trait-card reveal" data-spotlight>
              <div class="trait-icon-box">
                <i class="${trait.icon}" aria-hidden="true"></i>
              </div>
              <h3 class="trait-name">${trait.name}</h3>
              <p class="trait-desc">${trait.desc}</p>
            </article>`
            )
            .join("")}
        </div>

        <div class="capabilities-box reveal">
          <div class="capabilities-header">
            <i class="fa-solid fa-check-double" aria-hidden="true"></i>
            <strong>Capacidades Operativas Consolidadas:</strong>
          </div>
          <div class="capabilities-pills">
            ${stackSkills.map((skill) => `<span class="capability-pill"><i class="fa-solid fa-check" aria-hidden="true"></i> ${skill}</span>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
