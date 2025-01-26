import HorizontalSlide from "../js/custom/HorizontalSlide.js";

const outro = new HorizontalSlide();

const main = document.createElement("section");
main.innerHTML = `
  <h1>Going further / outro</h1>
  <p>lbss.art</p>
`;
outro.addSlide(main);

export default outro;
