/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((i1, i2) => i1[1] - i2[1]);
    let cntValidIntervals = 0, lastEnd = Number.MIN_SAFE_INTEGER;

    for (let interval of intervals) {
        if (interval[0] >= lastEnd) {
            cntValidIntervals++;
            lastEnd = interval[1];
        }
    }

    return intervals.length - cntValidIntervals;
};
