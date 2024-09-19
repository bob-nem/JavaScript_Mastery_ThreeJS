import * as THREE from 'three';

const canvas = document.getElementById('canvas');

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('F0F0F0');

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({ color: '#468585' });
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(width:2, height:0.1, depth:2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: '#B4B4B3' });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// Add a light
const light = new THREE.DirectionalLight(0x9CDBA6, 100);
light.position.set(1, 1, 1);
scene.add(light);

// Create a renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);