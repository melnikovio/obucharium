var expressions = ["1+2", "2+2*2", "1-6/2", "10/10-10*1000", "1324*1243456-6237/23333", "1+2/0", "1--2/0"];
for (var _i = 0, expressions_1 = expressions; _i < expressions_1.length; _i++) {
    var expression = expressions_1[_i];
    printResult(customCalculate(expression));
    printResult(calculateWithEval(expression));
    printResult(calculateWithExtension(expression));
}
// requires module or correct initialization
var math;
function calculateWithExtension(expression) {
    var result = math.eval(expression);
    return "Calc with extension(mathjs): " + expression + "=" + result + "\r\n";
}
function calculateWithEval(expression) {
    var result = eval(expression);
    return "Calc with eval: " + expression + "=" + result + "\r\n";
}
function customCalculate(expression) {
    var expressionBySymbols = expression.split(/(\+|\-|\*|\/)/g);
    var result = evaluate(expressionBySymbols);
    return "Custom calc: " + expression + "=" + result + "\r\n";
}
function evaluate(expressionBySymbols) {
    if (expressionBySymbols.length === 1) {
        return Number(expressionBySymbols[0]);
    }
    var value = Number(expressionBySymbols[0]);
    var operator = expressionBySymbols[1];
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
    var res = expressionBySymbols.slice(3, expressionBySymbols.length);
    res.unshift(String(value));
    return evaluate(res);
}
function printResult(result) {
    console.log(result);
    var content = document.getElementById("content");
    content.innerText += result;
}
