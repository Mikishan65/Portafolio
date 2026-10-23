# Sistema Visual e Interactivo — El Taller Cinético v3.0

Portafolio profesional de **Miguel Angel Chavarria Coronado**, Ingeniero de Sistemas (UDI), Full Stack Developer, QA Tester (Jira/Zephyr) y DevOps (VPS Linux, Dokploy, Docker).

---

## 1. Dirección Estética y Filosofía de Diseño

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

## 2. Inmersión y Componentes Dinámicos Especiales

1. **Malla Cinética en Canvas HTML5 (`kineticBackground.js`):**
   - Lienzo a 60/120 fps en segundo plano con partículas orgánicas interconectadas y repulsión dinámica al puntero del mouse.
   - Pausa automática en pestañas ocultas y desactivación limpia con `prefers-reduced-motion`.

2. **Motor de Audio Web Procedural (`audioFx.js`):**
   - Sintetizador táctil con Web Audio API nativo (cero latencia, 0 archivos de audio externos).
   - Genera micro-clicks de botón, chasquidos pop al detonar burbujas y acordes de confirmación de despliegue.
   - Conmutador accesible en la barra de navegación: `[ 🔊 SFX: ON / OFF ]`.

3. **Simulador de Terminal DevOps & QA en Vivo (`terminalSimulator.js`):**
   - Consola interactiva conectada a un entorno VPS simulado (`miguel@vps-production`).
   - Acciones rápidas preconfiguradas:
     - `deploy ccepcoin`: simula el pipeline a producción, cambio de contenedor Docker y swap con Dokploy.
     - `run qa-tests`: ejecuta la matriz de pruebas funcionales Jira & Zephyr con acreditación DATEC.
     - `vps telemetry`: telemetría en tiempo real de consumo de CPU, RAM y reverse proxy.
     - `cv summary`: resumen de credenciales y contacto 2026.
     - `clear` / comandos por entrada de teclado (`help`, `deploy`, `qa`, `vps`, `cv`, `clear`).

4. **Burbujas Cinéticas de Habilidades con Sparks (`skill-pop`):**
   - Burbujas flotantes orgánicas en la portada con física de balanceo.
   - Al hacer clic, explotan con partículas de chispas (`<i style="--spark-index: ...">`), sonido procedimental pop y anuncio de estado para lectores de pantalla.

5. **Pipeline Continuo de Entrega:**
   - 4 nodos interactivos: `[01 Construir]` → `[02 Verificar]` → `[03 Desplegar]` → `[Producción: ccepcoin.tech ↗]`.
   - Iluminación de cables de conexión y retroalimentación auditiva al interactuar.

6. **Cinta Ticker Marquee Continua:**
   - Desplazamiento infinito continuo acelerado por hardware con telemetría de producción, certificaciones y credenciales académicas.

---

## 3. Rendimiento y Accesibilidad (WCAG 2.2 AA)

- **Propiedades GPU Composite:** Animaciones limitadas a `transform` y `opacity` para evitar reflujos y caídas de frames.
- **Foco Visible y Teclado:** Todos los componentes interactivos son navegables con tabulador, tienen estados `focus-visible` de alto contraste y soporte de tecla Escape.
- **Reducción de Movimiento:** Regla estricta `@media (prefers-reduced-motion: reduce)` que congela el canvas, desactiva oscilaciones y presenta todo el contenido estático de forma inmediata.
