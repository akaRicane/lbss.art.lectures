import { ASSETS_ROOT_PATH } from "../globals.js";
import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideText from "../js/custom/SlideText.js";

const shaders = new HorizontalSlide();

shaders.addSlide(
  new SlideText(`
  <h2>Texturing et shaders</h2>
`)
);

shaders.addSlide(
  new SlideText(`
  <h3>CPU vs GPU</h3>
  <ul>
    <li>CPU loop sur chaque pixel</li>
    <li>GPU process tous les pixels en parrallèle</li>
  </ul>
`)
);

shaders.addSlide(
  new SlideText(`
  <h3>Shaders</h3>
  <ul>
    <li>Code exécuté sur le GPU</li>
    <li>Languages: GLSL, OpenGL, WebGL, ...</li>
    <li>Vertex shader: transforme les vertices</li>
    <li>Fragment shader: colorie les pixels</li>
  </ul>
`)
);

const custom = document.createElement("div");
custom.style.display = "flex";
custom.style.flexDirection = "row";
custom.style.justifyContent = "space-around";

const left = document.createElement("div");
left.style.width = "50%";
left.style.display = "flex";
left.style.flexDirection = "column";

const titleLeft = document.createElement("p");
titleLeft.textContent = "FBM: Fractal Brownian Motion";
left.appendChild(titleLeft);

const imgLeft = document.createElement("img");
imgLeft.src = ASSETS_ROOT_PATH + "/fbm.png";
imgLeft.style.width = "100%";
left.appendChild(imgLeft);

const right = document.createElement("div");
right.style.width = "50%";
right.style.display = "flex";
right.style.flexDirection = "column";

const titleRight = document.createElement("p");
titleRight.textContent = "SBF: Signed Distance Function";

right.appendChild(titleRight);

const imgRight = document.createElement("img");
imgRight.src = ASSETS_ROOT_PATH + "/sbf.png";
imgRight.style.width = "100%";
right.appendChild(imgRight);

custom.appendChild(left);
custom.appendChild(right);

shaders.addCustomSection(custom);

// shaders.addSlide(new SlideImage("fbm.png"), "FBM: Fractal Brownian Motion");
// shaders.addSlide(new SlideImage("sbf.png"), "SBF: Signed Distance Function");

export default shaders;
