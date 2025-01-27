import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideText from "../js/custom/SlideText.js";

const outro = new HorizontalSlide();

const main = new SlideText(`
  <h1>Going further / outro</h1>
  <p>lbss.art</p>
`);
outro.addSlide(main);

export default outro;
