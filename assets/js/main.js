import { renderApp } from "./app.js";

document.documentElement.classList.add("js");
renderApp(document.getElementById("app"));

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

setCurrentYear();
initNavigation();
initScrollProgress();
initSectionSpy();
initReveals();
initFilters();
initTilt();
initSkillPops();
initTraitRotator();

requestAnimationFrame(() => document.body.classList.add("is-ready"));

function setCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
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
    const label = toggle.querySelector(".nav-toggle-label");
    if (label) label.textContent = open ? "Cerrar" : "Menú";
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  let lastScroll = window.scrollY;
  const updateNav = () => {
    const current = window.scrollY;
    nav.classList.toggle("is-scrolled", current > 18);
    if (!nav.classList.contains("is-open") && !prefersReducedMotion) {
      nav.classList.toggle("is-hidden", current > 160 && current > lastScroll + 8);
      if (current < lastScroll - 8 || current < 80) nav.classList.remove("is-hidden");
    }
    lastScroll = current;
  };
  window.addEventListener("scroll", updateNav, { passive: true });
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
    .map((link) => document.querySelector(link.getAttribute("href")))
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
    { rootMargin: "-35% 0px -45%", threshold: [0.05, 0.25, 0.55] }
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
    { rootMargin: "0px 0px -8%", threshold: 0.08 }
  );
  elements.forEach((element) => observer.observe(element));
}

function initFilters() {
  setupFilter("[data-project-filter]", ".project-case", "projectFilter");
  setupFilter("[data-cert-filter]", ".evidence-row", "certFilter");
}

function setupFilter(buttonSelector, itemSelector, datasetKey) {
  const buttons = [...document.querySelectorAll(buttonSelector)];
  const items = [...document.querySelectorAll(itemSelector)];
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset[datasetKey];
      buttons.forEach((candidate) => {
        const active = candidate === button;
        candidate.classList.toggle("is-active", active);
        candidate.setAttribute("aria-pressed", String(active));
      });
      items.forEach((item) => {
        const visible = value === "all" || item.dataset.category === value;
        item.hidden = !visible;
      });
    });
  });
}

function initTilt() {
  if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;
  document.querySelectorAll("[data-tilt]").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.setProperty("--tilt-x", `${x * 10}deg`);
      element.style.setProperty("--tilt-y", `${y * -8}deg`);
    });
    element.addEventListener("pointerleave", () => {
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
    });
  });
}

function initTraitRotator() {
  if (prefersReducedMotion) return;
  const target = document.querySelector("[data-rotating-trait]");
  const traits = [...document.querySelectorAll("[data-trait]")].map((item) => item.dataset.trait);
  if (!target || traits.length < 2) return;

  let index = 0;
  window.setInterval(() => {
    index = (index + 1) % traits.length;
    target.classList.add("is-changing");
    window.setTimeout(() => {
      target.textContent = traits[index];
      target.classList.remove("is-changing");
    }, 180);
  }, 2200);
}

function initSkillPops() {
  const bubbles = [...document.querySelectorAll("[data-skill-pop]")];
  const status = document.querySelector("[data-pop-status]");
  if (!bubbles.length) return;

  const responses = ["desplegado", "verificado", "conectado", "listo para producción"];
  let responseIndex = 0;

  bubbles.forEach((bubble) => {
    bubble.addEventListener("click", () => {
      const skill = bubble.dataset.skillPop;
      if (status) {
        status.textContent = `${skill}: ${responses[responseIndex % responses.length]}.`;
        responseIndex += 1;
      }

      if (prefersReducedMotion || bubble.classList.contains("is-popping")) return;
      bubble.classList.add("is-popping");
      window.setTimeout(() => bubble.classList.remove("is-popping"), 720);
    });
  });
}
