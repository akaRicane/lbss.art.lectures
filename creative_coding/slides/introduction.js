import HorizontalSlide from "../js/custom/HorizontalSlide.js";

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

export default introduction;
