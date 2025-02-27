//Parent Class: Fruits
class Fruits {
    static c = 5; // Static property (shared by all instances)

    constructor(taste, color) {
        this.taste = taste;
        this.color = color;
    }

    // Method to display fruit properties
    getData() {
        return `Taste: ${this.taste}, Color: ${this.color}`;
    }

    // Static method to access static property
    static getStaticValue() {
        return `Static value: ${this.c}`;
    }
}

//Child Class: Vegetables (inherits from Fruits)
class Vegetables extends Fruits {
    constructor(taste, color, isHealthy) {
        super(taste, color); // Call parent constructor
        this.isHealthy = isHealthy; // Unique property
    }

    // Override getData() method to include isHealthy
    getData() {
        return `${super.getData()}, Is Healthy: ${this.isHealthy}`;
    }
}

//Create and display initial instances
const output = document.getElementById("output");

// Helper function to log output
function displayOutput(message) {
    const p = document.createElement("p");
    p.textContent = message;
    output.appendChild(p);
}

// Example objects
const veg1 = new Vegetables("good", "green", true);
displayOutput(veg1.getData());

const fruit1 = new Fruits("sweet", "yellow");
displayOutput(fruit1.getData());

// Display static property and method output
displayOutput(`Static Property: ${Fruits.c}`);
displayOutput(Fruits.getStaticValue());

const fruit2 = new Fruits("sour", "red");
displayOutput(fruit2.getData());

//Button interaction to create new Vegetable
document.getElementById("btn").addEventListener("click", () => {
    const newVeg = new Vegetables("spicy", "orange", false);
    displayOutput("New Vegetable Created:");
    displayOutput(newVeg.getData());
});
