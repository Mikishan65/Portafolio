import { siteMeta } from "../data/portfolioData.js";

const orbitSkills = ["Desarrollo", "QA", "DevOps", "Redes"];
const burstSkills = [
  "VPS Linux",
  "Dokploy",
  "QA funcional",
  "React Native",
  "PHP + MVC",
  "Python",
  "Cisco CCNA",
  "DNS + SSL"
];

const bubblePositions = [
  { x: 5, y: 12, size: 118, tone: "light" },
  { x: 17, y: 70, size: 104, tone: "mint" },
  { x: 31, y: 18, size: 132, tone: "solar" },
  { x: 43, y: 78, size: 108, tone: "ink" },
  { x: 57, y: 14, size: 116, tone: "coral" },
  { x: 69, y: 72, size: 102, tone: "light" },
  { x: 81, y: 15, size: 126, tone: "mint" },
  { x: 94, y: 73, size: 110, tone: "solar" }
];

export function createHero() {
  const orbit = orbitSkills
    .map((skill, index) => `<span class="orbit-label orbit-label-${index + 1}">${skill}</span>`)
    .join("");
  const bubbles = burstSkills
    .map((skill, index) => {
      const position = bubblePositions[index];
      const sparks = Array.from({ length: 6 }, (_, sparkIndex) => `<i style="--spark-index: ${sparkIndex}"></i>`).join("");
      return `
        <button
          class="skill-pop skill-pop-${position.tone}"
          type="button"
          style="--pop-x: ${position.x}%; --pop-y: ${position.y}px; --pop-size: ${position.size}px; --pop-delay: ${index * -0.45}s"
          data-skill-pop="${skill}"
          aria-label="Activar burbuja: ${skill}"
        >
          <span class="skill-pop-surface"><span>${skill}</span></span>
          <span class="skill-pop-sparks" aria-hidden="true">${sparks}</span>
        </button>`;
    })
    .join("");

  return `
    <header id="home" class="hero-stage">
      <div class="hero-shape hero-shape-a" aria-hidden="true"></div>
      <div class="hero-shape hero-shape-b" aria-hidden="true"></div>

      <div class="hero-layout">
        <div class="hero-copy hero-enter">
          <p class="availability"><span aria-hidden="true"></span> Disponible para equipos y proyectos</p>
          <h1>
            <span>Del código</span>
            <span>a <em>producción.</em></span>
          </h1>
          <div class="hero-identity">
            <p class="hero-name">${siteMeta.professionalName}</p>
            <p>${siteMeta.title} · Santa Cruz, Bolivia</p>
          </div>
          <p class="hero-lede">
            Desarrollo software, verifico su calidad y preparo la infraestructura para que funcione donde importa: en el mundo real.
          </p>
          <div class="hero-actions">
            <a class="button button-dark" href="#projects">Explorar mi trabajo <i class="fa-solid fa-arrow-down" aria-hidden="true"></i></a>
            <a class="button button-light" href="${siteMeta.whatsappUrl}" target="_blank" rel="noopener noreferrer">Iniciar una conversación</a>
            <a class="button button-outline" href="Doc/Miguel%20Angel%20Chavarria%20Coronado%20CV%202025.pdf" target="_blank" rel="noopener noreferrer">Ver CV <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
          </div>
        </div>

        <div class="portrait-system hero-enter" data-tilt>
          <div class="portrait-orbit" aria-hidden="true">${orbit}</div>
          <figure class="portrait-frame">
            <img src="${siteMeta.avatar}" alt="Retrato de ${siteMeta.fullName}" width="640" height="640" fetchpriority="high">
          </figure>
          <div class="portrait-stamp">
            <span>Perfil</span>
            <strong>Ágil.<br>Adaptable.<br>Práctico.</strong>
          </div>
          <p class="portrait-caption">Construir · verificar · desplegar</p>
        </div>
      </div>

      <div class="skill-burst-field" role="group" aria-label="Tecnologías destacadas. Activa una burbuja para verla explotar.">
        ${bubbles}
        <p class="skill-burst-hint"><span aria-hidden="true">↗</span> Toca una burbuja</p>
        <p class="sr-only" aria-live="polite" data-pop-status></p>
      </div>
    </header>
  `;
}
