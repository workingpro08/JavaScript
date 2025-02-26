// 1. let, const, and block scope
function fun() {
    if (true) {
        const a = 20;
        console.log(a); // Accessible inside the block
    }
    // console.log(a); // Error: a is not defined (block-scoped variable)
}
fun();

// 2. let example
let val = 25;
console.log(`The value is ${val}`);

// 3. Default parameters in functions
function fun2(a = 2) {
    console.log(a + 5);
}
fun2(); // Outputs: 7

// 4. Rest and Spread operator
function fun3(b, c, ...a) {
    console.log(a); // Collects remaining arguments as an array
    let d = [...["john", "prasad"], 4];
    console.log(d); // Outputs: [ 'john', 'prasad', 4 ]

    let x = [1, 2, 3, 4, 5];
    const [p, ...q] = x; // Destructuring with rest
    console.log(p, q); // Outputs: 1 [2, 3, 4, 5]
}
fun3(3, 4, 5, 6, 7, 8, 9);

// Spread and Destructuring examples
function fruits(a, b, ...c) {
    const arr = [a, ...c, "john"];
    console.log(arr);
}
fruits("apple", "mango", "banana", "papaya", "dragon");

let arr = [1, 2], arr1 = [3, 4];
let res = [...arr, ...arr1];
console.log(res); // Outputs: [1, 2, 3, 4]

// Object Destructuring
let obj = { name: "raj", age: 50 };
const { name, age } = obj;
console.log(name, age); // Outputs: raj 50

// Nested Object Destructuring
let p2 = {
    id: 1,
    title: "Fjallraven Backpack",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
};
let { title } = p2;
console.log(title); // Outputs the title

// Export variables and function
export { name, age, title };
export default fruits;
