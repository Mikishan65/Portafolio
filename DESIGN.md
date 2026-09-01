---
name: Miguel Angel Coronado Portfolio
description: Ingeniería práctica que conecta código, calidad e infraestructura hasta producción.
colors:
  ultramarine-motion: "#5B4FE9"
  ultramarine-deep: "#3F32B8"
  workshop-ink: "#171721"
  cool-canvas: "#F6F7FB"
  pure-white: "#FFFFFF"
  cool-muted: "#B8BAC5"
  cool-soft: "#E4E4ED"
  solar-yellow: "#FFD84D"
  action-coral: "#FF6645"
  proof-mint: "#71E6A4"
typography:
  display:
    fontFamily: "Anybody, Arial Black, sans-serif"
    fontSize: "clamp(2.55rem, 5.8vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inclusive Sans, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.18vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  utility:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  compact: "8px"
  surface: "14px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "40px"
  xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.workshop-ink}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.pill}"
    padding: "13px 20px"
  button-light:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.workshop-ink}"
    rounded: "{rounded.pill}"
    padding: "13px 20px"
  filter-active:
    backgroundColor: "{colors.workshop-ink}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.pill}"
    padding: "9px 15px"
  contact-path:
    backgroundColor: "{colors.cool-canvas}"
    textColor: "{colors.workshop-ink}"
    rounded: "{rounded.surface}"
    padding: "clamp(24px, 4vw, 42px)"
---

# Design System: Taller Cinético

## 1. Overview

**Creative North Star: "El Taller Cinético"**

La interfaz se comporta como un taller en movimiento: piezas claras, herramientas visibles y una ruta que une construcción, verificación y despliegue. La energía de Upvent y la presencia personal de Trevor Noah se traducen en una composición propia, más técnica y práctica, donde el retrato es el centro humano de un sistema de capacidades.

El color es comprometido y el movimiento tiene una función narrativa. Las superficies alrededor del gesto principal permanecen planas y legibles para que los proyectos y las credenciales no compitan con la identidad. El sistema rechaza explícitamente el dashboard cyber genérico, el neón decorativo, las partículas sin propósito, las cuadrículas interminables de tarjetas y el aspecto de plantilla corporativa o CV tradicional.

**Key Characteristics:**

- Color sólido y decidido, sin gradientes decorativos.
- Tipografía de ancho expresivo para titulares y una sans inclusiva para lectura.
- Composiciones asimétricas que regresan a una sola columna en móvil.
- Una órbita y una constelación de burbujas explosivas como gesto distintivo; el resto del movimiento guía y responde.
- Evidencia profesional presentada como rutas y registros, no como tarjetas repetidas.

## 2. Colors

Una paleta de taller contemporáneo: ultramarino para movimiento, tinta para autoridad y tres colores de señal para dirigir la atención.

### Primary

- **Ultramarino en movimiento:** ocupa el hero y las superficies donde la identidad debe sentirse completa.
- **Ultramarino profundo:** sostiene secciones técnicas con suficiente contraste para texto claro.

### Secondary

- **Amarillo solar:** indica disponibilidad, navegación, progreso y momentos de éxito.
- **Coral de acción:** empuja el cierre y los llamados a conversar.

### Tertiary

- **Menta de evidencia:** acompaña formación, calidad y estados positivos sin parecer un color de sistema genérico.

### Neutral

- **Tinta de taller:** texto, navegación y superficies de máxima autoridad.
- **Lienzo frío:** fondo de lectura y registros extensos.
- **Blanco puro:** contraste puntual, nunca superficie dominante por inercia.

**The Solid Signal Rule.** Cada bloque usa un color sólido dominante. Los gradientes decorativos y el texto degradado están prohibidos.

## 3. Typography

**Display Font:** Anybody (with Arial Black fallback)  
**Body Font:** Inclusive Sans (with Arial fallback)  
**Label/Mono Font:** Azeret Mono

**Character:** Anybody aporta una silueta adaptable y cinética; Inclusive Sans conserva claridad y cercanía. Azeret Mono aparece solamente en metadatos técnicos reales, nunca como disfraz de desarrollador.

### Hierarchy

- **Display** (800-900, fluid to 6rem maximum, 0.88-0.98): tesis del hero y cierres de sección.
- **Headline** (800, fluid to 5.5rem, 0.98): una idea dominante por sección.
- **Title** (800, 1.1-3rem, 1-1.1): proyectos, cargos y rasgos.
- **Body** (400-600, 1-1.125rem, 1.6): lectura limitada a 68 caracteres cuando el diseño lo permite.
- **Label** (600, 0.68-0.8rem, normal case): fechas, categorías y estado operativo.

**The Width Has Meaning Rule.** El display puede condensarse visualmente para expresar movimiento; el cuerpo nunca se comprime ni se escribe en mayúsculas sostenidas.

## 4. Elevation

El sistema es plano por defecto. La profundidad se crea con superposición, cambio tonal, rotación mínima y movimiento de estado; no existen sombras ambientales sobre tarjetas.

**The Flat Workshop Rule.** Si un bloque necesita una sombra amplia para diferenciarse, la jerarquía de color o espacio está mal resuelta.

## 5. Components

### Buttons

- **Shape:** píldora táctil y segura (999px), con altura mínima de 52px.
- **Primary:** tinta de taller sobre texto blanco, borde sólido y padding 13px 20px.
- **Hover / Focus:** elevación de 3px mediante transform; foco amarillo de 3px claramente visible.
- **Secondary:** blanco o transparente con borde de 2px; nunca vidrio translúcido.

### Chips

- **Style:** fondo transparente, borde de 1px y texto de alto contraste.
- **State:** el filtro activo invierte a tinta sólida; `aria-pressed` comunica el mismo estado.

### Cards / Containers

- **Corner Style:** curva compacta (14px máximo).
- **Background:** un único tono sólido por superficie.
- **Shadow Strategy:** ninguna sombra decorativa.
- **Border:** 2px solo cuando la pieza necesita comportarse como objeto físico.
- **Internal Padding:** escala fluida entre 20px y 42px.

### Navigation

Barra de tinta compacta con marca amarilla, objetivos táctiles de 46px y panel móvil sólido. El estado activo invierte a blanco; el menú permanece operable con teclado y Escape.

### Portrait Orbit

El retrato circular conecta cuatro áreas - desarrollo, QA, DevOps y redes - mediante una órbita lenta. Se detiene por completo con `prefers-reduced-motion`.

### Skill Burst

Las tecnologías del hero viven en burbujas de tamaño y ritmo distintos. Cada burbuja responde al toque con un colapso breve y seis chispas antes de recomponerse; en móvil se ordenan como una matriz táctil y con movimiento reducido permanecen estáticas.

En pantallas táctiles, cada burbuja usa un borde de 3px y una segunda silueta de tinta desplazada para conservar volumen y contraste bajo distintas condiciones de brillo. Un trazo orbital y una figura coral equilibran el espacio libre sin competir con las etiquetas.

### Project Case

Fila amplia con índice de catálogo, título, explicación y etiquetas. En hover cambia de superficie y desplaza el contenido con transform; en móvil se compacta sin ocultar información esencial.

## 6. Do's and Don'ts

### Do:

- **Do** mantener contraste WCAG 2.2 AA y un foco amarillo de 3px.
- **Do** usar ultramarino, coral, menta y amarillo como superficies sólidas con propósito.
- **Do** limitar los radios de superficies a 14px y reservar la píldora para acciones o filtros.
- **Do** diseñar primero una lectura clara a 320px antes de añadir movimiento.
- **Do** tratar la experiencia, los proyectos y las notas como evidencia verificable.

### Don't:

- **Don't** reconstruir el dashboard cyber genérico ni usar neón decorativo.
- **Don't** volver a introducir un carrusel horizontal previsible para enumerar tecnologías.
- **Don't** añadir partículas sin propósito, glassmorphism o cuadrículas interminables de tarjetas.
- **Don't** convertir la página en una plantilla corporativa o un CV tradicional.
- **Don't** copiar las composiciones de Upvent o Trevor Noah; solo su energía y compromiso visual son referencias.
- **Don't** usar texto degradado, franjas laterales de color o grandes sombras suaves.
- **Don't** ocultar contenido detrás de animaciones ni romper la alternativa de movimiento reducido.
