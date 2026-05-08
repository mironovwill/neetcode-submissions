class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const reverse = (str) => str.split('').sort().join('')
        return reverse(s) === reverse(t)
    }
}
