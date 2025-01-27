import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideText from "../js/custom/SlideText.js";

const meshes = new HorizontalSlide();

const main = new SlideText(`
  <h1>Meshes</h1>
  <p>lbss.art</p>
`);
meshes.addSlide(main);

export default meshes;
