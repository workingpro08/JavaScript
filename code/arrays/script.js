//Basics of Arrays
let marks=[25,36,44,81,42];
console.log(marks.length,marks); //5 [25,36,44,81,42]
marks[10]=25; //Arrays can have empty slots if elements are assigned at higher indices.
console.log(marks.length, marks); //11 (empty slots)

//Multidimensional arrays store arrays inside arrays.
let names=[["teja",20],["saiteja",30]];
console.log(names[0][0]); //"teja"

//Array Methods
//push()-Adds multiple elements at the end
let fruits=["banana","apple","mango","guava"];
fruits.push("strawberry","dragon","kiwi");
console.log(fruits); //["banana", "apple", "mango", "guava", "strawberry", "dragon", "kiwi"]

//pop()-Removes the last two elements
fruits.pop(); //Removes "kiwi"
fruits.pop(); //Removes "dragon"
console.log(fruits); //["banana","apple","mango","guava","strawberry"]

//unshift()-Adds elements at the start
fruits.unshift("grapes","orange");
console.log(fruits); //["grapes","orange","banana","apple","mango","guava","strawberry"]

//shift()-Removes the first element
fruits.shift();
console.log(fruits); //["orange","banana","apple","mango","guava","strawberry"]

//splice(start,deleteCount,values)-Removes 2 elements from index 2 and adds "sai","teja"
fruits.splice(2,2,"sai","teja");
console.log(fruits); //["orange","banana","sai","teja","guava","strawberry"]

//Array Modifications Example
let friends=["sheldon","rachel","ross","monica","joey","stuart"];
friends.shift();  
friends.unshift("pheobe"); //1.Replace "sheldon" with "pheobe"

friends.pop();
friends.push("chandler"); //2.Replace "stuart" with "chandler"

friends.splice(2, 0, "justin"); //3.Add "justin" between "rachel" and "ross"
console.log(friends); //["pheobe","rachel","justin","ross","monica","joey","chandler"]

//reverse()-Reverses the array
console.log(friends.reverse()); //["chandler","joey","monica","ross","justin","rachel","pheobe"]

//includes()-Checks if "joey" exists in the array
console.log(friends.includes("joey")); //true

//forEach(callback)-Iterates through each element and modifies it.
let arr1=[5,6,4,8,7];
let arr2=[];
arr1.forEach(function(x,ind)
{
    arr2[ind]=x*x; //Square each element
});
console.log(arr2); //[25,36,16,64,49]

//forEach() vs map()
let arr3=[1,2,3,4];
let arr4=arr3.forEach(function(i) 
{
     return i*2;
});
console.log(arr4); //undefined(forEach doesn't return)

let arr5=arr3.map(function(i)
{
    return i*2;
});
console.log(arr5); //[2,4,6,8]

//map() vs filter()
let arr6=[1,2,3,4];
arr2=arr6.map(function(i)
{
   if(i%2==0)return v;
});
console.log(arr2); //[undefined,2,undefined,4]

arr2=arr6.filter(function(v)
{
    return v%2==0;
});
console.log(arr2); //[2,4]

//some() vs every()
let arr7=[2,4,7,1];
let result=arr7.some(function(x,ind)
{
    return x>5;
});
console.log(result); //true

let arr8=[2,4,6,8];
result=arr8.every(function(v)
{
    return v%2==0;
})
console.log(result); //true

//sort()
let arr9=[5,4,6,1,11,51];
console.log(arr9.sort()); //[1,11,4,5,51,6]
console.log(arr9.sort((a,b)=>a-b)); //Ascending order:[1,4,5,6,11,51]
console.log(arr9.sort((a,b)=>b-a));//Descending order:[51,11,6,5,4,1]

//reduce()
let arr10=[3,4,5,6];
result=arr10.reduce(function(pv,curr)
{
    return pv+curr;
},10);
console.log(result); //28(10+3+4+5+6)