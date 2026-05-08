class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(el => `${el.length}#${el}`).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            const j = str.indexOf('#', i);
            const len = Number(str.slice(i, j));
            const word = str.slice(j + 1, j + 1 + len);
            result.push(word);
            i = j + 1 + len;
        }

        return result;
    }
}