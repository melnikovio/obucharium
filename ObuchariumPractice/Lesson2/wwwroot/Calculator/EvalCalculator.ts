import { default as ICalculator } from "./ICalculator";
export default class EvalCalculator implements ICalculator {
    calculate(expression: string): string {
        try {
            const result: number = eval(expression);
            return `Calculator with eval: ${expression}=${result}\r\n`;
        } catch {
            return "Calculator with eval: Eval error occuried\r\n";
        }
    }
}