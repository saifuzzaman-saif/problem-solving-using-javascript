/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    const map = new Map();
    const vals = [];
    if (!root) {
        return vals;
    }

    dfs = (node, d) => {
        if (!node) {
            return;
        }

        map.set(d, Math.max(node.val, map.has(d) ? map.get(d) : Number.MIN_SAFE_INTEGER));

        dfs(node.left, d + 1);
        dfs(node.right, d + 1);
    }

    dfs(root, 0);
    
    for (let e of map.entries()) {
        vals.push(e[1]);
    }

    return vals;
};

