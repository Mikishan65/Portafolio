import { siteMeta } from "../data/portfolioData.js";

export function createContactSection() {
  return `
    <section id="contact" class="contact-section">
      <div class="contact-orbit" aria-hidden="true">¿Construimos algo? · ¿Construimos algo? ·</div>
      <div class="contact-shell">
        <p class="section-label">Siguiente movimiento</p>
        <h2>Una vacante o un proyecto.<br><em>Hagámoslo funcionar.</em></h2>
        <p class="contact-lede">Puedo integrarme a tu equipo o ayudarte a llevar una solución desde la idea hasta producción.</p>

        <div class="contact-paths">
          <a href="mailto:${siteMeta.email}?subject=Oportunidad%20laboral%20para%20Miguel%20Angel" class="contact-path">
            <span>Quiero conversar sobre</span>
            <strong>Una oportunidad laboral</strong>
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
          <a href="${siteMeta.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="contact-path contact-path-dark">
            <span>Quiero conversar sobre</span>
            <strong>Un proyecto o servicio</strong>
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div class="contact-details">
          <a href="mailto:${siteMeta.email}">${siteMeta.email}</a>
          <a href="tel:${siteMeta.phone}">${siteMeta.phoneDisplay}</a>
          <span>${siteMeta.locationShort}</span>
        </div>
      </div>
    </section>
  `;
}
