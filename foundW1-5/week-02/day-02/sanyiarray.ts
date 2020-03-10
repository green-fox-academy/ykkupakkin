let bestArrayEver: number [] = [1,67,92,10];
console.log(bestArrayEver);

i//slice elements

let bestArrayEverSecondElement: number [] = bestArrayEver.slice(5);
console.log(bestArrayEverSecondElement);

// splice elements

console.log(bestArrayEver);
console.log(bestArrayEver.splice(2,0,68));

console.log(bestArrayEver);

// push

bestArrayEver.push(9999, 8);
console.log(bestArrayEver);



//array.forEach(
// function(element){
//   console.log()
// })

function consoleLogger (whatToConsolLog: string){
  console.log(whatToConsolLog);
}

let names: string[] = ['pistike', 'ferike', 'krisztike', 'julika'];
//console.log all the elements of the array w/ loop
for (let i: number = 0; i < names.length; i++){
 console.log(names[i]);
}


let bestNumbersEver: number[] = [1,2,4];
console.log(bestNumbersEver);
// numberadder

//console.log for each
names.forEach(
  function(name){
    console.log(name);
  });