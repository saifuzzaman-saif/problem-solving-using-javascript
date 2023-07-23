/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let n = nums.length;
    let totalCnt = 0;
    let maxLen = 0;
    const len = new Array(n);
    const cnt = new Array(n);
    len.fill(1);
    cnt.fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (len[j] + 1 > len[i]) {
                    len[i] = len[j] + 1;
                    cnt[i] = 0;
                }
                if (len[j] + 1 == len[i]) {
                    cnt[i] += cnt[j];
                }
            }
        }

        maxLen = Math.max(maxLen, len[i]);
    }

    for (let i = 0; i < n; i++) {
        if (len[i] == maxLen) {
            totalCnt += cnt[i];
        }
    }

    return totalCnt;
};
