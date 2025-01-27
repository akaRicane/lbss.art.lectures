import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideSketch from "../js/custom/SlideSketch.js";
import SlideText from "../js/custom/SlideText.js";

const introduction = new HorizontalSlide();

const main = new SlideText(`
  <h1>Creative coding</h1>
  <p>lbss.art</p>
`);
introduction.addSlide(main);

const whoarewe = new SlideText(`
  <h3>Qui sommes-nous?</h3>
  <p>Duo d'ingénieurs et artistes numériques</p>
  <p></p>
`);
introduction.addSlide(whoarewe);

const sketch = new SlideSketch("demo_p5");
introduction.addSlide(sketch);

export default introduction;
