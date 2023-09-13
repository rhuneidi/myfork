// **Question 1:** Write JavaScript code to declare an empty array named **`myArray`**.
let myArray = [];

// const name = [myArray];
console.log(myArray);
// names.push("myArray");

// **Question 2:** In JavaScript, how do you add the elements "apple," "banana," and "cherry" to the end of the array **`myArray`**?

myArray.push("Apple", "Banana", "Cherry");
console.log(myArray);

// **Question 3:** Write JavaScript code to print the first element of the array **`myArray`**.

console.log(myArray[0]);

// **Question 4:** Write JavaScript code to print the last element of the array **`myArray`**.

console.log(myArray[2]);

// **Question 5:** In JavaScript, how do you add "mango" to the beginning of the array **`myArray`**?

myArray.push("mango");
console.log(myArray);

// **Question 6:** Write JavaScript code to remove the last element from the array **`myArray`**.

myArray.pop(3);
console.log(myArray);

// **Question 7:** Given an array **`const numbers = [5, 10, 15, 20, 25]`**, write JavaScript code to delete the element at index 2 and update the array accordingly.

let numbers = [5, 10, 15, 20, 25];
console.log(numbers.slice(2));

// **Question 8:** Write a JavaScript function that takes an array as a parameter and returns its length.

console.log(myArray.length);

// **Question 9 [🌶️](https://emojipedia.org/hot-pepper):** Given the array **`const temperatures = [72, 68, 74, 80, 76]`**, write JavaScript code to find the highest temperature (the maximum value) in the array.

// let temperatures = [72, 68, 74, 80, 76];
// temperatures.max();
console.log(Math.max(72, 68, 74, 80, 76));

// **Question 10 [🌶️🌶️](https://emojipedia.org/hot-pepper):** Write JavaScript code to check if the element "banana" exists in the array **`myArray`** and return **`true`** if it does, otherwise, return **`false`**.
// console.log(myArray);
console.log(myArray.includes("Banana"));

//   // // =================================
//   // // =================================
//   // // =================================
//   // // =================================
//   // // =================================

//   // // =================================

/**

- isArrayLengthOdd(numbers):
- receives array `numbers`
- returns true if array has an odd number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthOdd([1, 2, 3]) -> true
- isArrayLengthOdd([1, 2, 3, 4]) -> flase
*/
function isArrayLengthOdd(numbers) {
  // Your code here
}
isArrayLengthOdd([1, 3, 7]);

isArrayLengthOdd(True);

/**
    
    - isArrayLengthEven(numbers):

    
    - receives array `numbers`
    - returns true if array has an even number of elements
    - returns false otherwise
    - 
    - e.g.
    - isArrayLengthEven([1, 2, 3]) -> false
    - isArrayLengthEven([1, 2, 3, 4]) -> true
    */
function isArrayLengthEven(numbers) {
  // Your code here
}

/**
    
    - addLailaToArray(instructors):
    - receives array `instructors`
    - returns a new array that's a copy of array `instructors` with additional string "Laila"
    - 
    - e.g.
    - addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
    */
function addLailaToArray(instructors) {
  // Your code here
}

/**
    
    - eliminateTeam(teams):
    - receives array `teams`
    - removes the last element from the array and return it
    - 
    - e.g.
    - eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
    */
function eliminateTeam(teams) {
  // Your code here
}

/**
    
    - secondHalfOfArrayIfItIsEven(fruits):
    - receives array `fruits`
    - returns a new array that's the second half of the original array if it has an even number of elements
    - returns an empty array if it has an odd number of elements
    - 
    - e.g.
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
    🌶️🌶️🌶️
    */
function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
}

/**
    
    - youGottaCalmDown(shout):
    - receives a string `shout`
    - returns the string `shout` with at most one exclamation mark (!) at the end.
    - 
    - e.g.
    - youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
    - youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
    - youGottaCalmDown("Hellooooo") -> "Hellooooo"
    - 
    - Hint:
    - Use number method .indexOf()
    - Use string method .slice()
    🌶️🌶️🌶️
    */
function youGottaCalmDown(shout) {
  // Your code here
}
