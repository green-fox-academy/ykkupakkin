// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc:string[] = ["Arthur", "Boe", "Chloe"];
//[abc[2]= abc[0], abc[0] = abc[2]];
// this method won't work because at the second part you are trying to call a value that has been already changed
console.log(abc[0], abc[2]);