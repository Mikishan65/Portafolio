import { aboutFocus, siteMeta } from "../data/portfolioData.js";

function renderFocus(item, index) {
  const direction = index % 2 === 0 ? "left" : "right";
  const marker = String(index + 1).padStart(2, "0");

  return `
    <div class="focus-line reveal" data-reveal="${direction}" style="--delay: ${80 + index * 60}ms">
      <span class="focus-index">${marker}</span>
      <p>${item}</p>
    </div>
  `;
}

function renderSignal(item, index) {
  const direction = index % 2 === 0 ? "right" : "left";

  return `
    <div class="signal-item reveal" data-reveal="${direction}" style="--delay: ${180 + index * 60}ms">
      <span class="signal-label">${item.label}</span>
      <strong class="signal-value">${item.value}</strong>
    </div>
  `;
}

export function createAboutSection() {
  const profileSignals = [
    { label: "Area", value: "Full Stack" },
    { label: "Metodo", value: "QA + ejecucion" },
    { label: "Trabajo", value: "Git y colaboracion" },
    { label: "Infra", value: "Azure y despliegue" }
  ];

  return `
    <section id="about" class="section-block">
      <div class="container info-shell">
        <div class="section-head reveal" data-reveal="left">
          <p class="eyebrow">Sobre mi</p>
          <h2 class="section-title"><span class="icon-badge"><i class="fa-solid fa-user"></i></span>Perfil profesional</h2>
          <p class="section-subtitle">
            Aprendizaje rapido, pensamiento analitico y foco en entregables que funcionen en produccion.
          </p>
        </div>

        <div class="info-stream">
          <article class="info-anchor reveal" data-reveal="left" style="--delay: 60ms">
            <span class="anchor-mark">Perfil</span>
            <h3>${siteMeta.role}</h3>
            <p>
              Trabajo con desarrollo web y movil, uso Git/GitHub para colaboracion y acompano cada entrega con pruebas
              funcionales para reducir errores antes de publicar.
            </p>
          </article>

          <div class="info-flow">
            <div class="focus-stream">
              ${aboutFocus.map(renderFocus).join("")}
            </div>

            <div class="signal-stack">
              ${profileSignals.map(renderSignal).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
