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
   * @param {number} node
   * @return {number}
  */

class Solution {
    
    constructor() {
        this.parent = new Map();
        this.targetNode = null;
    }
    
    dfs(root, par, targetVal) {
        if (root == null) {
            return;
        }
        if (root.data == targetVal) {
            this.targetNode = root;
        }
        
        this.parent.set(root, par);
        
        this.dfs(root.left, root, targetVal);
        this.dfs(root.right, root, targetVal);
    }

    kthAncestor(root, k, node){
        this.dfs(root, null, node);
        
        while (k > 0 && this.targetNode != null) {
            this.targetNode = this.parent.get(this.targetNode);
            k--;
        }
        
        return this.targetNode == null ? -1 : this.targetNode.data;
    }  
}
