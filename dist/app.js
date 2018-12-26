"use strict";
function generateRandomId(optionsOrSymbol) {
    if (typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol + Math.random().toString(36).substr(2, length);
    }
    return optionsOrSymbol.symbol + Math.random().toString(36).substr(2, optionsOrSymbol.length);
}
generateRandomId("$", 7);
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
        if (app) {
            app.innerHTML = generateRandomId({
                symbol: "#",
                length: 7
            });
        }
    }, 1000);
}
