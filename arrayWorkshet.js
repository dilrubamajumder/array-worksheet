// Part 1: Understanding Basics of Arrays

// - Array Creation: Create an array named fruits with the following values: "apple", "banana", and "cherry".
const fruits = ["apple", "banana", "cherry"]

// - Accessing Array Elements: What is the value at index 1 of the fruits array? Write the code to access it.
console.log(fruits[1]); // banana

/*
 - Using length: Write a line of code to print the total number of items in the fruits array using the length 
   property.
*/
console.log(fruits.length); // 3




// Part 2

//- Using push: Using the fruits array you created above, add the fruit "orange". Then, print the updated array.
fruits.push("orange");
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'orange' ]

//- Using pop: Remove the last element from the fruits array. Then, print the updated array and the removed element.
const removed = fruits.pop();
console.log(removed); // orange

//- Challenge: Add two more fruits of your choice to the array using push. Then remove one fruit using pop. Finally,
//  print the updated array and its length. Attempt to trace the predicted outcome prior to running the code
fruits.push("mango", "grape");
fruits.pop();
console.log(fruits, fruits.length ); //[ 'apple', 'banana', 'cherry', 'mango' ] 4




// Part 3

//Using a for Loop: Write a for loop to print each fruit in the fruits array.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); //apple banana cherry mango
}

/*
- Using a for Loop: Write a for loop to print each fruit in the fruits array in uppercase letters. 
  You’ll need to look up a string method to accomplish this.
*/
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].toUpperCase()); //APPLE BANANA CHERRY MANGO
}

/*
- Counting Specific Items Use a for loop to count how many times the fruit "apple" appears in the fruits array.
  Print the count.
*/
let appleCount = 0;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "apple") appleCount++;
}
console.log(appleCount); // 1




// Part 4
/*
Build a Shopping Cart: 
    - Create an empty array called cart.
    - Add 3 items to the cart using push.
    - Print the contents of the cart.
    - Remove the last item using pop.
    - Print the updated contents and the length of the cart.
*/
const cart = [];
cart.push("notebook", "pen", "eraser");
console.log(cart); // [ 'notebook', 'pen', 'eraser' ]
cart.pop();
console.log(cart); // [ 'notebook', 'pen' ]
console.log(cart.length); // 2

/*
Reverse the Order: Create an array called numbers with values [1, 2, 3, 4, 5]. 
Write a for loop to reverse the order of the elements (without using built-in methods like reverse). 
Print the reversed array.
*/

const numbers = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}
console.log(reversed);//[ 5, 4, 3, 2, 1 ]




// Part 5

/*
- Given 2 arrays, write an if/else statement that console logs a message declaring which array has a greater length
*/
let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];

if (array1.length > array2.length) {
    console.log("array1 has more elements"); //array1 has more elements
  } else if (array2.length > array1.length) {
    console.log("array2 has more elements");
  } else {
    console.log("Both arrays have the same length");
  }




// Part 6

/*
Given an array, write a for loop to console log only the elements at even indices (0, 2, 4, etc.). 
Think about the pieces of the for loop, is there a way to increment the loop? Or maybe use a math 
operator to check if an even number is true...
*/

const array = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    console.log(array[i]); // 10 30 50
  }
}



// Part 7
/*
Pairing Items Create two arrays:
students with names: "Alice", "Bob", "Charlie"
subjects with names: "Math", "Science"
Write nested for loops (you are going to need to do your own research here) to print each possible pairing of a student with a subject.
Using a comment in your code, explain how a nested for loop works
*/

const students = ["Alice", "Bob", "Charlie"];
const subjects = ["Math", "Science"];

for (let i = 0; i < students.length; i++) {// The outer loop goes through each student i index .
  for (let j = 0; j < subjects.length; j++) { // For each student, the inner loop goes through each subject j index.
    console.log(`${students[i]} - ${subjects[j]}`); // This prints all combinations of students with subjects.
  }
}


