/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
 */

class Solution {
    
  getCount(root, k) {
    const leafLevels = [];
    
    const dfs = (curr, level) => {
        if (curr == null) {
            return;
        }
        if (curr.left == null && curr.right == null) {
            leafLevels.push(level);
        }
        
        dfs(curr.left, level + 1);
        dfs(curr.right, level + 1);
    }
    
    dfs(root, 1);
    
    leafLevels.sort((a, b) => a - b);
    
    let cnt = 0;
    for (let level of leafLevels) {
        if (k >= level) {
            cnt++;
            k -= level;
        }
    }
    
    return cnt;
  }
}

