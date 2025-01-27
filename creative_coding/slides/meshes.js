import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideSketch from "../js/custom/SlideSketch.js";
import SlideText from "../js/custom/SlideText.js";

const meshes = new HorizontalSlide();

meshes.addSlide(
  new SlideText(`
  <h2>Creative coding</h2>
  <p>Application #1</p>
  <p>mesh</p>
`)
);

meshes.addSlide(new SlideSketch("demos/demo_p5"));
meshes.addSlide(new SlideSketch("demos/demo_three"));
meshes.addSlide(new SlideSketch("demos/demo_shaders"));
meshes.addSlide(new SlideSketch("meshes/a_intro"));

export default meshes;
