///<reference path=".././node_modules/@types/mathjs/index.d.ts" />
import { default as ICalculator } from "./ICalculator";
import * as math from "mathjs";

export default class ExtensionsCalculator implements ICalculator {
    calculate(expression: string): string {
        const result: number = math.eval(expression);
        return `Calculator with extension(mathjs): ${expression}=${result}\r\n`;
    }
}