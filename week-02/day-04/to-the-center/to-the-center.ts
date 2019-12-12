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
    ctx.beginPath();
    ctx.moveTo(x, y);
    for(let i: number = 0; i < 30; i+=5) {
        ctx.lineTo(width/2+i,heigth/2+i);
        ctx.stroke();
    }
}

singleLine(0, 4);
