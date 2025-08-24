//  Program-2.js
//  Name: Hadhi Hassan
// Language: Node.js (JavaScript)
//  Problem: Generate series 1, 3, 5, ... until length a

function generateOddNumbers(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(2 * i - 1);
    }
    return result;
}

console.log(generateOddNumbers(1).join(", "));
console.log(generateOddNumbers(2).join(", "));
console.log(generateOddNumbers(3).join(", "));
console.log(generateOddNumbers(4).join(", "));
