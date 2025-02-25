const para = document.getElementById('count');
let count = 0;

// Optimized counter function using setInterval
const myTimer = setInterval(() => {
    count++;
    para.textContent = count; // Update the counter on the screen
    console.log(`Count: ${count}`);

    // Stop the counter when it reaches 100
    if (count === 100) {
        clearInterval(myTimer);
        console.log("Counter stopped at 100");
    }
}, 10);

// Optimized loop execution (non-blocking)
function logHelloWorld(times) {
    let i = 0;
    const loopTimer = setInterval(() => {
        console.log("Hello World");
        i++;

        // Stop logging after specified times
        if (i === times) {
            clearInterval(loopTimer);
            console.log("Finished logging 'Hello World'");
        }
    }, 0);
}

logHelloWorld(1000);
