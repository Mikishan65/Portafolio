import { siteMeta } from '../data/portfolioData.js';
export function createHero() {
return `<header id="home" class="motion-hero">
 <div class="hero-stage-inner">
  <div class="hero-topline"><span>MIGUEL ANGEL CORONADO</span><span>SOFTWARE / QA / DEVOPS</span><span>SANTA CRUZ, BOLIVIA <span id="local-clock"></span></span></div>
  <h1 class="kinetic-title" aria-label="Romper el molde."><span class="type-line type-one" aria-hidden="true">ROMPER</span><span class="type-line type-two" aria-hidden="true">EL <i>MOLDE.</i></span></h1>
  <div class="sculpture-stage" id="sculpture-stage"><div class="sculpture-fallback" aria-hidden="true"><span>↗</span></div><canvas id="sculpture-canvas" aria-hidden="true"></canvas></div>
  <div class="hero-side-note">Pensamiento libre.<br>Ingeniería precisa.</div>
  <div class="hero-bottomline"><div><p>Las ideas no nacieron para quedarse en papel.</p><p>Las convierto en software que funciona.</p></div><button class="sculpture-action" id="sculpture-action" type="button" aria-pressed="false">Desarmar la pieza <span>↗</span></button><a class="hero-explore magnetic" href="#projects">Explora<br>mi trabajo <span>↓</span></a></div>
  <span class="hero-interaction-hint">Mueve el cursor · Arrastra la pieza · Haz scroll</span>
 </div>
</header>`;
}
