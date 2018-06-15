///<reference path=".././node_modules/@types/mathjs/index.d.ts" />
import { default as ICalculator } from "./ICalculator";
import * as math from "mathjs";
import {logClass, logMethod, incrementOnSet} from "../Logger/Logger";

@logClass
export default class ExtensionsCalculator implements ICalculator {
    @incrementOnSet
    result: any;

    @logMethod
    calculate(expression: string): string {
        this.result = math.eval(expression);
        return this.result;
    }
}