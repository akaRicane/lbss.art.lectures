import { ASSETS_ROOT_PATH } from "../../globals.js";
import Slide from "./Slide.js";

export default class SlideVideo extends Slide {
  constructor(video) {
    super();
    this.slide = document.createElement("section");
    this.slide.style.display = "flex";
    this.slide.style.alignItems = "center";
    this.slide.style.justifyContent = "center";
    this.slide.style.height = "100%"; // Ensure the parent takes full height

    this.videoPath = `${ASSETS_ROOT_PATH}/${video}`;

    this.video = document.createElement("video");
    this.video.src = this.videoPath;
    this.video.controls = true;
    this.video.muted = true;
    this.video.autoplay = true;
    this.video.style.height = "100%"; // Make the video fit the parent vertically

    this.slide.appendChild(this.video);
  }
}
