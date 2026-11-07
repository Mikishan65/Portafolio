import { siteMeta } from '../data/portfolioData.js';

// Composición de formas geométricas 2D (SVG). Cada forma tiene tres capas:
//  .shape       -> posición/rotación según el layout activo (cambia con el botón)
//  .shape-drift -> parallax del cursor + deriva con el scroll
//  .shape-art   -> animación de reposo (flotar, girar, etc.)
const dots = Array.from({ length: 25 }, (_, i) => `<circle cx="${10 + (i % 5) * 20}" cy="${10 + Math.floor(i / 5) * 20}" r="3.4"/>`).join('');

const shapes = [
  // [clase, parallax, deriva x, deriva y, deriva rot, animación, svg]
  ['s1', 14, 0, -10, 18, 'a-float', `<svg viewBox="0 0 100 100"><circle class="f-paper" cx="50" cy="50" r="50"/><circle class="s-ink" cx="50" cy="50" r="33" fill="none" stroke-width="1.6"/><circle class="f-orange" cx="50" cy="50" r="7"/></svg>`],
  ['s5', 8, 0, -4, -40, 'a-spin-slow', `<svg viewBox="0 0 100 100"><circle class="s-ink" cx="50" cy="50" r="48.5" fill="none" stroke-width="1.1" stroke-dasharray="1.6 3.4" stroke-linecap="round"/></svg>`],
  ['s2', 30, -14, 8, -35, 'a-sway', `<svg viewBox="0 0 100 100"><path class="f-paper" d="M0 75A50 50 0 0 1 100 75Z"/></svg>`],
  ['s3', 22, 12, -12, 30, 'a-float-alt', `<svg viewBox="0 0 100 100"><path class="f-acid" d="M10 90V10A80 80 0 0 1 90 90Z"/></svg>`],
  ['s4', 34, -10, -14, 120, 'a-spin', `<svg viewBox="0 0 100 100"><g class="s-acid" fill="none" stroke-width="11" stroke-linecap="round"><path d="M50 8V92M8 50H92M20 20L80 80M80 20L20 80"/></g></svg>`],
  ['s6', 26, 14, 8, -10, 'a-bars', `<svg viewBox="0 0 100 100"><g class="f-ink"><rect x="6" y="20" width="22" height="80" rx="11"/><rect x="39" y="45" width="22" height="55" rx="11"/><rect x="72" y="5" width="22" height="95" rx="11"/></g></svg>`],
  ['s7', 40, -16, 2, 90, 'a-float', `<svg viewBox="0 0 100 100"><path class="f-acid" d="M38 0h24v38h38v24H62v38H38V62H0V38h38z"/></svg>`],
  ['s8', 20, 10, 12, -20, 'a-float-alt', `<svg viewBox="0 0 100 100"><circle class="f-ink" cx="50" cy="50" r="50"/><path class="s-paper" d="M32 68L68 32M38 32H68V62" fill="none" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>`],
  ['s9', 28, 0, 14, 0, 'a-sway', `<svg viewBox="0 0 100 100"><g class="f-ink">${dots}</g></svg>`]
];

const shapeMarkup = shapes
  .map(([cls, d, fx, fy, fr, anim, svg], i) =>
    `<span class="shape ${cls}"><span class="shape-drift" style="--d:${d};--fx:${fx};--fy:${fy};--fr:${fr};--i:${i}"><span class="shape-art ${anim}">${svg}</span></span></span>`)
  .join('');

export function createHero() {
return `<header id="home" class="motion-hero">
 <div class="hero-stage-inner">
  <div class="hero-topline"><span>MIGUEL ANGEL CORONADO</span><span>SOFTWARE / QA / DEVOPS</span><span>SANTA CRUZ, BOLIVIA <span id="local-clock" data-live-clock></span></span></div>
  <h1 class="kinetic-title" aria-label="Romper el molde."><span class="type-line type-one" aria-hidden="true">ROMPER</span><span class="type-line type-two" aria-hidden="true">EL <i>MOLDE.</i></span></h1>
  <div class="shape-stage" id="shape-stage" data-layout="0" aria-hidden="true">${shapeMarkup}</div>
  <div class="hero-side-note">Pensamiento libre.<br>Ingeniería precisa.</div>
  <div class="hero-bottomline"><div><p>Las ideas no nacieron para quedarse en papel.</p><p>Las convierto en software que funciona.</p></div><button class="shape-action" id="shape-action" type="button">Reordenar las formas <span>↻</span></button><a class="hero-explore magnetic" href="#projects">Explora<br>mi trabajo <span>↓</span></a></div>
  <span class="hero-interaction-hint">Mueve el cursor · Reordena las formas · Haz scroll</span>
 </div>
</header>`;
}
