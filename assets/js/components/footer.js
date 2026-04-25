import { siteMeta } from "../data/portfolioData.js";

export function createFooter() {
  return `
    <footer class="site-footer">
      <div class="container text-center">
        <small>&copy; <span data-current-year></span> ${siteMeta.fullName}. Disenado y desarrollado en componentes.</small>
      </div>
    </footer>
  `;
}
