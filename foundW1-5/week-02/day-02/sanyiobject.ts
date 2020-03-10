'use strict';

//initializing object

// object.values replacement
let myObject = {

  favoritenumber : 10,
  name: 'pistike',
  workplace: 'MALEV'
}

for(let i in myObject) {
  console.log(i);
  console.log(myObject[i]);
}
//difference between array and object

let myObjectAsArray: any [] = [10,'pistike','MALEV']
console.log(myObjectAsArray);

//finding out keys of the object
console.log(Object.keys(myObject));


//modifying the values of a given object key
myObject.favoritenumber = 42;
myObject.workplace = 'GreenFox';

console.log(myObject.hasOwnProperty('workplace'));
console.log(myObject.hasOwnProperty('kapottmamarenniebedrejozsikatolferiket'));

console.log(myObject);



let b = {a: 1, b: 2, c: 3};
for(let i in b) {
  console.log(i);
  console.log(b[i]);
}

console.log(Object.keys(b));