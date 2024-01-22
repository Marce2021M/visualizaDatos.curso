let N=10;
// let X=[];
// let Y=[];

// accedemos al doc
var canvas1 = document.getElementById("thecanvas");
var ctx = canvas1.getContext("2d");


// Definimos el tamaño del canvasa
let X = Math.random()*canvas1.width;
let Y = Math.random()*canvas1.height;

// creamos objeto vectorial

ctx.fillStyle = "#FF00FF";
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 3;

ctx.beginPath();
ctx.moveTo(X,Y);
ctx.arc(X,Y,100,Math.PI/4,Math.PI/2);
ctx.closePath();
ctx.fill();
ctx.stroke();




