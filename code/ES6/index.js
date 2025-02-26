// Importing named and default exports
import { title, name, age } from './script.js';
import fruits from './script.js';

// Selecting the button
const button = document.getElementById('run-script');

// Adding click event listener
button.addEventListener('click', () => {
    console.clear(); // Clear console for clean output
    console.log(`Product Title: ${title}`);
    console.log(`Name: ${name}, Age: ${age}`);
    fruits("apple", "mango", "banana");
    console.log("%c Script Execution Complete!", "color: green; font-weight: bold;");
});
