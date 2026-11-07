# Sistema Visual e Interactivo — El Taller Cinético v3.0

Portafolio profesional de **Miguel Angel Chavarria Coronado**, Ingeniero de Sistemas (UDI), Full Stack Developer, QA Tester (Jira/Zephyr) y DevOps (VPS Linux, Dokploy, Docker).

---

## 1. Dirección Estética y Filosofía de Diseño

> Paleta vigente del sitio: tinta `#191a18`, papel `#e9e7df`, naranja `#ff5b35` y ácido `#d7ef72`. La tabla de colores azul/menta que sigue es el sistema base heredado de `styles.css`.

- **Atmósfera:** Cyber-industrial oscura de alta ingeniería. Profundidad obsidiana (`#0C0E14`), superficies grafito elevadas (`#141722`, `#1A1E2C`), y acentos vibrantes de señal sólida:
  - **Azul Ultramar Eléctrico** (`#5B4FE9`): arquitectura, código y foco interactivo.
  - **Verde Menta Fósforo** (`#10B981`): estado en vivo, producción continua, uptime y validación QA.
  - **Oro Solar** (`#F59E0B`): telemetría, métricas de rendimiento y curiosidad técnica.
  - **Coral Alerta** (`#EF4444`): controles y depuración.
- **Tipografía Intencional:**
  - Titulares & Énfasis: `Anybody` (pesos 800–900).
  - Cuerpo & Lectura: `Inclusive Sans` (legibilidad ergonómica).
  - Telemetría & Código: `Azeret Mono` (monospaciado técnico).

---

## 2. Gesto principal y componentes dinámicos

La audacia se concentra en un solo lugar: el título gigante «ROMPER EL MOLDE.» sobre naranja. El resto de la interfaz es sobria y legible.

1. **Recorrido de entrega (`pipeline.js`):** tres pasos reales — Construir, Verificar, Desplegar — que se completan en secuencia sobre una línea de progreso y terminan en el estado «En producción · ccepcoin.tech». Se reproduce al cargar y con «Reejecutar» (con audio opcional). Con movimiento reducido o pausado se muestra ya completo.
2. **Dos rutas de contacto:** «Súmame a tu equipo» y «Tengo un proyecto», con la misma jerarquía visual.
3. **Proyectos apilados (escritorio):** paneles `sticky` con escala y rotación ligadas al scroll. En móvil se convierten en tarjetas compactas en flujo normal.
4. **Stack arrastrable:** piezas con física ligera para explorar tecnologías.
5. **Audio procedural (`audioFx.js`):** Web Audio API, sin archivos externos y desactivado por defecto.

---

## 3. Rendimiento y Accesibilidad (WCAG 2.2 AA)

- **Propiedades GPU Composite:** Animaciones limitadas a `transform` y `opacity` para evitar reflujos y caídas de frames.
- **Foco Visible y Teclado:** Todos los componentes interactivos son navegables con tabulador, tienen estados `focus-visible` de alto contraste y soporte de tecla Escape.
- **Reducción de Movimiento:** Regla estricta `@media (prefers-reduced-motion: reduce)` que congela el canvas, desactiva oscilaciones y presenta todo el contenido estático de forma inmediata.
