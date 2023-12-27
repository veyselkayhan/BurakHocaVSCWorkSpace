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


function emergency3 ( willBeCalled ) {
    willBeCalled();
}

emergency3( () => { console.log("Houston Aranıyor")})

//bir fonksiyon yaz: argüman olarak dizi gönderelim,diziden çift sayıları arayıp döndürebiliyor.

/**
 * 
 * function evenNumber( array ){
    return numbers.filter(array => array%2==0);
}

let numbers = [1,2,3,4,5,6,7,8,9,0];

let even= evenNumber(numbers);
console.log(even);
 * 
 * @param {*} array 
 * @returns 
 */

function filterEvenNumber(arr){
    const resArr = [];
    for (num of arr) {
        if (num % 2 ===0 ){
        resArr.push(num);
        }
    }
    return resArr;
}

console.log(filterEvenNumber([1, 3, 6, 8]));


function filter(arr, testFunc) {
    const resArr = [];
    for (let item of arr) {
        if (testFunc(item)) {
            resArr.push(item);
        }
    }
    return resArr;
}

filter([1,13,16,18],(num)=>{return num>2===0;});

filter([14,18,3],function(num){return num>3;});

function lessThan10(num){
    return num<10;
}

filter ([12,3,5],lessThan10);


