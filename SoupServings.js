/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    n = Math.min(200, Math.ceil(n / 25));
    const dp = [];

    for (i = 0; i <= n; i++) {
        dp[i] = new Array(n + 1).fill(-1);
    }

    soupServingsHelper = (i, j) => {
        if (i <= 0 && j > 0) {
            return 1.0;
        }
        if (i <= 0 && j <= 0) {
            return .5;
        }
        if (i > 0 && j <= 0) {
            return 0;
        }
        if (dp[i][j] != -1) {
            return dp[i][j];
        }

        let prob = (soupServingsHelper(i - 4, j) + soupServingsHelper(i - 3, j - 1) 
        		+ soupServingsHelper(i - 2, j - 2) + soupServingsHelper(i - 1, j - 3)) / 4.0;

        return dp[i][j] = prob;
    }

    return soupServingsHelper(n, n);
};
