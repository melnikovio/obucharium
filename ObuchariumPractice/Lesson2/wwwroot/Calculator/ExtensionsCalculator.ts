import { default as ICalculator } from "./ICalculator";
//import * as mathjs from "./Libs/mathjs";
var mathjs: any;
export default class ExtensionsCalculator implements ICalculator {
    calculate(expression: string): string {
        const result: number = mathjs.eval(expression);
        return `Calculator with extension(mathjs): ${expression}=${result}\r\n`;
    }
}