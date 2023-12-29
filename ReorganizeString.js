/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const CHARS = 26;
    const n = s.length;
    const charCnt = new Array(CHARS).fill(0);
    let maxFreq = -1, letter = -1;

    for (c of s) {
        charCnt[c.charCodeAt(0) - 97]++;
        if (charCnt[c.charCodeAt(0) - 97] > maxFreq) {
            maxFreq = charCnt[c.charCodeAt(0) - 97];
            letter = c;
        }
    }

    if (maxFreq > Math.floor((n + 1) / 2)) {
        return "";
    }

    const ans = new Array(n);
    let idx = 0;

    while (charCnt[letter - 97] > 0) {
        ans[idx] = letter;
        charCnt[letter - 97]--;
        idx += 2;
    }

    for (i = 0; i < CHARS; i++) {
        while (charCnt[i] > 0) {
            if (idx >= n) {
                idx = 1;
            }

            ans[idx] = String.fromCharCode(97 + i);
            idx += 2;
            charCnt[i]--;
        }
    }

    return ans.join('');

};
