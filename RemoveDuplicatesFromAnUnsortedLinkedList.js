/**
 * @param {Node} head
 * @returns {Node}
*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Solution {

    removeDuplicates(head) {
        const dummyHead = new Node(69);
        let curr = dummyHead;
        const cache = new Set();
        
        while (head != null) {
            if (!cache.has(head.data)) {
                curr.next = head;
                curr = curr.next;
                cache.add(head.data);
            }
            
            head = head.next;
        }
        
        curr.next = null;
        
        return dummyHead.next;

    }
}
