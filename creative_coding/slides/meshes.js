import HorizontalSlide from "../js/custom/HorizontalSlide.js";

const meshes = new HorizontalSlide();

const main = document.createElement("section");
main.innerHTML = `
  <h1>Meshes</h1>
  <p>lbss.art</p>
`;
meshes.addSlide(main);

export default meshes;
