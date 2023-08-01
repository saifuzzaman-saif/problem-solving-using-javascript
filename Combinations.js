/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const combinations = [];

    (findCombinations = (pos, last, combination) => {
        if (pos == k + 1) {
            combinations.push([].concat(combination));
            return;
        }

        for (let next = last + 1; next <= n - k + pos; next++) {
            combination.push(next);
            findCombinations(pos + 1, next, combination);
            combination.pop();
        }
    })(1, 0, []);

    return combinations;
};
