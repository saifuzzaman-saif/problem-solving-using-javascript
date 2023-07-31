/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
*/
class Solution {

    bfsOfGraph(V, adj) {
        const nodes = [];
        const q = [];
        const vis = new Array(V).fill(false);
        
        q.push(0);
        vis[0] = true;
        
        while (q.length > 0) {
            let u = q.shift();
            nodes.push(u);
            
            for (let v of adj[u]) {
                if (!vis[v]) {
                    q.push(v);
                    vis[v] = true;
                }
            }
        }
        
        return nodes;
    }
}
