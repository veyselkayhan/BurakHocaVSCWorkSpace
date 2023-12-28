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


const box1El = document.querySelector("div:nth-of-type(1)");

box1El.addEventListener("mousemove",handleMouseMove);

// event handler callback function
function handleMouseMove(){
    console.log("Your cursor is moving ")
}

box1El.addEventListener("mouseout",()=>{console.log("Cursor is outside")})

const articleEl= document.querySelector("article");

articleEl.addEventListener("mouseover",handleMouseOver);

function handleMouseOver(e){
    const {type,x,y}=e // event object passed by :
    console.log(type,x,y)
    console.log("Article sinirlari içindesin")
}


const  sectionEl = document.querySelector("section");
const  sectionPEl = document.querySelector("section > p");
sectionEl.addEventListener("mousemove",handleSectionMouseMove);

function handleSectionMouseMove(e) {
    const { target, x, y, type } = e;
   
    sectionPEL.textContent = `
    hedef öğe:${target}
    mouse x konumu:${x}
    mouse y konumu:${y}
    olay tipi:${type}
    `;
  }



//callback 
function higherOrderFunction(callback){
    callback({info:"I am from higherorder function"})
}

function myCallback(infoObjectFromHigherFunc){
    console.log(infoObjectFromHigherFunc.info)
}

higherOrderFunction(myCallback);