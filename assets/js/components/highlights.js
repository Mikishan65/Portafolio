import { certifications, stackSkills } from "../data/portfolioData.js";

function renderList(items, direction, baseDelay) {
  return items
    .map(
      (item, index) => `
        <li class="list-line reveal" data-reveal="${direction}" style="--delay: ${baseDelay + index * 55}ms">
          <span>${item}</span>
        </li>
      `
    )
    .join("");
}

export function createHighlightsSection() {
  return `
    <section id="highlights" class="section-block">
      <div class="container info-shell">
        <div class="section-head reveal" data-reveal="left">
          <p class="eyebrow">Fortalezas</p>
          <h2 class="section-title"><span class="icon-badge"><i class="fa-solid fa-star"></i></span>Certificaciones y habilidades</h2>
          <p class="section-subtitle">Formacion complementaria y stack con el que puedo aportar desde el primer sprint.</p>
        </div>

        <div class="duo-list">
          <section class="duo-column">
            <p class="column-kicker reveal" data-reveal="left" style="--delay: 90ms">Certificaciones</p>
            <ul class="list-stream">
              ${renderList(certifications, "left", 110)}
            </ul>
          </section>

          <section class="duo-column">
            <p class="column-kicker reveal" data-reveal="right" style="--delay: 130ms">Stack y skills</p>
            <ul class="list-stream">
              ${renderList(stackSkills, "right", 150)}
            </ul>
          </section>
        </div>
      </div>
    </section>
  `;
}
