//Function to print hello world
function display()
{
    console.log("Hello World"); //Hello World
}
display(); //function call
display(); //function call

//Function with parameters
function displayName(n)
{
    console.log(`Welcome ${n}`); //Welcome teja
}
displayName("teja");

//Function with multiple parameters
function add(a,b)
{
    console.log(a,b);
    console.log(a+b);
}
add(2,3); //5
add(5,4,3); //9
add(5); //nan--not a number

function add(a,b=10)//Here b is default parameter
{
    console.log(a,b);
    console.log(a+b);
}
add(5); //15
add("sai","teja"); //saiteja
add(2,5,6); //7
add("sai") //saiundefined

function add(a,b=10,c)//Here b is default parameter
{
    console.log(a+c);
}
add(1) //nan

function mul(a,b)
{
    return a*b;
}
let res=mul(5,4);
console.log(res); //20

//In JS functions are treated as variables
function simple()//normal function
{
    console.log("saiteja");
}
let x=20;
console.log(simple,x);
/*ƒ simple() //normal function
{
    console.log("saiteja");
} 20*/
simple(); //saiteja

function simple() //normal function
{
    console.log("saiteja");
}
let y=simple(); //saiteja
console.log(y); //undefined

let z=function() //function expression
{
    console.log("saiteja");
}
console.log(simple,z);
/*ƒ simple() //normal function
{
    console.log("saiteja");
}ƒ () //function expression
{
    console.log("saiteja");
}*/
z();//saiteja

//Arrow function
let a=()=>console.log("saiteja"); //saiteja

//Function to add two numbers and print result
function add(a,b) //normal function
{
    console.log(a+b);
}
add(5,3); //8
console.log(add);
/*f add(a,b) //normal function
{
    console.log(a+b);
}*/

//By using function expression
let add1=function(a,b)//anonymous function
{
    console.log(a+b);
}
console.log(add1);
/*ƒ (a,b)//anonymous function
{
    console.log(a+b);
}*/
add1(5,3);//8

let add2=(a,b)=>console.log(a+b);
console.log(add2); 
/*(a,b)=>console.log(a+b)*/
add2(5,3); //8

//Callback Functions
function mad()
{
    console.log("I'm mad");
}
function bad()
{
    console.log("I'm bad");
}
function fun(a, b)
{ 
    a(); 
    b(); 
}
fun(mad, bad); //Calls mad() and bad()
/*Output:I'm mad
I'm bad*/  

//Example:Higher order function
function incr(a)
{
    return a++;
}
function logic(a,b)
{
    console.log(b);
    let x=a+b(5);
    console.log(x);
}
logic(2,incr);

//Higher order function example:Calculator
function add(a,b)
{
    console.log(a+b);
}
function sub(a,b)
{
    console.log(a-b);
}
function mul(a,b)
{
    console.log(a*b);
}
function div(a,b)
{
    console.log(a/b);
}
function calculator(a,b,c,d)
{
    a(2, 4); //Calls `add(2,4)`
}
calculator(add, sub, mul, div);
//Output:6

//Closures
function outer()
{
    var x=25;   
    function inner()
    {
        x++;
        console.log(x);
    }
    return inner;
}
let result=outer(); //Stores `inner` function
console.log(result); 
/*ƒ inner()
{
    x++;
    console.log(x);
}*/
result(); //26
result(); //27