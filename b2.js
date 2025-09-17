

//Boolean
let isTrue = true;
let isFalse = false;

console.log(isTrue, isFalse);

let isRaining = false;

console.log("isRaining = ", isRaining);


let age = 19;

let isAdult = age >=18;

console.log("isAdult = ", isAdult); //Output: True

let isChild = age >=13;

console.log("isChild = ", isChild); //Output True

let isOld = age >=65;

console.log("isOld = ", isOld); //Output False




//Logical Operators
let isMissing = true;

if(!isMissing){
    console.log("You are not missing.")
}else{
    console.log("You ARE missing.")
}


/* 
AND &&
OR ||
NOT !
*/

if(age == 19){
    console.log("You are 19");
}else{
    console.log("You are NOT 19");
}

if (age!==19){
    console.log("You are NOT 19");
}else{
    console.log("You ARE 19");
}


// == Checks Value === Checks Value and Type ie(String, Float, Integer, etc)

console.log(1=="1");
console.log("1"==="1");

//Function

function sayHello(){
    console.log("Hello");
}

sayHello();

function sum (a,b){
    return a + b;
}
console.log(sum(1,2))

console.log(sum);


function greetUser(name){

    console.log("Hello " + name);
}

console.log(greetUser("Jerry"));

function multiply(a,b){
    return a * b;
}
console.log(multiply(37,19));

let result = multiply(6,7);

console.log(result);


function greetUser1 (name = "John"){
    console.log("Hello " + name);

}

greetUser1();


//Nested Functions

function outside(){
    console.log("Outside");
    function inside(){
        console.log("inside");
    }
    inside();
}
outside();

let g = "Global";

function Local(){
    let l = "Local";
    console.log(g);
    console.log(l);
}
Local();

//console.log(l); Will not work because l is only inside the Local() function.
