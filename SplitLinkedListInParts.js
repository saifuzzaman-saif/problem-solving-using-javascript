/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    getLength = () => {
        let curr = head;
        let len = 0;

        while (curr !== undefined && curr !== null) {
            curr = curr.next;
            len++;
        }

        return len;
    }

    let length = getLength(head);
    let width = Math.floor(length / k);
    let extra = length % k;
    const parts = new Array(k).fill([]);

    for (let i = 0; i < k; i++) {
        const dummyHead = new ListNode(69);
        let curr = dummyHead;

        for (let j = 0; j < width + (i < extra ? 1 : 0) && head != null; j++) {
            curr.next = head;
            curr = curr.next;
            head = head.next;
        }
        
        curr.next = null;
        parts[i] = dummyHead.next;
    }

    return parts;
};
