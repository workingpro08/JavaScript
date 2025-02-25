// Selecting elements
const heading = document.getElementById('x');
const image = document.getElementById('image');
const paragraph = document.getElementById('para');
const inputField = document.getElementById('na');
const button = document.getElementById('changeBtn');

// Toggle variable to switch images and text
let toggled = false;

// Function to change content dynamically
function changeContent() {
    const name = inputField.value.trim();

    if (name) {
        paragraph.innerHTML = `<b>Hi, ${name}!</b>`;
    } else {
        paragraph.innerHTML = `<b>Hi there!</b>`;
    }
    
    paragraph.style.backgroundColor = "red";
    paragraph.style.color = "white";
    paragraph.style.padding = "5px";
    paragraph.style.borderRadius = "5px";

    // Toggle changes
    if (!toggled) {
        heading.textContent = "Bye!";
        image.src = "https://static.vecteezy.com/system/resources/previews/022/026/248/non_2x/doraemon-cartoon-japanese-free-vector.jpg";
        button.textContent = "Reset";
    } else {
        heading.textContent = "Hello!";
        image.src = "https://m.media-amazon.com/images/I/61HHErhUQOL.jpg";
        button.textContent = "Click Me";
    }

    toggled = !toggled; // Switch toggle state
}

// Attach event listener to the button
button.addEventListener("click", changeContent);
