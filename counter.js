let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;

let DesplayCount = document.getElementById('count');
let decreaseCount = document.getElementById('decrease');
let increaseCount = document.getElementById('increase');
let resetCount = document.getElementById('reset');

// Initial display or This ensures the user sees the correct 
// starting number as soon as the page finishes loading.
DesplayCount.textContent = count;

increaseCount.addEventListener('click', () => {
    count++;
    updateDisplay();

});

decreaseCount.addEventListener('click', () => {
    count--;
    updateDisplay()
});

resetCount.addEventListener('click', () => {
    count = 0;
    updateDisplay()
})

function updateDisplay() {
    localStorage.setItem('count', count);
    DesplayCount.textContent = count;
}
