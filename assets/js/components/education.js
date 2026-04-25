import { educationEntries } from "../data/portfolioData.js";

function renderEducation(item, index) {
  const marker = String(index + 1).padStart(2, "0");
  const direction = index % 2 === 0 ? "left" : "right";

  return `
    <article class="rail-item reveal" data-reveal="${direction}" style="--delay: ${70 + index * 70}ms">
      <span class="rail-number">${marker}</span>
      <div class="rail-icon"><i class="${item.icon}"></i></div>
      <div class="rail-copy">
        <p class="rail-label">${item.subtitle}</p>
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </div>
    </article>
  `;
}

export function createEducationSection() {
  return `
    <section id="education" class="section-block">
      <div class="container info-shell">
        <div class="section-head reveal" data-reveal="left">
          <p class="eyebrow">Educacion</p>
          <h2 class="section-title"><span class="icon-badge"><i class="fa-solid fa-graduation-cap"></i></span>Formacion academica</h2>
          <p class="section-subtitle">Base tecnica y academica para desarrollo de software.</p>
        </div>

        <div class="rail-list education-rail">
          ${educationEntries.map(renderEducation).join("")}
        </div>
      </div>
    </section>
  `;
}
