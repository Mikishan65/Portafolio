import { certificationsList, siteMeta } from "../data/portfolioData.js";

function getCategory(category) {
  const value = category.toLowerCase();
  if (/redes|soporte|cisco|infraestructura/.test(value)) return "network";
  if (/programación|frontend|python|web/.test(value)) return "development";
  if (/calidad|qa/.test(value)) return "quality";
  return "academic";
}

function renderCertCard(cert, index) {
  const catKey = getCategory(cert.category);

  return `
    <article class="cert-card reveal" data-category="${catKey}" data-spotlight>
      <div class="cert-card-top">
        <div class="cert-icon-wrapper" style="--cert-tint: ${cert.badgeColor || '#5B4FE9'};">
          <i class="${cert.icon}" aria-hidden="true"></i>
        </div>
        <div class="cert-badge-pill">
          <i class="fa-solid fa-certificate" aria-hidden="true"></i>
          <span>${cert.category}</span>
        </div>
      </div>

      <div class="cert-body">
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-issuer"><i class="fa-solid fa-award" aria-hidden="true"></i> ${cert.issuer}</p>
        <p class="cert-description">${cert.description}</p>
      </div>

      <div class="cert-footer">
        <span class="cert-date"><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${cert.date}</span>
        <span class="cert-verified-tag"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Verificado</span>
      </div>
    </article>
  `;
}

export function createCertificationsSection() {
  return `
    <section id="certifications" class="section cert-section">
      <div class="section-shell">
        <div class="section-header reveal">
          <div class="section-header-badge">
            <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>
            <span>EVIDENCIA Y CERTIFICACIONES</span>
          </div>
          <h2 class="section-title">
            Conocimiento respaldado con acreditaciones oficiales.
          </h2>
          <p class="section-subtitle">
            Certificaciones en programación, redes Cisco, infraestructura y aseguramiento de calidad verificables en el CV 2026.
          </p>
        </div>

        <div class="filter-toolbar reveal" role="group" aria-label="Filtrar certificaciones">
          <button class="filter-btn is-active" type="button" data-cert-filter="all" aria-pressed="true">
            <span>Todas</span>
            <small>(${certificationsList.length})</small>
          </button>
          <button class="filter-btn" type="button" data-cert-filter="development" aria-pressed="false">
            <span>Desarrollo</span>
          </button>
          <button class="filter-btn" type="button" data-cert-filter="network" aria-pressed="false">
            <span>Redes Cisco</span>
          </button>
          <button class="filter-btn" type="button" data-cert-filter="quality" aria-pressed="false">
            <span>QA Testing</span>
          </button>
          <button class="filter-btn" type="button" data-cert-filter="academic" aria-pressed="false">
            <span>Académico</span>
          </button>
        </div>

        <div class="cert-grid">
          ${certificationsList.map(renderCertCard).join("")}
        </div>

        <div class="cert-cta-strip reveal">
          <p>¿Deseas verificar los certificados oficiales en alta resolución?</p>
          <a class="btn-primary" href="${siteMeta.cvUrl}" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
            <span>Descargar CV con Certificados</span>
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  `;
}
