import { makeNoise2D } from './data.js';
import { makeNoise3D } from './data.js';
//alert( data.message );
const [width, height] = [888, 222];
//-----------------------------------------  2D Example
const canvas = document.querySelector("#canvas2DN");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(width, height);
const noise2D = makeNoise2D(Date.now()); // Using current date as seed
for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
        const i = (x + y * width) * 4;
        const value = (noise2D(x, y) + 1) * 128;
        imageData.data[i] = value;
        imageData.data[i + 1] = value;
        imageData.data[i + 2] = value;
        imageData.data[i + 3] = 255;
    }
}
ctx.putImageData(imageData, 0, 0);
//-----------------------------------------  3D Example
const canvas3DN = document.querySelector("#canvas3DN");
const ctx3DN = canvas3DN.getContext("2d");
const imageData3DN = ctx3DN.createImageData(width, height);
const noise3D = makeNoise3D(Date.now()); // Using current date as seed
let z = 0;
let z_inc = 0.01;
for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
        z += z_inc;
        const i = (x + y * width) * 4;
        const value = (noise3D(x, y, z) + 1) * 128;
        imageData3DN.data[i] = value;
        imageData3DN.data[i + 1] = value;
        imageData3DN.data[i + 2] = value;
        imageData3DN.data[i + 3] = 255;
    }
}
ctx3DN.putImageData(imageData3DN, 0, 0);
