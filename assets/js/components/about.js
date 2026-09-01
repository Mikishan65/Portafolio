import { aboutFocus, profilePillars, siteMeta } from "../data/portfolioData.js";

function renderPillar(pillar, index) {
  return `
    <article class="system-node system-node-${index + 1} reveal">
      <span class="node-icon"><i class="${pillar.icon}" aria-hidden="true"></i></span>
      <div><h3>${pillar.title}</h3><p>${pillar.desc}</p></div>
    </article>
  `;
}

export function createAboutSection() {
  return `
    <section id="about" class="section about-section">
      <div class="section-shell">
        <div class="about-manifesto reveal">
          <p class="section-label">Mi forma de trabajar</p>
          <h2>No me quedo en una sola capa del problema.</h2>
          <p class="manifesto-copy">Entiendo el producto, construyo la solución, compruebo su calidad y acompaño su llegada a producción. Esa amplitud me permite adaptarme sin perder el foco práctico.</p>
        </div>

        <div class="system-map" role="group" aria-label="Áreas de dominio">
          <div class="system-core reveal" data-tilt>
            <span>Ingeniería integral</span>
            <strong><span>Código</span><span>a</span><span class="core-word">producción</span></strong>
            <small>${siteMeta.locationShort}</small>
          </div>
          ${profilePillars.map(renderPillar).join("")}
        </div>

        <div class="principles-strip">
          <p>Lo que guía cada entrega</p>
          <ul>${aboutFocus.map((item) => `<li class="reveal"><span aria-hidden="true">↗</span>${item}</li>`).join("")}</ul>
        </div>
      </div>
    </section>
  `;
}
