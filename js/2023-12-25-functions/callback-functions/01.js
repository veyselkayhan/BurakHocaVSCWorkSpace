//Bir fonksiyona  arguman olarak gönderilen ve gönderildigi fonksiyon tarafından çağrılan opsiyon callback fonksiyonlar olark adlandırılır.


// myFunc(11,12);

// myFunc2(callbackFunc)

function emergency ( willBeCalled ){
    willBeCalled();    
}


function call112(){
    console.log("112 Aranıyor.")
}

function call911(){
    console.log("911 Aranıyor.")
}

emergency ( call112 );

emergency ( call911 );

//örnek ( anonymous function expression as a callback )

function emergency2 ( willBeCalled ){
    willBeCalled();
}

emergency2 ( function () {
    console.log ("112 aranıyor**")
}
)