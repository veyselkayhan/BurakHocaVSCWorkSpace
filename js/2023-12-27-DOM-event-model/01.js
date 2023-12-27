//

// the- button id'li eleman  tıklandığında alert kutusu açılsın

const theButtonEl = document.getElementById("the-button")


//addEventListener method expects two args:
//1-event name ( click,mouseOver,mouseOut,keyPress,keyUp,KeyDown)
theButtonEl.addEventListener("click",handleClick);

function handleClick(){
    alert("hello")
}

const theButtonEl2 = document.getElementById("the-button-2")
theButtonEl2.addEventListener("click",()=>{alert("Hello me 2!")});

const theButtonEl3 = document.getElementById("the-button-3")
theButtonEl3.addEventListener("click",()=>{alert("Hello me 3!")});