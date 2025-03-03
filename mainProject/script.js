// Initialize Swiper Slider
const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: { delay: 3000 },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Fetch Products from API
async function fetchData() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();

        // Filter and Display Products
        displayData("electronicsData", data.filter(item => item.category === 'electronics'));
        displayData("mensData", data.filter(item => item.category === "men's clothing"));
        displayData("womensData", data.filter(item => item.category === "women's clothing"));
        displayData("jewelleryData", data.filter(item => item.category === "jewelery"));
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}

fetchData();

// Display Products
function displayData(containerId, products) {
    const container = document.getElementById(containerId);
    products.forEach(product => {
        container.innerHTML += `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">₹${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart()">Add to Cart</button>
                </div>
            </div>`;
    });
}

// Cart Counter
let cartCount = 0;
function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
}
