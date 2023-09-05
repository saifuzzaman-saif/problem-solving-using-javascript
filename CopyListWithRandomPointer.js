/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const copies = new Map();
    let curr = head;

    while (curr !== undefined && curr !== null) {
        copies.set(curr, new Node(curr.val, null, null));
        curr = curr.next;
    }

    curr = head;
    while (curr !== undefined && curr !== null) {
        const copy = copies.get(curr);

        if (curr.next !== undefined && curr.next !== null) {
            copy.next = copies.get(curr.next);
        }
        if (curr.random !== undefined && curr.random !== null) {
            copy.random = copies.get(curr.random);
        }

        curr = curr.next;
    }

    return copies.get(head);
};
