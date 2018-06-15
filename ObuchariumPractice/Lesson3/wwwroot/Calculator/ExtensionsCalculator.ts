///<reference path=".././node_modules/@types/mathjs/index.d.ts" />
import { default as ICalculator } from "./ICalculator";
import * as math from "mathjs";
import {logClass, autoIncrementResult} from "../Logger/Logger";

@logClass
export default class ExtensionsCalculator implements ICalculator {
    @autoIncrementResult
    calculate(expression: string): string {
        const result: number = math.eval(expression);
        return String(result);
    }
}