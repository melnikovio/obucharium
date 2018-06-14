"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EvalCalculator = /** @class */ (function () {
    function EvalCalculator() {
    }
    EvalCalculator.prototype.calculate = function (expression) {
        try {
            var result = eval(expression);
            return "Calculator with eval: " + expression + "=" + result + "\r\n";
        }
        catch (_a) {
            return "Calculator with eval: Eval error occuried\r\n";
        }
    };
    return EvalCalculator;
}());
exports.default = EvalCalculator;
//# sourceMappingURL=EvalCalculator.js.map