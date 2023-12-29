/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
    let l = 1, r = 0;

    for (let power of batteries) {
        r += power;
    }

    while (l < r) {
        let m = Math.floor(l + (r - l + 1) / 2);
        let usablePower = 0;

        for (let power of batteries) {
            usablePower += Math.min(power, m);
        }

        if (usablePower >= n * m) {
            l = m;
        } else {
            r = m - 1;
        }
    }

    return l;
};
