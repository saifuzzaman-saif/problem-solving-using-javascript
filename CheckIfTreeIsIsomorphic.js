/**
 * @param {Node} root1
 * @param {Node} root2
 * @return {boolean} 
*/
class Solution {
    
  	isIsomorphic(root1,root2){
  	    if (root1 == null && root2 == null) {
  	        return true;
  	    }
  	    if (root1 == null || root2 == null) {
  	        return false;
  	    }
  	    if (root1.data != root2.data) {
  	        return false;
  	    }
  	    
  	    return this.isIsomorphic(root1.left, root2.left) && this.isIsomorphic(root1.right, root2.right) ||
  	           this.isIsomorphic(root1.left, root2.right) && this.isIsomorphic(root1.right, root2.left);
  	}
}

