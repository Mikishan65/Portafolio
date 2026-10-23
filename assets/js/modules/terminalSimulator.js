/**
 * Interactive DevOps & QA Terminal Simulator
 * Proves skills in Linux VPS, Dokploy, Docker, Git, and QA testing through a live playable console.
 */
import { sound } from './audioFx.js';

export function createTerminalWidget() {
  return `
    <div class="terminal-stage reveal" role="region" aria-label="Terminal de control DevOps y QA">
      <div class="terminal-window" data-spotlight>
        <div class="terminal-topbar">
          <div class="window-controls" aria-hidden="true">
            <span class="control-dot close"></span>
            <span class="control-dot minimize"></span>
            <span class="control-dot maximize"></span>
          </div>
          <div class="terminal-title">
            <i class="fa-solid fa-server" aria-hidden="true"></i>
            <span>miguel@vps-production: ~/dokploy-workspace</span>
          </div>
          <div class="terminal-telemetry">
            <span class="ping-tag"><span class="ping-dot"></span> 24ms</span>
          </div>
        </div>

        <div class="terminal-preset-bar">
          <span class="preset-label">Acciones rápidas:</span>
          <button class="terminal-chip is-active" type="button" data-cmd="deploy">
            <i class="fa-solid fa-rocket" aria-hidden="true"></i>
            <span>deploy ccepcoin</span>
          </button>
          <button class="terminal-chip" type="button" data-cmd="qa">
            <i class="fa-solid fa-vial-circle-check" aria-hidden="true"></i>
            <span>run qa-tests</span>
          </button>
          <button class="terminal-chip" type="button" data-cmd="vps">
            <i class="fa-solid fa-microchip" aria-hidden="true"></i>
            <span>vps telemetry</span>
          </button>
          <button class="terminal-chip" type="button" data-cmd="cv">
            <i class="fa-solid fa-file-invoice" aria-hidden="true"></i>
            <span>cv summary</span>
          </button>
        </div>

        <div class="terminal-screen" id="terminal-screen" aria-live="polite">
          <div class="terminal-log-content" id="terminal-logs">
            <p class="term-line term-dim"># Presiona una acción rápida o escribe un comando abajo para simular el despliegue.</p>
            <p class="term-line term-success">✔ Conexión SSH activa en VPS Linux [Host: Santa Cruz / IP: 147.93.xx.xx]</p>
            <p class="term-line"><span class="term-prompt">miguel@vps:~$</span> dokploy status --app ccepcoin</p>
            <p class="term-line term-info">● Contenedor Docker: <strong>ccepcoin-app:latest</strong> (UPTIME: 99.98% / PUERTO: 443 SSL)</p>
            <p class="term-line term-accent">→ Dominio activo y enlazado: <a href="https://ccepcoin.tech/" target="_blank" rel="noopener noreferrer" class="term-link">https://ccepcoin.tech/ ↗</a></p>
          </div>
        </div>

        <form class="terminal-input-row" id="terminal-form" autocomplete="off">
          <label for="term-input" class="term-prompt">miguel@vps:~$</label>
          <input
            type="text"
            id="term-input"
            class="terminal-input"
            placeholder="Escribe 'help', 'deploy', 'qa', 'status', o 'clear'..."
            spellcheck="false"
          />
          <button type="submit" class="terminal-send-btn" aria-label="Ejecutar comando">
            <i class="fa-solid fa-play" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  `;
}

export function initTerminalSimulator() {
  const form = document.getElementById('terminal-form');
  const input = document.getElementById('term-input');
  const logs = document.getElementById('terminal-logs');
  const chips = document.querySelectorAll('[data-cmd]');

  if (!form || !input || !logs) return;

  const commands = {
    deploy: [
      { text: '<span class="term-prompt">miguel@vps:~$</span> git pull origin main && dokploy deploy --build', delay: 100 },
      { text: '<span class="term-dim">[Git] Fetching latest commit 64f2a1b...</span>', delay: 250 },
      { text: '<span class="term-info">[Docker] Building image ccepcoin-web:v2.4 (Layers cached)</span>', delay: 450 },
      { text: '<span class="term-info">[Dokploy] Zero-downtime container swap completed.</span>', delay: 650 },
      { text: '<span class="term-dim">[DNS/SSL] Let\'s Encrypt certificate auto-renewed (valid 90 days).</span>', delay: 850 },
      { text: '<span class="term-success">✔ DESPLIEGUE EXITOSO: Aplicación activa en <a href="https://ccepcoin.tech/" target="_blank" class="term-link">https://ccepcoin.tech/ ↗</a></span>', delay: 1050, sound: true }
    ],
    qa: [
      { text: '<span class="term-prompt">miguel@vps:~$</span> jira-zephyr run-test-suite --coverage', delay: 100 },
      { text: '<span class="term-dim">[QA] Inicializando matriz de pruebas funcionales...</span>', delay: 250 },
      { text: '<span class="term-success">✔ Módulo Autenticación y Tokens JWT (PASSED)</span>', delay: 450 },
      { text: '<span class="term-success">✔ Flujo Documental Hospitalario MVC (PASSED)</span>', delay: 600 },
      { text: '<span class="term-success">✔ Triggers & Procedimientos Almacenados PostgreSQL (PASSED)</span>', delay: 750 },
      { text: '<span class="term-accent">✔ Acreditación DATEC Ltda: 0 regresiones detectadas (100% Cobertura)</span>', delay: 900, sound: true }
    ],
    vps: [
      { text: '<span class="term-prompt">miguel@vps:~$</span> htop --batch | head -n 8', delay: 100 },
      { text: '<span class="term-dim">OS: Ubuntu 24.04 LTS (Kernel Linux 6.8.0) | Dokploy v0.9.8</span>', delay: 200 },
      { text: '<span class="term-info">CPU: 4 vCores [||||||||||                24.5%]</span>', delay: 350 },
      { text: '<span class="term-info">RAM: 8.00 GB  [||||||||||||||           42.1%]</span>', delay: 500 },
      { text: '<span class="term-info">DISCO NVMe: 160 GB [|||||               18.2%]</span>', delay: 650 },
      { text: '<span class="term-success">● Nginx Reverse Proxy: 200 OK | Uptime: 48 días continuos</span>', delay: 800 }
    ],
    cv: [
      { text: '<span class="term-prompt">miguel@vps:~$</span> cat ~/cv-summary.json', delay: 100 },
      { text: '<span class="term-accent">{\n  "nombre": "Miguel Angel Chavarria Coronado",\n  "titulo": "Ingeniero de Sistemas (UDI - Etapa Final)",\n  "materias_aprobadas": 54,\n  "certificaciones": ["Cisco Python", "Cisco JS", "Cisco CCNA", "Cisco IT Essentials", "DATEC QA"],\n  "contacto": "miguelangelchavarriacoronado@gmail.com",\n  "whatsapp": "+591 65000711"\n}</span>', delay: 300 }
    ],
    help: [
      { text: '<span class="term-info">Comandos disponibles:</span>', delay: 50 },
      { text: '<span class="term-dim">  deploy  - Simula el pipeline a producción de ccepcoin.tech</span>', delay: 100 },
      { text: '<span class="term-dim">  qa      - Ejecuta la suite de testing Jira & Zephyr</span>', delay: 150 },
      { text: '<span class="term-dim">  vps     - Inspecciona el consumo y estado del servidor Linux</span>', delay: 200 },
      { text: '<span class="term-dim">  cv      - Imprime las credenciales y contacto del CV 2026</span>', delay: 250 },
      { text: '<span class="term-dim">  clear   - Limpia la pantalla de la terminal</span>', delay: 300 }
    ]
  };

  function executeBatch(steps) {
    sound.playClick();
    steps.forEach((step) => {
      setTimeout(() => {
        const p = document.createElement('p');
        p.className = 'term-line';
        p.innerHTML = step.text;
        logs.appendChild(p);
        logs.scrollTop = logs.scrollHeight;
        if (step.sound) sound.playSuccess();
      }, step.delay);
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      const cmd = chip.dataset.cmd;
      if (commands[cmd]) executeBatch(commands[cmd]);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim().toLowerCase();
    input.value = '';
    if (!val) return;

    if (val === 'clear') {
      logs.innerHTML = '';
      sound.playClick();
      return;
    }

    if (commands[val]) {
      executeBatch(commands[val]);
    } else {
      sound.playClick();
      const p = document.createElement('p');
      p.className = 'term-line term-error';
      p.innerHTML = `Comando no reconocido: '${val}'. Escribe <strong>'help'</strong> para ver la lista de acciones.`;
      logs.appendChild(p);
      logs.scrollTop = logs.scrollHeight;
    }
  });
}

