let isRainy = true;

//if expression value is truthy code block will be executed
if(true){
   console.log("Hello") 
}
//if expression value is truthy code block will not be executed
if(false){
console.log("Hello2");
}

if(isRainy){
    console.log("Hello Rainy")
}

console.log(isRainy==true,x=2);

if(isRainy==true){
    console.log("Hello Rainy Day")
}

if(x=2){
    console.log("Merhaba")
}

if(0){
    console.log("huhh")
}

// *** falsy values in js ***
//empty string
// null
// undefined
// 0 
// false
// NaN

let myNum = 2;
let myNumStr = "2";

// == comparison operator
if(myNum==2){
    console.log("myNum=2***")
}
if(myNum == myNumStr){
    console.log("myNumStr=2***")
}

let today="Monday"

if(today=="Monday"){
    console.log("Monday");
}