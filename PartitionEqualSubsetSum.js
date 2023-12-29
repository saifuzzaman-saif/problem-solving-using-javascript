class Solution {
    
    equalPartition(arr, n) {
        this.arr = arr;
        this.n = n;
        this.sum = arr.reduce((a, b) => a + b, 0);
        this.dp = [];
        for (let i = 0; i < n; i++) {
            this.dp[i] = [];
            for (let j = 0; j <= this.sum; j++) {
                this.dp[i][j] = null;
            }
        }
        
        return this.canBePartitioned(0, 0);
    }
    
    canBePartitioned(idx, currSum) {
        if (idx === this.n) {
            return (2 * currSum === this.sum);
        }
        if (this.dp[idx][currSum] !== null) {
            return this.dp[idx][currSum];
        }
        
        let canPartition = this.canBePartitioned(idx + 1, currSum) || this.canBePartitioned(idx + 1, currSum + this.arr[idx]);
        
        return this.dp[idx][currSum] = canPartition;
    }
    
}
