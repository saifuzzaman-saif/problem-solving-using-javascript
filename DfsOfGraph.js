/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
*/
class Solution {

    dfsOfGraph(V, adj) {
        const nodes = [];
        const vis = new Array(V).fill(false);
        
        const dfs = (curr) => {
            nodes.push(curr);
            vis[curr] = true;
            
            for (let next of adj[curr]) {
                if (!vis[next]) {
                    dfs(next);
                }
            }
        }
        
        dfs(0);
        
        return nodes;
    }
}
