import HorizontalSlide from "../js/custom/HorizontalSlide.js";

const applications = new HorizontalSlide();

const main = document.createElement("section");
main.innerHTML = `
  <h1>Applications</h1>
  <p>lbss.art</p>
`;
applications.addSlide(main);

export default applications;
