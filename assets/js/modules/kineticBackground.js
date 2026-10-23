/**
 * Kinetic Neural Mesh Canvas
 * High-performance interactive background field with particle tethering,
 * pointer proximity displacement, and GPU 60/120fps rendering.
 */

export class KineticBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = 65;
    this.mouse = { x: -1000, y: -1000, radius: 160 };
    this.animationFrameId = null;
    this.isVisible = true;

    this.prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (this.prefersReduced) return;

    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.render();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    const count = window.innerWidth < 768 ? 32 : this.maxParticles;

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 1.8 + 1,
        baseAlpha: Math.random() * 0.4 + 0.2,
        color: Math.random() > 0.4 ? '#5B4FE9' : '#10B981'
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    // Pause when page is not visible
    document.addEventListener('visibilitychange', () => {
      this.isVisible = !document.hidden;
      if (this.isVisible) this.render();
    });
  }

  render() {
    if (!this.isVisible || this.prefersReduced) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      // Bounce boundaries
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse proximity interaction (repulsion & acceleration)
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.mouse.radius) {
        const force = (this.mouse.radius - dist) / this.mouse.radius;
        const angle = Math.atan2(dy, dx);
        p.x -= Math.cos(angle) * force * 3;
        p.y -= Math.sin(angle) * force * 3;
      }

      // Draw particle dot with soft glow
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.baseAlpha;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      // Draw connection lines between neighboring particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const lineDx = p.x - p2.x;
        const lineDy = p.y - p2.y;
        const lineDist = Math.sqrt(lineDx * lineDx + lineDy * lineDy);
        const maxDist = 135;

        if (lineDist < maxDist) {
          const alpha = (1 - lineDist / maxDist) * 0.16;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = '#5B4FE9';
          this.ctx.globalAlpha = alpha;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }

    this.ctx.globalAlpha = 1.0;
    this.animationFrameId = requestAnimationFrame(() => this.render());
  }
}

