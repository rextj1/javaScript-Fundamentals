// Use JSON.stringify() to store objects in local storage

let user = { name: "Toju", age: 25 };

localStorage.setItem("user", JSON.stringify(user));

let getUserItem = function () {
    return JSON.parse(localStorage.getItem("user"));
}

for (const key in getUserItem()) {
    let p = document.createElement("p");

    p.textContent = `${key}: ${getUserItem()[key]}`;

    document.body.appendChild(p);
}
