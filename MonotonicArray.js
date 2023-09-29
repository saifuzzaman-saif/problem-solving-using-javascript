/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let isMonotonicIncreasing = true;
    let isMonotonicDecreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            isMonotonicIncreasing = false;
        }
        if (nums[i] > nums[i - 1]) {
            isMonotonicDecreasing = false;
        }
    }

    return isMonotonicIncreasing || isMonotonicDecreasing;
};
