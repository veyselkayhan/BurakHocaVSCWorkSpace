/*
 window object 
  -- document object
 */

window.console.log("Hello window");

console.log(window.document);

console.log(window.document.body);

document.title = "Merhaba Dünya";

//selectin elements 

const buttonEl = document.getElementById("the-button");
console.log(typeof buttonEl);
buttonEl.textContent="Buton olduguna emin misin?";

//selecting elements by 
const buttonEls = document.getElementsByTagName("button");

console.log(buttonEls,typeof buttonEls)

for( btn of buttonEls){
    console.log(btn);
}

const primaryButtonEl = document.querySelector(".btn-primary.btn-small");

primaryButtonEl.style.color = "red";

const boxElsList = document.querySelectorAll("body div.box");
console.log(boxElsList,typeof boxElsList);

for( box of boxElsList){
    console.log(box);
    box.style.backgroundColor="red";
}