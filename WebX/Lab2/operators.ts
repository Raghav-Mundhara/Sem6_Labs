let a: number = 10;
let b: number = 20;

const add = (a: number, b: number): number => {
    return a + b;
}

const divide = (a: number, b: number): number => {
    try {
        if (a > b) {
            return a / b;
        }
        return b / a;
    } catch (error) {
        console.log(error);
        return NaN;
    }
}

const subtract = (a: number, b: number): number => {
    return a - b;
}

const multiply = (a: number, b: number): number => {
    return a * b;
}

const num1= document.getElementById("num1") as HTMLInputElement;
const num2= document.getElementById("num2") as HTMLInputElement;
const result= document.getElementById("result");
const bt1 = document.getElementById("add");
const bt2 = document.getElementById("subtract");
const bt3 = document.getElementById("multiply");
const bt4 = document.getElementById("divide");

bt1?.addEventListener("click", function () {
    const res = add(Number(num1?.value), Number(num2?.value));
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = res.toString();
    }
});
bt2?.addEventListener("click", function () {
    const res = subtract(Number(num1?.value), Number(num2?.value));
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = res.toString();
    }
});
bt3?.addEventListener("click", function () {
    const res = multiply(Number(num1?.value), Number(num2?.value));
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = res.toString();
    }
});
bt4?.addEventListener("click", function () {
    const res = divide(Number(num1?.value), Number(num2?.value));
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = res.toString();
    }
});


