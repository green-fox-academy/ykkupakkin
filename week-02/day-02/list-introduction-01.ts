// We are going to play with lists. Feel free to use the built-in methods where possible.

// Create an empty list which will contain names (strings)

let nameList: string[] = [];
// Print out the number of elements in the list
for (let i: number = 0; i < nameList.length; i++){
 console.log(nameList[i]);
}
// Add William to the list
nameList.push("William");
// Print out whether the list is empty or not
if (nameList.length === 0 || nameList === undefined) {
    console.log("The string is empty");
} else {
    console.log("The string is not empty");
}
// Add John to the list
// Add Amanda to the list
nameList.push("John", "Amanda");
// Print out the number of elements in the list
console.log(nameList.length);
// Print out the 3rd element
console.log(nameList[2]);
// Iterate through the list and print out each name
// William
// John
// Amanda
nameList.forEach(
    function(nameList){
      console.log(nameList);
    });
// Iterate through the list and print
// 1. William
// 2. John
// 3. Amanda
let i: number = 1;
nameList.forEach(
    function(nameList){
      console.log(i +". " + nameList);
      i++;
    });
// Remove the 2nd element
nameList.splice(1,1);
console.log(nameList);
// Iterate through the list in a reversed order and print out each name
// Amanda
// William
nameList.reverse();
console.log(nameList)
// Remove all elements
nameList.splice(0);
console.log(nameList);