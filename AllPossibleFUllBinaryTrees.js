/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {

    if (n <= 0) {
        return [];
    }

    if (n == 1) {
        return [new TreeNode(0)];
    }

    const roots = [];

    for (let i = 1; i <= n - 2; i++) {
        const left = allPossibleFBT(i);
        const right = allPossibleFBT(n - i - 1);

        for (let leftChild of left) {
            for (let rightChild of right) {
                const root = new TreeNode();
                root.left = leftChild;
                root.right = rightChild;

                roots.push(root);
            }
        }
    }

    return roots;
    
};
