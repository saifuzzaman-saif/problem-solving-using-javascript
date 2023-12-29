/**
 * @param {Node} node
 * @param {number} k
 * @return {Node} node
*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Solution {
    
    reverse(node, k) {
        if (node === undefined || node === null) {
            return null;
        }
        
        let sz = 0;
        let prev = null, curr = node;
        
        while (sz < k && curr != null) {
            let next =  curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            sz++;
        }
        
        node.next = this.reverse(curr, k);
        
        return prev;
    }
}
