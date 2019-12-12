'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const heigth = 400;
const width = 600;

//DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function horizontalLine(x:number, y:number) {
    for(let i: number = 0; i <= 30; i+=10) {
        ctx.beginPath();
        ctx.moveTo(x, y + i);
        ctx.lineTo(50,y + i);
        ctx.stroke();
    }
}

horizontalLine(width/2, heigth/2);
