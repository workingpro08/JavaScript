//Select elements
const nameInput = document.getElementById('nameInput');
const genderSelect = document.getElementById('genderSelect');
const displayText = document.getElementById('displayText');
const form = document.getElementById('myForm');
const clickButton = document.getElementById('clickButton');
const hoverButton = document.getElementById('hoverButton');

// Function to update text content dynamically
const updateText = (text) => {
    displayText.textContent = text;
};

// Prevent form submission and log message
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    updateText(`Submitted Name: ${nameInput.value}, Gender: ${genderSelect.value}`);
});

// Update paragraph when typing in input
nameInput.addEventListener('input', () => {
    updateText(nameInput.value);
});

// Update paragraph when selecting gender
genderSelect.addEventListener('change', () => {
    updateText(`Gender: ${genderSelect.value}`);
});

// Log message on button click
clickButton.addEventListener('click', () => {
    console.log("Button Clicked!");
});

// Log message when hovering over the button
hoverButton.addEventListener('mouseover', () => {
    console.log("Hovered over the button!");
});

// Keydown Event Listener
document.body.addEventListener('keydown', (event) => {
    console.log(`Key Pressed: ${event.key}`);
    
    if (event.key.toLowerCase() === 'a') {
        console.log(`Addition Result: ${20 + 30}`);
    } else {
        console.log("Press 'A' for addition");
    }
});

// Detect scroll event
window.addEventListener('scroll', () => {
    console.log("You are scrolling the page!");
});
