var a = 10;
var b = 20;
var add = function (a, b) {
    return a + b;
};
var divide = function (a, b) {
    try {
        if (a > b) {
            return a / b;
        }
        return b / a;
    }
    catch (error) {
        console.log(error);
        return NaN;
    }
};
var subtract = function (a, b) {
    return a - b;
};
var multiply = function (a, b) {
    return a * b;
};
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
var bt1 = document.getElementById("add");
var bt2 = document.getElementById("subtract");
var bt3 = document.getElementById("multiply");
var bt4 = document.getElementById("divide");
bt1 === null || bt1 === void 0 ? void 0 : bt1.addEventListener("click", function () {
    var res = add(Number(num1 === null || num1 === void 0 ? void 0 : num1.value), Number(num2 === null || num2 === void 0 ? void 0 : num2.value));
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = res.toString();
    }
});
bt2 === null || bt2 === void 0 ? void 0 : bt2.addEventListener("click", function () {
    var res = subtract(Number(num1 === null || num1 === void 0 ? void 0 : num1.value), Number(num2 === null || num2 === void 0 ? void 0 : num2.value));
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = res.toString();
    }
});
bt3 === null || bt3 === void 0 ? void 0 : bt3.addEventListener("click", function () {
    var res = multiply(Number(num1 === null || num1 === void 0 ? void 0 : num1.value), Number(num2 === null || num2 === void 0 ? void 0 : num2.value));
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = res.toString();
    }
});
bt4 === null || bt4 === void 0 ? void 0 : bt4.addEventListener("click", function () {
    var res = divide(Number(num1 === null || num1 === void 0 ? void 0 : num1.value), Number(num2 === null || num2 === void 0 ? void 0 : num2.value));
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = res.toString();
    }
});
