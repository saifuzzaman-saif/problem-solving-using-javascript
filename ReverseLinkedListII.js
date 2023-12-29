/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummyHead = new ListNode(69, head);
    let start = dummyHead;
    let sl = 1;

    while (sl < left) {
        start = head;
        head = head.next;
        sl++;
    }

    let prev = null;
    while (sl <= right) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
        sl++;
    }

    start.next.next = head;
    start.next = prev;

    return dummyHead.next;
};
