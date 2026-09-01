import { stackSkills } from "../data/portfolioData.js";

const workTraits = [
  ["Ágil", "Avanzo por iteraciones y convierto requisitos en entregas concretas."],
  ["Adaptable", "Puedo moverme entre código, QA, datos e infraestructura sin perder el objetivo."],
  ["Autodidacta", "Investigo, pruebo y documento hasta dominar lo necesario para resolver."],
  ["Práctico", "Priorizo soluciones mantenibles que funcionen en el entorno real."],
  ["Perseverante", "Sostengo el esfuerzo hasta estabilizar la entrega y cerrar el problema."]
];

export function createHighlightsSection() {
  return `
    <section id="highlights" class="section highlights-section">
      <div class="section-shell highlights-layout">
        <div class="trait-side reveal">
          <p class="section-label">Cómo trabajo</p>
          <h2>La actitud también forma parte del stack.</h2>
          <div class="trait-rotator" aria-live="polite">
            <span>Ahora:</span><strong data-rotating-trait>Ágil</strong>
          </div>
        </div>

        <div class="trait-list">
          ${workTraits
            .map(
              ([name, description]) => `
              <article class="trait-row reveal" data-trait="${name}">
                <span aria-hidden="true">↗</span>
                <h3>${name}</h3>
                <p>${description}</p>
              </article>`
            )
            .join("")}
        </div>

        <div class="capability-band reveal">
          <p>Capacidades operativas</p>
          <div>${stackSkills.map((skill) => `<span>${skill}</span>`).join("")}</div>
        </div>
      </div>
    </section>
  `;
}
