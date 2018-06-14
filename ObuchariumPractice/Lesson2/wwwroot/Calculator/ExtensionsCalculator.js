"use strict";
exports.__esModule = true;
var math = require("mathjs");
var ExtensionsCalculator = /** @class */ (function () {
    function ExtensionsCalculator() {
    }
    ExtensionsCalculator.prototype.calculate = function (expression) {
        var result = math.eval(expression);
        return "Calculator with extension(mathjs): " + expression + "=" + result + "\r\n";
    };
    return ExtensionsCalculator;
}());
exports["default"] = ExtensionsCalculator;
