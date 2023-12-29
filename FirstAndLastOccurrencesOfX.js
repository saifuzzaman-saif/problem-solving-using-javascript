/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {number[]}
*/

class Solution {
    
    constructor() {
        this.findLowerBound = (arr, x) => {
            let l = 0, r = arr.length;
            
            while (l < r) {
                let mid = l + Math.floor((r - l) / 2);
                
                if (arr[mid] >= x) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            
            return l;
        }
    }
    
    find(arr, n, x) {
        let lb = this.findLowerBound(arr, x);
        
        if (lb === n || arr[lb] !== x) {
            return [-1, -1];
        }
        
        let ub = this.findLowerBound(arr, x + 1);
        
        return [lb, ub - 1];
    }
}

