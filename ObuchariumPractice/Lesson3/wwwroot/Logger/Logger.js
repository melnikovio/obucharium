"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this guys without comments becomes a real shit in support
function logClass(target) {
    // save a reference to the original constructor
    var originalConstructor = target;
    // a utility function to generate instances of a class
    function construct(constructor) {
        var instanceOfClass = function () {
            return constructor.call(this);
        };
        instanceOfClass.prototype = constructor.prototype;
        return new instanceOfClass();
    }
    // the new constructor behaviour
    var newConstructor = function () {
        console.log("Logger: New calculator type initialized: " + originalConstructor.name);
        return construct(originalConstructor);
    };
    // copy prototype so intanceof operator still works
    newConstructor.prototype = originalConstructor.prototype;
    // return new constructor (will override original)
    return newConstructor;
}
exports.logClass = logClass;
// this guys without comments becomes a real shit in support
function autoIncrementResult(target, key, descriptor) {
    // save a reference to the original method this way we keep the values currently in the
    // descriptor and don't overwrite what another decorator might have done to the descriptor.
    if (descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    var originalMethod = descriptor.value;
    // editing the descriptor/value parameter
    descriptor.value = function (expression) {
        console.log("Logger: User insterted expression: " + expression);
        // usage of original method here
        var result = originalMethod.call(this, expression);
        console.log("Logger: Result from original calculate is: " + result);
        // increment result
        if (!isNaN(result)) {
            return Number(result) + 1;
        }
        // return result is NaN (error for example)
        return result;
    };
    // return edited descriptor as opposed to overwriting the descriptor
    return descriptor;
}
exports.autoIncrementResult = autoIncrementResult;
//# sourceMappingURL=Logger.js.map