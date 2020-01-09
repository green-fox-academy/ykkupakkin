'use strict';


export class Anagram {
  stringA: string;
  stringB: string;

  constructor(stringA: string, stringB: string){
    this.stringA = stringA;
    this.stringB = stringB;
  }

  anagram(): boolean {
    let stringAArr = this.stringA.split('').sort();
    let stringBArr = this.stringB.split('').sort();
    for(let i: number = 0; i < stringAArr.length; i++) {
      if(stringAArr[i] == stringBArr[i]) {
        return true;
    }
    }
    return false;
  }
}