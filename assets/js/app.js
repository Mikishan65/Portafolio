import { createAboutSection } from "./components/about.js";
import { createCertificationsSection } from "./components/certifications.js";
import { createContactSection } from "./components/contact.js";
import { createEducationSection } from "./components/education.js";
import { createExperienceSection } from "./components/experience.js";
import { createFooter } from "./components/footer.js";
import { createHero } from "./components/hero.js";
import { createHighlightsSection } from "./components/highlights.js";
import { createNavbar } from "./components/navbar.js";
import { createProjectsSection } from "./components/projects.js";
import { createTechnologiesSection } from "./components/technologies.js";

export function renderApp(rootElement) {
  if (!rootElement) return;

  rootElement.innerHTML = `
    ${createNavbar()}
    ${createHero()}
    <main id="main-content">
      ${createProjectsSection()}
      ${createExperienceSection()}
      ${createAboutSection()}
      ${createTechnologiesSection()}
      ${createCertificationsSection()}
      ${createEducationSection()}
      ${createHighlightsSection()}
      ${createContactSection()}
    </main>
    ${createFooter()}
  `;
}
