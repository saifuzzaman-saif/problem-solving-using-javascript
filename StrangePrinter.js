/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    const n = s.length;
    const dp = [];

    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(-1);
    }

    const findMinimumTurns = (l, r) => {
        if (dp[l][r] != -1) {
            return dp[l][r];
        }

        let minimumTurn = Number.MAX_SAFE_INTEGER / 2;
        let i = -1;

        for (let j = l; j < r; j++) {
            if (s[j] != s[r] && i == -1) {
                i = j;
            }

            if (i != -1) {
                minimumTurn = Math.min(minimumTurn, 1 + findMinimumTurns(i, j) +
                                        findMinimumTurns(j + 1, r));
            }
        }

        if (i == -1) {
            minimumTurn = 0;
        }

        return dp[l][r] = minimumTurn;
    }

    return 1 + findMinimumTurns(0, n - 1);
};
