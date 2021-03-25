// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function addOne(input){
    return parseFloat(input) + 1;
}
function sayHello(input){
    if (typeof input === "string"){
        return "Hello, " + input + "!";
    }else{
        return "Hello, World!";
    }
}
function isFive(input){
    return parseFloat(input) === 5;
}
function isEven(input){
    return parseFloat(input) % 2 === 0;
}
function isVowel(input){
    // return (input.toString().toLowerCase() === "a" || input.toString().toLowerCase() === "e" ||
    //     input.toString().toLowerCase() === "i" || input.toString().toLowerCase() === "o" ||
    //     input.toString().toLowerCase() === "u" );
    if(typeof input !== "string" || input.length > 1){
        return input = false;
    }
    else{
        return !!(input.match(/[aeiou]/gi));
    }
}
function add(x, y){
    return parseFloat(x) + parseFloat(y);
}