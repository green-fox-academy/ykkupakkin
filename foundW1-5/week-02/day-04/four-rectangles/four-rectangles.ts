'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const heigth = 400;
const width = 600;

//DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.
let squareD: number = 20;
let squareHeigth : number = 100;
let squareWidth : number = 100;
let colorS: string[] = ["#2EDD17", "#2eb007", "#F58A07", "#618AB2"];

for(let i:number = 0; i < squareD; i+=squareD/4) {
    ctx.fillStyle = colorS[i/5];
    ctx.fillRect(20+i*30, (heigth/2), squareWidth + 2 * i, squareHeigth + 2 * i);

}
 
