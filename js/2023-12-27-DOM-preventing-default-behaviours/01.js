const linkEl = document.querySelector("a")
linkEl.addEventListener("click",(e)=>{
    e.preventDefault();//hyperlink elemanını default davranışını engelledik.
    console.log("x")
    alert(e.target.getAttribute("href"));
});

const formEl= document.querySelector("form");
formEl.addEventListener("submit",handleSubmit);

function handleSubmit(e){
    e.preventDefault();//form elemanını default davranışını engelle
    alert("Form ile ilgilenme işi bende");
}