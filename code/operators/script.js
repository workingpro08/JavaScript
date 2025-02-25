//Arithmetic Operators
let a=3,b=2;
console.log(a+b);//5
console.log(a-b);//1
console.log(a*b);//6
console.log(a/b);//1.5
console.log(a%b);//1 //Modulus(Remainder)
console.log(a**b);//9 //Exponentiation

//Relational (Comparison) Operators
a=2;
b='2';
console.log(a==b);//true //Loose equality(checks value only)
console.log(a===b);//false //Strict equality(checks value & type)
console.log(a!=b);//false //Loose inequality(checks value only)
console.log(a!==b);//true //Strict inequality(checks value & type)

//Logical Operators
a=5,b=10;
console.log((a>2)&&(b>15));//false //AND(&&):Both must be true
console.log((a>2)||(b>15));//true //OR(||):Atleast one must be true
console.log(!(a>5));//true //NOT(!):Negates the condition

//Increment Operators
a=5;
console.log(++a);//6 //Pre-increment:Increases a before use
console.log(a++);//6 //Post-increment:Increases a after use

//Complex Increment Operations
a=10;
let z=++a + a++ - a--;
console.log(z);//10

//Another Increment Example
let x=5,y=3;
let result=x++ + --y + --x + y++;
console.log(result);//14

//Ternary (Conditional) Operator
let age=21;
age>=18 ? console.log("eligible to vote"):console.log("not eligible to vote"); //eligible to vote