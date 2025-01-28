import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideText from "../js/custom/SlideText.js";

const astar = new HorizontalSlide();

astar.addSlide(
  new SlideText(`
  <h2>Creative Coding</h2>
  <p>Environnement de programmation, créativité & ASTAR</p>
`)
);

astar.addSlide(
  new SlideText(`
  <h2>Quelques limitations possibles</h2>
  <ul>
    <li>Tout refaire à chaque projet / sketch (fichiers init, librairies, connectivité, ...)</li>
    <li>Génère beaucoup de duplicata -> difficile à maintenir long term</li>
    <li>Difficile de partager des bouts de code</li>
    <li>Difficile d'accès pour les débutants</li>
  </ul>
  <p>Au final, ne pas utiliser d'environement logiciel peut provoquer une perte d'efficience</p>
`)
);

astar.addSlide(
  new SlideText(`
  <h2>ASTAR</h2>
  <p>Dans notre parcours d'artistes numériques, nous avons très rapidement commencé à developper l'environnement logiciel autours de nos besoins et projets</p>
  <p>Notamment orienté autours du VJing et contrôle live / temps réel des sketches.</p>
`)
);

astar.addSlide(
  new SlideText(`
  <h2>Premiers besoins</h2>
  <ul>
    <li>Travailler et live à deux</li>
    <li>Intégration rapide de controles des paramètres des sketches</li>
    <li>Haute accessibilité en live nécessaire</li>
    <li>Connectivité (MIDI) et Audio react</li>
  </ul>
`)
);

astar.addSlide(
  new SlideText(`
  <h3>Cycle de développement</h3>
  <ul>
    <li>Été 2021: début de la pratique avec Processing et p5.js</li>
    <li>Avril 2022: première performance au Molotov dans le navigateur</li>
    <li>Été 2022: ASTAR alpha</li>
    <li>Septembre 2022: début de la tournée avec Le Wanski / Première performance avec la alpha</li>
    <li>Printemps 2023: ASTAR beta</li>
    <li>Printemps 2024: redeveloppement de zéro pour optimiser et fixer les core-issues</li>
    <li>Janvier 2025: redeveloppement de zéro en rust</li>
  </ul>
  `)
);

export default astar;
