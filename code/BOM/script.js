// Log the window object (global context)
console.log(this);

// Function to display a simple message
function display() {
    console.log("hi");
}
window.display();

// Get user's geolocation and display it
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (res) => {
            const { latitude, longitude } = res.coords;
            console.log("Latitude:", latitude, "Longitude:", longitude);
            displayOutput(`Location: Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (err) => {
            console.error("Geolocation Error:", err);
            displayOutput("Error fetching location.");
        }
    );
} else {
    console.error("Geolocation not supported by this browser.");
    displayOutput("Geolocation not supported.");
}

// Get DOM elements
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// Function to display output on the webpage
function displayOutput(message) {
    output.innerHTML += `<p>${message}</p>`;
}

// Button click event - Start media & store data
btn.addEventListener('click', () => {
    // Access user media (camera + microphone)
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
            document.getElementById('vd').srcObject = stream;
            displayOutput("Camera access granted.");
        })
        .catch((err) => {
            console.error("Media Error:", err);
            displayOutput("Error accessing camera.");
        });

    // Save an object to localStorage
    const userData = { name: "saiteja", time: new Date().toLocaleTimeString() };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Retrieve and display saved data
    const savedData = localStorage.getItem('userData');
    displayOutput(`Data saved: ${savedData}`);
});

//Share API
btn.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({ title: "Hello", text: "Sharing example!" })
            .then(() => displayOutput("Content shared successfully!"))
            .catch((error) => displayOutput("Error sharing content."));
    } else {
        displayOutput("Share API not supported.");
    }
});