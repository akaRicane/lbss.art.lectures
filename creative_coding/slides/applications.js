import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideText from "../js/custom/SlideText.js";

const applications = new HorizontalSlide();

const main = new SlideText(`
  <h1>Applications</h1>
  <p>lbss.art</p>
`);
applications.addSlide(main);

export default applications;
