import { certificationsList } from "../data/portfolioData.js";

function getCategory(category) {
  const value = category.toLowerCase();
  if (/redes|soporte|cisco|infraestructura/.test(value)) return "network";
  if (/programación|frontend|python|web/.test(value)) return "development";
  if (/calidad|qa/.test(value)) return "quality";
  return "learning";
}

function renderCertificate(certificate, index) {
  return `
    <article class="evidence-row reveal" data-category="${getCategory(certificate.category)}">
      <span class="evidence-index">${String(index + 1).padStart(2, "0")}</span>
      <div class="evidence-title">
        <i class="${certificate.icon}" aria-hidden="true"></i>
        <div><h3>${certificate.title}</h3><p>${certificate.issuer}</p></div>
      </div>
      <p class="evidence-description">${certificate.description}</p>
      <time>${certificate.date}</time>
    </article>
  `;
}

export function createCertificationsSection() {
  return `
    <section id="certifications" class="section evidence-section">
      <div class="section-shell">
        <div class="evidence-head reveal">
          <div>
            <p class="section-label">Evidencia verificable</p>
            <h2>Aprendizaje convertido en práctica.</h2>
          </div>
          <p>Certificaciones y formación que respaldan el trabajo en programación, redes, infraestructura y control de calidad.</p>
        </div>

        <div class="filter-bar filter-bar-light reveal" role="group" aria-label="Filtrar certificaciones">
          <button class="filter-button is-active" type="button" data-cert-filter="all" aria-pressed="true">Todas</button>
          <button class="filter-button" type="button" data-cert-filter="development" aria-pressed="false">Desarrollo</button>
          <button class="filter-button" type="button" data-cert-filter="network" aria-pressed="false">Redes</button>
          <button class="filter-button" type="button" data-cert-filter="quality" aria-pressed="false">QA</button>
          <button class="filter-button" type="button" data-cert-filter="learning" aria-pressed="false">Otras</button>
        </div>

        <div class="evidence-list">${certificationsList.map(renderCertificate).join("")}</div>
      </div>
    </section>
  `;
}
