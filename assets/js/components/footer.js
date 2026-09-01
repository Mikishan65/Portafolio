import { siteMeta } from "../data/portfolioData.js";

export function createFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-brand"><span>M/AC</span><p>${siteMeta.fullName}<br>${siteMeta.title}</p></div>
      <div class="footer-links">
        <a href="${siteMeta.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="${siteMeta.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="${siteMeta.whatsappUrl}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
      <p>© <span data-current-year></span> · Diseñado para moverse y adaptarse.</p>
    </footer>
  `;
}
