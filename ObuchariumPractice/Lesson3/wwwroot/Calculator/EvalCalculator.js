"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("../Logger/Logger");
var EvalCalculator = /** @class */ (function () {
    function EvalCalculator() {
    }
    EvalCalculator.prototype.calculate = function (expression) {
        try {
            var result = eval(expression);
            return String(result);
        }
        catch (_a) {
            return "Calculator with eval: Eval error occuried";
        }
    };
    __decorate([
        Logger_1.autoIncrementResult
    ], EvalCalculator.prototype, "calculate", null);
    EvalCalculator = __decorate([
        Logger_1.logClass
    ], EvalCalculator);
    return EvalCalculator;
}());
exports.default = EvalCalculator;
//# sourceMappingURL=EvalCalculator.js.map