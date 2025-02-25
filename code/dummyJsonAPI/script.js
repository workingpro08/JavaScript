const mainDiv = document.getElementById('main');

// Fetch data from API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        displayData(data.products);
    } catch (err) {
        console.error("Error:", err);
        mainDiv.innerHTML = "<h2>⚠️ Failed to load products. Please try again later.</h2>";
    }
}

// Display products on the page
function displayData(products) {
    mainDiv.innerHTML = ""; // Clear existing content
    products.forEach((p) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // Create product elements
        const productImage = document.createElement('img');
        productImage.src = p.thumbnail;
        productImage.alt = p.title;

        const productTitle = document.createElement('h2');
        productTitle.textContent = p.title;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${p.price}`;

        const productButton = document.createElement('button');
        productButton.textContent = "🛍️ Add to Cart";

        // Handle button click
        productButton.addEventListener('click', () => {
            alert(`✅ ${p.title} added to cart!`);
        });

        // Append elements to the product card
        productDiv.append(productImage, productTitle, productPrice, productButton);
        mainDiv.appendChild(productDiv);
    });
}

// Initial data fetch
fetchData("https://dummyjson.com/products");
