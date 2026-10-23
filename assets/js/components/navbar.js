import { siteMeta } from "../data/portfolioData.js";

const primaryNav = [
  { id: "projects", label: "Proyectos" },
  { id: "experience", label: "Trayectoria" },
  { id: "about", label: "Perfil" },
  { id: "technologies", label: "Stack" },
  { id: "certifications", label: "Certificaciones" },
  { id: "education", label: "Educación" },
  { id: "contact", label: "Contacto" }
];

export function createNavbar() {
  const links = primaryNav
    .map((item) => `<li><a class="nav-link" href="#${item.id}">${item.label}</a></li>`)
    .join("");

  return `
    <a class="skip-link" href="#main-content">Saltar al contenido principal</a>
    <nav id="topnav" class="site-nav" aria-label="Navegación principal">
      <div class="nav-shell">
        <a class="brand-mark" href="#home" aria-label="Ir al inicio - Miguel Angel Coronado">
          <span class="brand-monogram">M/AC</span>
          <div class="brand-text">
            <strong>${siteMeta.shortName}</strong>
            <small>Ingeniería a Producción</small>
          </div>
        </a>

        <div class="nav-panel" id="nav-menu">
          <ul class="nav-list">${links}</ul>
        </div>

        <div class="nav-right-actions">
          <button id="motion-toggle" class="motion-toggle" type="button" aria-pressed="false" aria-label="Pausar animaciones">Pausa Ⅱ</button><button class="sound-toggle-btn" id="sound-toggle" type="button" aria-pressed="false" title="Activar/Silenciar efectos táctiles de sonido">
            <i class="fa-solid fa-volume-xmark" id="sound-icon" aria-hidden="true"></i>
            <span class="sound-status-label" id="sound-label">SFX: OFF</span>
          </button>
          <a class="nav-cv-btn" href="${siteMeta.cvUrl}" target="_blank" rel="noopener noreferrer" title="Ver CV 2026 en PDF">
            <i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
            <span>CV 2026</span>
          </a>
          <a class="nav-contact-btn" href="${siteMeta.whatsappUrl}" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
            <span>Hablemos</span>
          </a>
          <button class="nav-toggle" type="button" aria-controls="nav-menu" aria-expanded="false" aria-label="Abrir menú de navegación">
            <span class="nav-toggle-lines" aria-hidden="true"><i></i><i></i></span>
          </button>
        </div>
      </div>
    </nav>
  `;
}
