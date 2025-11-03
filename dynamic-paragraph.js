let p = document.createElement("p");
let h1 = document.createElement("h1");
p.textContent = "This is a dynamically added paragraph.";
h1.textContent = "Dynamically Added Heading";
document.body.appendChild(h1);
h1.style.color = "blue";
h1.style.fontFamily = "Arial, sans-serif";
document.body.appendChild(p);
