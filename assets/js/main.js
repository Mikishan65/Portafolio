import { renderApp } from "./app.js";
import { initCinematicMotion } from "./modules/cinematicMotion.js";
import { initPlayground } from "./modules/playground.js";
import { projectDetail } from "./components/projects.js";

import { sound } from "./modules/audioFx.js";

// Initialize application DOM
document.documentElement.classList.add("js");
const appRoot = document.getElementById("app");
renderApp(appRoot);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Initialize interactive layers
setCurrentYear();
initAudioControls();
initLiveClock();
initNavigation();
initScrollProgress();
initSectionSpy();
initReveals();
initFilters();




initInteractiveSounds();
initEmailCopy();
initCinematicMotion();
initPlayground();
initProjectDialog();
initStationJumps();

requestAnimationFrame(() => document.body.classList.add("is-ready"));

function setCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

function initAudioControls() {
  const soundBtn = document.getElementById("sound-toggle");
  const soundIcon = document.getElementById("sound-icon");
  const soundLabel = document.getElementById("sound-label");

  if (!soundBtn) return;

  const syncSoundUI = () => {
    soundBtn.classList.toggle("is-muted", !sound.enabled);
    soundBtn.setAttribute("aria-pressed", String(sound.enabled));
    if (soundIcon) {
      soundIcon.className = sound.enabled ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark";
    }
    if (soundLabel) {
      soundLabel.textContent = sound.enabled ? "SFX: ON" : "SFX: OFF";
    }
  };

  syncSoundUI();

  soundBtn.addEventListener("click", () => {
    sound.toggle();
    syncSoundUI();
  });
}

function initLiveClock() {
  const clocks = document.querySelectorAll("[data-live-clock]");
  if (!clocks.length) return;

  function updateTime() {
    try {
      const now = new Date();
      // Santa Cruz, Bolivia is UTC-4
      const options = {
        timeZone: "America/La_Paz",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      const formatted = new Intl.DateTimeFormat("es-BO", options).format(now);
      clocks.forEach(c => c.textContent = formatted);
    } catch {
      const d = new Date();
      const formatted = d.toTimeString().split(" ")[0];
      clocks.forEach(c => c.textContent = formatted);
    }
  }

  updateTime();
  setInterval(updateTime, 1000);
}

function initNavigation() {
  const nav = document.getElementById("topnav");
  const toggle = document.querySelector(".nav-toggle");
  const panel = document.getElementById("nav-menu");
  if (!nav || !toggle || !panel) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    sound.playClick();
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  panel.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      setOpen(false);
      sound.playClick();
    })
  );

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) setOpen(false);
  });

  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 20);
  }, { passive: true });
  document.addEventListener("click", event => {
    if (nav.classList.contains("is-open") && !nav.contains(event.target)) setOpen(false);
  });
  window.matchMedia("(min-width: 1101px)").addEventListener("change", () => setOpen(false));

}

function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress span");
  if (!bar) return;
  const update = () => {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${available > 0 ? window.scrollY / available : 0})`;
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
}

function initSectionSpy() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links
    .map((link) => {
      const href = link.getAttribute("href");
      return href && href.startsWith("#") ? document.querySelector(href) : null;
    })
    .filter(Boolean);
  if (!links.length || !sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!active) return;
      links.forEach((link) => {
        const current = link.getAttribute("href") === `#${active.target.id}`;
        link.classList.toggle("is-active", current);
        if (current) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-30% 0px -40%", threshold: [0.08, 0.3, 0.6] }
  );
  sections.forEach((section) => observer.observe(section));
}

function initReveals() {
  const elements = [...document.querySelectorAll(".reveal")];
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6%", threshold: 0.05 }
  );
  elements.forEach((element) => observer.observe(element));
}

function initFilters() {
  setupFilter("[data-project-filter]", ".project-card", "projectFilter");
  setupFilter("[data-cert-filter]", ".cert-card", "certFilter");
  setupFilter("[data-tech-filter]", ".tech-item-card", "techFilter");
}

function setupFilter(buttonSelector, itemSelector, datasetKey) {
  const buttons = [...document.querySelectorAll(buttonSelector)];
  const items = [...document.querySelectorAll(itemSelector)];
  if (!buttons.length || !items.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      sound.playClick();
      const value = button.dataset[datasetKey];
      buttons.forEach((candidate) => {
        const active = candidate === button;
        candidate.classList.toggle("is-active", active);
        candidate.setAttribute("aria-pressed", String(active));
      });
      items.forEach((item) => {
        const visible = value === "all" || item.dataset.category === value;
        item.style.display = visible ? "" : "none";
        if (datasetKey === 'projectFilter') item.previousElementSibling.hidden = !visible;
        if (visible) item.classList.add("is-visible");
      });
      if (datasetKey === "projectFilter") {
        document.getElementById("project-results").textContent = `${items.filter(item => item.style.display !== "none").length} proyectos`;
        document.dispatchEvent(new Event('projectsfiltered'));
      }
      window.ScrollTrigger?.refresh();
    });
  });
}

function initInteractiveSounds() {
  // Add subtle tactile sound feedback on key interactions
  const clickables = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .btn-ghost, .project-link-btn, .nav-cv-btn, .nav-contact-btn"
  );
  clickables.forEach((el) => {
    el.addEventListener("click", () => sound.playClick());
  });
}

function initEmailCopy() {
  const copyBtn = document.getElementById("copy-email");
  const copyText = document.getElementById("copy-text");
  const copyIcon = document.getElementById("copy-icon");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText("miguelangelchavarriacoronado@gmail.com");
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = "miguelangelchavarriacoronado@gmail.com";
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      sound.playSuccess();
      if (copyText) copyText.textContent = "¡Copiado!";
      if (copyIcon) copyIcon.className = "fa-solid fa-check";
      copyBtn.classList.add("is-success");

      setTimeout(() => {
        if (copyText) copyText.textContent = "Copiar";
        if (copyIcon) copyIcon.className = "fa-regular fa-copy";
        copyBtn.classList.remove("is-success");
      }, 2400);
    } catch {
      sound.playClick();
      if (copyText) copyText.textContent = "Selecciona el correo";
    }
  });
}

function initProjectDialog() {
  const dialog = document.getElementById('project-dialog');
  let trigger;
  if (!dialog) return;

  document.querySelectorAll('[data-project-open]').forEach(button => {
    button.addEventListener('click', () => {
      trigger = button;
      const content = document.getElementById('project-dialog-content');
      if (content) content.innerHTML = projectDetail(Number(button.dataset.projectOpen));
      sound.playPop();
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add('modal-open');
      dialog.querySelector('.dialog-close')?.focus();

      dialog.querySelector('[data-close-dialog]')?.addEventListener('click', () => {
        sound.playClick();
        dialog.close();
      });
    });
  });

  dialog.querySelector('.dialog-close')?.addEventListener('click', () => {
    sound.playClick();
    dialog.close();
  });

  dialog.addEventListener('click', e => {
    if (e.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
      sound.playClick();
      dialog.close();
    }
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    trigger?.focus({ preventScroll: true });
  });
}

function initStationJumps() {
  const jumpButtons = document.querySelectorAll("[data-jump-station]");
  jumpButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      sound.playClick();
      const targetId = btn.dataset.jumpStation;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
        targetEl.classList.add("is-highlighted");
        setTimeout(() => targetEl.classList.remove("is-highlighted"), 1400);
      }
    });
  });
}
