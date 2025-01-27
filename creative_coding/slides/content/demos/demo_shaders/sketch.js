import fragmentShader from "./fragment.js";
import vertexShader from "./vertex.js";

/* ---------------------------------- SCENE --------------------------------- */
const scene = new THREE.Scene();

/* --------------------------------- CAMERA --------------------------------- */
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

/* -------------------------------- RENDERER -------------------------------- */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* ---------------------------------- CUBE ---------------------------------- */
const cubeSize = 3;
const vertices_precision = 100;
const points = [];
for (let i = 0; i < vertices_precision; i++) {
  points.push(
    new THREE.Vector2(
      Math.sin(i * 0.2) * cubeSize + 10,
      Math.tan(i - cubeSize / 2) * 0.001
    )
  );
}
const geometry = new THREE.LatheGeometry(points);
const cube = new THREE.Mesh(
  // geometry,
  // new THREE.DodecahedronGeometry(cubeSize,vertices_precision),
  // new THREE.SphereGeometry(cubeSize,vertices_precision,vertices_precision),
  new THREE.BoxGeometry(
    cubeSize,
    cubeSize,
    cubeSize,
    vertices_precision,
    vertices_precision,
    vertices_precision
  ),
  new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide,
    // wireframe: true,
    uniforms: {
      uTime: { value: 0 },
      offsetFace: { value: 1.0 },
      deformFactor: { value: 1.0 },
    },
  })
);

// Add the cube to the scene or perform other operations...

cube.rotation.x += 0.2;
cube.geometry.needsUpdate = true;
scene.add(cube);

/* -------------------------------------------------------------------------- */
/*                                   ANIMATE                                  */
/* -------------------------------------------------------------------------- */

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.001;
  cube.rotation.y += 0.001;
  updateUniforms();
  cube.geometry.needsUpdate = true;
  renderer.render(scene, camera);
}
animate();

// Update the uTime uniform in the render loop or any desired update function
function updateUniforms() {
  cube.material.uniforms.uTime.value = performance.now() * 0.001; // Set the uTime uniform to the current time
  cube.material.uniforms.offsetFace.value += 0.01;
  if (cube.material.uniforms.offsetFace.value > 2.0) {
    cube.material.uniforms.offsetFace.value = 0.0;
  }
  // cube.material.uniforms.offsetFace.value = Math.sin(performance.now() * 0.001)+1.0;
  cube.material.uniforms.deformFactor.value =
    Math.sin(performance.now() * 0.001) + 1.0;
}
