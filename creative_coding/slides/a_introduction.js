import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideText from "../js/custom/SlideText.js";

const introduction = new HorizontalSlide();

introduction.addSlide(
  new SlideText(`
  <h2>Creative coding</h2>
  <p>Introduction</p>
  <p>lbss.art</p>
`)
);

introduction.addSlide(
  new SlideText(`
  <h3>Qui sommes-nous?</h3>
  <p>Duo d'ingénieurs et artistes numériques</p>
  <p>Pratique du creative coding depuis 2021</p>
`)
);

introduction.addSlide(
  new SlideText(`
  <h3>Qu'est-ce que le creative coding?</h3>
  <p>Programmation pour créer des oeuvres artistiques</p>
  <p>Combinaison de code et d'art</p>
`)
);

introduction.addSlide(
  new SlideText(`
  <h3>Moteurs de rendu & API pour la création graphique</h3>
  <ul>
    <li>Unity</li>
    <li>Unreal Engine</li>
    <li>Touch Designer</li>
    <li>Navigateur web + Canvas API</li>
  </ul>
  
`)
);

introduction.addSlide(
  new SlideText(`
  <h3>Boîte à outils</h3>
  <ul>
    <li>maths</li>
    <li>noises</li>
    <li>shaders</li>
    <li>assets (images, polices d'écriture, videos, musique, ...)</li>
    <li>IO (capteurs, controleurs MIDI, monde extérieur)</li>
  </ul>
`)
);

export default introduction;
