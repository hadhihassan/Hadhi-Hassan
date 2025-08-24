// Program-4.js
// Name: Hadhi Hassan
// Language: Node.js (JavaScript)
// Problem: Count multiples of 1-9 in the list

function multipleOfNumber(arr, n) {
    let res = {};

    const freq = {};
    for (let val of arr) {
        freq[val] = (freq[val] || 0) + 1;
    }


    for (let ni of n) {
        let count = 0;

        for (let val in freq) {
            val = Number(val);
            if (ni === 1 || val % ni === 0) {
                count += freq[val];
            }
        }

        res[ni] = count;
    }

    return res;
}

console.log(multipleOfNumber([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30], [1, 2, 3, 4, 5, 6, 7, 8, 9]));