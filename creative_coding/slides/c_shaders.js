import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideText from "../js/custom/SlideText.js";

const shaders = new HorizontalSlide();

shaders.addSlide(
  new SlideText(`
  <h2>Texturing et shaders</h2>
  <p>lbss.art</p>
`)
);

export default shaders;
