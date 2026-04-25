import { siteMeta, socialLinks } from "../data/portfolioData.js";

function renderSocial(link) {
  return `<a href="${link.href}" aria-label="${link.label}" ${link.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}><i class="${link.icon}"></i></a>`;
}

function renderContactLine(label, value, href, index) {
  const direction = index % 2 === 0 ? "left" : "right";
  const content = href
    ? `<a href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${value}</a>`
    : `<strong>${value}</strong>`;

  return `
    <div class="contact-line reveal" data-reveal="${direction}" style="--delay: ${90 + index * 70}ms">
      <span class="contact-label">${label}</span>
      <div class="contact-value">${content}</div>
    </div>
  `;
}

export function createContactSection() {
  const contactLines = [
    ["Correo", siteMeta.email, `mailto:${siteMeta.email}`],
    ["Telefono", siteMeta.phone, `tel:${siteMeta.phone}`],
    ["Portafolio", siteMeta.portfolioUrl, siteMeta.portfolioUrl],
    ["Ubicacion", siteMeta.location, ""]
  ];

  return `
    <section id="contact" class="section-block">
      <div class="container info-shell">
        <div class="section-head reveal" data-reveal="left">
          <p class="eyebrow">Contacto</p>
          <h2 class="section-title"><span class="icon-badge"><i class="fa-solid fa-paper-plane"></i></span>Disponible para colaborar</h2>
          <p class="section-subtitle">Si quieres conversar sobre oportunidades o proyectos, escribeme por el canal que te quede mejor.</p>
        </div>

        <div class="contact-stage">
          <div class="contact-copy reveal" data-reveal="left" style="--delay: 60ms">
            <span class="anchor-mark">Contacto</span>
            <h3>${siteMeta.fullName}</h3>
            <p>${siteMeta.role}</p>
            <div class="social-links social-links-inline">
              ${socialLinks.map(renderSocial).join("")}
            </div>
          </div>

          <div class="contact-route">
            ${contactLines.map((line, index) => renderContactLine(line[0], line[1], line[2], index)).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
