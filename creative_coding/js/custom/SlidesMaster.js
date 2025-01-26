import HorizontalSlide from "./HorizontalSlide.js";

class SlidesMaster {
  constructor() {
    this.root = null;
    this.slidesDeck = null;
  }

  init() {
    this.root = document.createElement("div");
    this.root.classList.add("reveal");
    document.body.appendChild(this.root);

    this.slidesDeck = document.createElement("div");
    this.slidesDeck.id = "slides-deck";
    this.slidesDeck.classList.add("slides");
    this.root.appendChild(this.slidesDeck);
  }

  /**
   * Append HorizontalSlide to the slides deck
   *
   * @param {HorizontalSlide} slide
   * @returns {void}
   */
  addHorizontalMain(horizontalSlide) {
    this.slidesDeck.appendChild(horizontalSlide.get());
  }
}

const SLIDES_MASTER = new SlidesMaster();

export default SLIDES_MASTER;
