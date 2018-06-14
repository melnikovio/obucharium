import { ICalculator, EvalCalculator, ExtensionsCalculator, CustomCalculator } from "./Calculator/Calculators";

let expressions: string[] = ["1+2", "2+2*2", "1-6/2", "10/10-10*1000", "1324*1243456-6237/23333", "1+2/0", "1--2/0"];

for (let expression of expressions) {
    let calculator: ICalculator;

    calculator = new EvalCalculator();
    printResult(calculator.calculate(expression));

    //calculator = new ExtensionsCalculator();
    //printResult(calculator.calculate(expression));

    calculator = new CustomCalculator();
    printResult(calculator.calculate(expression));
}

function printResult(result: string): void {
    console.log(result);

    if (typeof window !== "undefined" && window.document !== null && typeof document !== undefined) {
        const content: HTMLElement|null = document.getElementById("content");
        if (content !== null) {
            content.innerText += result;
        }
    }
}