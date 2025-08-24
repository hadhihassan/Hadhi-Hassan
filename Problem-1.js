// Program-1.js
// Name: Hadhi Hassan
// Language: Node.js (JavaScript)
// Problem: Create a calculator class performing addition, subtraction, multiplication, division

class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }
    calculate() {
        switch (this.operation) {
            case 'add':
                return this.a + this.b;
            case 'subtract':
                return this.a - this.b;
            case 'multiply':
                return this.a * this.b;
            case 'divide':
                if (this.b === 0) {
                    throw new Error("Division by zero is not allowed.");
                }
                return this.a / this.b;
            default:
                throw new Error("Invalid operation. Supported operations are: add, subtract, multiply, divide.");
        }
    }
}

const calc1 = new Calculator(10.5, 5.2, "add");
console.log(calc1.calculate()); // 15.7

const calc2 = new Calculator(20, 4, "divide");
console.log(calc2.calculate()); // 5

const calc3 = new Calculator(20, 4, "subtract");
console.log(calc3.calculate()); // 5

const calc4 = new Calculator(20, 4, "multiply");
console.log(calc4.calculate()); // 5

// const calc5 = new Calculator(20, 4, "disssvide");
// console.log( calc5.calculate()); // 5