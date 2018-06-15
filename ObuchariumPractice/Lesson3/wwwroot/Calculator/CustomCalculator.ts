import { default as ICalculator } from "./ICalculator";
import {logClass, autoIncrementResult} from "../Logger/Logger";

@logClass
export default class CustomCalculator implements ICalculator {
    @autoIncrementResult
    calculate(expression: string): string {
        const expressionBySymbols: string[] = expression.split(/(\+|\-|\*|\/)/g);
        const result: number = this.evaluate(expressionBySymbols);
        return String(result);
    }

    private evaluate(expressionBySymbols: string[]): number {
        if (expressionBySymbols.length === 1) {
            return Number(expressionBySymbols[0]);
        }
        let value: number = Number(expressionBySymbols[0]);
        const operator: string = expressionBySymbols[1];
        switch (operator) {
            case "+": {
                return value + this.evaluate(expressionBySymbols.slice(2, expressionBySymbols.length));
            }
            case "-": {
                return value - this.evaluate(expressionBySymbols.slice(2, expressionBySymbols.length));
            }
            case "*": {
                value = value * Number(expressionBySymbols[2]);
                break;
            }
            case "/": {
                value = value / Number(expressionBySymbols[2]);
                break;
            }
            default:
                break;
        }
        const res: string[] = expressionBySymbols.slice(3, expressionBySymbols.length);
        res.unshift(String(value));
        return this.evaluate(res);
    }
}