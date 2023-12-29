/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const n = s.length;
    const dict = new Set();
    const dp = new Array(n).fill(-1);

    for (let word of dictionary) {
        dict.add(word);
    }

    const findMinExtraChar = (i) => {
        if (i >= n) {
            return 0;
        }
        if (dp[i] != -1) {
            return dp[i];
        }

        let minChar = 1 + findMinExtraChar(i + 1);
        
        for (let j = i; j < n; j++) {
            let word = s.slice(i, j + 1);

            if (dict.has(word)) {
                minChar = Math.min(minChar, findMinExtraChar(j + 1));
            }
        }

        return dp[i] = minChar;
    }

    return findMinExtraChar(0);
};

