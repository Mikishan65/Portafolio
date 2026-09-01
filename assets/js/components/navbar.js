import { siteMeta } from "../data/portfolioData.js";

const primaryNav = [
  { id: "projects", label: "Trabajo" },
  { id: "experience", label: "Trayectoria" },
  { id: "about", label: "Perfil" },
  { id: "certifications", label: "Evidencia" },
  { id: "contact", label: "Contacto" }
];

export function createNavbar() {
  const links = primaryNav
    .map((item) => `<li><a class="nav-link" href="#${item.id}">${item.label}</a></li>`)
    .join("");

  return `
    <a class="skip-link" href="#main-content">Saltar al contenido</a>
    <nav id="topnav" class="site-nav" aria-label="Navegación principal">
      <a class="brand-mark" href="#home" aria-label="Volver al inicio">
        <span class="brand-symbol" aria-hidden="true">M/AC</span>
        <span class="brand-copy">
          <strong>${siteMeta.shortName}</strong>
          <small>Ingeniería que llega a producción</small>
        </span>
      </a>

      <button class="nav-toggle" type="button" aria-controls="nav-menu" aria-expanded="false">
        <span class="nav-toggle-label">Menú</span>
        <span class="nav-toggle-lines" aria-hidden="true"><i></i><i></i></span>
      </button>

      <div class="nav-panel" id="nav-menu">
        <ul class="nav-list">${links}</ul>
        <a class="nav-contact" href="${siteMeta.whatsappUrl}" target="_blank" rel="noopener noreferrer">
          Hablemos <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
      </div>
    </nav>
  `;
}
