// Select elements
const para = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

// Convert text content to a number
let count = parseInt(para.textContent, 10);

// Function to increment count
function increment() {
    count++;
    para.textContent = count;
}

// Function to decrement count
function decrement() {
    count--;
    para.textContent = count;
}

// Attach event listeners
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
