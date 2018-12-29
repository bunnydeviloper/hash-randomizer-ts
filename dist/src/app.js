"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var lodash_1 = require("lodash");
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
function enumerable(isEnumerable) {
    return function (target, propertyKey, propertyDescriptor) {
        propertyDescriptor.enumerable = isEnumerable;
    };
}
function prop(x, name) {
    console.log(x, name);
}
function param(x, name, index) {
    console.log(x, name, index);
}
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.onInit = function (el) {
        setInterval(function () {
            if (el) {
                el.innerHTML = utils_1.generateRandomId({
                    symbol: "#",
                    length: lodash_1.random(7, 15)
                });
            }
        }, 1000);
    };
    App.version = '10123';
    __decorate([
        enumerable(false),
        __param(0, param)
    ], App.prototype, "onInit", null);
    __decorate([
        prop
    ], App, "version", void 0);
    App = __decorate([
        utils_1.Component({
            id: 'app'
        })
    ], App);
    return App;
}());
var Direction;
(function (Direction) {
    Direction["up"] = "UP";
    Direction["down"] = "DOWN";
})(Direction || (Direction = {}));
function go(up, down) {
    console.log(up);
    return up;
}
go(Direction.up, Direction.down);
for (var key in App.prototype) {
    console.log(key);
}
function main(ComponentClass) {
    var el = document.getElementById(ComponentClass.id); // use static properties
    var cmp = new ComponentClass(); // use instance properties on method
    cmp.onInit(el);
}
main(App);
