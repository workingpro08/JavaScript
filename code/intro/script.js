var a=25;
var a=28; //redeclare is possible in var
a=44 //reassigning is possible in var
let x=33
//let x=35 //redeclare is not possible in let
x=22 //reassigning is possible in let
const y=21
//const y=22 //redeclare is not possible in const
//y=22 //reassign is not possible
console.log(a)
console.log("Hello JavaScript")
//var is function scoped variable
//let and const are block scoped variables
function fun()
{
    if (true)
    {
        var a=55;
    }
    console.log(a)
}
fun()

/*function fun()
{
    if (true)
    {
        let b=36;//--uncaught Reference error: b is not defined
    }
    console.log(b)
}
fun()

function fun()
{
    if (true)
    {
        const c=34;//--uncaught Reference error: c is not defined
    }
    console.log(c)
}
fun()*/