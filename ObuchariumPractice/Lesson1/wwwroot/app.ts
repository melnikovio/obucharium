let expressions: string[] = ["1+2", "2+2*2", "1-6/2", "10/10-10*1000", "1324*1243456-6237/23333", "1+2/0", "1--2/0"];

for (let expression of expressions) {
    printResult(customCalculate(expression));
    printResult(calculateWithEval(expression));
    printResult(calculateWithExtension(expression));
}

// requires module or correct initialization
var math: any;
function calculateWithExtension(expression: string): string {
    const result: number = math.eval(expression);

    return `Calc with extension(mathjs): ${expression}=${result}\r\n`;
}

function calculateWithEval(expression: string): string {
    const result: number = eval(expression);

    return `Calc with eval: ${expression}=${result}\r\n`;
}

function customCalculate(expression: string): string {
    const expressionBySymbols: string[] = expression.split(/(\+|\-|\*|\/)/g);
    const result: number = evaluate(expressionBySymbols);

    return `Custom calc: ${expression}=${result}\r\n`;
}

function evaluate(expressionBySymbols: string[]): number {
    if (expressionBySymbols.length === 1) {
        return Number(expressionBySymbols[0]);
    }

    let value: number = Number(expressionBySymbols[0]);
    const operator: string = expressionBySymbols[1];

    switch (operator) {
        case "+": {
            return value + evaluate(expressionBySymbols.slice(2, expressionBySymbols.length));
        }
        case "-": {
            return value - evaluate(expressionBySymbols.slice(2, expressionBySymbols.length));
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
    return evaluate(res);
}

function printResult(result: string): void {
    console.log(result);

    const content: HTMLElement = document.getElementById("content");

    content.innerText += result;
}