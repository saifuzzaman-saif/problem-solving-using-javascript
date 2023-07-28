/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    let n = nums.length;
    const dp = [];
    
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
        dp[i].fill(-1);
    }

    findScoreDiff = (l, r) => {
        if (l > r) {
            return 0;
        }
        if (dp[l][r] != -1) {
            return dp[l][r];
        }

        let scoreDiff = nums[l] - findScoreDiff(l + 1, r);
        scoreDiff = Math.max(scoreDiff, nums[r] - findScoreDiff(l, r - 1));

        return dp[l][r] = scoreDiff;
    }

    return findScoreDiff(0, n - 1) >= 0;
};
