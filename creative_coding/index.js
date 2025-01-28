import Reveal from "../dist/reveal.esm.js";
import RevealHighlight from "../plugin/highlight/highlight.esm.js";
import RevealMarkdown from "../plugin/markdown/markdown.esm.js";
import RevealNotes from "../plugin/notes/notes.esm.js";
import SLIDES_MASTER from "./js/custom/SlidesMaster.js";

import introduction from "./slides/a_introduction.js";
import meshes from "./slides/b_meshes.js";
import shaders from "./slides/c_shaders.js";
import astar from "./slides/d_astar.js";
import applications from "./slides/e_applications.js";
import outro from "./slides/f_outro.js";

window.addEventListener("DOMContentLoaded", () => {
  SLIDES_MASTER.init();

  SLIDES_MASTER.addHorizontalMain(introduction);
  SLIDES_MASTER.addHorizontalMain(meshes);
  SLIDES_MASTER.addHorizontalMain(shaders);
  SLIDES_MASTER.addHorizontalMain(astar);
  SLIDES_MASTER.addHorizontalMain(applications);
  SLIDES_MASTER.addHorizontalMain(outro);

  // Initialize Reveal.js
  Reveal.initialize({
    hash: true,

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
  });
});
