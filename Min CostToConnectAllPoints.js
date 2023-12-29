/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {

    class DisjointSetUnion {
        constructor(n) {
            this.reset(n);
        }

        reset(n) {
            this.n = n;
            this.par = [];
            this.sz = [];

            for (let i = 0; i < n; i++) {
                this.par[i] = i;
                this.sz[i] = 1;
            }
        }

        find(p) {
            if (this.par[p] == p) {
                return p;
            }

            return this.par[p] = this.find(this.par[p]);
        }

        union(p, q) {
            p = this.find(p);
            q = this.find(q);

            if (p == q) {
                return;
            }

            if (this.sz[p] > this.sz[q]) {
                this.par[q] = p;
                this.sz[p] += this.sz[q];

            } else {
                this.par[p] = q;
                this.sz[q] += this.sz[p];
            }
        }
    }

    const calDist = (p1, p2) => {
        return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
    }

    const n = points.length;
    const dsu = new DisjointSetUnion(n);
    const edges = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            edges.push([i, j, calDist(points[i], points[j])]);
        }
    }

    edges.sort((e1, e2) => e1[2] - e2[2]);

    let cost = 0;
    for (let e of edges) {
        let u = dsu.find(e[0]), v = dsu.find(e[1]), w = e[2];

        if (u != v) {
            cost += w;
            dsu.union(u, v);
        }
    }

    return cost;
};
