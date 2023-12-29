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
 * @param {Node} x
 * @return {Node}
*/
class Solution {

  	inOrderSuccessor(root, x) {
  	    if (root == null || x == null) {
  	        return null;
  	    }
  	    
  	    let successor = null;
  	    
  	    while (root != null) {
  	        if (x.data >= root.data) {
  	            root = root.right;
  	        } else {
  	            successor = root;
  	            root = root.left;
  	        }
  	    }
  	    
  	    return successor;
  	}
}
