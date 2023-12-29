/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = [];

    for (let r = 0; r < numRows; r++) {
        const row = new Array(r + 1).fill(1);

        for (let c = 1; c < r; c++) {
            row[c] = triangle[r - 1][c] + triangle[r - 1][c - 1];
        }

        triangle.push(row);
    }

    return triangle;
};
