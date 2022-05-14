// 1. ways to print in JS---------

//console.log("hello world");
//alert("me");
//document.write("hii Safa");

// 2. JS Console API -------------

//console.warn("Warning hai");
//console.warn("Warning hai", 4 + 5",multiple arguments allowed")
//console.error("Error hai");
//console.assert(6==4);

// 3. Js Variables
// what are variables? - Containers to store data values
var number1=37
var number2=98
console.log(number1+number2);

/* 4. Data Types-------------------*/
// integers
var num1=45;
var num2=89;
// strings
var str="Hello World";
//boolean
var bool=True;
//object
var marks={
    urdu:100,
    maths:59} //key value pairs


/*  At a very high level, there are 2 data types
1- primitive data types: undefined, null, number, String, boolean, symbol

2- Reference data types: array, object */

var arr=[1,2,3,4,5]; //multiples data types allowed in it

//  operators in JS-----------------------
// Arithmetic Operators
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

//Assignment Operators
var c=num1;

// Comparison Operators
console.log(num1==num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1<num2);
console.log(num1>num2);

//logical operators
// And 
console.log(true&&true);

//OR
console.log(true||false);

//not
console.log(!false);

// functions--------------------
// DRY Principle  = Do not repeat yourself
function avg(a,b){
    return (a+b)/2;
}
c1= avg(3,4);
console.log(c1);

