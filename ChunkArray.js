/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const chunkedArr = [];
    let chunkPiece = [];

    for (let val of arr) {
        chunkPiece.push(val);

        if (chunkPiece.length == size) {
            chunkedArr.push(chunkPiece);
            chunkPiece = [];
        }
    }

    if (chunkPiece.length != 0) {
        chunkedArr.push(chunkPiece);
    }

    return chunkedArr;
};
