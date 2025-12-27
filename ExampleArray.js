const arry = [
    {
        'gender': ['male', 'female', 'other'], 
        'surname': 'Blessed', 
        'middle name': 'ogede', 
        'school': 'uniport'
    },
    { 'subject': 'mathematics', 'surname': 'Futughe', 'middle name': 'Rex', 'school': 'uniport' },
]

// 1. REFERENCE COPY (of the objects)
// The array is new, but the objects inside are the exact same ones from the original.
const copy = arry.map(a => a); 
copy[0].surname = "CHANGED";
console.log(arry[0].surname); // Outputs: "CHANGED" (Original IS affected)


// 2. SHALLOW COPY (Object level)
// This creates new objects for the top level, but nested arrays (like 'gender') are still shared.
const copy1 = arry.map(a => ({ ...a })); 
copy1[0].surname = "NEW NAME"; 
console.log(arry[0].surname); // Outputs: "Blessed" (Original is NOT affected for strings/numbers)

// WARNING: Shallow copy still shares nested arrays
copy1[0].gender.push('alien');
console.log(arry[0].gender); // Outputs: [... 'alien'] (Original IS affected here!)


// 3. TRUE DEEP COPY
// Everything, including nested arrays and objects, is completely disconnected.
const realDeepCopy = structuredClone(arry);
realDeepCopy[0].gender.push('robot'); 

console.log(arry[0].gender); // Outputs: ['male', 'female', 'other'] (Original is Safe!)

const arry1 = [
    { id: 1, name: 'Blessed', school: 'uniport' },
    { id: 2, name: 'Futughe', school: 'uniport' }
];

// Target ID 1
const targetId = 1;

const updatedArray = arry1.map(item => {
    if (item.id === targetId) {
        // Create a NEW object for this specific item
        return { ...item, school: 'UNILAG' }; 
    }
    // Return the ORIGINAL reference for everyone else (saves memory)
    return item; 
});

console.log(updatedArray, 'updated array');
/* [
  { id: 1, name: 'Blessed', school: 'UNILAG' }, // NEW OBJECT
  { id: 2, name: 'Futughe', school: 'uniport' }  // ORIGINAL OBJECT
]
*/