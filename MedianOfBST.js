/*
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number} 
*/
class Solution {
    
    count(root) {
        if (root == undefined || root == null) {
            return 0;
        }
        
        return 1 + this.count(root.left) + this.count(root.right);
    }
    
    find(root, idx, targetIdx, data) {
        if (root == undefined || root == null) {
            return idx;
        }
        
        idx = this.find(root.left, idx, targetIdx, data);
        idx++;
        
        if (idx == targetIdx) {
            data.push(root.data);
        }
        
        idx = this.find(root.right, idx, targetIdx, data);
        
        return idx;
    }
    
  	findMedian(root) {
  		let n = this.count(root);
  		
  		if (n % 2 == 0) {
  		    const mid1 = [];
  		    const mid2 = [];
  		    this.find(root, -1, Math.trunc(n / 2) - 1, mid1);
  		    this.find(root, -1, Math.trunc(n / 2), mid2);
  		    
  		    return (mid1[0] + mid2[0]) / 2;
  		    
  		} else {
  		    const mid = [];
  		    this.find(root, -1, Math.trunc(n / 2), mid);
  		    
  		    return mid[0];
  		}
  	}
}
