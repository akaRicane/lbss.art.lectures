import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideText from "../js/custom/SlideText.js";

const applications = new HorizontalSlide();

applications.addSlide(
  new SlideText(`
  <h2>Applications</h2>
  <p>Examples de sketches</p>
`)
);

export default applications;
