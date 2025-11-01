let count = 0;

let DesplayCount = document.getElementById('count');
let decreaseCount = document.getElementById('decrease');
let increaseCount = document.getElementById('increase');
let resetCount = document.getElementById('reset');

increaseCount.addEventListener('click', () => {
    count++;
    DesplayCount.textContent = count;
});

decreaseCount.addEventListener('click', () => {
    count--;
    DesplayCount.textContent = count;
});

resetCount.addEventListener('click', () => {
    count = 0;
    DesplayCount.textContent = count;
})