//1-19 are JS parameters

// function combineStrings(...strings){
//     return strings.join(" ");
// }

// const fullName = combineStrings("Mr.", "James", "Floeasy", "III");

// console.log(fullName);

// function combineStrings (...strings){
//     return strings.join(" ");
// }

// const fullName = combineStrings("Ms.", "Erica", "Smeeeeeeth");

// console.log(fullName)

// const fullName = ()

//22-47 are JS CALLBACKS
// callback = a function that is passed as an argument
//                    to another function.

//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases

//                    "Hey, when you're done, call this next."

// //ex:

// sum(displayConsole, 1, 2)

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result)
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("mhH1").textContent = result;
// }

//lines 56-107 are forEach practice
// forEach() = method used to iterate over the elements 
//                     of an array and apply a specified function (callback)
//                     to each element

//                     array.forEach(callback)
//                     element, index, array are provided

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double);
// numbers.forEach(triple);
// numbers.forEach(square);
// numbers.forEach(cube);

// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }

// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "coconut"]

// //were calling each element within the array to be *ln 89*
// fruits.forEach(capitalize);//use this line to use as what you want displayed
// fruits.forEach(display);//tells the console what we'd like displayed

// //uppercasing an index of arrays
// function upperCase(element, index, array){
// array[index] = element.toUpperCase();
// }
// //lowercasing an index of arrays
// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase();
// }
// //To capitalize the first letter of each in the array
// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// //display function that outputs the element to the console
// function display(element){
//     console.log(element);
// }





//lines 112-147 are filter() method
// .filter() = creates a new array by filtering out
//                 elements with a callback

//ex1
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNUms = numbers.filter(isEven)
// let oddNums = numbers.filter(isOdd)

// //function checks array for even numbers
// function isEven(element){
//     return element % 2 === 0;
// }
// //function checks array for odd numbers
// function isOdd(element){
//     return element % 2 !== 0;
// }

// console.log(oddNums)

//ex 2
// const ages = [16, 17, 18, 18, 19, 20, 60];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);


// console.log(adults, children)

// function isAdult(element){
//     return element >=18;
// }

// function isChild(element){
//     return element <18;
// }




//lines 152-181 are JS reduce() method
// .reduce() = reduce the elements of an array
//                     to a single value    
// const prices = [11, 12, 5, 43, 99]

// const total = prices.reduce(sum);

// console.log(`$${total}`)

// function sum(previous, next){
//     return previous + next;
// }

// ex2
// const grades = [45, 98, 87, 65, 56]
// const max = grades.reduce(getMax);
// const min = grades.reduce(getMin);


// console.log(min)
// console.log(max)


// function getMax(accumulator, element){
//     return Math.max(accumulator, element)
// }

// function getMin(accumulator, element){
//     return Math.min(accumulator, element)
// }