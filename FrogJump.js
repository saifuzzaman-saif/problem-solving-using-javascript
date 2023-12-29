/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    let n = stones.length;
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
    }

    const findPos = (val) => {
        let left = 0, right = n - 1;

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);

            if (stones[mid] > val) {
                right = mid - 1;

            } else if (stones[mid] < val) {
                left = mid + 1;

            } else {
                return mid;
            }
        }

        return -1;
    }

    const isCanCross = (curr, lastJump) => {
        if (curr === n - 1) {
            return true;
        }
        if (dp[curr][lastJump] !== undefined) {
            return dp[curr][lastJump];
        }

        let flag = false;

        for (let inc = -1; inc <= 1; inc++) {
            if (lastJump + inc <= 0) {
                continue;
            }

            let idx = findPos(stones[curr] + lastJump + inc);
            if (idx !== -1) {
                flag |= isCanCross(idx, lastJump + inc);
            }
        }

        return dp[curr][lastJump] = flag;
    }

    return isCanCross(0, 0);

};

