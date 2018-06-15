import { default as ICalculator } from "./ICalculator";
import {logClass, logMethod, incrementOnSet} from "../Logger/Logger";

@logClass
export default class EvalCalculator implements ICalculator {
    @incrementOnSet
    result: any;

    @logMethod
    calculate(expression: string): string {
        try {
            this.result = eval(expression);
            return this.result;
        } catch {
            return "Calculator with eval: Eval error occuried";
        }
    }
}