import HorizontalSlide from "../js/custom/HorizontalSlide.js";

const P5_DEMO_PATH = "http://localhost:8000/slides/content/demo_p5/index.html";

const introduction = new HorizontalSlide();

const main = document.createElement("section");
main.innerHTML = `
  <h1>Creative coding</h1>
  <p>lbss.art</p>
`;
introduction.addSlide(main);

const whoarewe = document.createElement("section");
whoarewe.innerHTML = `
  <h3>Qui sommes-nous?</h3>
  <p>Duo d'artistes numériques</p>
`;
introduction.addSlide(whoarewe);

const demoP5Slide = document.createElement("section");
const demoP5 = document.createElement("iframe");
demoP5.src = P5_DEMO_PATH;
demoP5.width = "100%";
demoP5.height = "100%";
demoP5Slide.appendChild(demoP5);
introduction.addSlide(demoP5Slide);

export default introduction;
