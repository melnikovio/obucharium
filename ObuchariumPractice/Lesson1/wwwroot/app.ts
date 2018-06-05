let expressions = ["1+2", "2+2*2", "1-6/2", "10/10-10*1000", "1324*1243456-6237/23333"];

for (let expression of expressions) {
    printResult(customCalculate(expression));
    printResult(calculateWithEval(expression));
    printResult(calculateWithExtension(expression));
}

//Requires module or correct initialization
var math;
function calculateWithExtension(expression: string): string {
    const result = math.eval(expression);

    return `Calc with extension(mathjs): ${expression}=${result}\r\n`;
}

function calculateWithEval(expression: string): string {
    const result = eval(expression);

    return `Calc with eval: ${expression}=${result}\r\n`;
}

function customCalculate(expression: string): string {
    const expressionBySymbols = expression.split(/(\+|\-|\*|\/)/g);
    const result = evaluate(expressionBySymbols);

    return `Custom calc: ${expression}=${result}\r\n`;
}

function evaluate(expressionBySymbols: string[]): number {
    if (expressionBySymbols.length === 1) {
        return Number(expressionBySymbols[0]);
    }

    let value = Number(expressionBySymbols[0]);
    const operator = expressionBySymbols[1];

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
    }

    const res = expressionBySymbols.slice(3, expressionBySymbols.length);
    res.unshift(String(value));
    return evaluate(res);
}

function printResult(result: string) {
    console.log(result);

    const content = document.getElementById("content");

    content.innerText += result;
}