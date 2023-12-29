/**
 * @param {Node} root
 * @param {number} n1
 * @param {number} n2
 * @returns {Node}
*/
class Solution {
    
    LCA(root, n1, n2) {
        if (root == null) {
            return null;
        }
        if (n1 > n2) {
            return this.LCA(root, n2, n1);
        }
        
        if (n1 > root.data) {
            return this.LCA(root.right, n1, n2);
        }
        
        if (n2 < root.data) {
            return this.LCA(root.left, n1, n2);
        }
        
        return root;
    }
}
