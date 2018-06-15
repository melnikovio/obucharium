import { default as ICalculator } from "./ICalculator";
import {logClass, autoIncrementResult} from "../Logger/Logger";

@logClass
export default class EvalCalculator implements ICalculator {
    @autoIncrementResult
    calculate(expression: string): string {
        try {
            const result: number = eval(expression);
            return String(result);
        } catch {
            return "Calculator with eval: Eval error occuried";
        }
    }
}