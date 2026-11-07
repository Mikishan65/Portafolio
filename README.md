# Portafolio Profesional — Miguel Angel Chavarria Coronado

Portafolio web inmersivo de ingeniería de software, QA testing e infraestructura en producción. Construido con arquitectura nativa en HTML5, CSS3 moderno y módulos JavaScript ES6+, sin dependencias pesadas de compilación.

---

## Características Principales

- **Hero con propósito:** el título «Romper el molde» es la firma visual. Debajo, el recorrido real de una entrega (construir → verificar → desplegar) se reproduce al cargar y puede reejecutarse; termina en el enlace al sitio en producción `https://ccepcoin.tech/` (`pipeline.js`). Dos rutas claras: sumarse a un equipo o iniciar un proyecto.
- **Proyectos como piezas:** en escritorio se apilan con scroll (GSAP + ScrollTrigger); en móvil son tarjetas compactas en flujo normal, con filtros deslizables.
- **Experiencia verificable:** línea de tiempo con hitos comprobables; en móvil los logros adicionales se pliegan («Ver N logros más»).
- **Stack para explorar:** piezas arrastrables que explican cómo se usa cada tecnología.
- **Sintetizador Web Audio API:** audio procedural opcional (desactivado por defecto) para clics y confirmaciones (`audioFx.js`). Conmutador `SFX` en la barra de navegación.
- **Movimiento accesible:** botón «Pausa», respeto de `prefers-reduced-motion` y animaciones solo con `transform`/`opacity`.
- **Datos reales de CV 2026:**
  - Egresado de Ingeniería de Sistemas (UDI) con 54 materias aprobadas.
  - Pasantía QA en DATEC Ltda (Marzo 2026 – Agosto 2026).
  - Proyecto en producción `https://ccepcoin.tech/` (VPS Linux, Dokploy, Docker).
  - Certificaciones Cisco Networking Academy (Python, JavaScript, CCNA Redes, IT Essentials).
  - Enlaces directos a CV en PDF e historial académico oficial.

---

## Vista Local

Para ejecutar el proyecto localmente utilizando el servidor integrado de Python:

```bash
python3 -m http.server 4173
```

Abre en tu navegador:
```
http://localhost:4173
```

*Nota: Se requiere servir los archivos bajo HTTP/HTTPS para que los módulos ES6 (`import`/`export`) se carguen sin restricciones de seguridad de origen local.*

---

## Estructura del Proyecto

```
Portafolio/
├── index.html                           # Entrada: metadatos SEO, JSON-LD y carga de estilos/scripts
├── assets/
│   ├── css/
│   │   ├── styles.css                   # Sistema base (tokens, secciones de contenido)
│   │   ├── motion.css                   # Dirección de arte cinética (hero, proyectos, secciones)
│   │   └── refine.css                   # Escala tipográfica, ritmo de espaciado, hero y adaptación móvil
│   ├── js/
│   │   ├── app.js                       # Montaje de las secciones
│   │   ├── main.js                      # Navegación, filtros, diálogo de proyectos, copia de correo
│   │   ├── data/
│   │   │   └── portfolioData.js         # Datos profesionales (CV 2026)
│   │   ├── modules/
│   │   │   ├── audioFx.js               # Motor procedural Web Audio
│   │   │   ├── cinematicMotion.js       # GSAP/ScrollTrigger: pin del hero, parallax, apilado
│   │   │   ├── pipeline.js              # Recorrido construir → verificar → desplegar
│   │   │   └── playground.js            # Piezas del stack arrastrables
│   │   ├── components/                  # Una función por sección (hero, projects, experience, …)
│   │   └── vendor/                      # GSAP y ScrollTrigger (sin build)
│   └── favicon.svg
├── skills/                              # Guías de diseño y motion usadas como criterio (ver skills/SKILL.md)
└── Doc/                                 # Documentos oficiales y CVs
```

## Criterios de diseño

- Ningún texto visible por debajo de 11 px; párrafos a 15 px con interlineado 1,6 (`refine.css`).
- Un único ritmo vertical de sección (`--sec`) y objetivos táctiles de al menos 44 px en pantallas táctiles.
- Superficies planas: líneas finas y contraste de tono en lugar de sombras ambientales o brillos de neón.
- Desde `.github/workflows/pages.yml` se publica el sitio estático en GitHub Pages sin paso de compilación.
