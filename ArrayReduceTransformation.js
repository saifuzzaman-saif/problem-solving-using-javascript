/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;

    for (num of nums) {
        val = fn(val, num);
    }

    return val;
};


//OR do like this.


var reduce = function(nums, fn, init) {
    return nums.reduce(fn, init);
};
