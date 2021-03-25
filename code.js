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