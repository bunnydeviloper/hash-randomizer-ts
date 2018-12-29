"use strict";
var Foo = /** @class */ (function () {
    function Foo() {
        this.firstName = 'fn';
        this.lastName = 'ln';
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Foo;
}());
var aPerson = new Foo();
var myVar = {
    firstName: 'John',
    lastName: 'Doe',
    foo: 'foo',
    getFullName: function () { return "test"; }
};
aPerson = myVar;
// myVar is a simple object that has all structures of Person interface
// we can reassign aPerson to myVar because of duck typing
// note: aPerson.* can access all three properties/method, except 'foo'
