/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let n = s.length, m = t.length;

    for (let sIdx = 0, tIdx = 0; sIdx < n; sIdx++) {

        while (tIdx < m && s[sIdx] !== t[tIdx]) {
            tIdx++;
        }

        if (tIdx == m) {
            return false;
        }

        tIdx++;
    }

    return true;
};

