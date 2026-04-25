import { technologies } from "../data/portfolioData.js";

function renderTech(item, index) {
  const direction = index % 2 === 0 ? "left" : "right";

  return `
    <article class="stack-line reveal" data-reveal="${direction}" style="--delay: ${index * 55}ms">
      <div class="stack-line-icon" style="--tech-color: ${item.color}"><i class="${item.icon}"></i></div>
      <div class="stack-line-copy">
        <h3>${item.name}</h3>
        <p>${item.detail}</p>
      </div>
    </article>
  `;
}

export function createTechnologiesSection() {
  return `
    <section id="technologies" class="section-block">
      <div class="container info-shell">
        <div class="section-head reveal" data-reveal="left">
          <p class="eyebrow">Tecnologias</p>
          <h2 class="section-title"><span class="icon-badge"><i class="fa-solid fa-laptop-code"></i></span>Stack de trabajo</h2>
          <p class="section-subtitle">Herramientas que uso para desarrollar, probar y desplegar.</p>
        </div>

        <div class="stack-layout">
          <div class="stack-copy reveal" data-reveal="left" style="--delay: 70ms">
            <span class="anchor-mark">Stack</span>
            <h3>Tecnologia al servicio del producto, no de la decoracion.</h3>
            <p>
              Frontend, backend, datos, testing y despliegue organizados como un flujo continuo de trabajo.
            </p>
          </div>

          <div class="stack-lines">
            ${technologies.map(renderTech).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
