import Slide from "./Slide.js";

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
   * @param {Slide} slide
   * @returns {void}
   */
  addSlide(slide) {
    this.main.appendChild(slide.get());
  }

  addCustomSection(customSection) {
    const section = document.createElement("section");
    section.appendChild(customSection);
    this.main.appendChild(section);
  }
}
