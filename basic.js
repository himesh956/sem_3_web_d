// JavaScript Basics

console.log("Hello world");

// 3. Data Types
let username = "Himesh";     // String
let marks = 85;              // Number
let passed = true;           // Boolean
let value = null;            // Null
let x;                       // Undefined

console.log(username, marks, passed, value, x);


// 4. Operators
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// 5. if-else
let score = 75;

if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// 6. else-if
let marks2 = 85;

if (marks2 >= 90) {
    console.log("Grade A+");
} else if (marks2 >= 80) {
    console.log("Grade A");
} else if (marks2 >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}


// 7. for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 8. while loop
let i = 1;

while (i <= 5) {
    console.log("While:", i);
    i++;
}


// 9. Arrays
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);
console.log(fruits[0]);

fruits.push("Orange");
console.log(fruits);

fruits.pop();
console.log(fruits);


// 10. Objects
let student = {
    name: "Himesh",
    age: 20,
    course: "CSE"
};

console.log(student);
console.log(student.name);
console.log(student.course);


// 11. Functions
function greet() {
    console.log("Hello from function");
}

greet();


// 12. Function with parameters
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(5, 7);


// 13. Function with return
function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);
console.log("Result:", result);


// 14. Arrow Function
const square = (num) => {
    return num * num;
};

console.log(square(5));


// 15. Short Arrow Function
const cube = num => num * num * num;

console.log(cube(3));


// 16. String methods
let text = "JavaScript";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("Script"));


// 17. Array loop
let numbers = [10, 20, 30, 40];

for (let num of numbers) {
    console.log(num);
}


// 18. Simple function using array
function findSum(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum;
}

console.log("Array Sum:", findSum([1, 2, 3, 4, 5]));