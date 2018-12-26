"use strict";
var symbol = "#";
var hashLength = 7;
function generateRandomId() {
    return symbol + Math.random().toString(36).substr(2, hashLength);
}
function main() {
    var app = document.getElementById("app");
    setInterval(function () {
        app.innerHTML = generateRandomId();
    }, 1000);
}
