import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideText from "../js/custom/SlideText.js";

const meshes = new HorizontalSlide();

meshes.addSlide(
  new SlideText(`
  <h2>Application #1</h2>
  <p>mesh</p>
`)
);

// meshes.addSlide(new SlideSketch("demos/demo_p5"));
// meshes.addSlide(new SlideSketch("demos/demo_three"));
// meshes.addSlide(new SlideSketch("demos/demo_shaders"));
// meshes.addSlide(new SlideSketch("meshes/a_intro"));

export default meshes;
