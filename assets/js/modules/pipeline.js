import { sound } from './audioFx.js';

// Reproduce el recorrido construir → verificar → desplegar una vez al cargar
// y a demanda con "Reejecutar". Solo alterna clases: el movimiento vive en CSS
// (transform/opacity). Con movimiento reducido o pausado, todo aparece ya completo.
export function initPipeline(motion) {
  const root = document.getElementById('hero-pipeline');
  if (!root) return;
  const steps = [...root.querySelectorAll('.pipe-step')];
  const button = document.getElementById('pipe-run');
  const STEP_MS = 650;
  const START_MS = 500;
  let timers = [];

  const clear = () => { timers.forEach(clearTimeout); timers = []; };
  const setProgress = (p) => root.style.setProperty('--p', String(p));

  const showAll = () => {
    clear();
    steps.forEach((step) => step.classList.add('is-done'));
    root.classList.add('is-live');
    setProgress(1);
  };

  const reset = () => {
    clear();
    steps.forEach((step) => step.classList.remove('is-done'));
    root.classList.remove('is-live');
    setProgress(0);
  };

  const run = ({ audible = false } = {}) => {
    if (motion.paused) { showAll(); return; }
    reset();
    void root.offsetWidth;                       // reinicia las transiciones
    steps.forEach((step, i) => {
      timers.push(setTimeout(() => {
        step.classList.add('is-done');
        setProgress((i + 1) / steps.length);
        if (audible) sound.playPop();
      }, START_MS + i * STEP_MS));
    });
    timers.push(setTimeout(() => {
      root.classList.add('is-live');
      if (audible) sound.playSuccess();
    }, START_MS + steps.length * STEP_MS));
  };

  button?.addEventListener('click', () => run({ audible: true }));
  document.addEventListener('motionchange', () => { if (motion.paused) showAll(); });
  run();
}
