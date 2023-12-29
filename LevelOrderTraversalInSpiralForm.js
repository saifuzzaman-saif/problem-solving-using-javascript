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

    findSpiral(root) {
        if (root == null) {
            return null;
        }
        
        const q = [];
        const orderedData = [];
        let depth = 0;
        q.push(root);
        
        while (q.length > 0) {
            let sz = q.length;
            const levelData = [];
            
            for (let i = 0; i < sz; i++) {
                const curr = q.shift();
                levelData.push(curr.data);
                
                if (curr.left != null) {
                    q.push(curr.left);
                }
                if (curr.right != null) {
                    q.push(curr.right);
                }
            }
            
            if (depth % 2 == 0) {
                levelData.reverse();
            }
            
            for (let x of levelData) {
                orderedData.push(x);
            }
            
            depth++;
        }
        
        return orderedData;
    }
}
