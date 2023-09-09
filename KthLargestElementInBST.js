/**
 * @param {Node} root
 * @param {number} K
 * @return {number}
*/
class Solution {
    
    constructor() {
        this.find = (root) => {
            if (root === null) {
                return;
            }
            
            this.find(root.right);
            
            this.idx--;
            if (this.idx === 0) {
                this.largest = root.data;
            }
            
            this.find(root.left);
        }
    }
    
  	kthLargest(root, K){
  	    this.idx = K;
  	    this.largest = -1;
  	    
  	    this.find(root);
  	    
  	    return this.largest;
  	}
}

