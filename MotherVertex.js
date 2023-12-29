/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number}
*/
class Solution {

    findMotherVertex(v, adj) {
        this.vis = new Array(v).fill(false);
        let motherVertex = -1;
        
        for (let i = 0; i < v; i++) {
            if (!this.vis[i]) {
                motherVertex = i;
                this.dfs(i, adj);
            }
        }
        
        this.vis = this.vis.fill(false);
        this.dfs(motherVertex, adj);
        
        for (let flag of this.vis) {
            if (!flag) {
                return -1;
            }
        }
        
        return motherVertex;
    }
    
    dfs(curr, adj) {
        this.vis[curr] = true;
        
        for (let next of adj[curr]) {
            if (!this.vis[next]) {
                this.dfs(next, adj);
            }
        }
    }
}
