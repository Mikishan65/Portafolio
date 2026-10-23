import { createCertificationsSection } from "./components/certifications.js";
import { createContactSection } from "./components/contact.js";
import { createEducationSection } from "./components/education.js";
import { createExperienceSection } from "./components/experience.js";
import { createFooter } from "./components/footer.js";
import { createHero } from "./components/hero.js";
import { createHighlightsSection } from "./components/highlights.js";
import { createNavbar } from "./components/navbar.js";
import { createProjectsSection } from "./components/projects.js";
import { createManifesto, createPlayground, createMotionAbout } from "./components/motionSections.js";

export function renderApp(rootElement) {
  if (!rootElement) return;

  rootElement.innerHTML = `
    ${createNavbar()}
    ${createHero()}

    <main id="main-content">
      ${createManifesto()}
      ${createProjectsSection()}
      ${createExperienceSection()}
      ${createMotionAbout()}
      ${createPlayground()}
      ${createCertificationsSection()}
      ${createEducationSection()}
      <details class="more-profile"><summary>Más sobre mi forma de trabajar <span>+</span></summary>${createHighlightsSection()}</details>
      ${createContactSection()}
    </main>

    ${createFooter()}
  `;
}
