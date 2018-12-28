"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateRandomId(optionsOrSymbol) {
    if (typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol + Math.random().toString(36).substr(2, length);
    }
    return optionsOrSymbol.symbol + Math.random().toString(36).substr(2, optionsOrSymbol.length);
}
exports.generateRandomId = generateRandomId;
// generateRandomId("$", 7);
// generateRandomId({ symbol: "$", length: 5 })
function Component(options) {
    return function (target) {
        target.id = options.id;
    };
}
exports.Component = Component;
