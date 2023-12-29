/**
 * @param {Node} head
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {

    segregate(head) {
        let ptr = head;
        let cnt = [0, 0, 0];
        
        while (ptr != null) {
            cnt[ptr.data]++;
            ptr = ptr.next;
        }
        
        ptr = head;
        
        while (ptr != null) {
            if (cnt[0] != 0) {
                ptr.data = 0;
                cnt[0]--;
                
            } else if (cnt[1] != 0) {
                ptr.data = 1;
                cnt[1]--;
                
            } else {
                ptr.data = 2;
            }
            
            ptr = ptr.next;
        }
        
        return head;
    }
}
