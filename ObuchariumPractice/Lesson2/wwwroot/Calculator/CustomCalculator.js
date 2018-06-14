"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomCalculator = /** @class */ (function () {
    function CustomCalculator() {
    }
    CustomCalculator.prototype.calculate = function (expression) {
        var expressionBySymbols = expression.split(/(\+|\-|\*|\/)/g);
        var result = this.evaluate(expressionBySymbols);
        return "Custom Calculator: " + expression + "=" + result + "\r\n";
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
    return CustomCalculator;
}());
exports.default = CustomCalculator;
//# sourceMappingURL=CustomCalculator.js.map