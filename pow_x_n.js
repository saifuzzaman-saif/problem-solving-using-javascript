/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -1.0 * n;
        console.log(n);
    }

    let result = 1.0;

    while (n > 0) {
        if (n % 2 == 1) {
            result = result * x;
        }

        x = x * x;
        n  = Math.floor(n / 2);
    }

    return result;
};
