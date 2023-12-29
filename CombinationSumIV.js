/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const ways = new Array(target + 1).fill(0);

    for (let num of nums) {
        if (num <= target) {
            ways[num] = 1;
        }
    }

    for (let i = 1; i <= target; i++) {
        for (let num of nums) {
            if (i + num <= target) {
                ways[i + num] += ways[i]; 
            }
        }
    }

    return ways[target];
};

