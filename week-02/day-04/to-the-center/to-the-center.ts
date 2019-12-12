'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const heigth = 400;
const width = 600;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function singleLine(x:number, y:number) {
    for(let i: number = 0; i < 300; i+=100) {
        ctx.beginPath();
        ctx.moveTo(x, y + i);
        ctx.lineTo(width/2,(heigth/2));
        ctx.stroke();
    }
}

singleLine(50, 50);
