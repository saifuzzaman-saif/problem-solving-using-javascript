/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let targetIdx = 0;
    let currStrmVal = 1;
    const stkOpt = [];

    while (targetIdx < target.length) {
        stkOpt.push('Push');

        if (currStrmVal == target[targetIdx]) {
            targetIdx++;

        } else {
            stkOpt.push('Pop');
        }

        currStrmVal++;
    }

    return stkOpt;
};

