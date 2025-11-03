let text = document.getElementById("title");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
})