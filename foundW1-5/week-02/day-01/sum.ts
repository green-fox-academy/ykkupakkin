// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(cycleMax: number) :number {
    let numNum: number = 0;
    for(let i: number = 0; i <= cycleMax; i++) {
        numNum+= i;
    }
    console.log(numNum);
    return numNum;
}
sum(5);