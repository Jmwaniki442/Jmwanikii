function checkOddEven(num) {
    if (num % 2 === 0) {
        return `${num} is Even`;
    } else {
        return `${num} is Odd`;
    }
}
console.log(checkOddEven(8));
console.log(checkOddEven(7));
console.log(checkOddEven(0));
console.log(checkOddEven(15));
