// DOM Elements
const mainDiv = document.getElementById('main');
const nameInput = document.getElementById('na');
const urlInput = document.getElementById('url');
const submitButton = document.getElementById('btn');

// Fetch and Display Recipes
async function fetchData() {
    try {
        const res = await fetch('https://dummyjson.com/recipes');
        const data = await res.json();
        displayData(data.recipes);
    } catch (err) {
        console.error("Error fetching data:", err);
        alert("Failed to fetch recipes. Try again later.");
    }
}

// Create New Recipe (POST)
async function postData() {
    const name = nameInput.value.trim();
    const url = urlInput.value.trim();

    if (!name || !url) {
        alert("Please enter both name and image URL.");
        return;
    }

    try {
        const res = await fetch('https://dummyjson.com/recipes/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, image: url })
        });

        if (!res.ok) throw new Error('Failed to add recipe');

        const newRecipe = await res.json();
        alert("Recipe added successfully!");
        fetchData();
    } catch (err) {
        console.error("Error posting data:", err);
        alert("Failed to add recipe. Please try again.");
    }

    nameInput.value = '';
    urlInput.value = '';
}

// Delete Recipe (DELETE)
async function deleteData(id) {
    if (!confirm("Are you sure you want to delete this recipe?")) return;

    try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`, {
            method: 'DELETE',
        });

        if (!res.ok) throw new Error('Failed to delete recipe');

        alert("Recipe deleted successfully!");
        fetchData();
    } catch (err) {
        console.error("Error deleting data:", err);
        alert("Failed to delete recipe. Please try again.");
    }
}

// Update Recipe (PUT)
async function updateData(id, currentName, currentImage) {
    const newName = prompt("Enter new recipe name:", currentName);
    const newImage = prompt("Enter new image URL:", currentImage);

    if (!newName || !newImage) {
        alert("Both fields are required for updating.");
        return;
    }

    try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName, image: newImage })
        });

        if (!res.ok) throw new Error('Failed to update recipe');

        alert("Recipe updated successfully!");
        fetchData();
    } catch (err) {
        console.error("Error updating data:", err);
        alert("Failed to update recipe. Please try again.");
    }
}

// Display Recipes in DOM
function displayData(recipes) {
    mainDiv.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        recipeDiv.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <div class="button-container">
                <button onclick="updateData(${recipe.id}, '${recipe.name}', '${recipe.image}')">Update</button>
                <button onclick="deleteData(${recipe.id})" class="delete">Delete</button>
            </div>
        `;

        mainDiv.appendChild(recipeDiv);
    });
}

// Event Listener for Submission
submitButton.addEventListener('click', postData);

// Initial Fetch
fetchData();
