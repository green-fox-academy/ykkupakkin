'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const heigth = 400;
const width = 600;

//DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.
ctx.fillStyle = "#2EDD17"
ctx.fillRect((width/2)-5, heigth/2, 10, 10);
