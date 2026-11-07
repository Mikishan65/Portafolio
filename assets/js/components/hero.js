// Hero: el título es la firma visual. Debajo, el recorrido real de una entrega
// (construir → verificar → desplegar) y las dos rutas de contacto del PRODUCT.md.
const steps = [
  ["Construir", "Full Stack · PHP · React Native · C#"],
  ["Verificar", "QA con Jira y Zephyr · 0 regresiones"],
  ["Desplegar", "VPS Linux · Dokploy · Docker"]
];

export function createHero() {
return `<header id="home" class="motion-hero">
 <div class="hero-stage-inner">
  <div class="hero-topline"><span>MIGUEL ANGEL CORONADO</span><span>SOFTWARE / QA / DEVOPS</span><span>SANTA CRUZ, BOLIVIA <span id="local-clock" data-live-clock></span></span></div>
  <h1 class="kinetic-title" aria-label="Romper el molde."><span class="type-line type-one" aria-hidden="true">ROMPER</span><span class="type-line type-two" aria-hidden="true">EL <i>MOLDE.</i></span></h1>

  <div class="hero-pipeline" id="hero-pipeline" role="group" aria-label="Recorrido de una entrega: construir, verificar y desplegar">
   <span class="pipe-line" aria-hidden="true"></span>
   <ol class="pipe-steps">
    ${steps.map(([label, text]) => `<li class="pipe-step"><span class="pipe-dot" aria-hidden="true"></span><span class="pipe-label">${label}</span><span class="pipe-text">${text}</span></li>`).join("")}
   </ol>
   <div class="pipe-end">
    <a class="pipe-live" href="https://ccepcoin.tech/" target="_blank" rel="noopener noreferrer"><span class="pipe-live-dot" aria-hidden="true"></span>En producción · ccepcoin.tech <span aria-hidden="true">↗</span></a>
    <button class="pipe-run" id="pipe-run" type="button" aria-label="Volver a reproducir el recorrido de la entrega">Reejecutar <span aria-hidden="true">↻</span></button>
   </div>
  </div>

  <div class="hero-bottomline">
   <div><p>Las ideas no nacieron para quedarse en papel.</p><p>Las convierto en software que funciona.</p></div>
   <div class="hero-cta">
    <a class="hero-pill hero-pill-primary magnetic" href="#contact">Súmame a tu equipo <span aria-hidden="true">↗</span></a>
    <a class="hero-pill" href="#contact">Tengo un proyecto <span aria-hidden="true">↗</span></a>
   </div>
  </div>
 </div>
</header>`;
}
