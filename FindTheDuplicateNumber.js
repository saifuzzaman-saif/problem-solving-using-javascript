/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let l = 1, r = nums.length - 1;

    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        let lessOrEqualCnt = 0;

        for (let num of nums) {
            lessOrEqualCnt += (num <= mid) ? 1 : 0;
        }

        if (lessOrEqualCnt > mid) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};
