
/* Senkron */
function f1(){

}
function f2(){
  f1();
}
function f3(){
  f2();
}
  f3();

  /* Senkron */

function func1(){
  console.log("func1");
}

function func2(){
  console.log("func2");
}

function main(){
  func1();

//browser api callback fonksiyonları macro task kuyruğuna alınır.
setTimeout(()=>{
  console.log("I am from browser api set timeout")
},3000);

//web api event listener callback fonksiyonları macro task kuyruğuna alınır.
document.querySelector("button").addEventListener("click,"()=>console.log("clicked"));

func2();

}

main();

