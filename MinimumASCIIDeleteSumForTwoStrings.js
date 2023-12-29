/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let n = s1.length, m = s2.length;
    const dp = [];
    
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(m + 1).fill(-1);
    }

    minimumDeleteSumHelper = (i, j) => {
        if (i >= n && j >= m) {
            return 0;
        }
        if (dp[i][j] != -1) {
            return dp[i][j];
        }
        
        let minCost = Math.trunc(Number.MAX_SAFE_INTEGER / 2);

        if (i >= n) {
            minCost = s2.charCodeAt(j) + minimumDeleteSumHelper(i, j + 1);
        } else if (j >= m) {
            minCost = s1.charCodeAt(i) + minimumDeleteSumHelper(i + 1, j);
        } else if (s1[i] == s2[j]) {
            minCost = minimumDeleteSumHelper(i + 1, j + 1);
        } else {
            minCost = Math.min(minCost, s1.charCodeAt(i) + minimumDeleteSumHelper(i + 1, j));
            minCost = Math.min(minCost, s2.charCodeAt(j) + minimumDeleteSumHelper(i, j + 1));
        }

        return dp[i][j] = minCost;
    }

    return minimumDeleteSumHelper(0, 0);
};
