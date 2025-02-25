// DOM Elements
const moviename = document.getElementById('moviename');
const button = document.getElementById('btn');
const mainDiv = document.getElementById('main');

// Event Listeners
button.addEventListener('click', fetchData);
moviename.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') fetchData();
});

// Fetch Movie Data from OMDb API
async function fetchData() {
    const query = moviename.value.trim();
    if (!query) return alert("Please enter a movie name!");

    const url = `https://www.omdbapi.com/?s=${query}&apikey=2107d75b`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data.");

        const data = await response.json();
        if (data.Response === "False") throw new Error(data.Error);

        displayData(data.Search);
    } catch (error) {
        console.error("Error fetching movies:", error);
        mainDiv.innerHTML = `<h2>⚠️ ${error.message}</h2>`;
    }
}

// Display Movie Data
function displayData(movies) {
    mainDiv.innerHTML = "";

    movies.forEach((movie) => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const movieImage = document.createElement("img");
        movieImage.src = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image";
        movieImage.alt = movie.Title;

        const movieTitle = document.createElement("h2");
        movieTitle.textContent = movie.Title;

        movieDiv.append(movieImage, movieTitle);
        mainDiv.appendChild(movieDiv);
    });
}
