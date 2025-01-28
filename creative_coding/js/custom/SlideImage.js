import { ASSETS_ROOT_PATH } from "../../globals.js";
import Slide from "./Slide.js";

export default class SlideImage extends Slide {
  constructor(image) {
    super();
    this.slide = document.createElement("section");

    this.imagePath = `${ASSETS_ROOT_PATH}/${image}`;

    this.image = document.createElement("img");
    this.image.src = this.imagePath;

    this.slide.appendChild(this.image);
  }
}
