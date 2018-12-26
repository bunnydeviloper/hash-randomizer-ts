"use strict";
// const symbol: "#" | "$" = "#"; // using union type
// const symbol: ValidSymbol = "#";
// const hashLength: number = 7;
function generateRandomId(symbol, hashLength) {
    return symbol + Math.random().toString(36).substr(2, hashLength);
}
// function userAlert(): void {
function userAlert() {
    alert('Hello!');
}
function checkError() {
    throw new Error('errorrrr');
    // never means the fn is expected to never return anything
    // another use case is infinite while loop
}
function main() {
    var app = document.getElementById("app");
    setInterval(function () {
        app.innerHTML = generateRandomId("#", 7);
    }, 1000);
}
