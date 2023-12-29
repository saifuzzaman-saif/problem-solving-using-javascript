/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

// TC = O(n)
// SC = O(1)

class Solution {
    
    reverse(head) {
        let prev = null;
        
        while (head != null) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        
        return prev;
    }
    
    compute(head) {
        head = this.reverse(head);
        const dummyHead = new Node(-1);
        let curr = dummyHead;
        let currMaxData = Number.MIN_SAFE_INTEGER;
        
        while (head != null) {
            if (head.data >= currMaxData) {
                currMaxData = head.data;
                curr.next = head;
                curr = curr.next;
            }
            
            head = head.next;
        }
        
        curr.next = null;
        
        return this.reverse(dummyHead.next);
    }
    
}

