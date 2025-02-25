// Function to fetch and display a joke
const fetchJoke = async () => {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        // Check if response is OK
        if (!response.ok) throw new Error("Failed to fetch joke");

        const data = await response.json();
        console.log("Joke Data: ", data);

        // Update DOM with joke
        document.getElementById('joke').textContent = data.setup;
        document.getElementById('punch').textContent = data.punchline;

    } catch (error) {
        console.error("Error fetching joke: ", error);
        document.getElementById('joke').textContent = "Oops! Something went wrong.";
        document.getElementById('punch').textContent = "😢 Try again later.";
    }
};

// Initial joke fetch on page load
fetchJoke();

// Fetch a new joke on button click
document.getElementById('newJokeBtn').addEventListener('click', fetchJoke);
