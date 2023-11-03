/**
 * @param {number[]} arr
 * @param {number} n
 * @return {boolean}
*/

class Solution {

    checkTriplet(arr,n){
        let maxVal = 0;
        const squares = new Set();
        
        for (let val of arr) {
            maxVal = Math.max(maxVal, val);
            squares.add(val * val);
        }
        
        for (let i = 0; i < n; i++) {
            for (let j = arr[i] + 1; j <= maxVal; j++) {
                if (squares.has(j * j) && squares.has(arr[i] * arr[i] + j * j)) {
                    return true;
                }
            }
        }
        
        return false;
    }
}

