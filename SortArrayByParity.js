/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        if (nums[l] % 2 == 0) {
            l++;
        } else if (nums[r] % 2 == 1) {
            r--;
        } else {
            nums[l] += nums[r];
            nums[r] = nums[l] - nums[r];
            nums[l] -= nums[r];
        }
    }

    return nums;
};
