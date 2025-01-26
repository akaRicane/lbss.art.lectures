export default class HorizontalSlide {
  constructor() {
    this.main = document.createElement("section");
  }

  /**
   * Returns the whole horizontal slide
   *
   * @returns {HTMLElement}
   */
  get() {
    return this.main;
  }

  /**
   * Append a vertical slide to the horizontal slide
   *
   * @param {HTMLElement} slide
   * @returns {void}
   */
  addSlide(slide) {
    this.main.appendChild(slide);
  }
}
