let p = document.createElement("p");
let h1 = document.createElement("h1");
let btn = document.getElementById("btn");
p.textContent = "This is a dynamically added paragraph.";
h1.textContent = "Dynamically Added Heading";
document.body.appendChild(h1);
h1.style.color = "blue";
h1.style.fontFamily = "Arial, sans-serif";
document.body.appendChild(p);

btn.addEventListener("click", () => {
    if (document.body.contains(p)) {
        document.body.removeChild(p);
        document.body.removeChild(h1);
    } else {
        document.body.appendChild(h1);
        document.body.appendChild(p);
    }  
});
