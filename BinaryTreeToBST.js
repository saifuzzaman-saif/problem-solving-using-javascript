class Solution {
    
  	binaryTreeToBST(root) {
  	    this.vals = [];
        this.idx = 0;
        
  	    this.preorder(root);
  	    
  	    this.vals.sort((a, b) => a - b);
  	    this.inorder(root);
  	    
  	    return root;
  	}
  	
  	inorder(root) {
  	    if (!root) {
  	        return;
  	    }
  	    
  	    this.inorder(root.left);
  	    root.data = this.vals[this.idx++];
  	    this.inorder(root.right);
  	}
  	
  	preorder(root) {
  	    if (!root) {
  	        return;
  	    }
  	    
  	    this.vals.push(root.data);
  	    this.preorder(root.left);
  	    this.preorder(root.right);
  	}
}
