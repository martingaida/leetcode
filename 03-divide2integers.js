/*
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.
Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
*/

const divide = function(dividend, divisor) {
    let _dividend = Math.abs(dividend)
    let _divisor = Math.abs(divisor)
    let int = 0
    let rem = 0
    let rem2 = 0
    let frac = 0
    let dec = []
    
    if (dividend === 0) return 0
        
    while (_dividend >= _divisor) {
        int++
        _dividend-= _divisor
    }

    if (_dividend > 0) {
        
        for (let i=0;i<10;i++) {
            rem+=_dividend
        }

        while (rem >= _divisor) {
            rem-=_divisor
            frac++
        }

        dec[0]=frac
        frac=0

        if (rem > 0) {
            
            for (let i=0;i<10;i++) {
                rem2+=rem
            }

            while (rem2 >= _divisor) {
                rem2-=_divisor
                frac++
            }

            dec[1] = frac

            if (dec[1]>=5) {
                dec[0]+=1
            }
        }
        if (dec[0]>5) {
            int+=1

            if (Math.sign(dividend) === -1 && Math.sign(divisor) === -1 && int <= 2147483647) {
                return int
            }
            else if (Math.sign(dividend) === -1 && Math.sign(divisor) === -1 && int > 2147483647) {
                return 2147483647
            }
            else if (Math.sign(dividend) === 1 && Math.sign(divisor) === 1 && int <= 2147483647) {
                return int
            }
            else if (Math.sign(dividend) === 1 && Math.sign(divisor) === 1 && int > 2147483647) {
                return 2147483647
            }
            else if ((Math.sign(dividend) === 1 && Math.sign(divisor) === -1 && int <= 2147483648) || (Math.sign(dividend) === -1 && Math.sign(divisor) === 1 && int <= 2147483648)) {
                return -int
            }
            else if ((Math.sign(dividend) === 1 && Math.sign(divisor) === -1 && int > 2147483648) || (Math.sign(dividend) === -1 && Math.sign(divisor) === 1 && int > 2147483648)) {
                return -2147483648
            }
        }
        else {

            if (Math.sign(dividend) === -1 && Math.sign(divisor) === -1 && int <= 2147483647) {
                return int
            }
            else if (Math.sign(dividend) === -1 && Math.sign(divisor) === -1 && int > 2147483647) {
                return 2147483647
            }
            else if (Math.sign(dividend) === 1 && Math.sign(divisor) === 1 && int <= 2147483647) {
                return int
            }
            else if (Math.sign(dividend) === 1 && Math.sign(divisor) === 1 && int > 2147483647) {
                return 2147483647
            }
            else if ((Math.sign(dividend) === 1 && Math.sign(divisor) === -1 && int <= 2147483648) || (Math.sign(dividend) === -1 && Math.sign(divisor) === 1 && int <= 2147483648)) {
                return -int
            }
            else if ((Math.sign(dividend) === 1 && Math.sign(divisor) === -1 && int > 2147483648) || (Math.sign(dividend) === -1 && Math.sign(divisor) === 1 && int > 2147483648)) {
                return -2147483648
            }
        }
    }
    else {

        if (Math.sign(dividend) === -1 && Math.sign(divisor) === -1 && int <= 2147483647) {
            return int
        }
        else if (Math.sign(dividend) === -1 && Math.sign(divisor) === -1 && int > 2147483647) {
            return 2147483647
        }
        else if (Math.sign(dividend) === 1 && Math.sign(divisor) === 1 && int <= 2147483647) {
            return int
        }
        else if (Math.sign(dividend) === 1 && Math.sign(divisor) === 1 && int > 2147483647) {
            return 2147483647
        }
        else if ((Math.sign(dividend) === 1 && Math.sign(divisor) === -1 && int <= 2147483648) || (Math.sign(dividend) === -1 && Math.sign(divisor) === 1 && int <= 2147483648)) {
            return -int
        }
        else if ((Math.sign(dividend) === 1 && Math.sign(divisor) === -1 && int > 2147483648) || (Math.sign(dividend) === -1 && Math.sign(divisor) === 1 && int > 2147483648)) {
            return -2147483648
        }
    }
};

console.log(2147483647 === divide(-2147483648,-1))
console.log(-2147483648 === divide(-2147483648, 1))
console.log(0 === divide(0, 1))
console.log(-1 === divide(-1, 1))
console.log(1 === divide(-1, -1))
console.log(-1 === divide(-2, 2))
console.log(1 === divide(2,2))
console.log(-2 === divide(7,-3))
console.log(1073741824 === divide(2147483647,2))
console.log(1 === divide(99,100))