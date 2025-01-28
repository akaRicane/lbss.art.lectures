import { ASSETS_ROOT_PATH } from "../globals.js";
import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideImage from "../js/custom/SlideImage.js";
import SlideText from "../js/custom/SlideText.js";
import SlideVideo from "../js/custom/SlideVideo.js";

const outro = new HorizontalSlide();

outro.addSlide(
  new SlideText(`
  <h2>Creative Coding</h2>
  <p>more than just programming</p>
`)
);

outro.addSlide(
  new SlideText(`
  <h2>Scenographie live</h2>
  <ul>
    <li>Contrôle de rubans LED</li>
    <li>Contrôle de hardware</li>
    <li>Communication avec le lightshow</li>
    <li>Déclenchement de FX</li>
    <li>...</li>
  </ul>
`)
);

outro.addSlide(new SlideImage("nico.png"));
outro.addSlide(new SlideVideo("DSCF0705.mov")); // nico bild
outro.addSlide(new SlideImage("regie.png"));
outro.addSlide(new SlideVideo("DSCF1042.mov")); // frode bild

outro.addSlide(
  new SlideText(`
    <h2>Autres intêrets à la pratique du creative coding</h2>
    <ul>
    <li>Expositions, musées</li>
    <li>Ludique, pédagogie</li>
    <li>Apprentissage de la programmation</li>
    <li>Data visualization</li>
    <li>Explorer</li>
    </ul>
    `)
);

outro.addSlide(new SlideVideo("C0405.mov")); // camille visages paulo

outro.addSlide(new SlideVideo(`flagada_record.mov`));

outro.addSlide(
  new SlideText(`
    <p>example Webgazer</p>
  `)
);

outro.addSlide(
  new SlideText(`
  <h2>Et nous dans tout ca ?</h2>
  <ul>
    <li>14 shows en 3 ans</li>
    <li>6 dates déjà prévues en 2025</li>
    <li>Clubs, festivals et salles de concerts</li>
    <li>1 logiciel</li>
    <li>Beaucoup de rencontres (artistes, orga, techniciens, régisseurs, ...)</li>
  </ul>
`)
);

outro.addSlide(new SlideVideo("IMG_2003.mov")); // molotov cocktail
outro.addSlide(new SlideVideo("IMG_2541.mov")); // nexus x vscode
outro.addSlide(new SlideImage("technopolice.png"));

outro.addSlide(new SlideVideo("IMG_3031.mov")); // arena toulouse
outro.addSlide(new SlideVideo("story-le-wanski-dour.mov")); // teaser dour
outro.addSlide(new SlideImage("setup_dour.png"));
outro.addSlide(new SlideVideo("IMG_4339.mov")); // DOUR

outro.addSlide(
  new SlideText(`
  <h2>Où commencer ?</h2>
  <ul>
    <li>p5 et p5 web editor</li>
    <li>Youtube: D. Shiffman / The coding train</li>
    <li>Open Processing</li>
    <li>Shadertoy</li>
    <li>The book of shaders</li>
    <li>GLSL Sandbox</li>
  </ul>
`)
);

outro.addSlide(
  new SlideText(`
  <h2>Merci</h2>
  <p>www.lbss.art</p>
  <p>@lbss.art</p>
  <p>contact@lbss.art</p>
  <img style="width: 25%;" src="${ASSETS_ROOT_PATH}/lbss-art-logo.png"></img>
`)
);

export default outro;
