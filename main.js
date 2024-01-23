// Get the canvas element
var canvas = document.getElementById("myCanvas");

// Set the canvas size to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the drawing context
var ctx = canvas.getContext("2d");

//Fill the canvas with dark gray:
ctx.fillStyle = "#222";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// ------------------------------------------------------------
// Your drawing code goes here:

//Let's create some synthetic data:
let N = 10;
let X = [];
let Y = [];

ctx.transform(1, 0, 0, -1, 0, canvas.height)
ctx.fillStyle = "#FF00FF";
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 3;

for (let i = 0; i < N; i++) {
    X.push(Math.random())
    Y.push(Math.random())
    // Create a circle:
    ctx.beginPath();
    ctx.arc(X[i] * canvas.width, Y[i] * canvas.height, 10, 0, 2 * Math.PI)
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}



