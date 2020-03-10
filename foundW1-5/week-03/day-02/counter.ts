'use strict';


// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    integer : number;
    startNum : number;

    constructor(integer: number = 0) {
        this.integer = integer;
        this.startNum = integer;
    }

    add(input?:number): void {
        if(input === undefined) {
            this.integer++;
        } else {
            this.integer += input;
        } 
    }

    get(): string {
        return "number " + this.integer;
    }

    reset(): number {
        return this.integer = this.startNum;
    }

}

let newCounter = new Counter();

newCounter.add(5);
console.log(newCounter.get());
newCounter.reset();
newCounter.add(10);
console.log(newCounter.get());