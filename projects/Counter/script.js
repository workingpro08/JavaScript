const paraCount = document.getElementById("count");
let c = parseInt(paraCount.textContent); // Ensure 'c' is a number

function incr() {
    c++;
    paraCount.textContent = c;
}

function decr() {
    if (c > 0) { // Prevent negative numbers
        c--;
        paraCount.textContent = c;
    }
}

function reset() {
    c = 0;
    paraCount.textContent = c;
}

function change() {
    const rIndex = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = `#${rIndex}`;
}

const inp = document.getElementById("inp");
function inputChange() {
    const color = inp.value.trim(); // Ensure valid input
    if (color) {
        document.querySelectorAll(".btn").forEach((btn) => {
            btn.style.backgroundColor = color;
        });
    }
}

function changeMode() {
    document.body.classList.toggle("dark");
    const modeButton = document.getElementById("changeMode");
    modeButton.textContent = document.body.classList.contains("dark")
        ? "Change to Light"
        : "Change to Dark";
}
