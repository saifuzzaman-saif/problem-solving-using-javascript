/**
 * @param {string} S
 * @returns {number}
*/

class Solution {
    
    constructor() {
        this.dp = [];
        this.isPal = [];
    }
    
    isPalindrome = (l, r) => {
        if (l >= r) {
            return true;
        }
        if (this.isPal[l][r] !== undefined) {
            return this.isPal[l][r];
        }
        if (this.s[l] !== this.s[r]) {
            return false;
        }
        
        return this.isPal[l][r] = this.isPalindrome(l + 1, r - 1);
    }
    
    findMinCuts = (i) => {
        if (i >= this.n) {
            return 0;
        }
        if (this.dp[i] !== undefined) {
            return this.dp[i];
        }
        
        let minCut = Number.MAX_SAFE_INTEGER;
        for (let j = i; j < this.n; j++) {
            if (this.isPalindrome(i, j)) {
                minCut = Math.min(minCut, 1 + this.findMinCuts(j + 1));
            }
        }
        
        return this.dp[i] = minCut;
    }
    
    palindromicPartition(s)
    {
        this.s = s;
        this.n = s.length;
        this.dp = new Array(this.n);
        
        for (let i = 0; i < this.n; i++) {
            this.isPal.push(new Array(this.n));
        }
        
        return this.findMinCuts(0) - 1;
    }
}

