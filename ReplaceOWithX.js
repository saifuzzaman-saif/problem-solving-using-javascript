/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} mat
 * @return {number[][]} 
*/

class Solution {
    
    constructor() {
        this.d = [0, 1, 0, -1, 0];
    }
    
    fill(n, m, mat){
        for (let i = 0; i < m; i++) {
            if (mat[0][i] === 'O') {
                this.dfs(0, i, n, m, mat);
            }
            if (mat[n - 1][i] === 'O') {
                this.dfs(n - 1, i, n, m, mat);
            }
        }
        
        for (let i = 0; i < n; i++) {
            if (mat[i][0] === 'O') {
                this.dfs(i, 0, n, m, mat);
            }
            if (mat[i][m - 1] === 'O') {
                this.dfs(i, m - 1, n, m, mat);
            }
        }
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === 'O') {
                    mat[i][j] = 'X';
                } else if (mat[i][j] === '.') {
                    mat[i][j] = 'O';
                }
            }
        }
        
        return mat;
    }
    
    dfs(x, y, n, m, mat) {
        mat[x][y] = '.';
        
        for (let k = 0; k < 4; k++) {
            let nx = x + d[k];
            let ny = y + d[k + 1];
            
            if (this.isValidCell(nx, ny, n, m) && mat[nx][ny] === 'O') {
                this.dfs(nx, ny, n, m);
            }
        }
    }
    
    isValidCell(x, y, n, m) {
        return x >= 0 && x < n && y >= 0 && y < m;
    }
}

