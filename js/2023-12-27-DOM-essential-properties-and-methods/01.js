const boxEl = document.getElementById("the-box");

boxEl.style.padding="24px";
boxEl.style.backgroundColor="limegreen"
boxEl.style.color="white"
boxEl.style.fontSize="2rem";

//2- textContent

boxEl.textContent="No ben kutu!"


//3-innerHTML

boxEl.innerHTML = "<p>Ben p </p>";


//4-classList

const boxElClassList=boxEl.classList;
console.log(boxElClassList);

//5-classList.addClass();

boxEl.classList.add("hyper","deneme");

//6-classList.removeClass();

boxEl.classList.remove("hyper","deneme");

//7-classList.toggle();

boxEl.classList.toggle("expanded"); //expanded class'ı yoksa ekle
boxEl.classList.toggle("expanded");

//8-classList.contains

console.log(boxEl.classList.contains("box"));