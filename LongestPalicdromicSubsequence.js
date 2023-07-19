/**
 * @param {string} s
 * @return {number} 
*/

class Solution {
    
  longestPalinSubseq(S) {
      let n = S.length;
      const dp = [];
      for (let i = 0; i < n; i++) {
          const row = new Array(n);
          row.fill(-1);
          dp[i] = row;
      }
      
      const findLongestPalinSubseqLen = (l, r) => {
          if (l > r) {
              return 0;
          }

          if (l == r) {
              return 1;
          }

          if (dp[l][1] != -1) {
              return dp[l][r];
          }
          
          let maxLen = 0;
          
          if (S[l] === S[r]) {
              maxLen = 2 + findLongestPalinSubseqLen(l + 1, r - 1);
          } else {
          
          maxLen = Math.max(maxLen, findLongestPalinSubseqLen(l + 1, r));
          maxLen = Math.max(maxLen, findLongestPalinSubseqLen(l, r - 1));
          }
          
          return dp[l][r] = maxLen;
      }
      
      return findLongestPalinSubseqLen(0, n - 1);
  }

}