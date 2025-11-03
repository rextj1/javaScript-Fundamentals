// Store a value in local storage
localStorage.setItem("username", "Toju");
//Retrieve it
let name = localStorage.getItem("username");
console.log(name); // Toju
// Remove one item
localStorage.removeItem("username");
// Clear all items
localStorage.clear();