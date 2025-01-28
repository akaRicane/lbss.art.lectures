import { ASSETS_ROOT_PATH } from "../../globals.js";
import Slide from "./Slide.js";

export default class SlideVideo extends Slide {
  constructor(video) {
    super();
    this.slide = document.createElement("section");
    this.slide.style.maxHeight = "90%";

    this.videoPath = `${ASSETS_ROOT_PATH}/${video}`;

    this.video = document.createElement("video");
    this.video.src = this.videoPath;
    this.video.controls = true;
    this.video.muted = true;
    this.video.autoplay = true;

    // Add CSS styles to make the video responsive
    this.video.style.width = "auto";
    this.video.style.maxHeight = "100%";
    this.video.style.height = "100%";

    this.slide.appendChild(this.video);
  }
}
