//Variable declaration and Conditional statements
let x=20;
if(x>5)
{
    console.log(x); //Output:20

}

//Boolean toggle example
let isgood=true;
if(isgood)
{
    isgood=false;
}
else{
    isgood=true;
}
console.log(isgood); //Output:false

//write a function to check voting eligibility:
//age is the parameter
function eligibilitycheck(age)
{
    if(age>=18) return true;
    else return false;
}
let result=eligibilitycheck(19);
console.log(result); //Output:true

//write a function to print day of the week based on given no.of the week using switch
//starting monday as 1,tuesday as 2,wednesday as 3,thursday as 4,friday as 5,saturday as 6,sunday as 7
function dayprint(num)
{
    switch(num)
    {
        case 1:console.log("monday");break;
        case 2:console.log("tuesday");break;
        case 3:console.log("wednesday");break;
        case 4:console.log("thursday");break;
        default:console.log("enter valid input");
    }
}
dayprint(2); //Output:tuesday

//Loops
//While loop prints(0 to 10)
let i=0//initialization
while(i<=10)
{
    console.log(i); //Output:0 1 2 3 4 5 6 7 8 9 10
    i++; //updation
}

//print odd numbers in reverse(20 to 1)
let j=19;
while(j>=0)
{
    console.log(j); //Output:19 17 15 13 11 9 7 5 3 1
    j-=2;
}

//do-while loop
i=-19;
do{
    console.log(i);//Output:-19
    i--;
}while(i>=0);

//Array operations
let arr=[5,4,3,2,1];
for(let x=0;x<arr.length;x++) //Standard for loop
{
    console.log(arr[x]); //Output:5 4 3 2 1
}

//forEach 
arr.forEach((val)=>
{
    console.log(val); //Output:5 4 3 2 1
})

//for..of
arr=[5,4,3,2,1];
for(let x of arr)
{
    console.log(x); //Output:5 4 3 2 1
}

//Working with arrays of objects
//Array of movie objects
let movies=[
    {"title":"koi mil gaya"},
    {"title":"RRR"},
    {"title":"KGF"}
];

//print movie titles using standard for loop, for..of and forEach 
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title); //Output:koi mil gaya  RRR  KGF
}

for (let movie of movies) {
    console.log(movie.title); //Output:koi mil gaya  RRR  KGF
}

movies.forEach(function(movie) {
    console.log(movie.title); //Output:koi mil gaya  RRR  KGF
});
