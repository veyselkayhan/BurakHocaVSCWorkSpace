const btnStopTimeoutEl = document.getElementById("btn-stop-timeout");

btnStopTimeoutEl.addEventListener("click",handleStopTimeOut);

const timeout1= setTimeout

setTimeout(handleTimeout,24000);
function handleTimeout(){
    console.log("24000 ms sonra merhaba")
}