const btnToggle = document.querySelector(".hamburger-nav .btn-toggle");

const navHamburger = document.querySelector(".hamburger-nav ");

btnToggle.addEventListener("click",(e)=> {
    //navHamburger elemanının üzerinde active class'ı mevcutsa siler,Mevcut değilse ekler.
   navHamburger.classList.toggle("active");
});