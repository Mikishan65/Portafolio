import { navItems, siteMeta } from "../data/portfolioData.js";

export function createNavbar() {
  const links = navItems
    .map((item) => `<li class="nav-item"><a class="nav-link" href="#${item.id}">${item.label}</a></li>`)
    .join("");

  return `
    <a class="skip-link" href="#about">Saltar al contenido</a>
    <nav id="topnav" class="navbar navbar-expand-lg fixed-top site-nav">
      <div class="container">
        <a class="navbar-brand brand-mark" href="#home">${siteMeta.shortName}</a>
        <button
          class="navbar-toggler nav-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            ${links}
            <li class="nav-item"><a class="nav-cta" href="#contact">Hablemos</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}
