import Reveal from "../dist/reveal.esm.js";
import RevealHighlight from "../plugin/highlight/highlight.esm.js";
import RevealMarkdown from "../plugin/markdown/markdown.esm.js";
import RevealNotes from "../plugin/notes/notes.esm.js";
import SLIDES_MASTER from "./js/custom/SlidesMaster.js";
import applications from "./slides/applications.js";
import introduction from "./slides/introduction.js";
import meshes from "./slides/meshes.js";
import outro from "./slides/outro.js";

window.addEventListener("DOMContentLoaded", () => {
  SLIDES_MASTER.init();

  SLIDES_MASTER.addHorizontalMain(introduction);
  SLIDES_MASTER.addHorizontalMain(meshes);
  SLIDES_MASTER.addHorizontalMain(applications);
  SLIDES_MASTER.addHorizontalMain(outro);

  // Initialize Reveal.js
  Reveal.initialize({
    hash: true,

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
  });
});
