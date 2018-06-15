"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var math = __importStar(require("mathjs"));
var Logger_1 = require("../Logger/Logger");
var ExtensionsCalculator = /** @class */ (function () {
    function ExtensionsCalculator() {
    }
    ExtensionsCalculator.prototype.calculate = function (expression) {
        this.result = math.eval(expression);
        return this.result;
    };
    __decorate([
        Logger_1.incrementOnSet
    ], ExtensionsCalculator.prototype, "result", void 0);
    __decorate([
        Logger_1.logMethod
    ], ExtensionsCalculator.prototype, "calculate", null);
    ExtensionsCalculator = __decorate([
        Logger_1.logClass
    ], ExtensionsCalculator);
    return ExtensionsCalculator;
}());
exports.default = ExtensionsCalculator;
//# sourceMappingURL=ExtensionsCalculator.js.map