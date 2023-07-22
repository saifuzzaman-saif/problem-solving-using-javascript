/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    let dx = [+1, +1, +2, +2, -1, -1, -2, -2];
    let dy = [+2, -2, +1, -1, +2, -2, +1, -1];
    const dp = [];

    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = new Array(k + 1);
            dp[i][j].fill(-1);
        }
    }

    isInside = (r, c) => {
        return r >= 0 && r < n && c >= 0 && c < n;
    }

    findProbability = (r, c, k) => {
        if (k == 0) {
            if (r == row && c == column) {
                return 1;
            } else {
                return 0;
            }
        }

        if (dp[r][c][k] != -1) {
            return dp[r][c][k];
        }

        let probability = 0;

        for (let i = 0; i < 8; i++) {
            let nr = r - dx[i];
            let nc = c - dy[i];

            if (isInside(nr, nc)) {
                probability += findProbability(nr, nc, k - 1) / 8.0;
            }
        }

        return dp[r][c][k] = probability;
    }

    let probability = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            probability += findProbability(i, j, k);
        }
    }

    return probability;
};
