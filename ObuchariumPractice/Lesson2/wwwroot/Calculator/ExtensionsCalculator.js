"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as mathjs from "./Libs/mathjs";
var mathjs;
var ExtensionsCalculator = /** @class */ (function () {
    function ExtensionsCalculator() {
    }
    ExtensionsCalculator.prototype.calculate = function (expression) {
        var result = mathjs.eval(expression);
        return "Calculator with extension(mathjs): " + expression + "=" + result + "\r\n";
    };
    return ExtensionsCalculator;
}());
exports.default = ExtensionsCalculator;
//# sourceMappingURL=ExtensionsCalculator.js.map