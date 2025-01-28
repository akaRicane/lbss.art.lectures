import { CONTENT_ROOT_PATH } from "../../globals.js";
import Slide from "./Slide.js";

export default class SlideSketch extends Slide {
  constructor(sketch) {
    super();
    this.slide = document.createElement("section");
    this.slide.className = "slide-background-content";

    this.sketchPath = `${CONTENT_ROOT_PATH}${sketch}/index.html`;

    this.iframe = document.createElement("iframe");
    this.iframe.className = "data-src data-preload";
    this.iframe.src = this.sketchPath;
    this.iframe.width = "100%";
    this.iframe.height = "100%";
    this.slide.appendChild(this.iframe);
  }
}
