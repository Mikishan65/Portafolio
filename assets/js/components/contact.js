import { siteMeta } from "../data/portfolioData.js";

export function createContactSection() {
  return `
    <section id="contact" class="section contact-section">
      <div class="section-shell">
        <div class="contact-card-stage reveal">
          <div class="contact-header">
            <span class="contact-pill"><span class="live-blink" aria-hidden="true"></span> CONVERSEMOS</span>
            <h2 class="contact-title">HAGAMOS<br><em>QUE PASE.</em></h2>
            <p class="contact-subtitle">
              Puedo unirme a tu equipo como Ingeniero de Software / QA / DevOps o ayudarte a desplegar tu infraestructura en producción.
            </p>
          </div>

          <div class="contact-cards-dual">
            <a href="mailto:${siteMeta.email}?subject=Oportunidad%20laboral%20para%20Miguel%20Angel" class="contact-route-card route-team" data-spotlight>
              <div class="route-icon-box">
                <i class="fa-solid fa-users" aria-hidden="true"></i>
              </div>
              <div class="route-content">
                <span class="route-badge">Empresas & Equipos</span>
                <strong class="route-title">Incorporación a un Equipo de TI</strong>
                <p class="route-desc">Disponible para roles de Desarrollador Full Stack, QA Engineer o DevOps en modalidades remota, híbrida o presencial.</p>
                <span class="route-cta">Enviar correo profesional <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
              </div>
            </a>

            <a href="${siteMeta.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="contact-route-card route-project" data-spotlight>
              <div class="route-icon-box">
                <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
              </div>
              <div class="route-content">
                <span class="route-badge">Proyectos & Clientes</span>
                <strong class="route-title">Desarrollo Web & Despliegue en VPS</strong>
                <p class="route-desc">Aprovisionamiento de servidores Linux, Dokploy, Docker, dominios, SSL y soporte para proyectos que requieren estabilidad.</p>
                <span class="route-cta">Chatear por WhatsApp <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
              </div>
            </a>
          </div>

          <div class="contact-direct-channels">
            <div class="email-copy-wrapper">
              <a href="mailto:${siteMeta.email}" class="direct-link">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                <span>${siteMeta.email}</span>
              </a>
              <button class="copy-email-btn" id="copy-email" type="button" aria-label="Copiar correo al portapapeles" title="Copiar correo">
                <i class="fa-regular fa-copy" id="copy-icon" aria-hidden="true"></i>
                <span id="copy-text">Copiar</span>
              </button>
            </div>
            <span class="channel-dot" aria-hidden="true">·</span>
            <a href="tel:${siteMeta.phone}" class="direct-link">
              <i class="fa-solid fa-phone" aria-hidden="true"></i>
              <span>${siteMeta.phoneDisplay}</span>
            </a>
            <span class="channel-dot" aria-hidden="true">·</span>
            <span class="direct-link location-text">
              <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
              <span>${siteMeta.location}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  `;
}
