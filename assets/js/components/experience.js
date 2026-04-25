import { experienceEntries } from "../data/portfolioData.js";

function renderExperience(entry, index) {
  return `
    <div class="experience-row reveal" style="--delay: ${index * 90}ms">
      <div class="exp-left">
        <h3 class="huge-text">${entry.company}</h3>
        <p class="exp-role">${entry.role}</p>
      </div>
      <div class="exp-right">
        <p class="exp-period">${entry.period}</p>
        <ul class="exp-tasks">
          ${entry.tasks.map((task) => `<li>${task}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

export function createExperienceSection() {
  return `
    <section id="experience" class="section-block god-section">
      <div class="container-fluid">
        <div class="section-head reveal">
          <p class="eyebrow">Trayectoria</p>
          <h2 class="massive-title experience-title">Experiencia</h2>
        </div>
        <div class="experience-list">
          ${experienceEntries.map(renderExperience).join("")}
        </div>
      </div>
    </section>
  `;
}

