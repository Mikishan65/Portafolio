import { renderApp } from "./app.js";

const appRoot = document.getElementById("app");
renderApp(appRoot);
initPreloader();

function initPreloader() {
  const preloader = document.getElementById("preloader");
  const progress = document.querySelector(".loader-progress");
  const glitch = document.querySelector(".glitch-text");

  if (!preloader) {
    bootApp();
    return;
  }

  if (!progress || !window.gsap) {
    preloader.style.display = "none";
    bootApp();
    return;
  }

  let width = 0;
  const interval = window.setInterval(() => {
    width = Math.min(width + Math.random() * 15, 100);
    progress.style.width = `${width}%`;

    if (width < 100) return;

    window.clearInterval(interval);
    if (glitch) {
      glitch.dataset.text = "SISTEMA LISTO";
      glitch.textContent = "SISTEMA LISTO";
    }

    window.setTimeout(() => {
      window.gsap.to(preloader, {
        yPercent: -100,
        duration: 1.1,
        ease: "expo.inOut",
        onComplete: () => {
          preloader.style.display = "none";
          bootApp();
        }
      });
    }, 400);
  }, 100);
}

function bootApp() {
  setCurrentYear();
  initRevealAnimation();
  initNavbarCollapse();
  initSectionSpy();
  initPointerGlow();
  initVantaBackground();
}

function initVantaBackground() {
  if (!window.VANTA || document.body.dataset.vantaReady === "true") return;

  window.VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    color: 0x00f2fe,
    backgroundColor: 0x020204,
    points: 8,
    maxDistance: 18,
    spacing: 20
  });

  document.body.dataset.vantaReady = "true";
}

function setCurrentYear() {
  const yearNode = document.querySelector("[data-current-year]");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

function initRevealAnimation() {
  const nodes = Array.from(document.querySelectorAll(".reveal"));
  if (!nodes.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || typeof IntersectionObserver === "undefined") {
    nodes.forEach((node) => node.classList.add("is-visible"));
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
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  nodes.forEach((node, index) => {
    if (!node.style.getPropertyValue("--delay")) {
      node.style.setProperty("--delay", `${Math.min(index * 45, 320)}ms`);
    }
    observer.observe(node);
  });
}

function initNavbarCollapse() {
  const menu = document.getElementById("navbarNav");
  const links = Array.from(document.querySelectorAll("#navbarNav .nav-link"));

  if (!menu || !links.length || !window.bootstrap) return;

  const collapse = window.bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        collapse.hide();
      }
    });
  });
}

function initSectionSpy() {
  const links = Array.from(document.querySelectorAll("#navbarNav .nav-link"));
  if (!links.length || typeof IntersectionObserver === "undefined") return;

  const sections = links
    .map((link) => {
      const href = link.getAttribute("href");
      return href ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  function setActive(sectionId) {
    links.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${sectionId}`);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (visible) {
        setActive(visible.target.id);
      }
    },
    {
      rootMargin: "-42% 0px -42% 0px",
      threshold: [0.15, 0.4, 0.7]
    }
  );

  sections.forEach((section) => observer.observe(section));

  const initial = window.location.hash ? window.location.hash.slice(1) : sections[0].id;
  if (initial) {
    setActive(initial);
  }

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActive(hash);
    }
  });
}

function initPointerGlow() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
  if (reducedMotion || !hasFinePointer) return;

  window.addEventListener(
    "pointermove",
    (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    },
    { passive: true }
  );
}
