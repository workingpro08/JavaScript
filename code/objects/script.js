//An object is a physical entity that contains properties(attributes) and behavior(methods)
//An object is also called an instance of a class in OOP concepts
//Objects store data in key-value pairs
let s={
    name:"saiteja",
    jobrole:"developer",
    email:"work123@yahoo.com"
};
//Accessing Object Properties
console.log(s.jobrole,s.name); //developer saiteja[Dot notation]
console.log(s['email']); //work123@yahoo.com[Bracket notation]

let obj={
    sname:"abc",
    age:25
};
//Modifying Objects
obj.sname="fruit"; //Adding new property[obj.newKey=value]
console.log(obj.sname,obj.age); //fruit 25