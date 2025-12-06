

let para = document.querySelector("div");
// Parent Node, Child Nodes, Children, First Child, Last Child, Next Sibling, 
// Child Element Count, Has Child Nodes
console.log(para.parentNode);
console.log(para.childNodes);
console.log(para.children);
console.log(para.firstChild);
console.log(para.lastChild);
console.log(para.nextSibling);
console.log(para.nextSibling);
console.log(para.previousSibling);
console.log(para.childElementCount);
console.log(para.hasChildNodes());
// Sibling Nodes and Sibling Elements (use this instead of above for children only)
// because they are more specific and avoid text nodes like line breaks and spaces
// Element-only Navigation (Cleaner)
// The DOM gives cleaner versions that skip text nodes:

console.log(para.firstElementChild);
console.log(para.lastElementChild);
console.log(para.nextElementSibling);
console.log(para.previousElementSibling);


// Using Document Fragment to improve performance
// when adding a large number of elements to the DOM
// This minimizes reflows and repaints
// by batching DOM updates
// rather than updating the DOM for each individual element

const frag = document.createDocumentFragment();

for (let i = 0; i < 10000; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  frag.appendChild(li);
}

document.querySelector("ul").appendChild(frag);

