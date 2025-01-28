import { ASSETS_ROOT_PATH } from "../globals.js";
import HorizontalSlide from "../js/custom/HorizontalSlide.js";
import SlideCode from "../js/custom/SlideCode.js";
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
titleRight.textContent = "SDF: Signed Distance Function";

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

const sphereCode = `
  float geometry1( vec3 p, float s )
{
  return length(p)-s;
}`;

shaders.addSlide(new SlideCode(sphereCode));

const answerSphere = document.createElement("div");
answerSphere.style.display = "flex";
answerSphere.style.flexDirection = "row";
// answerSphere.style.justifyContent = "space-around";

const leftSphereAnswer = document.createElement("div");
leftSphereAnswer.style.minWidth = "75%";
leftSphereAnswer.innerHTML = `<pre><code data-trim data-noescape>${sphereCode}</code></pre>`;
const imgSphereAnswer = document.createElement("img");
imgSphereAnswer.src = ASSETS_ROOT_PATH + "/sphere.png";
answerSphere.appendChild(leftSphereAnswer);
answerSphere.appendChild(imgSphereAnswer);

shaders.addCustomSection(answerSphere);

const boxCode = `
  float geometry2( vec3 p, vec3 b )
{
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}`;

shaders.addSlide(new SlideCode(boxCode));

const answerBox = document.createElement("div");
answerBox.style.display = "flex";
answerBox.style.flexDirection = "row";
// answerBox.style.justifyContent = "space-around";

const leftBoxAnswer = document.createElement("div");
leftBoxAnswer.innerHTML = `<pre><code data-trim data-noescape>${boxCode}</code></pre>`;
const imgBoxAnswer = document.createElement("img");
imgBoxAnswer.src = ASSETS_ROOT_PATH + "/box.png";
answerBox.appendChild(leftBoxAnswer);
answerBox.appendChild(imgBoxAnswer);

shaders.addCustomSection(answerBox);

export default shaders;
