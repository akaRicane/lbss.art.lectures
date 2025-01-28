import Slide from "./Slide.js";

export default class SlideCode extends Slide {
  constructor(code) {
    super();
    this.slide = document.createElement("section");
    this.slide.innerHTML = `<pre><code data-trim data-noescape>${code}</code></pre>`;
  }
}
