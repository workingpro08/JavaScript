// Initialize Typed.js for animated text
var typed = new Typed("#text", {
    strings: ["Developer", "Trainer", "Good boy"],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
});

// Button click event: Toggle image visibility
$('#btn').click(function () {
    // Check if image already exists
    if ($('#main img').length === 0) {
        // Append image if not present
        $("#main").append(`
            <img id="dynamicImage" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Random Image" />
        `);
        $('#dynamicImage').fadeIn(500); // Smooth fade-in effect
        $(this).text('Hide Image'); // Change button text
    } else {
        // Toggle visibility of image if it exists
        $('#dynamicImage').fadeToggle(500);
        // Update button text accordingly
        $(this).text($('#dynamicImage').is(':visible') ? 'Hide Image' : 'Show Image');
    }
});