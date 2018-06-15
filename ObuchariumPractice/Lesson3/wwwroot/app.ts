import * as calc from "./Calculator/Calculators";

let expressions: string[] = ["1+2", "2+2*2", "1-6/2", "10/10-10*1000", "1324*1243456-6237/23333", "1+2/0", "1--2/0"];

for (let expression of expressions) {
    let calculator: calc.ICalculator;

    calculator = new calc.EvalCalculator();
    printResult(expression, calculator.calculate(expression));

    calculator = new calc.ExtensionsCalculator();
    printResult(expression, calculator.calculate(expression));

    calculator = new calc.CustomCalculator();
    printResult(expression, calculator.calculate(expression));
}

function printResult(expression: string, result: string): void {
    let printResult: string = `Calculating expression with autoincrement result: ${expression}=${result}\r\n`;

    console.log(printResult);

    if (typeof window !== "undefined" && window.document !== null && typeof document !== undefined) {
        const content: HTMLElement|null = document.getElementById("content");
        if (content !== null) {
            content.innerText += printResult;
        }
    }
}
