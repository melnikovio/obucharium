"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var calc = __importStar(require("./Calculator/Calculators"));
var expressions = ["1+2", "2+2*2", "1-6/2", "10/10-10*1000", "1324*1243456-6237/23333", "1+2/0", "1--2/0"];
for (var _i = 0, expressions_1 = expressions; _i < expressions_1.length; _i++) {
    var expression = expressions_1[_i];
    var calculator = void 0;
    calculator = new calc.EvalCalculator();
    printResult(calculator.calculate(expression));
    calculator = new calc.ExtensionsCalculator();
    printResult(calculator.calculate(expression));
    calculator = new calc.CustomCalculator();
    printResult(calculator.calculate(expression));
}
function printResult(result) {
    console.log(result);
    if (typeof window !== "undefined" && window.document !== null && typeof document !== undefined) {
        var content = document.getElementById("content");
        if (content !== null) {
            content.innerText += result;
        }
    }
}
//# sourceMappingURL=app.js.map