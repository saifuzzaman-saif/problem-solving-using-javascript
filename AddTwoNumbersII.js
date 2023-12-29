/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    reverseList = (head) => {
        let prev = null;
        let curr = head;

        while (curr !== undefined && curr !== null) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    l1 = reverseList(l1);
    l2 = reverseList(l2);
    const dummyHead = new ListNode(69);
    let curr = dummyHead;
    let carry = 0;

    while ((l1 !== undefined && l1 !== null) || (l2 !== undefined && l2 !== null)) {
        let val1 = 0;
        let val2 = 0;

        if (l1 !== undefined && l1 != null) {
            val1 = l1.val;
            l1 = l1.next;
        }

        if (l2 !== undefined && l2 !== null) {
            val2 = l2.val;
            l2 = l2.next;
        }

        let sum = val1 + val2 + carry;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        carry = Math.floor(sum / 10);
    }

    if (carry !== 0) {
        curr.next = new ListNode(carry);
    }

    return reverseList(dummyHead.next);
};
