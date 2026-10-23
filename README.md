# Portafolio Profesional — Miguel Angel Chavarria Coronado

Portafolio web inmersivo de ingeniería de software, QA testing e infraestructura en producción. Construido con arquitectura nativa en HTML5, CSS3 moderno y módulos JavaScript ES6+, sin dependencias pesadas de compilación.

---

## Características Principales

- **Malla Cinética en Canvas:** Fondo interactivo dinámico con partículas reactivas al cursor (`kineticBackground.js`).
- **Sintetizador Web Audio API:** Audio háptico procedural para clics, estallido de burbujas y confirmación de despliegue (`audioFx.js`). Botón de conmutación `[ 🔊 SFX: ON/OFF ]` en la barra de navegación.
- **Laboratorio Interactivo (Terminal DevOps & QA):** Consola interactiva en vivo con comandos reales (`deploy`, `qa`, `vps`, `cv`, `help`, `clear`) y enlace activo a `https://ccepcoin.tech/` (`terminalSimulator.js`).
- **Burbujas Cinéticas de Habilidades:** Elementos flotantes táctiles que reaccionan con partículas de chispas y sonido al hacer clic.
- **Pipeline de Entrega Continua:** Flujo interactivo que conecta desarrollo MVC, aseguramiento de calidad con Jira/Zephyr y despliegue en VPS Linux con Dokploy.
- **Datos Reales de CV 2026:**
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
├── index.html                           # Estructura principal y canvas cinético
├── assets/
│   ├── css/
│   │   └── styles.css                   # Sistema de diseño "El Taller Cinético v3.0"
│   ├── js/
│   │   ├── app.js                       # Montaje modular de las secciones y ticker
│   │   ├── main.js                      # Inicializador de efectos, sonido, eventos y telemetría
│   │   ├── data/
│   │   │   └── portfolioData.js         # Datos profesionales actualizados CV 2026
│   │   ├── modules/
│   │   │   ├── audioFx.js               # Motor procedural Web Audio
│   │   │   ├── kineticBackground.js     # Lienzo de partículas reactivas
│   │   │   └── terminalSimulator.js     # Simulador de terminal Dokploy y QA
│   │   └── components/
│   │       ├── navbar.js                # Navegación con control de SFX y accesos rápidos
│   │       ├── hero.js                  # Hero con pipeline, halo 3D y burbujas popping
│   │       ├── projects.js              # Galería de proyectos con filtros interactivos
│   │       ├── experience.js            # Línea de tiempo profesional y QA
│   │       ├── about.js                 # Pilares y filosofía de ingeniería
│   │       ├── technologies.js          # Matriz de stack clasificada
│   │       ├── certifications.js        # Acreditaciones oficiales verificadas
│   │       ├── education.js             # Formación académica UDI y telemetría de notas
│   │       ├── highlights.js            # Cualidades profesionales y operativas
│   │       ├── contact.js               # Canales directos y botón de copia de correo
│   │       └── footer.js                # Pie de página con reloj local en vivo (UTC-4)
│   └── favicon.svg                      # Favicon vectorial
└── Doc/                                 # Documentos oficiales y CVs
```
