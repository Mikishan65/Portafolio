import { sound } from './audioFx.js';

// Interacción de las formas del hero: parallax suave con el cursor y botón para
// reordenarlas. Todo se resuelve con variables CSS (--mx/--my/--sp) y transform,
// así que no hay layout ni repintado: solo composición en GPU.
export function initShapes(motion) {
  const stage = document.getElementById('shape-stage');
  if (!stage) return;
  const hero = stage.closest('.hero-stage-inner') || stage;
  const button = document.getElementById('shape-action');
  const layouts = 3;

  let layout = 0;
  let targetX = 0, targetY = 0, x = 0, y = 0;
  let frame = 0;
  let visible = true;

  const apply = () => {
    stage.style.setProperty('--mx', x.toFixed(3));
    stage.style.setProperty('--my', y.toFixed(3));
  };

  // El bucle solo corre mientras la posición no ha llegado a su destino.
  const loop = () => {
    frame = 0;
    x += (targetX - x) * 0.09;
    y += (targetY - y) * 0.09;
    apply();
    if (Math.abs(targetX - x) > 0.002 || Math.abs(targetY - y) > 0.002) {
      frame = requestAnimationFrame(loop);
    }
  };
  const kick = () => {
    if (!frame && visible && !document.hidden) frame = requestAnimationFrame(loop);
  };

  hero.addEventListener('pointermove', (event) => {
    if (motion.paused || event.pointerType === 'touch') return;
    const rect = hero.getBoundingClientRect();
    targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    kick();
  }, { passive: true });

  hero.addEventListener('pointerleave', () => {
    targetX = targetY = 0;
    kick();
  });

  button?.addEventListener('click', () => {
    layout = (layout + 1) % layouts;
    stage.dataset.layout = String(layout);
    sound.playPop();
  });

  document.addEventListener('motionchange', () => {
    if (!motion.paused) return;
    targetX = targetY = x = y = 0;
    apply();
  });

  // Fuera de pantalla se pausan las animaciones de reposo.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      stage.classList.toggle('is-offscreen', !visible);
      if (visible) kick();
    }, { rootMargin: '100px' }).observe(stage);
  }
}
