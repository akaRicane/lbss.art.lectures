import Slide from "./Slide.js";

export default class SlideText extends Slide {
  constructor(htmlContent) {
    super();
    this.slide = document.createElement("section");
    this.slide.innerHTML = htmlContent;
  }
}
