"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function identity(arg) {
    return arg;
}
// identity<number>(1);
// identity(1).toString(); // able to use number's available methods
// identity('string');
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
            app.innerHTML = utils_1.generateRandomId({
                symbol: "#",
                length: 7
            });
        }
    }, 1000);
}
