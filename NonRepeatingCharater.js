/**
 * @param {string} s
 * @returns {string}
*/
class Solution 
{
    //Function to find the first non-repeating character in a string.
    nonrepeatingCharacter(s)
    {
        const freqWithIdx = [];
        for (let i = 0; i < 26; i++) {
            freqWithIdx[i] = new Array(2);
            freqWithIdx[i].fill(0);
        }
        
        for (let i = 0; i < s.length; i++) {
            var c = s.charCodeAt(i) - 97;
            freqWithIdx[c][0]++;
            freqWithIdx[c][1] = i;
        }
        
        let minIdx = s.length;
        
        for (let i = 0; i < 26; i++) {
            if (freqWithIdx[i][0] == 1 && freqWithIdx[i][1] < minIdx) {
                minIdx = freqWithIdx[i][1];
            }
        }
        
        return minIdx == s.length ? '$' : s[minIdx];
    }
}
