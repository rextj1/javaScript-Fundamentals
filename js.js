// import greet, {add, multiply, PI} from "./helpers/math.js";
// Importing from reExport.js

import { greet, add, multiply, PI } from "./helpers/reExport.js";

// Using the imported functions and constants
console.log(greet("Alice")); // Hello Alice
console.log("Add:", add(2, 3)); // Add: 5
console.log("Multiply:", multiply(4, 5)); // Multiply: 20
console.log("PI:", PI); // PI: 3.14

console.log('you ');




