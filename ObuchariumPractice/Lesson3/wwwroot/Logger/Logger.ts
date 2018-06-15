// this guys without comments becomes a real shit in support
export function logClass(target: any): any {
    // save a reference to the original constructor
    var originalConstructor: any = target;

    // a utility function to generate instances of a class
    function construct(constructor: any): any {
      var instanceOfClass: any = function (this: any): any {
        return constructor.call(this);
      };
      instanceOfClass.prototype = constructor.prototype;
      return new instanceOfClass();
    }

    // the new constructor behaviour
    var newConstructor: any = function (): any {
      console.log("Logger: New calculator type initialized: " + originalConstructor.name);
      return construct(originalConstructor);
    };

    // copy prototype so intanceof operator still works
    newConstructor.prototype = originalConstructor.prototype;

    // return new constructor (will override original)
    return newConstructor;
}

// this guys without comments becomes a real shit in support
export function logMethod(target: any, key: any, descriptor: any): any {
    // save a reference to the original method this way we keep the values currently in the
    // descriptor and don't overwrite what another decorator might have done to the descriptor.
    if (descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    let originalMethod: any = descriptor.value;

    // editing the descriptor/value parameter
    descriptor.value = function (expression: string): any {
        console.log("Logger: User insterted expression: " + expression);

        // usage of original method here
        let result: any = originalMethod.call(this, expression);
        console.log("Logger: Result from calculate is: " + result);

        return result;
    };

    // return edited descriptor as opposed to overwriting the descriptor
    return descriptor;
}

// this guys without comments becomes a real shit in support
export function incrementOnSet(target: any, key: string): any {
  // init property value
  let _val: any;

  // property getter
  let getter: any = function (): any {
    return _val;
  };

  // property setter
  let setter: any = function (newVal: any): any {
    console.log(`Logger: Original result from calculate is ${newVal}`);
    let res: any = newVal;
    // increment result
    if (!isNaN(newVal)) {
      res = Number(newVal) + 1;
    }

    // set result to value
    _val = res;
  };

  // create new property with getter and setter
  Object.defineProperty(target, key, {
    get: getter,
    set: setter
  });

}