//consolo.log(document.body.children);

for (item of document.body.children){
    console.log(item)
}

const selectedBoxEl= document.querySelector(".box:nth-of-type(2)");

selectedBoxEl.style.color="red";

const siblingOfSelectedBoxEl=selectedBoxEl.nextSibling;

console.log(si)