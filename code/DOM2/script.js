function fun() {
    const container = document.getElementById("cardContainer");

    // Create Card
    const card = document.createElement("div");
    card.classList.add("card");

    // Create Image
    const image = document.createElement("img");
    image.src = "https://i.pinimg.com/236x/96/55/1a/96551aca678338e58786f0fe98529c86.jpg";
    image.alt = "Shinchan";

    // Create Title
    const title = document.createElement("h2");
    title.textContent = "Shinchan";

    // Append Elements
    card.appendChild(image);
    card.appendChild(title);
    container.appendChild(card);
}
