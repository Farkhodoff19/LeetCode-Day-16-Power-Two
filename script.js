/*
    2 ** 0 = 1 
    2 ** 2 = 2 
    2 ** 3 = 4 
    2 ** 4 = 16 
    2 ** 5 = 32 
    2 ** 6 = 64
    2 ** 7 = 128
    2 ** 8 = 256
    2 ** 9 = 512 
    2 ** 10 = 1024
*/

function isPowerTwo(n) {
    let i = 1;
    while(i < n) {
        i = i * 2 
    }

    return i === n // 1 === 1
} 

console.log(isPowerTwo(4)); // true
console.log(isPowerTwo(3)); // false