// Program-3.js
// Name: Hadhi Hassan
// Language: Node.js (JavaScript)
// Problem: Generate series similar to problem 2 but with repeated sequence pattern

function generateOddNumbers(n) {
    let x = n % 2 == 0 ? n - 1 : n
    
    let result = [];
    for (let i = 1; i <= x; i++) {
        result.push(2 * i - 1);
    }
    return result;
}

console.log(generateOddNumbers(1).join(", "));
console.log(generateOddNumbers(2).join(", "));
console.log(generateOddNumbers(3).join(", "));
console.log(generateOddNumbers(4).join(", "));
console.log(generateOddNumbers(5).join(", "));
console.log(generateOddNumbers(6).join(", ")); 
