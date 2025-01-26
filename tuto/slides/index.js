import Reveal from "../dist/reveal.esm.js";
import RevealHighlight from "../plugin/highlight/highlight.esm.js";
import RevealMarkdown from "../plugin/markdown/markdown.esm.js";
import RevealNotes from "../plugin/notes/notes.esm.js";

window.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.classList.add("reveal");
  const slidesDeck = document.createElement("div");
  slidesDeck.id = "slides-deck";
  slidesDeck.classList.add("slides");
  container.appendChild(slidesDeck);
  document.body.appendChild(container);

  const slide1 = document.createElement("section");
  slide1.textContent = "Slide 1";

  const slide2 = document.createElement("section");
  slide2.textContent = "Slide 2";

  slidesDeck.appendChild(slide1);
  slidesDeck.appendChild(slide2);

  // Initialize Reveal.js
  Reveal.initialize({
    hash: true,

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
  }).then(() => {
    // Reveal.js is ready
    console.log("Reveal.js is ready");
    // Create slides dynamically
  });
});
