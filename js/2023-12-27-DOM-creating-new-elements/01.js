//immerHTML

document.body.innerHTML = "<div><p>Hello</p></div>";

document.body.innerHTML = "<article><div>Hello</div></article>";

//dökümanın createElement metodunu kullanarak yeni eleman olusturmak

const myNewDivEl = document.createElement("div");

myNewDivEl.textContent = "Hello i am new div dude here";

myNewDivEl.style.border = "4px solid black";

myNewDivEl.style.width="100px";
myNewDivEl.style.height="100px";

document.body.append(myNewDivEl);

const vividColorsArr = ["purple","green","aqua","yellow","red"];

function createALotOfVividBox(count = 100) {
    const randIndex=Math.floor(Math.random()*vividColorsArr.length);
    console.log(randIndex);
    
    for (let i = 0; i < count; i++) {
      const vividBoxEl = document.createElement("div");
      vividBoxEl.style.border = "6px solid black";
      vividBoxEl.style.backgroundColor ='';
      vividBoxEl.style.width = "100px";
      vividBoxEl.style.height = "100px";
      vividBoxEl.textContent = `Ben ${i + 1}. kutu`;
      document.body.append(vividBoxEl);
    }
  }
   
  createALotOfVividBox(120);