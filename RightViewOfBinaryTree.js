 /**
 * @param {Node} root
 * @returns {number[]}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    
    rightView(root) {
        const view = [];
        const q = [root];
        
        while (q.length > 0) {
            const sz = q.length;
            
            for (let i = 0; i < sz; i++) {
                const curr = q.shift();
                
                if (i == sz - 1) {
                    view.push(curr.data);
                }
                
                if (curr.left != null) {
                    q.push(curr.left);
                }
                
                if (curr.right != null) {
                    q.push(curr.right);
                }
            }
        }
        
        return view;
    }
}
