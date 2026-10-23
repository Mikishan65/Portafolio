import { experienceEntries } from "../data/portfolioData.js";

function renderTimelineItem(entry, index) {
  const livePill = entry.liveUrl
    ? `<a href="${entry.liveUrl}" target="_blank" rel="noopener noreferrer" class="timeline-live-badge" title="Visitar desarrollo en vivo">
         <span class="live-blink" aria-hidden="true"></span>
         <span>ccepcoin.tech</span>
         <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
       </a>`
    : "";

  return `
    <li class="timeline-step reveal" data-spotlight>
      <div class="timeline-rail" aria-hidden="true">
        <span class="rail-node">${String(index + 1).padStart(2, "0")}</span>
        <span class="rail-stem"></span>
      </div>

      <article class="timeline-card">
        <div class="timeline-card-head">
          <div class="timeline-entity">
            <div class="timeline-company-row">
              <span class="company-name">${entry.company}</span>
              ${livePill}
            </div>
            <h3 class="role-title">${entry.role}</h3>
          </div>
          <div class="timeline-period-pill">
            <i class="fa-regular fa-calendar-check" aria-hidden="true"></i>
            <span>${entry.period}</span>
          </div>
        </div>

        <ul class="timeline-tasks">
          ${entry.tasks.map((task) => `<li><span class="task-bullet" aria-hidden="true">▹</span><span>${task}</span></li>`).join("")}
        </ul>

        <div class="timeline-tags">
          ${entry.tags.map((tag) => `<span class="tech-chip">${tag}</span>`).join("")}
        </div>
      </article>
    </li>
  `;
}

export function createExperienceSection() {
  return `
    <section id="experience" class="section experience-section">
      <div class="section-shell experience-container">
        <div class="experience-sidebar reveal">
          <div class="section-header-badge">
            <i class="fa-solid fa-briefcase" aria-hidden="true"></i>
            <span>TRAYECTORIA LABORAL</span>
          </div>
          <h2 class="section-title">
            Aprender rápido.<br>
            Resolver mejor.<br>
            <em>Entregar estable.</em>
          </h2>
          <p class="experience-lead">
            Una ruta profesional comprobable que conecta desarrollo de software en salud, aseguramiento de calidad (QA) certificado, metodologías ágiles e infraestructura en la nube para clientes.
          </p>

          <div class="experience-highlights-card">
            <div class="highlight-stat">
              <strong>4</strong>
              <span>Experiencias verificadas en CV</span>
            </div>
            <div class="highlight-stat">
              <strong>100%</strong>
              <span>Orientación a entregables en producción</span>
            </div>
          </div>
        </div>

        <ol class="timeline-list">
          ${experienceEntries.map(renderTimelineItem).join("")}
        </ol>
      </div>
    </section>
  `;
}
