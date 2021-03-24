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