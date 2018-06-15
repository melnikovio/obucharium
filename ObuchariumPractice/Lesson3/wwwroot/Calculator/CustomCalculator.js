"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("../Logger/Logger");
var CustomCalculator = /** @class */ (function () {
    function CustomCalculator() {
    }
    CustomCalculator.prototype.calculate = function (expression) {
        var expressionBySymbols = expression.split(/(\+|\-|\*|\/)/g);
        this.result = String(this.evaluate(expressionBySymbols));
        return this.result;
    };
    CustomCalculator.prototype.evaluate = function (expressionBySymbols) {
        if (expressionBySymbols.length === 1) {
            return Number(expressionBySymbols[0]);
        }
        var value = Number(expressionBySymbols[0]);
        var operator = expressionBySymbols[1];
        switch (operator) {
            case "+": {
                return value + this.evaluate(expressionBySymbols.slice(2, expressionBySymbols.length));
            }
            case "-": {
                return value - this.evaluate(expressionBySymbols.slice(2, expressionBySymbols.length));
            }
            case "*": {
                value = value * Number(expressionBySymbols[2]);
                break;
            }
            case "/": {
                value = value / Number(expressionBySymbols[2]);
                break;
            }
            default:
                break;
        }
        var res = expressionBySymbols.slice(3, expressionBySymbols.length);
        res.unshift(String(value));
        return this.evaluate(res);
    };
    __decorate([
        Logger_1.incrementOnSet
    ], CustomCalculator.prototype, "result", void 0);
    __decorate([
        Logger_1.logMethod
    ], CustomCalculator.prototype, "calculate", null);
    CustomCalculator = __decorate([
        Logger_1.logClass
    ], CustomCalculator);
    return CustomCalculator;
}());
exports.default = CustomCalculator;
//# sourceMappingURL=CustomCalculator.js.map