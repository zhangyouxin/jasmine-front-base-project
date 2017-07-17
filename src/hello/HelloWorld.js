'use strict'


function helloWorld() {
    // commets






    return "Hello world!"
}


function  isMultiple3( digit) {
    return digit%3;
}

function  isMultiple5( digit) {
    return digit%5;
}

function  isMultiple7( digit) {
    return digit%7;
}

function FizzBuzzWhizz( input) {
    if(input<=0){
        return "input error";
    }
    var fbz = "";
    if(isMultiple3(input)===0){
        fbz += "Fizz";
    }
    if(isMultiple5(input)===0){
        fbz += "Buzz";
    }
    if(isMultiple7(input)===0){
        fbz += 'Whizz';
    }
    if(fbz == ""){
        fbz = input;
    }
    return fbz;
}