import { siteMeta } from "../data/portfolioData.js";

export function createFooter() {
  return `
    <footer class="site-footer">
      <div class="section-shell">
        <div class="footer-top-row">
          <div class="footer-brand">
            <span class="brand-monogram">M/AC</span>
            <div>
              <strong>${siteMeta.fullName}</strong>
              <p>${siteMeta.title} · UDI</p>
            </div>
          </div>
          <div class="footer-telemetry">
            <span class="telemetry-ping"><span class="ping-dot"></span> Santa Cruz, Bolivia (UTC-4)</span>
            <span class="telemetry-time" id="local-clock" aria-label="Hora local en Santa Cruz">--:--:--</span>
          </div>
        </div>
        <div class="footer-divider" aria-hidden="true"></div>
        <div class="footer-bottom-row">
          <div class="footer-links">
            <a href="${siteMeta.cvUrl}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> CV 2026</a>
            <a href="https://ccepcoin.tech/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-rocket" aria-hidden="true"></i> ccepcoin.tech</a>
            <a href="${siteMeta.github}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>
            <a href="${siteMeta.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
            <a href="${siteMeta.whatsappUrl}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp</a>
          </div>
          <p class="footer-copy">© <span data-current-year></span> · Del código a producción con estabilidad.</p>
        </div>
      </div>
    </footer>
  `;
}
