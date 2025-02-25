// Capturing Events in the Box Hierarchy
document.getElementById('c').addEventListener('click', function (e) {
    alert("Child (c) got clicked");
}, true);

document.getElementById('p').addEventListener('click', function (e) {
    alert("Parent (p) got clicked");
}, true);

document.getElementById('gp').addEventListener('click', function (e) {
    alert("Grandparent (gp) got clicked");
}, true);

// Fruit Button Click Event
const fruitNameDisplay = document.getElementById('fruit-name');

document.getElementById('buttons').addEventListener('click', function (e) {
    if (e.target.classList.contains('fruit-btn')) {
        const fruit = e.target.textContent.trim();
        console.log("You clicked: " + fruit);
        fruitNameDisplay.textContent = fruit;
    }
});
